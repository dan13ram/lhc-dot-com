import React from 'react';
import { VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const WorkList = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query WorkListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "art-collection" } } }
        ) {
          edges {
            node {
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
      }
    `,
  );
  // let i = 0;
  // while (i < 3) {
  //     i++;
  //     posts = posts.concat([...posts]);
  // }

  return (
    <VStack
      w="100%"
    >
      {posts &&
        posts.map(({ node: post }) => {
          return (
            <AniLink fade to={post.fields.slug} key={post.id}>
              {post.frontmatter.title}
            </AniLink>
          );
        })}
    </VStack>
  );
};

export default WorkList;
