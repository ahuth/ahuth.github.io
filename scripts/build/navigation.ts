import path from 'path';
import type { Environment } from './environment';

export type Navigation = {
  homePath: string,
  projectsPath: string,
  articlesPath: string,
}

export function read(environment: Environment): Navigation {
  return {
    homePath: environment.urlRoot,
    projectsPath: path.join(environment.urlRoot, 'projects'),
    articlesPath: path.join(environment.urlRoot, 'articles'),
  };
}
