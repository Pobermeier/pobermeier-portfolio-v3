const { gql } = require("graphql-request");

const GET_BLOG_POST = gql`
  query GetBlogPost($slug: String!) {
    blogPost(filter: { slug: { eq: $slug } }) {
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
