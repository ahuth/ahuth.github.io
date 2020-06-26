import path from 'path';
import { Type as Environment } from './environment';

type Page = {
  localPath: string,
  subPath: string,
  url: string,
}

export type Type = Page;

export function read(filePath: string, environment: Environment): Page {
  const localPath = filePath.replace(/^src\//, '');
  const subPath = filePath.replace(/^src\/pages\//, '');
  const url = path.join(environment.urlRoot, subPath);

  return {
    localPath,
    subPath,
    url,
  };
}
