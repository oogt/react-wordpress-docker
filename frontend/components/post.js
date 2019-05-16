import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Link from 'next/link';

import WithFeaturedImage from './with-featured-image';

const PostTitle = ({ isDetail, title, slug }) => {
  if (isDetail) {
    return <h2 dangerouslySetInnerHTML={{ __html: title }} />;
  }
  return (
    <h2>
      <Link href={`p/${slug}`}>
        <a dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
    </h2>
  );
};

const Post = ({
  id, title, content, even, slug, isDetail, ...post
}) => (
  <WithFeaturedImage key={id} post={post}>
    {featuredImage => (
      <Flex justify="space-between" align="center" p={4}>
        <Box p={2} order={even ? 1 : 2} w={[1, 1 / 2]}>
          {isDetail && (
            <h2>
              <Link href="/">
                <a>Back</a>
              </Link>
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
    )}
  </WithFeaturedImage>
);

export default Post;
