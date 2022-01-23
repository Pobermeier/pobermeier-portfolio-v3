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
