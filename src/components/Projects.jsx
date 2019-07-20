import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Projects() {
  const { allProjectsJson } = useStaticQuery(graphql`
    query {
      allProjectsJson(sort: { fields: name }) {
        nodes {
          name
          repo
          demo
        }
      }
    }
  `);

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {allProjectsJson.nodes.map((project) => {
          return (
            <li key={project.name}>
              <a href={project.repo}>{project.name}</a>
              {' '}
              {project.demo && <a href={project.demo}>(Demo)</a>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
