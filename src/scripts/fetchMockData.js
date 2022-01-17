const fs = require("fs");
const path = require("path");
const { GraphQLClient } = require("graphql-request");
// graphql
const { GET_PAGE_DATA_QUERY } = require("../graphql/queries/getPageData");
const { GET_ALL_PAGE_SLUGS_QUERY } = require("../graphql/queries/getAllPageSlugs");

function request(query, variables = null, isPreview = false) {
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

async function fetchAndStoreMockData() {
  try {
    const cmsData = await request(GET_ALL_PAGE_SLUGS_QUERY, null);

    const mockPaths = cmsData.allPages.map((page) => ({ params: { slug: page.slug } }));

    fs.writeFile(
      path.join(__dirname, "..", "mocks", "paths.json"),
      JSON.stringify(mockPaths),
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("mockPaths were saved to file!");
      },
    );

    const paths = cmsData.allPages.map((page) => page.slug);

    for (let i = 0; i < paths.length; i++) {
      const currentSlug = paths[i];

      const data = await request(GET_PAGE_DATA_QUERY, { slug: currentSlug });

      fs.writeFile(
        path.join(__dirname, "..", "mocks", "pages", `${currentSlug}.json`),
        JSON.stringify(data),
        function (err) {
          if (err) {
            return console.log(err);
          }

          console.log(`page data for slug ${currentSlug} were saved to file`);
        },
      );
    }
  } catch (error) {
    console.log(error);
  }
}

fetchAndStoreMockData();
