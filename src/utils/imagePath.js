// src/utils/imagePath.js
export function getImagePath(path) {
   const base = import.meta.env.BASE_URL || '/';

   const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
   const normalizedPath = path.startsWith('/') ? path : `/${path}`;

   return `${normalizedBase}${normalizedPath}`;
}
