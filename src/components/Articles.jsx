import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function Articles() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
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
  `);

  return (
    <section>
      <h2>Articles</h2>
      <ol reversed>
        {allMarkdownRemark.nodes.map((article) => {
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
  );
}
