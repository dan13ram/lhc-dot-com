import { graphql } from 'gatsby';
import React from 'react';
import { AboutPageTemplate } from 'src/cms/templates/AboutPageTemplate';
import Content, { HTMLContent } from 'src/components/Content';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';
import SEO from 'src/layouts/SEO';

const AboutPage = ({ data }) => {
  const { markdownRemark } = data;
  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      avatarImage={markdownRemark.frontmatter.avatarImage}
      title={markdownRemark.frontmatter.title}
      content={markdownRemark.html}
      helmet={<SEO title="About" />}
    />
  );
};

export default AboutPage;

export const aboutQuery = graphql`
  query AboutPageQuery {
    markdownRemark(frontmatter: { pageKey: { eq: "about" } }) {
      html
      frontmatter {
        title
        avatarImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
