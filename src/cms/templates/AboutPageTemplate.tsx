import React from 'react';
import { Content } from 'src/components/Content';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';
import { GatsbyImageSharpFluidFragment } from 'src/autogen/gatsby-types';

type Props = {
  title: string;
  content: string;
  contentComponent: React.FC;
  avatarImage: {
    childImageSharp: {
      fluid: GatsbyImageSharpFluidFragment;
    };
  };
  helmet: React.FC;
};

export const AboutPageTemplate: React.FC<Props> = ({
  title,
  content,
  contentComponent,
  avatarImage,
  helmet,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="aboutPage page">
      {helmet || ''}

      <section className="about-me">
        <div className="title">{title}</div>
        <PreviewCompatibleImage
          className="avatar"
          imageInfo={{
            image: avatarImage,
          }}
        />
        <PageContent className="content" content={content} />
      </section>
    </div>
  );
};

export const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <AboutPageTemplate
        avatarImage={data.avatarImage}
        content={widgetFor('body')}
        title={data.title}
      />
    );
  }
  return <div>Loading...</div>;
};
