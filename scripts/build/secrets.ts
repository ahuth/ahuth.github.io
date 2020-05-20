import fs from 'fs';

type Secrets = {
  analyticsId?: string;
}

export type Type = Secrets;

export function read(secretsPath: string): Secrets {
  if (!fs.existsSync(secretsPath)) {
    return {};
  }

  const file = String(fs.readFileSync(secretsPath));
  const contents = JSON.parse(file);

  return contents;
}
