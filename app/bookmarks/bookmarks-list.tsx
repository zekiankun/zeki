"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Collection } from "@/types/collection";
import { Bookmark } from '@/types/bookmark';
import useSWR from "swr";

const DEFAULT_COLLECTION_ID = 41449893;

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
}

export function BookmarksList() {
  const { data: collections = [], error: collectionsError, isLoading: isLoadingCollections } = useSWR<Collection[]>(
    '/api/bookmarks/collections',
    fetcher,
    { revalidateOnFocus: false }
  );

  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(
    collections.find(c => c._id === DEFAULT_COLLECTION_ID) || collections[0] || null
  );

  const { data: bookmarks = [], isLoading: isLoadingBookmarks } = useSWR<Bookmark[]>(
    selectedCollection ? `/api/bookmarks/items/${selectedCollection._id}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (collectionsError) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Failed to load collections. Please try again later.
      </div>
    );
  }

  if (!collections.length && !isLoadingCollections) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No collections available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Categories Sidebar */}
      <div className="md:col-span-3 space-y-2">
        {collections.map((collection) => (
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
          {selectedCollection && (
            <h2 className="text-2xl font-semibold">{selectedCollection.title}</h2>
          )}
          
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
              {bookmarks?.map((bookmark) => (
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
  );
}