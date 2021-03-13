import React from 'react';
import { Helmet } from 'react-helmet';
import { ListItem, Text, Container, Flex, List } from '@chakra-ui/react';
import { Link, graphql } from 'gatsby';

export default Tags = () => {
  const posts = this.props.data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <ListItem key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <Text fontSize="lg">{post.node.frontmatter.title}</Text>
      </Link>
    </ListItem>
  ));
  const tag = this.props.pageContext.tag;
  const title = this.props.data.site.siteMetadata.title;
  const totalCount = this.props.data.allMarkdownRemark.totalCount;
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
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
