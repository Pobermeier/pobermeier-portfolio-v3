const { gql } = require("graphql-request");

const GET_ALL_BLOG_PAGES_SLUGS = gql`
  query GetAllBlogSlugs {
    allBlogPosts {
      slug
    }
  }
`;

module.exports = { GET_ALL_BLOG_PAGES_SLUGS };
