import { Box, Flex, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import { Link, graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { WorkRollQueryQuery } from 'src/autogen/gatsby-types';
import { useColors } from 'src/hooks/useColors';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

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
      columns={full ? 1 : { base: 1, md: 2, lg: 3 }}
      w="100%"
      spacing={full ? '0' : '2rem'}
      m="0"
      mt={full ? '0' : '5rem'}
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
            frontmatter: { imagePosition, featuredImage, title },
          }: WorkRollQueryQuery['nodes'][0]) => {
            const bgImage = convertToBgImage(getImage(featuredImage));
            return (
              <Box
                css={{ scrollSnapAlign: full ? 'start' : 'none' }}
                borderColor={fontColor}
                borderWidth="1px"
                key={id}
              >
                <Link to={slug}>
                  <BackgroundImage
                    {...bgImage}
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
                      padding={full ? '2rem' : '0'}
                    >
                      <VStack
                        spacing="0.5rem"
                        p="0.5rem"
                        bgColor={`${fontColor}Alpha.300`}
                        color={bgColor}
                        position={full ? 'sticky' : 'relative'}
                        bottom="0"
                        borderColor={bgColor}
                        borderWidth="1px"
                      >
                        <Text textAlign="center" fontWeight="bold">
                          {title}
                        </Text>
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
                  gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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
