import { graphql, Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { ArtCollectionTemplate } from 'src/cms/templates/ArtCollectionTemplate';
import SEO from 'src/layouts/SEO';

import PreviewCompatibleBackgroundImage from '../components/PreviewCompatibleBackgroundImage';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const ArtCollection = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ArtCollectionTemplate
      content={post.frontmatter.content}
      description={post.frontmatter.description}
      featuredImage={post.frontmatter.featuredImage.childImageSharp.fluid}
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
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content {
          title
          description
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
`;
