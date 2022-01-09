import { GetStaticPropsContext } from "next";
import { gql } from "graphql-request";
import { request } from "clients/datocms";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ data }: { data: any }) => {
  return <pre>{JSON.stringify(data)}</pre>;
};

const GET_ALL_PAGE_SLUGS_QUERY = gql`
  query GetAllSlugs {
    allPages {
      slug
    }
  }
`;

const GET_PAGE_DATA_QUERY = gql`
  query GetPageData($slug: String!) {
    page(filter: { slug: { eq: $slug } }) {
      title
      createdAt
      updatedAt
      navbar {
        socialMediaIcons {
          url
          icon {
            url
          }
        }
        navigationLinks {
          isExternalLink
          title
          url
        }
        callToActions {
          callToActions {
            icon {
              url
            }
            ctaType
            isExternalLink
            linkUrl
          }
        }
      }
    }
  }
`;

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const currentSlug = ctx.params?.slug;

  const data = await request(GET_PAGE_DATA_QUERY, { slug: currentSlug });

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  let paths: string[] = [];

  const data = await request(GET_ALL_PAGE_SLUGS_QUERY);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paths = [...paths, ...data.allPages.map((page: any) => ({ params: { slug: page.slug } }))];

  return {
    fallback: false,
    paths,
  };
}

export default Page;
