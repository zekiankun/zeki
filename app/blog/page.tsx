import { Suspense } from 'react';
import { getMediumPosts } from '@/lib/medium';
import { PostGrid } from '@/components/post-grid';
import { Pagination } from '@/components/pagination';

export const revalidate = 3600;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 10;
  
  const { posts, total } = await getMediumPosts(postsPerPage, currentPage);
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Writing</h1>
      
      <Suspense fallback={<PostGridSkeleton />}>
        <PostGrid posts={posts} />
      </Suspense>
      
      <Pagination 
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={total}
      />
    </div>
  );
}

function PostGridSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg animate-pulse" />
          <div className="space-y-2">
            <div className="h-6 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}