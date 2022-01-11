import { gql } from "graphql-request";

export const GET_PAGE_DATA_QUERY = gql`
  query GetPageData($slug: String!) {
    page(filter: { slug: { eq: $slug } }) {
      title
      slug
      navbar {
        socialMediaIcons {
          id
          url
          name
          icon {
            url
          }
        }
        navigationLinks {
          id
          isExternalLink
          title
          url
        }
        callToActions {
          callToActions {
            id
            icon {
              url
            }
            ctaType
            isExternalLink
            linkUrl
            title
          }
        }
      }
      sections {
        __typename
        ... on HeroRecord {
          id
          heading
          subHeading
          backgroundImage {
            responsiveImage {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
            url
          }
          callToActions {
            callToActions {
              id
              icon {
                url
              }
              ctaType
              isExternalLink
              linkUrl
              title
            }
          }
        }
        ... on FullscreenPdfViewerRecord {
          id
          pdfFile {
            url
          }
          pdfTitle
        }
        ... on StaticContentBlockRecord {
          id
          title
          text
        }
        ... on SectionRecord {
          id
          headline
          description
          dynamicContent {
            __typename
            ... on CtaContainerRecord {
              callToActions {
                id
                icon {
                  url
                }
                ctaType
                isExternalLink
                linkUrl
              }
            }
            ... on LogoSliderRecord {
              title
              logos {
                id
                name
                logo {
                  url
                }
              }
            }
            ... on ProjectGridRecord {
              id
              projects {
                id
                title
                subTitle
                description
                projectType
                liveLink
                repoLink
                showcaseImage {
                  url
                }
                projectLogo {
                  url
                }
                technologiesUsed {
                  id
                  name
                  logo {
                    url
                  }
                }
              }
            }
            ... on TextWithImageRecord {
              id
              text
              image {
                title
                url
              }
            }
          }
        }
      }
      footer {
        copyrightText
        navigationLinks {
          id
          title
          isExternalLink
          url
        }
        socialMediaIcons {
          id
          url
          name
          icon {
            url
          }
        }
      }
    }
  }
`;
