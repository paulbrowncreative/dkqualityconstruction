// One page per blog post → /blog/{slug}/
import { posts } from '../data/posts.mjs';
import { postPage } from '../lib/post-template.mjs';

export default posts.map(postPage);
