"use client";

import Image from "next/image";

export function ProfileHeader() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <Image
            src="https://osmkoc.com/wp-content/uploads/2024/09/osmanprofil.jpg"
            alt="Osman Koç"
            width={80}
            height={80}
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Osman Koç</h1>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>
      </div>
      
      <p className="text-lg leading-relaxed">
        Hi 👋 I'm Osman, a software engineer and writer based in Turkey. I write about web development,
        technology, and my experiences in the software industry.
      </p>
    </section>
  );
}