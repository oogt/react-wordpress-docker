const WithFeaturedImage = ({ post, children }) => {
  const featuredImage = post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0];

  return children(featuredImage);
}

export default WithFeaturedImage;
