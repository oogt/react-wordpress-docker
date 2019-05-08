import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  padding-left: 2em;
`

const Title = styled.h2`
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    display: block;
    width: 0;
    left: 50%;
    height: ${props => props.theme.underlines.width};
    background: ${props => props.theme.white};
    position: absolute;
    bottom: -10px;

    transition: all .25s ${props => props.theme.easing.default};
  }

  &:hover:before {
    left: 0;
    width: 100%;
  }
`

const Post = ({ title, content, featuredImage, ...post }) => console.log({content, post, featuredImage}) || (
  <PostContainer>
    <Title>{ title.rendered }</Title>
    <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
    {featuredImage && (
        <img src={featuredImage.source_url} alt={featuredImage.alt_text} />
    )}
  </PostContainer>
)

export default Post;
