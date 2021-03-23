import { SimpleGrid } from '@chakra-ui/react';
import { Link, graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { GatsbyImageSharpFluidFragment } from 'src/autogen/gatsby-types';

type WorkRollProps = {
  full: boolean;
  data: {
    allMarkdownRemark: {
      nodes: {
        excerpt: string;
        id: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          description: string;
          templateKey: string;
          date: string;
          featuredItem: string;
          featuredImage: {
            childImageSharp: {
              fluid: GatsbyImageSharpFluidFragment;
            };
          };
        };
      }[];
    };
  };
};

export const WorkRoll: React.FC<WorkRollProps> = ({
  data: {
    allMarkdownRemark: { nodes: posts },
  },
  full,
}) => {
  return (
    <SimpleGrid columns={3}>
      {posts &&
        posts.map(
          ({
            fields: { slug },
            id,
            frontmatter: {
              featuredItem,
              featuredImage: {
                childImageSharp: { fluid },
              },
              title,
              date,
            },
          }) => {
            return (
              <Link to={slug} key={id}>
                <BackgroundImage fluid={fluid} className="itemContainer">
                  <div className="itemContent">
                    <p className="center itemTitle">{title}</p>
                    <p className="center itemDate">{date}</p>
                  </div>
                </BackgroundImage>
              </Link>
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
