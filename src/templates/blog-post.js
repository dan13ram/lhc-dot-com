import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import React, { useEffect, useRef } from 'react';
import { BlogPostTemplate } from 'src/cms/templates/BlogPostTemplate';
import SEO from 'src/layouts/SEO';

import Content, { HTMLContent } from '../components/Content';
import EmblaCarousel from '../components/EmblaCarousel';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      featuredImages={post.frontmatter.featuredImages}
      description={post.frontmatter.description}
      helmet={
        <SEO
          titleTemplate="%s | Blog"
          title={post.frontmatter.title}
          meta={[
            {
              name: 'description',
              content: post.frontmatter.description,
            },
          ]}
        />
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImages {
          image {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        description
        tags
      }
    }
  }
`;
