const baseUrl = 'http://localhost:8000/';
const wpApiPrefix = 'wp-json/wp/v2/';

const posts = `${baseUrl}${wpApiPrefix}posts?_embed`;

export default {
  posts
}
