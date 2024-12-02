import { MediumPosts } from '@/components/medium-posts';
import { FeaturedProjects } from '@/components/featured-projects';
import { getMediumPosts } from '@/lib/medium';
import PlayAIEmbed from '@/components/playai-embed';

export default async function Home() {
  const { posts: mediumPosts } = await getMediumPosts(4);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Hi, I'm Osman 👋
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A software engineer based in Turkey, focused on building scalable applications
          and writing about web development, technology, and software engineering practices.
        </p>
        <PlayAIEmbed />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight">Latest Posts</h2>
          <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all →
          </a>
        </div>
        {mediumPosts.length > 0 && <MediumPosts posts={mediumPosts} />}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight">Featured Projects</h2>
          <a href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all →
          </a>
        </div>
        <FeaturedProjects />
      </section>
    </div>
  );
}