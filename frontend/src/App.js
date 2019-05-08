import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "./theme";
import Home from "./pages/home";
import PostDetail from "./pages/post-detail";

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

  a {
    box-decoration-break: clone;
    color: ${props => props.theme.white};
    background: ${props => props.theme.black};
    padding: 4px 8px;
    line-height: 1.8em;
  }
`;

const AppContainer = props => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Loader show={showLoader} />
          <App>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} onPostsLoaded={() => setShowLoader(false)} />
              )}
            />
            <Route
              path="/:slug"
              render={props => (
                <PostDetail
                  {...props}
                  onPostLoaded={() => setShowLoader(false)}
                />
              )}
            />
          </App>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default AppContainer;
