import { StarIcon, ViewIcon } from '@chakra-ui/icons';
import { Link, graphql, StaticQuery } from 'gatsby';
import React from 'react';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const BlogPost = ({ post }) => {
  const showMultipleImageIcon = post.frontmatter.featuredImages.length > 1;
  return (
    <article
      className={
        post.frontmatter.featuredPost
          ? 'rollItem blogPost featured'
          : 'rollItem blogPost'
      }
    >
      <div className="itemContainer">
        <div className="itemHeader">
          <span className="itemTitle">{post.frontmatter.title}</span>
          <span className="itemDate">{post.frontmatter.date}</span>
        </div>
        <div className="itemImage">
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.featuredImages[0].image,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
            }}
          />
          {showMultipleImageIcon && <StarIcon />}
        </div>
        <p className="itemDescription">{post.excerpt}</p>
        <Link to={post.fields.slug}>
          <ViewIcon />
        </Link>
      </div>
    </article>
  );
};

const BlogRoll = ({
  data: {
    allMarkdownRemark: { nodes: posts },
  },
}) => {
  return (
    <div className="blogRoll">
      {posts && posts.map(post => <BlogPost key={post.id} post={post} />)}
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          nodes {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredPost
              featuredImages {
                image {
                  childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRoll data={data} />}
  />
);
