import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage: React.FC = () => {
  useEffect(() => {
    navigate('/work');
  }, []);
  return null;
};

export default IndexPage;
