const { gql } = require("graphql-request");

const GET_PAGE_DATA_QUERY = gql`
  query GetPageData($slug: String!) {
    site: _site {
      logo: favicon {
        url
        tags
        customData
      }
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    page(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        tag
        content
        attributes
      }
      title
      slug
      navbar {
        socialMediaIcons {
          id
          url
          name
          reactIconIdentifier
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
        ... on ContactFormRecord {
          id
          heading
          description
          ctaButtonText
        }
        ... on BlogSectionRecord {
          id
          heading
          description
        }
        ... on StaticContentBlockRecord {
          id
          title
          text
        }
        ... on SectionRecord {
          id
          heading: headline
          htmlId: htmlid
          description
          dynamicContent {
            __typename
            ... on CtaContainerRecord {
              id
              callToActions {
                id
                title
                icon {
                  url
                }
                ctaType
                isExternalLink
                linkUrl
              }
            }
            ... on LogoSliderRecord {
              id
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
          reactIconIdentifier
          icon {
            url
          }
        }
      }
    }
  }
`;

module.exports = { GET_PAGE_DATA_QUERY };
