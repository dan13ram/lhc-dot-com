import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';
import { uniq, kebabCase } from 'lodash';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const allMarkdown: {
    errors?: any;
    data?: {
      allMarkdownRemark: {
        nodes: {
          id: string;
          fields: { slug: string };
          frontmatter: { tags: string[]; templateKey: string };
        }[];
      };
    };
  } = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  } else if (allMarkdown.data) {
    const posts = allMarkdown.data.allMarkdownRemark.nodes;
    posts.forEach(node => {
      if (node.frontmatter.templateKey) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`,
          ),
          // additional data can be passed via context
          context: {
            id: node.id,
          },
        });
      }
    });

    let tags: string[] = [];

    posts.forEach(node => {
      tags = tags.concat(node.frontmatter.tags);
    });

    tags = uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });
  }
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const value = createFilePath({ node, getNode });

      // Used to generate URL to view this content.
      createNodeField({
        name: 'slug',
        node,
        value,
      });
    }
  }
};
