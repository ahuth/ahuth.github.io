import fs from 'fs';
import yaml from 'js-yaml';

type Project = {
  blurb: string,
  demo?: string,
  href: string,
  name: string,
};

export type Projects = Project[];

export function read(filePath: string): Projects {
  const file = fs.readFileSync(filePath, 'utf8');
  const doc = yaml.safeLoad(file);
  return doc.projects;
}
