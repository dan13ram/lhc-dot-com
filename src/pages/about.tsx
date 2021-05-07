import { graphql } from 'gatsby';
import React from 'react';
import { AboutPageTemplate } from 'src/cms/templates/AboutPageTemplate';
import { HTMLContent } from 'src/components/Content';
import SEO from 'src/shared/SEO';
import { AboutPageQueryQuery } from 'src/autogen/gatsby-types';

const AboutPage: React.FC<{ data: AboutPageQueryQuery }> = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { avatarImage, title },
    },
  },
}) => (
  <AboutPageTemplate
    contentComponent={HTMLContent}
    avatarImage={avatarImage}
    title={title}
    content={html}
    helmet={<SEO title="About" />}
  />
);

export default AboutPage;

export const aboutQuery = graphql`
  query AboutPageQuery {
    markdownRemark(frontmatter: { pageKey: { eq: "about" } }) {
      html
      frontmatter {
        title
        avatarImage {
          childImageSharp {
            gatsbyImageData(width: 300, quality: 100, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
