import React, { Component } from "react";
import axios from "axios";
import { Box } from "reflexbox";

import { withMinDuration } from "../utils/promises";
import endpoints from "../config/endpoints";
import Page from "../components/page";

class PageDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: undefined
    };
  }
  componentDidMount() {
    const slug = this.props.match.params.slug;
    const dataPromise = axios
      .get(endpoints.page(slug))
      .then(res => {
        this.setState({ page: res.data[0] });
      })
      .catch(err => {
        console.error(err);
      });

    return withMinDuration(dataPromise, () => this.props.onPageLoaded());
  }

  render() {
    const { page } = this.state;

    if (!page) {
      return null;
    }

    return (
      <Page>
        <Box p={4}>
          <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </Box>
      </Page>
    );
  }
}

export default PageDetail;
