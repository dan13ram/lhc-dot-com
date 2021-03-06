// import { kebabCase } from 'lodash';
import React from 'react';
import PreviewCompatibleBackgroundImage from 'src/components/PreviewCompatibleBackgroundImage';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';
// import { Link } from 'gatsby';
import { useColors } from 'src/hooks/useColors';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { useTitle } from 'src/contexts/LayoutContext';

export const ArtCollectionTemplate = ({
  title,
  description,
  featuredImage,
  content,
  tags,
  helmet,
}) => {
  useTitle('Work');
  const { bgColor, fontColor } = useColors();
  return (
    <PreviewCompatibleBackgroundImage
      image={featuredImage}
      style={{
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {helmet || ''}
      <Flex
        marginTop="50%"
        w="85%"
        direction="column"
        align="center"
        color={fontColor}
        p="2rem"
        mb="2rem"
      >
        <Flex direction="column" align="center">
          <Heading mb="2rem">{title}</Heading>
          <Text>{description}</Text>
        </Flex>

        <Flex direction="column" align="center" w="100%">
          {content && content.length
            ? content.map((item, index) => (
                <Flex key={index.toString()} w="100%" mt="2rem">
                  <PreviewCompatibleImage
                    image={item.image}
                    alt={item.title}
                    style={{ width: '100%' }}
                  />
                </Flex>
              ))
            : null}
        </Flex>
      </Flex>
      {/*<footer>
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
    </footer>*/}
    </PreviewCompatibleBackgroundImage>
    // </Flex>
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
    />
  );
};
