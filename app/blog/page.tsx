import { Suspense } from 'react';
import { PostGrid } from '@/components/post-grid';
import { getMediumPosts } from '@/lib/medium';
import { PostGridSkeleton } from '@/components/post-grid-skeleton';
import { ClientPagination } from '@/components/client-pagination';

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
        <ClientPagination 
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={total}
        />
      </Suspense>
    </div>
  );
}