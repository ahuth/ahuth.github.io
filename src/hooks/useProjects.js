import { useStaticQuery, graphql } from 'gatsby';

export default function useProjects() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        nodes {
          repo
          name
          demo
        }
      }
    }
  `);

  return data.allProjectsJson.nodes;
}
