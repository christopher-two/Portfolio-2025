import { R2_BASE } from './config';

export function buildR2Url(folder: string, filename: string) {
  const f = encodeURIComponent(folder.replace(/\/+$/, ''));
  const name = encodeURIComponent(filename);
  return `${R2_BASE}/${f}/${name}`;
}

export default { buildR2Url };
