import { graphql, Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { ArtCollectionTemplate } from 'src/cms/templates/ArtCollectionTemplate';
import SEO from 'src/shared/SEO';

import PreviewCompatibleBackgroundImage from '../components/PreviewCompatibleBackgroundImage';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const ArtCollection = ({ data }) => {
  const { markdownRemark: post } = data;

  console.log({ post });
  return (
    <ArtCollectionTemplate
      content={post.frontmatter.content}
      description={post.frontmatter.description}
      featuredImage={post.frontmatter.featuredImage}
      helmet={
        <SEO
          titleTemplate="%s | Work"
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

export default ArtCollection;

export const pageQuery = graphql`
  query ArtCollectionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        content {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
