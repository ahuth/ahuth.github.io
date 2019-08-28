module.exports = {
  siteMetadata: {
    author: 'Andrew Huth',
    description: 'Andrew Huth -- Research and Development',
    siteUrl: 'https://ahuth.github.io',
    title: 'Andrew Huth',
  },
  plugins: [
    'gatsby-plugin-feed',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: ['prism-theme.css'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/articles`,
        name: 'articles',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'LDLYFTFN',
      },
    },
  ],
};
