import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from './Layout';
import Seo from './Seo';

export default function Article({ data }) {
  const article = data.markdownRemark;

  return (
    <Layout>
      <Seo title={article.frontmatter.title} />
      <nav>
        <Link to="/">← Home</Link>
      </nav>
      <main>
        <article>
          <header>
            <h1>{article.frontmatter.title}</h1>
            <time dateTime={article.frontmatter.date}>{article.frontmatter.date}</time>
          </header>
          <div dangerouslySetInnerHTML={{ __html: article.html }} />
          <footer>
            <hr />
            <p>Let me know your thoughts at <a href="mailto:andrew@huth.me">andrew@huth.me</a>.</p>
          </footer>
        </article>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
      }
      html
    }
  }
`;
