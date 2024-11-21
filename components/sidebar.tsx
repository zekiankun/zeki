"use client";

import { useState } from "react";
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
  Code2
} from "lucide-react";

const mainLinks = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/blog", icon: PenTool, label: "Writing" },
  { href: "/projects", icon: Code2, label: "Projects" },
  { href: "/journey", icon: Map, label: "Journey" },
  { href: "/tools", icon: Layers, label: "Tools" },
  { href: "/workspace", icon: Briefcase, label: "Workspace" },
  { href: "/bookmarks", icon: Bookmark, label: "Bookmarks" },
];

const socialLinks = [
  { href: "https://github.com/osman-koc", icon: Github, label: "GitHub" },
  { href: "https://twitter.com/osmkoc", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/in/osman-koc", icon: Linkedin, label: "LinkedIn" },
  { 
    href: "https://osman-koc.medium.com", 
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
    label: "Medium"
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const gravatarUrl = "https://gravatar.com/avatar/8cdcd03a8317d08a507265de2fef0c73?s=96&d=mp";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-background border rounded-md"
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
                  src={gravatarUrl}
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

          <div className="space-y-4">
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {typeof Icon === 'function' ? <Icon /> : <Icon className="h-5 w-5" />}
                </a>
              ))}
            </div>
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