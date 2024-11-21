"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { FallbackImage } from "@/components/ui/fallback-image";
import useSWR from "swr";

type Collection = {
  _id: number;
  title: string;
  count: number;
};

type Bookmark = {
  _id: string;
  title: string;
  excerpt: string;
  link: string;
  cover: string;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function BookmarksPage() {
  const { data: collections = [], error: collectionsError } = useSWR<Collection[]>(
    '/api/bookmarks/collections',
    fetcher,
    { revalidateOnFocus: false }
  );

  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [isLoadingBookmarks, setIsLoadingBookmarks] = useState(false);
  const [bookmarks, setBookmarks] = useState<{ items: Bookmark[] }>({ items: [] });

  // Sort collections alphabetically
  const sortedCollections = [...collections].sort((a, b) => 
    a.title.localeCompare(b.title)
  );

  // Set initial collection when data is loaded
  useEffect(() => {
    if (sortedCollections.length > 0 && !selectedCollection) {
      setSelectedCollection(sortedCollections[0]);
    }
  }, [sortedCollections]);

  // Fetch bookmarks when collection changes
  useEffect(() => {
    async function fetchBookmarks() {
      if (!selectedCollection) return;

      setIsLoadingBookmarks(true);
      try {
        const response = await fetch(`/api/bookmarks/items/${selectedCollection._id}`);
        const data = await response.json();
        setBookmarks({ items: data });
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      } finally {
        setIsLoadingBookmarks(false);
      }
    }

    fetchBookmarks();
  }, [selectedCollection]);

  if (collectionsError) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Failed to load collections. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Bookmarks</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Categories Sidebar */}
        <div className="md:col-span-3 space-y-2">
          {sortedCollections.map((collection) => (
            <button
              key={collection._id}
              onClick={() => setSelectedCollection(collection)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                selectedCollection?._id === collection._id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <div className="flex justify-between items-center">
                <span>{collection.title}</span>
                <span className="text-sm">{collection.count}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Bookmarks Grid */}
        <div className="md:col-span-9">
          <div className="grid gap-6">
            <h2 className="text-2xl font-semibold">
              {selectedCollection?.title || (
                <span className="text-base font-normal text-muted-foreground">
                  Loading collections...
                </span>
              )}
            </h2>
            
            {isLoadingBookmarks ? (
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-lg border p-4 space-y-3">
                    <div className="aspect-video bg-muted rounded-lg animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-5 bg-muted rounded w-3/4 animate-pulse" />
                      <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                {bookmarks.items.map((bookmark) => (
                  <a
                    key={bookmark._id}
                    href={bookmark.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block space-y-3 rounded-lg border p-4 hover:border-primary transition-colors"
                  >
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
                      <FallbackImage
                        src={bookmark.cover}
                        alt={bookmark.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {bookmark.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {bookmark.excerpt}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}