import React, { Component } from 'react';

import endpoints from '../config/endpoints';
import Post from './post';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const minPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 2000);
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
      <div>
        {this.state.posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    )
  }
}

export default Posts;
