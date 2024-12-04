import { Suspense } from 'react';
import { BookmarksList } from './bookmarks-list';
import { Loader2 } from 'lucide-react';
import { GetMetada } from '@/lib/page-metadata';

export const metadata = GetMetada('bookmarks');

export default function BookmarksPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Bookmarks</h1>
        <p className="text-muted-foreground">
          I bookmark some useful links, tweets, documentation and github repositories that I come across.
        </p>
      </div>

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