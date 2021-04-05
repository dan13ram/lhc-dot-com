import { Box, Flex, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import { Link, graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { useColors } from 'src/hooks/useColors';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';

const BlogPost = ({
  post: {
    frontmatter: { featuredImages, title, date },
    excerpt,
    fields: { slug },
  },
}) => {
  const { bgColor, fontColor } = useColors();
  return (
    <Box borderColor={fontColor} borderWidth="1px">
      <Link to={slug}>
        <Flex
          minH={'20rem'}
          direction="column"
          justify="flex-end"
        >
          <PreviewCompatibleImage image={featuredImages[0].image} alt={title} />
          <VStack
            spacing="0.5rem"
            p="0.5rem"
            bgColor={fontColor}
            color={bgColor}
            bottom="0"
            borderColor={bgColor}
            borderWidth="1px"
          >
            <Text textAlign="center">{title}</Text>
            <Text textAlign="center">{date}</Text>
            <Text textAlign="center">{excerpt}</Text>
          </VStack>
        </Flex>
      </Link>
    </Box>
  );
};

const BlogRoll = ({
  data: {
    allMarkdownRemark: { nodes: posts },
  },
}) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      w="100%"
      spacing="2rem"
      m="0"
      p="2rem"
    >
      {posts && posts.map(post => <BlogPost key={post.id} post={post} />)}
    </SimpleGrid>
  );
};

export default () => (
  <StaticQuery<GatsbyTypes.BlogRollQueryQuery>
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          nodes {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredPost
              featuredImages {
                image {
                  childImageSharp {
                    gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRoll data={data} />}
  />
);
