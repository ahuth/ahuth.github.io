import React from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Seo from '../components/Seo';
import './index.css';

export default function Index({ data }) {
  const articles = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo />
      <header>
        <h1>Andrew Huth</h1>
        <div>
          <Bio />
          <a href="https://github.com/ahuth">github.com/ahuth</a>
          <br />
          <a href="mailto:andrew@huth.me">andrew@huth.me</a>
        </div>
      </header>
      <main className="auto-grid">
        <Projects />
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
