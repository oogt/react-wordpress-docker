import config from './env';

const wpApiPrefix = 'wp-json/wp/v2/';
const apiUrl = config.wpUrl + wpApiPrefix;

const getUrl = suffix => apiUrl + suffix;

const posts = getUrl('posts?_embed');
const post = slug => getUrl(`posts?slug=${slug}&_embed`);
const pages = getUrl('pages');
const page = slug => getUrl(`pages?slug=${slug}`);

export default {
  posts,
  post,
  pages,
  page
}
