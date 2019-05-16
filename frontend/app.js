// Can be phased out, saved for Loader and Transition reference

import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Box, Flex } from 'reflexbox';

import theme from './theme';
import Home from './pages/home';
import PostDetail from './pages/post-detail';
import PageDetail from './pages/page-detail';
import Header from './components/header';
import GlobalStyle, { transitionName, transitionDuration } from './components/global-style';
import Loader from './components/loader';

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

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoader: true,
    };

    this.setShowLoader = this.setShowLoader.bind(this);
  }

  setShowLoader(show) {
    this.setState({
      showLoader: show,
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
                <Header />
                <Container auto>
                  <TransitionGroup component={null}>
                    <CSSTransition
                      key={location.key}
                      classNames={transitionName}
                      timeout={transitionDuration}
                    >
                      <Switch location={location}>
                        <Route
                          exact
                          path="/"
                          render={props => (
                            <Home {...props} onPostsLoaded={() => this.setShowLoader(false)} />
                          )}
                        />
                        <Route
                          path="/p/:slug"
                          render={props => (
                            <PostDetail {...props} onPostLoaded={() => this.setShowLoader(false)} />
                          )}
                        />
                        <Route
                          path="/:slug"
                          render={props => (
                            <PageDetail {...props} onPageLoaded={() => this.setShowLoader(false)} />
                          )}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </Container>
              </App>
            </Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}

export default withRouter(AppContainer);
