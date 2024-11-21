"use client";

import { Suspense } from 'react';
import { BookmarksList } from './bookmarks-list';
import { Loader2 } from 'lucide-react';

export default function BookmarksPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Bookmarks</h1>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-12 text-muted-foreground/60">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        }
      >
        <BookmarksList />
      </Suspense>
    </div>
  );
}