type Page = {
  localPath: string,
  subPath: string,
}

export type Type = Page;

export function read(filePath: string): Page {
  const localPath = filePath.replace(/^src\//, '');
  const subPath = filePath.replace(/^src\/pages\//, '');

  return {
    localPath,
    subPath,
  };
}
