import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import axios from 'axios';
import Head from 'next/head';

import endpoints from '../config/endpoints';
import Page from '../components/page';
import Posts from '../components/posts';
import Header from '../components/header';
import GlobalStyle from '../components/global-style';

const App = styled(Flex)`
  background: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Container = styled(Box)`
  overflow-y: scroll;
  position: relative;
`;

class Home extends Component {
  static async getInitialProps() {
    const postRes = await axios.get(endpoints.posts);
    const posts = await postRes.data;

    const pageRes = await axios.get(endpoints.pages);
    const pages = await pageRes.data;

    return { pages, posts };
  }

  render() {
    const { pages, posts } = this.props;
    return (
      <App>
        <Head>
          <title>Index</title>
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Slab|Work+Sans"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous"
          />
        </Head>
        <GlobalStyle />
        <Header pages={pages} />
        <Container flex="1 1 auto">
          <Page>
            <Posts posts={posts} />
          </Page>
        </Container>
      </App>
    );
  }
}

export default Home;
