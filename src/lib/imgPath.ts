/**
 * Retourne l'URL publique d'une image dans public/img.
 * Encode le nom de fichier pour gérer les espaces et caractères spéciaux.
 */
export function imgPath(filename: string): string {
  return `/img/${encodeURIComponent(filename)}`;
}
