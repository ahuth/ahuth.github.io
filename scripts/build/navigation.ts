import type { Environment } from './environment';

export type Navigation = {
  homePath: string,
  projectsPath: string,
  articlesPath: string,
}

export function read(environment: Environment): Navigation {
  return {
    homePath: environment.urlRoot,
    projectsPath: environment.urlRoot + '/projects',
    articlesPath: environment.urlRoot + '/articles',
  };
}
