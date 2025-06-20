import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_INFO } from '../../consts';

export async function GET() {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_INFO.site_title,
		description: SITE_INFO.site_description,
		site: SITE_URL+'/blog/',
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
