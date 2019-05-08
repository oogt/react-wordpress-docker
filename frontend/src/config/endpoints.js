const baseUrl = 'http://localhost:8000/';
const wpApiPrefix = 'wp-json/wp/v2/';
const apiUrl = baseUrl + wpApiPrefix;

const getUrl = suffix => apiUrl + suffix;

const posts = getUrl('posts?_embed');
const post = slug => getUrl(`posts?slug=${slug}&_embed`);

export default {
  posts,
  post
}
