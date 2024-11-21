import { notFound } from "next/navigation";
import { formatDistance } from "date-fns";

// This would typically come from your WordPress API
const posts = [
  {
    id: 1,
    title: "Building Modern WordPress Themes with Next.js",
    content: "Full article content would go here...",
    date: "2024-03-15",
    slug: "building-modern-wordpress-themes",
  },
  {
    id: 2,
    title: "Optimizing WordPress Performance",
    content: "Full article content would go here...",
    date: "2024-03-10",
    slug: "optimizing-wordpress-performance",
  },
  {
    id: 3,
    title: "Creating Custom Block Patterns",
    content: "Full article content would go here...",
    date: "2024-03-05",
    slug: "creating-custom-block-patterns",
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time className="text-sm text-muted-foreground block">
          {formatDistance(new Date(post.date), new Date(), { addSuffix: true })}
        </time>
      </header>
      <div className="prose dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  );
}