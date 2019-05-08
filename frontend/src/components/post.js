import React from "react";
import { Flex, Box } from "reflexbox";
import { Link } from "react-router-dom";

const Post = ({ title, content, featuredImage, even, slug, ...post }) =>
  console.log({ title, content, featuredImage, even, slug, ...post }) || (
    <Flex justify="space-between" align="center" p={4}>
      <Box p={2} order={even ? 1 : 2} w={[1, 1 / 2]}>
        <h2>
          <Link to={`/${slug}`} dangerouslySetInnerHTML={{ __html: title.rendered }} />
        </h2>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Box>
      {featuredImage && (
        <Box p={2} order={even ? 2 : 1} w={[1, 1 / 2]}>
          <img src={featuredImage.source_url} alt={featuredImage.alt_text} />
        </Box>
      )}
    </Flex>
  );

export default Post;
