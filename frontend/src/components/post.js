import React from 'react';

const Post = ({ title, content, ...post }) => console.log(post) || (
  <div className="post">
    <h1>{ title.rendered }</h1>
    <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
  </div>
)

export default Post;
