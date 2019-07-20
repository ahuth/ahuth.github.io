const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

module.exports.onCreateNode = function ({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'src/articles', trailingSlash: false });

    createNodeField({
      node,
      name: 'slug',
      value: `/articles${slug}`,
    });
  }
};

module.exports.createPages = function ({ graphql, actions }) {
  const { createPage } = actions;

  return graphql(`
    query ArticleSlugsQuery {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
        component: path.resolve('./src/components/Article.jsx'),
        path: node.fields.slug,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
