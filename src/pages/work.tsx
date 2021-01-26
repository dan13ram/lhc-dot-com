import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import WorkRoll from '../components/WorkRoll';
import SEO from '../components/SEO';
import { Icon } from '@iconify/react';
import fullIcon from '@iconify/icons-ant-design/fullscreen-outlined';
import exitIcon from '@iconify/icons-ant-design/fullscreen-exit-outlined';

const WorkPage: React.FC = () => {
  const [full, toggleFull] = useState(false);
  useEffect(() => {
    const currentFull = localStorage.getItem('full');
    if (currentFull) {
      toggleFull(currentFull === 'true');
      localStorage.setItem('full', currentFull);
    }
  }, []);
  return (
    <div className={full ? 'workPage page full' : 'workPage page'}>
      <SEO title={`Work`} />
      <section className="content">
        <div className="title">my work</div>
        <div
          className="fullToggle"
          onClick={() => {
            toggleFull(full => !full);
            localStorage.setItem('full', full ? 'false' : 'true');
          }}
        >
          <Icon className="icon" icon={full ? exitIcon : fullIcon} />
        </div>
        <WorkRoll full={full} />
      </section>
    </div>
  );
};

export default WorkPage;

export const workPageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
