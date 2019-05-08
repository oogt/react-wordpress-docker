import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin-left: 100px;
  margin-bottom: 200px;
`

const Title = styled.h1`
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 120px;
    height: 20px;
    background: #fff;
    position: absolute;
    left: -10px;
    top: -10px;
  }
`

const Post = ({ title, content, featuredImage, ...post }) => console.log({content, post, featuredImage}) || (
  <PostContainer>
    <Title>{ title.rendered }</Title>
    <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
    {featuredImage && <img src={featuredImage.source_url} alt={featuredImage.alt_text} />}
  </PostContainer>
)

export default Post;
