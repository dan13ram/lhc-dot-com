'use strict';

module.exports = {
  siteMetadata: {
    title: `littlehoodedcreature`,
    author: {
      name: `Varsha Naren`,
      summary: `Film-maker & Artist`
    },
    description: `Film-maker & Artist`,
    siteUrl: `https://littlehoodedcreature.com/`,
    keyboards: `portfolio, personal, typescript, gatsby`,
    social: {
      twitter: `littlehoodedcreature`,
      linkedIn: `varsha-narendra`,
      instagram: `littlehoodedcreature`,
      youtube: `littlehoodedcreature`,
      vimeo: `littlehoodedcreature`,
      github: `littlehoodedcreature`
    }
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`)
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `littlehoodedcreature`,
        short_name: `littlehoodedcreature`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        //display: `minimal-ui`,
        icon: `static/img/logo.png`
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-transition-link`,
    '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
