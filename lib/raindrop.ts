const RAINDROP_TOKEN = process.env.RAINDROP_ACCESS_TOKEN;

type RaindropBookmark = {
  _id: string;
  title: string;
  excerpt: string;
  link: string;
  cover: string;
  tags: string[];
  created: string;
};

type Collection = {
  _id: number;
  title: string;
  count: number;
};

export async function getCollections(): Promise<Collection[]> {
  if (!RAINDROP_TOKEN) {
    throw new Error('Raindrop access token is not configured');
  }

  try {
    const response = await fetch('https://api.raindrop.io/rest/v1/collections', {
      headers: {
        'Authorization': `Bearer ${RAINDROP_TOKEN}`,
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch collections: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items
      .filter((item: any) => !item.hidden) // Only show visible collections
      .map((item: any) => ({
        _id: item._id,
        title: item.title,
        count: item.count
      }));
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw error;
  }
}

export async function getBookmarksByCollection(collectionId: number): Promise<RaindropBookmark[]> {
  if (!RAINDROP_TOKEN) {
    throw new Error('Raindrop access token is not configured');
  }

  try {
    const response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/${collectionId}?perpage=50`, {
        headers: {
          'Authorization': `Bearer ${RAINDROP_TOKEN}`,
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch bookmarks: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items.map((item: any) => ({
      _id: item._id,
      title: item.title,
      excerpt: item.excerpt || '',
      link: item.link,
      cover: item.cover || 'https://source.unsplash.com/random/800x600?technology',
      tags: item.tags || [],
      created: item.created
    }));
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    throw error;
  }
}