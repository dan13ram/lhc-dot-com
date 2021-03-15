import { kebabCase } from 'lodash';
import React, { useRef, useEffect, useState } from 'react';
import PreviewCompatibleBackgroundImage from 'src/components/PreviewCompatibleBackgroundImage';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';
import SEO from 'src/layouts/SEO';
import { Link } from 'gatsby';

export const ArtCollectionTemplate = ({
  title,
  description,
  featuredImage,
  content,
  tags,
  helmet,
}) => {
  const [margin, setMargin] = useState({});
  const headerRef = useRef(null);
  const setHeaderMargin = mediaQuery => {
    const offset = mediaQuery.matches ? '6.5rem' : '2.5rem';
    setTimeout(() => {
      headerRef.current &&
        setMargin({
          marginTop: `calc(100vh - ${headerRef.current.offsetHeight}px - ${offset})`,
        });
    }, 50);
  };
  useEffect(() => {
    setTimeout(() => {
      headerRef.current &&
        headerRef.current.scrollIntoView({
          behavior: 'auto',
          block: 'end',
        });
    }, 50);
    const mediaQuery = matchMedia('(max-width: 40rem)');
    setHeaderMargin(mediaQuery);
    mediaQuery.addListener(setHeaderMargin);
  }, []);
  return (
    <PreviewCompatibleBackgroundImage
      className="artCollection"
      fluid={featuredImage}
    >
      {helmet || ''}

      <article className="container" style={margin}>
        <header ref={headerRef} id="articleHeader">
          <h1>{title}</h1>
          <p>{description}</p>
        </header>

        <div className="content">
          {content && content.length ? (
            <div>
              {content.map((item, index) => (
                <div key={index} className="contentItem">
                  {/* <p>{item.title}</p> */}
                  {/* <p>{item.description}</p> */}
                  <PreviewCompatibleImage
                    className="contentImage"
                    imageInfo={{
                      image: item.image,
                      alt: item.title,
                    }}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </article>
      <footer>
        {tags && tags.length ? (
          <div>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={`${tag}tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </footer>
    </PreviewCompatibleBackgroundImage>
  );
};

export const ArtCollectionPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  const entryContent = entry.getIn(['data', 'content']);
  const content = entryContent ? entryContent.toJS() : [];

  return (
    <ArtCollectionTemplate
      content={content}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      preview
    />
  );
};
