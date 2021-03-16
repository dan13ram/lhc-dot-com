import { VStack } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

export const WorkList: React.FC = () => {
  const {
    allMarkdownRemark: { nodes },
  }: {
    allMarkdownRemark: {
      nodes: {
        excerpt: string;
        id: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
        };
      }[];
    };
  } = useStaticQuery<GatsbyTypes.WorkListQueryQuery>(
    graphql`
      query WorkListQuery {
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
            }
          }
        }
      }
    `,
  );
  // let i = 0;
  // while (i < 3) {
  //     i++;
  //     posts = posts.concat([...posts]);
  // }

  return (
    <VStack w="100%">
      {nodes &&
        nodes.map(post => {
          return (
            <AniLink fade to={post.fields.slug} key={post.id}>
              {post.frontmatter.title}
            </AniLink>
          );
        })}
    </VStack>
  );
};
