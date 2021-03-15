import { graphql } from 'gatsby';
import React from 'react';
import SEO from 'src/layouts/SEO';

import BlogRoll from '../../components/BlogRoll';

const BlogPage = ({ data }) => (
  <div className="blogPage page">
    <SEO title="Blog" />
    {/* <section className="intro">Check what Vitalik has written</section> */}
    <section className="content">
      <div className="title">my blog</div>
      <BlogRoll />
    </section>
  </div>
);
export default BlogPage;

export const blogPageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
