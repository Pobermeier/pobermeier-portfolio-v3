import { GraphQLClient } from "graphql-request";

export function request(query: string, variables: null | object = null, isPreview = false) {
  const endpoint = isPreview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
