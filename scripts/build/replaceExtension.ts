import path from 'path';

export default function replaceExtension(filePath: string, newExt: string): string {
  return path.join(
    path.dirname(filePath),
    path.basename(filePath, path.extname(filePath)),
  ) + newExt;
}
