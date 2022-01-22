const { gql } = require("graphql-request");

const GET_BLOG_POST = gql`
  query GetBlogPost {
    allPages {
      slug
    }
  }
`;

module.exports = { GET_BLOG_POST };
