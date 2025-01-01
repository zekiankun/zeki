import { MediumFeed } from '@/types/medium-feed';
import sanitizeHtml from 'sanitize-html';
import he from 'he';

export async function getMediumPosts(limit = 10, page = 1): Promise<MediumFeed> {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://zekiankun.medium.com/feed'
    );
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch Medium posts');
    }

    const allPosts = data.items.map((item: any) => ({
      title: he.decode(item.title),
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: sanitizeHtml(item.description, {
        allowedTags: [], 
        allowedAttributes: {} 
      }).slice(0, 160) + '...',
      thumbnail: item.thumbnail || extractImageFromContent(item.content),
    }));

    // TODO : Add pagination from Medium API
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
      posts: allPosts.slice(startIndex, endIndex),
      total: allPosts.length
    };
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return {
      posts: [],
      total: 0
    };
  }
}

function extractImageFromContent(content: string): string {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : 'https://source.unsplash.com/random/800x600?technology';
}
