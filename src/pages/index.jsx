import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import useArticles from '../hooks/useArticles';
import useProjects from '../hooks/useProjects';
import './index.css';

export default function Index() {
  const articles = useArticles();
  const projects = useProjects();

  return (
    <Layout>
      <header>
        <h1>Andrew Huth</h1>
        <div>
          <a href="https://github.com/ahuth">github.com/ahuth</a>
          <br />
          <a href="mailto:andrew@huth.me">andrew@huth.me</a>
        </div>
      </header>
      <main className="auto-grid">
        <section>
          <h2>Projects</h2>
          <ul>
            {projects.map((project) => {
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
        <section>
          <h2>Articles</h2>
          <ol reversed>
            {articles.map((article) => {
              return (
                <li key={article.fields.slug}>
                  <Link to={article.fields.slug}>
                    {article.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </Layout>
  );
}
