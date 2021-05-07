import { Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { kebabCase } from 'lodash';
import React from 'react';
import SEO from 'src/shared/SEO';
import { useTitle } from 'src/contexts/LayoutContext';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  useTitle('Tags');
  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      position="relative"
      h="100%"
    >
      <SEO title="Tags" />
      <UnorderedList>
        {group.map(tag => (
          <ListItem key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default () => (
  <StaticQuery<GatsbyTypes.TagsQueryQuery>
    query={graphql`
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
    `}
    render={data => <TagsPage data={data} />}
  />
);
