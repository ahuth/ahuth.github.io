import path from 'path';

export function replaceExtension(filePath: string, extension: string): string {
  return path.join(
    path.dirname(filePath),
    path.basename(filePath, path.extname(filePath)),
  ) + '.' + extension;
}
