import { gql } from "graphql-request";

export const GET_ALL_PAGE_SLUGS_QUERY = gql`
  query GetAllSlugs {
    allPages {
      slug
    }
  }
`;
