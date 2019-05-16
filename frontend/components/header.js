import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Box, Flex } from '@rebass/grid';

import Icon from './icon';

const IconContainer = styled.a`
  color: ${props => props.theme.orange};
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ${({ theme }) => theme.easing.default};

  &:hover {
    transform: scale(1.1);
  }
`;

const HeaderContainer = styled(Box)`
  background: ${props => props.theme.white};
`;

const getIcon = pageSlug => ({
  'about-us': 'building',
}[pageSlug] || 'file');

const defaultNavigation = [
  {
    url: '/',
    urlAlias: '/',
    icon: 'home',
  },
];

const composeMenuItems = (pages) => {
  const menuItems = pages.map(page => ({
    url: `/page?slug=${page.slug}`,
    urlAlias: `/${page.slug}`,
    icon: getIcon(page.slug),
  }));

  return [...defaultNavigation, ...menuItems];
};

const Header = ({ pages }) => {
  const pageItems = composeMenuItems(pages);

  return (
    <HeaderContainer>
      <Flex flexDirection="column">
        {pageItems.map(page => (
          <Link href={page.url} as={page.urlAlias} key={page.url} passHref>
            <IconContainer>
              <Icon type={page.icon} />
            </IconContainer>
          </Link>
        ))}
      </Flex>
    </HeaderContainer>
  );
};

export default Header;
