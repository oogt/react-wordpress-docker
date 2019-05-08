import React, { Component } from 'react';
import styled from 'styled-components';

import endpoints from '../config/endpoints';
import Post from './post';

const Panel = styled.div`
  padding: 4rem;
`;

const PanelTitle = styled.h1`
  display: inline-block;
  border-bottom: ${props => props.theme.underlines.height} solid ${props => props.theme.white};
  padding-bottom: 4px;
`

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const minPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 500);
    })
    const dataPromise = fetch(endpoints.posts)
      .then(res => res.json())
      .then(posts => {
        this.setState({posts});
      })
      .catch(err => {
        console.error(err);
      });

    return Promise.all([minPromise, dataPromise]).then(() => this.props.onPostsLoaded());
  }

  render() {
    return (
      <Panel>
        <PanelTitle>Recent posts</PanelTitle>
        {this.state.posts.map((post, index) => {
          const featuredImage = post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0];
          return (
            <Post
              key={post.id}
              featuredImage={featuredImage}
              even={index % 2 === 0}
              {...post} />
          )
        })}
      </Panel>
    )
  }
}

export default Posts;
