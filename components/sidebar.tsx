"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Home, 
  PenTool, 
  Map, 
  Layers,
  Briefcase,
  Bookmark,
  Github, 
  Twitter, 
  Linkedin,
  Menu,
  X,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { sharedMetadata } from "@/lib/shared-metadata";

type SocialLink = {
  href: string;
  icon: LucideIcon | (() => JSX.Element);
  label: string;
  className: string;
};

const mainLinks = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/blog", icon: PenTool, label: "Writing" },
  //{ href: "/highlights", icon: Map, label: "Highlights" },
  { href: "/projects", icon: Code2, label: "Projects" },
  //{ href: "/tools", icon: Layers, label: "Tools" },
  //{ href: "/workspace", icon: Briefcase, label: "Workspace" },
  //{ href: "/bookmarks", icon: Bookmark, label: "Bookmarks" },
];

const socialLinks: SocialLink[] = [
  { 
    href: `https://github.com/zekiankun`, 
    icon: Github, 
    label: "GitHub",
    className: "h-5 w-5" 
  },
  { 
    href: `https://x.com/zekiankun}`, 
    icon: Twitter, 
    label: "Twitter (X)",
    className: "h-5 w-5"
  },
    { 
    href: `https://zekiankun.medium.com/`, 
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
    label: "Medium",
    className: "h-5 w-5"
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "md:hidden fixed top-4 z-50 p-2 bg-background border rounded-md",
          isOpen ? "left-52" : "left-4"
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 border-r bg-background p-6 transition-transform duration-200 ease-in-out z-40",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-8">
            <Link href="/" className="block" onClick={() => setIsOpen(false)}>
              <div className="space-y-3">
                <Image
                  src={sharedMetadata.urls.gravatarImg}
                  alt="Osman Koç"
                  width={48}
                  height={48}
                  className="rounded-full"
                  priority
                />
                <div>
                  <h2 className="font-semibold">Osman Koç</h2>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </Link>

            <nav className="space-y-2">
              {mainLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                    pathname === href && "bg-accent text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4 fixed bottom-8 left-0 w-full p-4 justify-around z-10 md:static md:flex-none">
            {socialLinks.map(({ href, icon: Icon, label, className }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {<Icon className={className} />}
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>


        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
