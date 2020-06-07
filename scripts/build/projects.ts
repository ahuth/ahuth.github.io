import fs from 'fs';
import yaml from 'js-yaml';

type Project = {
  blurb: string,
  demo?: string,
  href: string,
  name: string,
};

type Projects = Project[];

export type Type = Projects;

export function read(filePath: string): Projects {
  const file = fs.readFileSync(filePath, 'utf8');
  const doc = yaml.safeLoad(file);
  return doc.projects;
}
