import React from 'react';
import { Flex, Box } from 'reflexbox';

const Post = ({ title, content, featuredImage, even, ...post }) => console.log({title, content, post, featuredImage}) || (
  <Flex justify="space-between" align="center" p={4}>
    <Box p={2} order={even ? 1 : 2} w={[1, 1/2]}>
      <h2 dangerouslySetInnerHTML={{ __html: title.rendered}} />
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </Box>
    {featuredImage && (
        <Box p={2} order={even ? 2 : 1} w={[1, 1/2]}>
          <img src={featuredImage.source_url} alt={featuredImage.alt_text} />
        </Box>
    )}
  </Flex>
)

export default Post;
