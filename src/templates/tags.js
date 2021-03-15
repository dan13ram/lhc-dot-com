import { Container, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const Tags = ({
  data: {
    site: {
      siteMetadata: { title },
    },
    allMarkdownRemark: { nodes: posts, totalCount },
  },
  pageContext: { tag },
}) => {
  const postLinks = posts.map(post => (
    <ListItem key={post.fields.slug}>
      <Link to={post.fields.slug}>
        <Text fontSize="lg">{post.frontmatter.title}</Text>
      </Link>
    </ListItem>
  ));
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`;

  return (
    <Container>
      <Flex direction="column">
        <Helmet title={`${tag} | ${title}`} />
        <Flex direction="column">
          <Text fontSize="xl">{tagHeader}</Text>
          <List>{postLinks}</List>
          <Flex>
            <Link to="/tags/">Browse all tags</Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Tags;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
