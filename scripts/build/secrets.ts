import fs from 'fs';
import * as zod from 'zod';

const schema = zod.object({
  analyticsId: zod.string().optional(),
});

export type Secrets = zod.infer<typeof schema>;

export function read(secretsPath: string): Secrets {
  if (!fs.existsSync(secretsPath)) {
    return {};
  }

  const file = String(fs.readFileSync(secretsPath));
  const contents = JSON.parse(file);

  return schema.parse(contents);
}
