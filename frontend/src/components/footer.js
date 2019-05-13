import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';

import CurvedBlock from './curved-block';

const FooterContainer = styled.footer`
  background: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  padding: 2em 2em 4em;
  position: relative;
  overflow: hidden;
`

const Column = styled(Box)`
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }
`

const BackgroundText = ({ text, ...props }) => (
  <div {...props}>{text}</div>
)

const StyledBackgroundText = styled(BackgroundText)`
  position: absolute;
  font-size: 6em;
  margin-left: 2em;
  top: 0;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: .1;
  user-select: none;
`

const footerDoodleHeight = 480;

const FooterCircle = styled.div`
  position: absolute;
  height: ${props => props.inner ? footerDoodleHeight / 2 : footerDoodleHeight}px;
  width: ${props => props.inner ? footerDoodleHeight / 2 : footerDoodleHeight}px;
  border-radius: ${props => props.inner ? footerDoodleHeight / 2 : footerDoodleHeight}px;
  border-style: ${props => props.inner ? 'solid': 'dashed'};
  color: ${props => props.theme.white};
  left: 80%;
  margin-left: -${props => props.inner ? footerDoodleHeight / 4 : footerDoodleHeight / 2}px;
  top: ${props => props.inner ? footerDoodleHeight / 4 : 0}px;
`

const FooterDoodleContainer = styled(CurvedBlock)`
  position: relative;
  margin-top: 2em;

  path {
    fill: ${props => props.theme.orange};
  }
`

const FooterDoodle = () => (
  <FooterDoodleContainer height={footerDoodleHeight / 2}>
    <FooterCircle />
    <FooterCircle inner />
  </FooterDoodleContainer>
)

const Footer = () => (
  <Fragment>
    <FooterDoodle />
    <FooterContainer>
      <StyledBackgroundText text="react-wordpress-docker" />
      <Flex>
        <Column auto>
          <h2>react-wordpress-docker</h2>
          <p>Footer goes here</p>
        </Column>
        <Column auto>
          <h2>Contact</h2>
          <p>Address goes here</p>
          <p>Contact info goes here</p>
        </Column>
      </Flex>
    </FooterContainer>
  </Fragment>
);

export default Footer;
