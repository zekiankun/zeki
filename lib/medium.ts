import Parser from 'rss-parser';
import sanitizeHtml from 'sanitize-html';

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail: string;
};

type MediumFeed = {
  posts: MediumPost[];
  total: number;
};

export async function getMediumPosts(limit = 10, page = 1): Promise<MediumFeed> {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@osman-koc'
    );
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('Failed to fetch Medium posts');
    }

    const allPosts = data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: sanitizeHtml(item.description, {
        allowedTags: [], // Remove all HTML tags
        allowedAttributes: {} // Remove all attributes
      }).slice(0, 160) + '...',
      thumbnail: item.thumbnail || extractImageFromContent(item.content),
    }));

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