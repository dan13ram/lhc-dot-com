import React from 'react';
import PropTypes from 'prop-types';
import Content from 'src/components/Content';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';

export const AboutPageTemplate = ({
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
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
  } else {
    return <div>Loading...</div>;
  }
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

