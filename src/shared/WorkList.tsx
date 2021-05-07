import { VStack } from '@chakra-ui/react';
import { Link, graphql, StaticQuery } from 'gatsby';
import React from 'react';

const WorkListInner = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
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
            <Link to={post.fields.slug} key={post.id}>
              {post.frontmatter.title}
            </Link>
          );
        })}
    </VStack>
  );
};

export const WorkList: React.FC = () => (
  <StaticQuery<GatsbyTypes.WorkListQueryQuery>
    query={graphql`
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
    `}
    render={data => <WorkListInner data={data} />}
  />
);
