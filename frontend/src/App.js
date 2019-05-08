import React, { Fragment, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from './theme';
import Posts from "./components/posts";
import Loader from "./components/loader";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Josefin Slab', serif;
    font-size: 24px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Work Sans", sans-serif;
  }
`;

const App = styled.div`
  background: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  min-height: 100vh;
  overflow: hidden;
`

const AppContainer = (props) => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Loader show={showLoader} />
        <App>
          <Posts onPostsLoaded={() => setShowLoader(false)} />
        </App>
      </Fragment>
    </ThemeProvider>
  );
}

export default AppContainer;
