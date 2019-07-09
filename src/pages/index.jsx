import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import './index.css';

export default function Index({ data }) {
  const articles = data.allMarkdownRemark.nodes;
  const projects = data.allProjectsJson.nodes;

  return (
    <Layout>
      <Seo />
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

export const query = graphql`
  query {
    allProjectsJson(sort: { fields: name }) {
      nodes {
        name
        repo
        demo
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
