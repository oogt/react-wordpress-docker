import React from 'react';

import Posts from '../components/posts';
import Page from '../components/page';

const Home = ({ onPostsLoaded }) => (
  <Page>
    <Posts onPostsLoaded={onPostsLoaded} />
  </Page>
)

export default Home;
