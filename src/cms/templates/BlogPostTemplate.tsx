import { kebabCase } from 'lodash';
import React, { useEffect, useRef } from 'react';
import { Content } from 'src/components/Content';
import EmblaCarousel from 'src/components/EmblaCarousel';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredImages,
  tags,
  title,
  helmet,
}) => {
  const headerRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      headerRef.current &&
        headerRef.current.scrollIntoView({
          behavior: 'auto',
          block: 'end',
        });
    }, 50);
  }, []);
  const PostContent = contentComponent || Content;

  return (
    <div className="blogPost">
      {helmet || ''}

      <div className="blogImagesContainer">
        <EmblaCarousel className="blogImages">
          {featuredImages &&
            featuredImages.map(featuredImage => (
              <PreviewCompatibleImage
                key={featuredImage.id}
                className="imageItem"
                imageInfo={{
                  image: featuredImage.image,
                  alt: title,
                }}
              />
            ))}
        </EmblaCarousel>
      </div>
      <article className="container">
        <header ref={headerRef}>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>

        <PostContent content={content} className="content" />
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
    </div>
  );
};

export const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  const featuredImages = entry.getIn(['data', 'featuredImages']);
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      featuredImages={featuredImages && featuredImages.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  );
};
