import React, { Fragment, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Posts from "./components/posts";
import Loader from "./components/loader";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  background: #4212b7;
  color: #fff;
  min-height: 100vh;
  overflow: hidden;
`

const AppContainer = (props) => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <Fragment>
      <GlobalStyle />
      <Loader show={showLoader} />
      <App>
        <Posts onPostsLoaded={() => setShowLoader(false)} />
      </App>
    </Fragment>
  );
}

export default AppContainer;
