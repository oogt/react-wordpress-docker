import React from "react";
import { Flex, Box } from "reflexbox";
import { Link } from "react-router-dom";

const PostTitle = ({ isDetail, title, slug }) => {
  if (isDetail) {
    return <h2 dangerouslySetInnerHTML={{ __html: title }} />;
  }
  return (
    <h2>
      <Link to={`/${slug}`} dangerouslySetInnerHTML={{ __html: title }} />
    </h2>
  );
};

const Post = ({
  title,
  content,
  featuredImage,
  even,
  slug,
  isDetail,
  ...post
}) => (
  <Flex justify="space-between" align="center" p={4}>
    <Box p={2} order={even ? 1 : 2} w={[1, 1 / 2]}>
      {isDetail && (
        <h2>
          <Link to="/">Back</Link>
        </h2>
      )}
      <PostTitle isDetail={isDetail} title={title.rendered} slug={slug} />
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
