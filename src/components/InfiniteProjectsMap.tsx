"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Minus, Move, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MapProject = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage?: string;
  link?: string;
};

type Placement = {
  project: MapProject;
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
};

type ImageVisualMeta = {
  isPortrait916: boolean;
  isBright: boolean;
  hasImage: boolean;
};

type DragState = {
  active: boolean;
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  started: boolean;
};

const FEATURED_SPANS: Record<string, [number, number]> = {
  parse: [2, 2],
  "override-menu": [2, 1],
  "override-logistics": [1, 2],
  "override-sense": [2, 1],
  parkspot: [2, 1],
  "atomo-app": [2, 1],
  spot: [1, 2],
};

const RHYTHM_SPANS: [number, number][] = [
  [1, 1],
  [1, 1],
  [2, 1],
  [1, 1],
  [1, 2],
  [2, 1],
  [1, 1],
  [1, 1],
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function hashString(input: string) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function sortProjectsForMap(projects: MapProject[]) {
  return [...projects].sort((a, b) => {
    const aWeight = hashString(`${a.slug}:${a.id}`) % 100000;
    const bWeight = hashString(`${b.slug}:${b.id}`) % 100000;
    if (aWeight !== bWeight) return aWeight - bWeight;
    return Number(a.id) - Number(b.id);
  });
}

function getTileSpan(
  project: MapProject,
  index: number,
  imageMetaBySlug: Record<string, ImageVisualMeta>
): [number, number] {
  const imageMeta = imageMetaBySlug[project.slug];
  const hasImage = imageMeta?.hasImage ?? Boolean(project.coverImage?.trim());
  if (!hasImage) return [1, 1];

  const baseSpan = FEATURED_SPANS[project.slug] ?? RHYTHM_SPANS[index % RHYTHM_SPANS.length];
  if (!imageMeta?.isPortrait916) return baseSpan;

  return [baseSpan[0], Math.max(baseSpan[1], 2)];
}

function canPlace(
  occupied: Set<string>,
  row: number,
  col: number,
  colSpan: number,
  rowSpan: number,
  columns: number
) {
  if (col + colSpan > columns) return false;

  for (let y = row; y < row + rowSpan; y += 1) {
    for (let x = col; x < col + colSpan; x += 1) {
      if (occupied.has(`${x}:${y}`)) return false;
    }
  }

  return true;
}

function markPlacement(occupied: Set<string>, row: number, col: number, colSpan: number, rowSpan: number) {
  for (let y = row; y < row + rowSpan; y += 1) {
    for (let x = col; x < col + colSpan; x += 1) {
      occupied.add(`${x}:${y}`);
    }
  }
}

function getTouchScore(occupied: Set<string>, row: number, col: number, colSpan: number, rowSpan: number) {
  let edgeTouch = 0;

  for (let x = col; x < col + colSpan; x += 1) {
    if (occupied.has(`${x}:${row - 1}`)) edgeTouch += 1;
    if (occupied.has(`${x}:${row + rowSpan}`)) edgeTouch += 1;
  }

  for (let y = row; y < row + rowSpan; y += 1) {
    if (occupied.has(`${col - 1}:${y}`)) edgeTouch += 1;
    if (occupied.has(`${col + colSpan}:${y}`)) edgeTouch += 1;
  }

  let cornerTouch = 0;
  if (occupied.has(`${col - 1}:${row - 1}`)) cornerTouch += 1;
  if (occupied.has(`${col + colSpan}:${row - 1}`)) cornerTouch += 1;
  if (occupied.has(`${col - 1}:${row + rowSpan}`)) cornerTouch += 1;
  if (occupied.has(`${col + colSpan}:${row + rowSpan}`)) cornerTouch += 1;

  return { edgeTouch, cornerTouch };
}

function buildChunkLayout(
  projects: MapProject[],
  columns: number,
  imageMetaBySlug: Record<string, ImageVisualMeta>
) {
  const occupied = new Set<string>();
  const placements: Placement[] = [];
  let maxRow = 0;

  projects.forEach((project, index) => {
    const [colSpan, rowSpan] = getTileSpan(project, index, imageMetaBySlug);
    const scanLimit = Math.min(Math.max(maxRow + 8, 8), 140);
    let bestCandidate: { row: number; col: number; score: number } | null = null;

    for (let row = 0; row <= scanLimit; row += 1) {
      for (let col = 0; col <= columns - colSpan; col += 1) {
        if (!canPlace(occupied, row, col, colSpan, rowSpan, columns)) continue;

        const { edgeTouch, cornerTouch } = getTouchScore(occupied, row, col, colSpan, rowSpan);
        const compactnessBias = -row * 0.08;
        const connectBias = cornerTouch * 6 + edgeTouch * 2;
        const jitter = (hashString(`${project.slug}:${row}:${col}`) % 100) / 1000;
        const score = connectBias + compactnessBias + jitter;

        if (!bestCandidate || score > bestCandidate.score) {
          bestCandidate = { row, col, score };
        }
      }
    }

    if (!bestCandidate) {
      bestCandidate = { row: maxRow, col: 0, score: 0 };
    }

    markPlacement(occupied, bestCandidate.row, bestCandidate.col, colSpan, rowSpan);
    placements.push({
      project,
      col: bestCandidate.col,
      row: bestCandidate.row,
      colSpan,
      rowSpan,
    });
    maxRow = Math.max(maxRow, bestCandidate.row + rowSpan);
  });

  return { placements, rows: Math.max(maxRow, 1) };
}

function wrapToNegativePeriod(value: number, period: number) {
  if (!Number.isFinite(period) || period <= 0) return value;
  const normalized = ((value % period) + period) % period;
  return normalized - period;
}

async function analyzeImageVisual(url: string): Promise<{ isPortrait916: boolean; isBright: boolean }> {
  return await new Promise((resolve, reject) => {
    const image = new window.Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";

    image.onload = () => {
      const width = image.naturalWidth || 1;
      const height = image.naturalHeight || 1;
      const ratio = width / height;
      const isPortrait916 = ratio >= 0.49 && ratio <= 0.64;

      let isBright = false;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 24;
        canvas.height = 24;
        const context = canvas.getContext("2d", { willReadFrequently: true });

        if (context) {
          context.drawImage(image, 0, 0, 24, 24);
          const { data } = context.getImageData(0, 0, 24, 24);
          let luminanceSum = 0;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            luminanceSum += 0.2126 * r + 0.7152 * g + 0.0722 * b;
          }

          const avgLuminance = luminanceSum / (data.length / 4);
          isBright = avgLuminance >= 156;
        }
      } catch {
        // If pixel analysis fails due CORS/canvas restrictions, keep safe default.
      }

      resolve({ isPortrait916, isBright });
    };

    image.onerror = () => reject(new Error("Image load failed"));
    image.src = url;
  });
}

export function InfiniteProjectsMap({ projects }: { projects: MapProject[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapPlaneRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<DragState>({
    active: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    started: false,
  });
  const suppressClickRef = useRef(false);
  const initializedRef = useRef(false);
  const transformRafRef = useRef<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [imageMetaBySlug, setImageMetaBySlug] = useState<Record<string, ImageVisualMeta>>({});

  const scaleRef = useRef(scale);
  const imageMetaCacheRef = useRef<Record<string, ImageVisualMeta>>({});
  const randomizedProjects = useMemo(() => sortProjectsForMap(projects), [projects]);

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  useEffect(() => {
    return () => {
      if (transformRafRef.current !== null) {
        cancelAnimationFrame(transformRafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const prevBodyUserSelect = document.body.style.userSelect;
    const prevBodyWebkitUserSelect = document.body.style.webkitUserSelect;
    const prevBodyCursor = document.body.style.cursor;

    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.cursor = "grabbing";

    return () => {
      document.body.style.userSelect = prevBodyUserSelect;
      document.body.style.webkitUserSelect = prevBodyWebkitUserSelect;
      document.body.style.cursor = prevBodyCursor;
    };
  }, [isDragging]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setViewport({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    resizeObserver.observe(node);
    return () => resizeObserver.disconnect();
  }, []);

  const columns = 6;
  const gap = useMemo(() => clamp(viewport.width * 0.012, 12, 24), [viewport.width]);
  const cellWidth = useMemo(() => clamp(viewport.width / 6.3, 160, 280), [viewport.width]);
  const rowHeight = useMemo(() => Math.round(cellWidth * 0.58), [cellWidth]);

  const { placements, rows } = useMemo(
    () => buildChunkLayout(randomizedProjects, columns, imageMetaBySlug),
    [randomizedProjects, imageMetaBySlug]
  );

  const chunkWidth = columns * cellWidth + (columns - 1) * gap;
  const chunkHeight = rows * rowHeight + (rows - 1) * gap;

  const applyTransform = () => {
    const mapPlane = mapPlaneRef.current;
    if (!mapPlane) return;

    const periodX = chunkWidth * scaleRef.current;
    const periodY = chunkHeight * scaleRef.current;
    const wrappedOffsetX = wrapToNegativePeriod(offsetRef.current.x, periodX);
    const wrappedOffsetY = wrapToNegativePeriod(offsetRef.current.y, periodY);

    mapPlane.style.transform = `translate(${wrappedOffsetX}px, ${wrappedOffsetY}px) scale(${scaleRef.current})`;
  };

  const scheduleTransform = () => {
    if (transformRafRef.current !== null) return;

    transformRafRef.current = requestAnimationFrame(() => {
      transformRafRef.current = null;
      applyTransform();
    });
  };

  useEffect(() => {
    if (!viewport.width || !viewport.height || !chunkWidth || !chunkHeight) return;
    if (initializedRef.current) return;

    const initialScale = 1;
    scaleRef.current = initialScale;
    setScale(initialScale);

    offsetRef.current = {
      x: viewport.width / 2 - (chunkWidth * initialScale) / 2,
      y: viewport.height / 2 - (chunkHeight * initialScale) / 2,
    };

    scheduleTransform();
    initializedRef.current = true;
  }, [viewport.width, viewport.height, chunkWidth, chunkHeight]);

  useEffect(() => {
    scheduleTransform();
  }, [scale, chunkWidth, chunkHeight]);

  useEffect(() => {
    if (selectedSlug && randomizedProjects.some((project) => project.slug === selectedSlug)) return;
    setSelectedSlug(randomizedProjects[0]?.slug ?? null);
  }, [randomizedProjects, selectedSlug]);

  useEffect(() => {
    let cancelled = false;

    const detectVisuals = async () => {
      const nextMeta: Record<string, ImageVisualMeta> = {};

      for (const project of randomizedProjects) {
        const imageUrl = project.coverImage?.trim();

        if (!imageUrl) {
          nextMeta[project.slug] = {
            isPortrait916: false,
            isBright: false,
            hasImage: false,
          };
          continue;
        }

        const cached = imageMetaCacheRef.current[imageUrl];
        if (cached) {
          nextMeta[project.slug] = cached;
          continue;
        }

        try {
          const analyzed = await analyzeImageVisual(imageUrl);
          const meta: ImageVisualMeta = {
            ...analyzed,
            hasImage: true,
          };
          imageMetaCacheRef.current[imageUrl] = meta;
          nextMeta[project.slug] = meta;
        } catch {
          const fallback: ImageVisualMeta = {
            isPortrait916: false,
            isBright: false,
            hasImage: false,
          };
          imageMetaCacheRef.current[imageUrl] = fallback;
          nextMeta[project.slug] = fallback;
        }
      }

      if (!cancelled) {
        setImageMetaBySlug(nextMeta);
      }
    };

    detectVisuals();

    return () => {
      cancelled = true;
    };
  }, [randomizedProjects]);

  const selectedProject = useMemo(
    () => randomizedProjects.find((project) => project.slug === selectedSlug) ?? randomizedProjects[0],
    [randomizedProjects, selectedSlug]
  );

  const zoomAtPoint = (nextScale: number, pointX: number, pointY: number) => {
    const currentScale = scaleRef.current;
    const safeScale = clamp(nextScale, 0.55, 1.9);

    if (safeScale === currentScale) return;

    const worldX = (pointX - offsetRef.current.x) / currentScale;
    const worldY = (pointY - offsetRef.current.y) / currentScale;

    offsetRef.current = {
      x: pointX - worldX * safeScale,
      y: pointY - worldY * safeScale,
    };
    scaleRef.current = safeScale;
    setScale(safeScale);
    scheduleTransform();
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const isMousePointer = event.pointerType === "mouse";
    if (isMousePointer && event.button !== 0) return;

    const target = event.target as HTMLElement;
    if (target.closest('[data-map-ui="true"]')) return;

    dragStateRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      started: false,
    };

    suppressClickRef.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState.active || dragState.pointerId !== event.pointerId) return;

    const totalDeltaX = event.clientX - dragState.startX;
    const totalDeltaY = event.clientY - dragState.startY;
    const distance = Math.hypot(totalDeltaX, totalDeltaY);

    if (!dragState.started && distance < 7) return;

    if (!dragState.started) {
      dragStateRef.current.started = true;
      suppressClickRef.current = true;
      setIsDragging(true);

      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // Some devices/browsers can fail pointer capture occasionally.
      }
    }

    const deltaX = event.clientX - dragState.lastX;
    const deltaY = event.clientY - dragState.lastY;

    dragStateRef.current.lastX = event.clientX;
    dragStateRef.current.lastY = event.clientY;

    offsetRef.current = {
      x: offsetRef.current.x + deltaX,
      y: offsetRef.current.y + deltaY,
    };

    scheduleTransform();
    event.preventDefault();
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState.active || dragState.pointerId !== event.pointerId) return;

    dragStateRef.current.active = false;
    dragStateRef.current.started = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const visibleChunkCoordinates = useMemo(() => {
    const chunkRadius = scale < 0.75 ? 2 : 1;
    const coordinates: Array<{ x: number; y: number }> = [];

    for (let chunkY = -chunkRadius; chunkY <= chunkRadius; chunkY += 1) {
      for (let chunkX = -chunkRadius; chunkX <= chunkRadius; chunkX += 1) {
        coordinates.push({ x: chunkX, y: chunkY });
      }
    }

    return coordinates;
  }, [scale]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full select-none touch-none overflow-hidden bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.17),transparent_44%),linear-gradient(to_right,#80808016_1px,transparent_1px),linear-gradient(to_bottom,#80808016_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px]",
        isDragging ? "cursor-grabbing" : "cursor-grab"
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="pointer-events-none absolute left-4 top-4 z-30 border border-border bg-background/80 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
        Mapa Vento Infinito · Arrastra + Zoom
      </div>

      <div data-map-ui="true" className="absolute right-4 top-4 z-30 flex items-center gap-2">
        <div className="border border-border bg-background/80 px-3 py-2 text-xs font-bold text-foreground backdrop-blur">
          {Math.round(scale * 100)}%
        </div>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="h-10 w-10 rounded-none border-2 border-border bg-background/90"
          onClick={() => zoomAtPoint(scaleRef.current * 1.1, viewport.width / 2, viewport.height / 2)}
        >
          <Plus className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="h-10 w-10 rounded-none border-2 border-border bg-background/90"
          onClick={() => zoomAtPoint(scaleRef.current * 0.9, viewport.width / 2, viewport.height / 2)}
        >
          <Minus className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="h-10 w-10 rounded-none border-2 border-border bg-background/90"
          onClick={() => {
            const nextScale = 1;
            scaleRef.current = nextScale;
            setScale(nextScale);
            offsetRef.current = {
              x: viewport.width / 2 - (chunkWidth * nextScale) / 2,
              y: viewport.height / 2 - (chunkHeight * nextScale) / 2,
            };
            scheduleTransform();
          }}
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
      </div>

      <div
        ref={mapPlaneRef}
        className="absolute left-0 top-0"
        style={{
          transform: `translate(0px, 0px) scale(${scale})`,
          transformOrigin: "top left",
          willChange: "transform",
        }}
      >
        {visibleChunkCoordinates.map(({ x: chunkX, y: chunkY }) => (
          <div
            key={`${chunkX}:${chunkY}`}
            className="absolute"
            style={{
              left: chunkX * chunkWidth,
              top: chunkY * chunkHeight,
              width: chunkWidth,
              height: chunkHeight,
            }}
          >
            {placements.map((placement) => {
              const isSelected = selectedSlug === placement.project.slug;
              const isFeatured = placement.colSpan > 1 || placement.rowSpan > 1;
              const visualMeta = imageMetaBySlug[placement.project.slug];
              const hasImage = visualMeta?.hasImage ?? Boolean(placement.project.coverImage?.trim());
              const isBrightImage = visualMeta?.isBright ?? false;

              return (
                <button
                  key={`${chunkX}:${chunkY}:${placement.project.id}`}
                  type="button"
                  className={cn(
                    "absolute overflow-hidden border-2 border-border bg-card text-left transition-all duration-300",
                    "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_theme(colors.border)]",
                    isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-[8px_8px_0px_theme(colors.border)]"
                  )}
                  style={{
                    left: placement.col * (cellWidth + gap),
                    top: placement.row * (rowHeight + gap),
                    width: placement.colSpan * cellWidth + (placement.colSpan - 1) * gap,
                    height: placement.rowSpan * rowHeight + (placement.rowSpan - 1) * gap,
                  }}
                  onClick={() => {
                    if (suppressClickRef.current) {
                      suppressClickRef.current = false;
                      return;
                    }
                    setSelectedSlug(placement.project.slug);
                  }}
                >
                  {hasImage && placement.project.coverImage && (
                    <img
                      src={placement.project.coverImage}
                      alt={placement.project.title}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      onDragStart={(event) => event.preventDefault()}
                      onError={() => {
                        setImageMetaBySlug((current) => ({
                          ...current,
                          [placement.project.slug]: {
                            isPortrait916: false,
                            isBright: false,
                            hasImage: false,
                          },
                        }));
                      }}
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
                    />
                  )}
                  {hasImage && (
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0",
                        isBrightImage ? "bg-black/8" : "bg-black/28"
                      )}
                    />
                  )}
                  <div
                    className={cn(
                      "relative z-10 flex h-full flex-col justify-between p-4",
                      isBrightImage ? "text-zinc-900" : "text-zinc-50"
                    )}
                  >
                    <span
                      className={cn(
                        "text-[9px] font-black uppercase tracking-[0.22em]",
                        isBrightImage ? "text-zinc-800/80" : "text-zinc-200/85"
                      )}
                    >
                      {isFeatured ? "Hub" : "Node"}
                    </span>
                    <h3
                      className={cn(
                        "text-sm font-headline font-bold leading-tight lg:text-lg",
                        isBrightImage
                          ? "[text-shadow:0_1px_0_rgba(255,255,255,0.5)]"
                          : "[text-shadow:0_2px_10px_rgba(0,0,0,0.65)]"
                      )}
                    >
                      {placement.project.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {selectedProject && (
        <aside data-map-ui="true" className="absolute bottom-4 left-4 z-30 w-[min(420px,calc(100%-2rem))] border-2 border-border bg-background/95 p-4 shadow-[8px_8px_0px_theme(colors.border)] backdrop-blur">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Proyecto Seleccionado</span>
              <h3 className="mt-1 text-2xl font-headline font-bold leading-tight text-foreground">{selectedProject.title}</h3>
            </div>
            <Move className="mt-1 h-5 w-5 text-muted-foreground" />
          </div>

          <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{selectedProject.description}</p>

          <div className="flex flex-wrap gap-2">
            <Link href={`/projects/${selectedProject.slug}`}>
              <Button size="sm" className="rounded-none border-2 border-border font-bold shadow-[3px_3px_0px_theme(colors.border)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
                Abrir Proyecto <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {selectedProject.link && (
              <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="rounded-none border-2 border-border bg-background">
                  Ver Sitio
                </Button>
              </Link>
            )}
          </div>
        </aside>
      )}
    </div>
  );
}
