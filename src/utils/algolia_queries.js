const PostsQuery = `{
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        frontmatter {
          title
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
          description
          category
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
        objectID: id
      }
    }
  }
}`;

const flatten = arr => arr.map(({ node: {frontmatter, ...rest }}) => ({
  ...frontmatter,
  date_timestamp: parseInt((new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)),
  ...rest
}))

const queries = [
  {
    query: PostsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'dev_posts',
    settings: {
      attributesToSnippet: ['excerpt: 20']
    },
  },
];

module.exports = queries;