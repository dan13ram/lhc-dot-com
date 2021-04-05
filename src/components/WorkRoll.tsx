import { Box, Flex, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import { Link, graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { WorkRollQueryQuery } from 'src/autogen/gatsby-types';
import { useColors } from 'src/hooks/useColors';

type WorkRollProps = {
  full: boolean;
  data: WorkRollQueryQuery;
};

export const WorkRoll: React.FC<WorkRollProps> = ({
  data: {
    allMarkdownRemark: { nodes: posts },
  },
  full,
}) => {
  const { bgColor, fontColor } = useColors();
  return (
    <SimpleGrid
      columns={full ? 1 : 3}
      w="100%"
      spacing={full ? '0' : '2rem'}
      m="0"
      p={full ? '0' : '2rem'}
      css={{ scrollSnapType: full ? 'y mandatory' : 'none' }}
      h={full ? '100vh' : 'auto'}
      overflowY={full ? 'scroll' : 'auto'}
    >
      {posts &&
        posts.map(
          ({
            fields: { slug },
            id,
            frontmatter: {
              imagePosition,
              featuredImage: {
                childImageSharp: { fluid },
              },
              title,
            },
          }: WorkRollQueryQuery['nodes'][0]) => {
            return (
              <Box css={{ scrollSnapAlign: full ? 'start' : 'none' }}>
                <Link to={slug} key={id}>
                  <BackgroundImage
                    fluid={fluid}
                    style={
                      full
                        ? {
                            backgroundAttachment: 'fixed',
                            backgroundPosition: imagePosition || 'center',
                          }
                        : { backgroundPosition: imagePosition || 'center' }
                    }
                  >
                    <Flex
                      minH={full ? '100vh' : '20rem'}
                      direction="column"
                      justify="flex-end"
                      padding={full ? '2rem' : '1rem'}
                    >
                      <VStack
                        spacing="0.5rem"
                        p="0.5rem"
                        bgColor={fontColor}
                        color={bgColor}
                        position={full ? 'sticky' : 'relative'}
                        bottom="0"
                      >
                        <Text textAlign="center">{title}</Text>
                      </VStack>
                    </Flex>
                  </BackgroundImage>
                </Link>
              </Box>
            );
          },
        )}
    </SimpleGrid>
  );
};

export default ({ full }: { full: boolean }) => (
  <StaticQuery<GatsbyTypes.WorkRollQueryQuery>
    query={graphql`
      query WorkRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "art-collection" } } }
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
              imagePosition
              date(formatString: "MMMM DD, YYYY")
              featuredItem
              featuredImage {
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
    `}
    render={data => <WorkRoll data={data} full={full} />}
  />
);
