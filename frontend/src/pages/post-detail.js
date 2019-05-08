import React, { Component } from "react";
import axios from "axios";

import { withMinDuration } from "../utils/promises";
import endpoints from "../config/endpoints";
import Post from "../components/post";
import WithFeaturedImage from "../components/with-featured-image";

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: undefined
    };
  }
  componentDidMount() {
    const slug = this.props.match.params.slug;
    const dataPromise = axios
      .get(endpoints.post(slug))
      .then(res => {
        this.setState({ post: res.data[0] });
      })
      .catch(err => {
        console.error(err);
      });

    return withMinDuration(dataPromise, () => this.props.onPostLoaded());
  }

  render() {
    const { post } = this.state;
    console.log(post);

    if (!post) {
      return null;
    }

    return (
      <WithFeaturedImage post={post}>
        {featuredImage => (
          <Post {...post} even={true} featuredImage={featuredImage} />
        )}
      </WithFeaturedImage>
    );
  }
}

export default PostDetail;
