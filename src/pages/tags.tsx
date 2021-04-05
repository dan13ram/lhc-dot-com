import { graphql, Link, useStaticQuery } from 'gatsby';
import { kebabCase } from 'lodash';
import React from 'react';
import SEO from 'src/layouts/SEO';

const TagsPage = () => {
  const {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery<GatsbyTypes.TagsQueryQuery>(
    graphql`
      query TagsQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return (
    <div className="tagsPage page">
      <SEO title="Tags" />
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsPage;