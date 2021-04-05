import React from 'react';
import { Content } from 'src/components/Content';
import PreviewCompatibleImage from 'src/components/PreviewCompatibleImage';
import { GatsbyImageSharpFluidFragment } from 'src/autogen/gatsby-types';
import { useColors } from 'src/hooks/useColors';
import { Flex } from '@chakra-ui/react';
import { useTitle } from 'src/contexts/LayoutContext';

type Props = {
  title: string;
  content: string;
  contentComponent: React.FC<{ content: string }>;
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

  const { bgColor, fontColor } = useColors();
  useTitle('About');

  return (
    <Flex
      w="100%"
      p="2rem"
      bgColor={bgColor}
      color={fontColor}
      direction="column"
      align="center"
      mt="5rem"
    >
      {helmet || ''}

      <Flex w="15rem" h="15rem" borderRadius="50%" overflow="hidden">
        <PreviewCompatibleImage
          image={avatarImage}
          alt={title}
          style={{ width: '100%' }}
        />
      </Flex>
      <PageContent content={content} />
    </Flex>
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
