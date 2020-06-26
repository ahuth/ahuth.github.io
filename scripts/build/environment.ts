type Environment = {
  urlRoot: string;
}

export type Type = Environment;

export function read(env: NodeJS.ProcessEnv): Environment {
  if (!env.URL_ROOT) {
    throw new Error('URL_ROOT must be present as an environment variable');
  }

  return {
    urlRoot: env.URL_ROOT,
  };
}
