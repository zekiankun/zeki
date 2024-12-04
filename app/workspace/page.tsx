import { Laptop, Monitor, Headphones } from "lucide-react";
import { FallbackImage } from "@/components/ui/fallback-image";
import { setup } from "@/lib/workspace";
import { GetMetada } from '@/lib/page-metadata';

export const metadata = GetMetada('workspace');

const icons = {
  Hardware: Laptop,
  Software: Monitor,
  Audio: Headphones,
};

export default function WorkspacePage() {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Workspace</h1>
        <p className="text-muted-foreground">
          Here's what I use daily to get my work done efficiently.
        </p>
      </div>

      <div className="space-y-16">
        {setup.map(({ category, items }) => {
          const Icon = icons[category as keyof typeof icons];
          return (
            <section key={category} className="space-y-8">
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">{category}</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="group rounded-lg border bg-card overflow-hidden transition-colors hover:border-primary"
                  >
                    <div className="aspect-video relative bg-muted">
                      <FallbackImage
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}