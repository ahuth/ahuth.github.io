type Page = {
  localizedPath: string,
  outputPath: string,
}

export type Type = Page;

export function read(filePath: string): Page {
  const localizedPath = filePath.replace(/^src\//, '');
  const outputPath = filePath.replace(/^src\/pages\//, 'build/');
  return {
    localizedPath,
    outputPath,
  };
}
