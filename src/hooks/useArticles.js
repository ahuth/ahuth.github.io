import { useStaticQuery, graphql } from 'gatsby';

export default function useArticles() {
  const data = useStaticQuery(graphql`
    query ArticlesQuery {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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

  return data.allMarkdownRemark.nodes;
}
