import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import axios from 'axios';
import Head from 'next/head';
import Error from 'next/error';

import endpoints from '../config/endpoints';
import PageComponent from '../components/page';
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

class Page extends Component {
  static async getInitialProps({ query }) {
    const pageRes = await axios.get(endpoints.page(query.slug));
    const pageData = await pageRes.data;

    const errorCode = pageData.length === 0 ? 404 : false;
    const page = pageData[0];

    const pagesRes = await axios.get(endpoints.pages);
    const pages = await pagesRes.data;

    return { errorCode, pages, page };
  }

  render() {
    const { errorCode, pages, page } = this.props;

    if (errorCode) {
      return <Error statusCode={errorCode} />;
    }

    return (
      <App>
        <Head>
          <title>{page.title.rendered}</title>
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
          <PageComponent>
            <Box p={4}>
              <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
              <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </Box>
          </PageComponent>
        </Container>
      </App>
    );
  }
}

export default Page;
