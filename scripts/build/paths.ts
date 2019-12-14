import path from 'path';

export function buildPath(filePath: string): string {
  return filePath.replace(/^src\/pages\//, 'build/');
}

export function replaceExtension(filePath: string, extension: string): string {
  return path.join(
    path.dirname(filePath),
    path.basename(filePath, path.extname(filePath)),
  ) + '.' + extension;
}
