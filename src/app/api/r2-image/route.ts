import { NextRequest } from "next/server";

const R2_PUBLIC_BASE = "https://pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev";

function encodeObjectKey(key: string) {
  return key
    .split("/")
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key")?.trim();

  if (!key) {
    return new Response("Missing 'key' query param", { status: 400 });
  }

  const cleanKey = key.replace(/^\/+/, "");
  const encodedKey = encodeObjectKey(cleanKey);
  const upstreamUrl = `${R2_PUBLIC_BASE}/${encodedKey}`;

  const upstream = await fetch(upstreamUrl, {
    method: "GET",
    // Keep edge cache friendly while still allowing refreshes.
    next: { revalidate: 3600 },
  });

  if (!upstream.ok || !upstream.body) {
    return new Response("Upstream image not found", { status: upstream.status || 502 });
  }

  const headers = new Headers();
  headers.set("Content-Type", upstream.headers.get("content-type") || "application/octet-stream");
  headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800");

  const upstreamEtag = upstream.headers.get("etag");
  if (upstreamEtag) headers.set("ETag", upstreamEtag);

  const upstreamLength = upstream.headers.get("content-length");
  if (upstreamLength) headers.set("Content-Length", upstreamLength);

  return new Response(upstream.body, {
    status: 200,
    headers,
  });
}
