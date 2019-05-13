import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Flex } from "reflexbox";
import axios from 'axios';

import { withMinDuration } from '../utils/promises';
import endpoints from '../config/endpoints';
import Icon from "./icon";

const IconContainer = styled(Link)`
  background: ${props => props.theme.white};
  color: ${props => props.theme.orange};
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled(Box)`
  background: ${props => props.theme.white};
`;

const getIcon = pageSlug => ({
  'about-us': 'building'
}[pageSlug]) || 'file';

const composeMenuItems = pages => {
  const menuItems = pages.map(page => ({
    url: `/${page.slug}`,
    icon: getIcon(page.slug)
  }))

  return [...defaultNavigation, ...menuItems];
}

const defaultNavigation = [{
  url: '/',
  icon: 'home'
}];

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const dataPromise = axios
      .get(endpoints.pages)
      .then(res => {
        const menuItems = composeMenuItems(res.data);
        this.setState({ items: menuItems });
      })
      .catch(err => {
        console.error(err);
      });

    return withMinDuration(dataPromise, () => null);
  }
  render() {
    return (
      <HeaderContainer>
        <Flex column>
          {this.state.items.map(item => (
            <IconContainer to={item.url} key={item.url}>
              <Icon type={item.icon} />
            </IconContainer>
          ))}
        </Flex>
      </HeaderContainer>
    );
  }
}

export default Header;
