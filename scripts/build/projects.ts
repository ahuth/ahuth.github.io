import fs from 'fs';
import yaml from 'js-yaml';
import * as zod from 'zod';

const projectSchema = zod.object({
  blurb: zod.string(),
  demo: zod.string().optional(),
  href: zod.string(),
  name: zod.string(),
});

const documentSchema = zod.object({
  projects: zod.array(projectSchema),
});

type Project = zod.infer<typeof projectSchema>;

export type Projects = Project[];

export function read(filePath: string): Projects {
  const file = fs.readFileSync(filePath, 'utf8');
  const doc = yaml.safeLoad(file);
  const parsedDoc = documentSchema.parse(doc);
  return parsedDoc.projects;
}
