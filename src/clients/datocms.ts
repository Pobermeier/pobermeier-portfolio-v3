import { GraphQLClient, RequestDocument } from "graphql-request";

export function request(
  query: RequestDocument,
  variables: null | object | undefined = null,
  isPreview = false,
  requestHeaders?: HeadersInit,
) {
  const endpoint = isPreview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables, requestHeaders);
}
