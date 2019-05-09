import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios";

import { withMinDuration } from '../utils/promises';
import endpoints from '../config/endpoints';
import Post from './post';
import WithFeaturedImage from './with-featured-image';

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
    const dataPromise = axios
      .get(endpoints.posts)
      .then(res => {
        this.setState({posts: res.data});
      })
      .catch(err => {
        console.error(err);
      });

    return withMinDuration(dataPromise, () => this.props.onPostsLoaded())
  }

  render() {
    return (
      <Panel>
        <PanelTitle>Recent posts</PanelTitle>
        {this.state.posts.map((post, index) => (
          <WithFeaturedImage key={post.id} post={post}>
            {featuredImage => (
              <Post
                featuredImage={featuredImage}
                even={index % 2 === 0}
                {...post} />
            )}
          </WithFeaturedImage>
        ))}
      </Panel>
    )
  }
}

export default Posts;
