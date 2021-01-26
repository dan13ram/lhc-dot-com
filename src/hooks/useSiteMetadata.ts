import { graphql, useStaticQuery } from 'gatsby';

export type SiteMetadata = {
  title: string;
  description: string;
  author: {
    name: string;
    summary: string;
  };
  siteUrl: string;
  social: {
    twitter: string;
    linkedIn: string;
    instagram: string;
    youtube: string;
    vimeo: string;
  };
};

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
            siteUrl
            social {
              twitter
              linkedIn
              instagram
              youtube
              vimeo
              github
            }
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
