import React from 'react';

import Posts from '../components/posts';

const Home = ({ onPostsLoaded }) => (
  <Posts onPostsLoaded={onPostsLoaded} />
)

export default Home;
