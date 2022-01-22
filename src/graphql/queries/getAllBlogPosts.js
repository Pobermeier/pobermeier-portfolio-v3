const { gql } = require("graphql-request");

const GET_ALL_BLOG_POSTS_QUERY = gql`
  query GetAllBlogPosts {
    allBlogPosts {
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

module.exports = { GET_ALL_BLOG_POSTS_QUERY };
