import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import theme from "./theme";
import Home from "./pages/home";
import PostDetail from "./pages/post-detail";

import Loader from "./components/loader";

const transitionName = 'fade';
const transitionDuration = 400;

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

  .${transitionName}-enter {
    opacity: 0;
    transform: translateY(2em);
  }

  .${transitionName}-enter.${transitionName}-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all ${transitionDuration}ms;
  }

  .${transitionName}-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .${transitionName}-exit.${transitionName}-exit-active {
    opacity: 0;
    transform: translateY(2em);
    transition: all ${transitionDuration}ms;
  }
`;

const App = styled.div`
  background: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  min-height: 100vh;
  overflow-y: auto;
  position: relative;

  a {
    box-decoration-break: clone;
    color: ${props => props.theme.white};
    background: ${props => props.theme.black};
    padding: 4px 8px;
    line-height: 1.8em;
  }
`;

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: true
    };

    this.setShowLoader = this.setShowLoader.bind(this);
  }

  setShowLoader(show) {
    this.setState({
      showLoader: show
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // this.setShowLoader(true);
    }
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <ThemeProvider theme={theme}>
            <Fragment>
              <GlobalStyle />
              <Loader show={this.state.showLoader} />
              <App>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames={transitionName}
                    timeout={transitionDuration}
                  >
                    <div>
                      <Switch location={location}>
                        <Route
                          exact
                          path="/"
                          render={props => (
                            <Home
                              {...props}
                              onPostsLoaded={() => this.setShowLoader(false)}
                            />
                          )}
                        />
                        <Route
                          path="/:slug"
                          render={props => (
                            <PostDetail
                              {...props}
                              onPostLoaded={() => this.setShowLoader(false)}
                            />
                          )}
                        />
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </App>
            </Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}

export default withRouter(AppContainer);
