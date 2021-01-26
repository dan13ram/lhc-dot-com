import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { Helmet } from 'react-helmet';
import logo from '../../static/img/logo.png';
import { withPrefix } from 'gatsby';

type Meta = {
  name?: string;
  content?: string;
  property?: string;
};

type Props = {
  description?: string;
  lang?: string;
  meta?: Array<Meta>;
  title?: string;
  titleTemplate?: string;
};

const SEO: React.FC<Props> = ({ description, lang, meta, title, titleTemplate }) => {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata.description;
  const defaultMeta: Array<Meta> = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.social.twitter
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: metaDescription
    },
    {
      name: `theme-color`,
      content: `#fff`
    },
    {
      name: `msapplication-TileColor`,
      content: `#fff`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:image`,
      content: `${withPrefix(`/`)}img/logo.png`
    }
  ];

  const allMeta: Array<Meta> = meta && meta.length > 0 ? defaultMeta.concat(meta) : defaultMeta;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={titleTemplate || `%s | ${siteMetadata.title}`}
      link={[{ rel: 'icon', type: 'image/png', href: logo }]}
      meta={allMeta}
    />
  );
};

export default SEO;
