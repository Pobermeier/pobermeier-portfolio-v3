const { gql } = require("graphql-request");

const GET_ALL_PAGE_SLUGS_QUERY = gql`
  query GetAllSlugs {
    allPages {
      slug
    }
  }
`;

module.exports = { GET_ALL_PAGE_SLUGS_QUERY };
