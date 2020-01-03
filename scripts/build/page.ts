type Page = {
  localizedPath: string,
  subPath: string,
}

export type Type = Page;

export function read(filePath: string): Page {
  const localizedPath = filePath.replace(/^src\//, '');
  const subPath = filePath.replace(/^src\/pages\//, '');

  return {
    localizedPath,
    subPath,
  };
}
