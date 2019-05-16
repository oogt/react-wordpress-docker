import React from 'react';
import styled from 'styled-components';

import Post from './post';

const Panel = styled.div`
  padding: 4rem;
`;

const PanelTitle = styled.h1`
  display: inline-block;
  border-bottom: ${props => props.theme.underlines.height} solid ${props => props.theme.white};
  padding-bottom: 4px;
`;

const Posts = ({ posts }) => (
  <Panel>
    <PanelTitle>Recent posts</PanelTitle>
    {posts && posts.map((post, index) => <Post key={post.id} even={index % 2 === 0} {...post} />)}
  </Panel>
);

export default Posts;
