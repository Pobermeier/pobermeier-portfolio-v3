const { gql } = require("graphql-request");

const GET_BLOG_POST = gql`
  query GetBlogPost($slug: String!) {
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
    page(filter: { slug: { eq: "blog" } }) {
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
    blogPost(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      author {
        name
        photo {
          responsiveImage {
            alt
            aspectRatio
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
      }
      category {
        title
      }
      content
      id
      createdAt
      isfeatured
      shortDescription
      slug
      title
      headerImage {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
      image {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
    }
  }
`;

module.exports = { GET_BLOG_POST };
