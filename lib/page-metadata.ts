import { Metadata } from 'next';
import { PageMetadata } from '@/types/page-metadata';
import { sharedMetadata } from './shared-metadata';

export const PageMetadataList: Record<string, PageMetadata> = {
    home: {
        route: "/",
        title: sharedMetadata.title,
        description: "A software engineer based in Türkiye, focused on building scalable applications and writing about web development, technology, and software engineering practices.",
        image: {
            url: '/api/og?page=home',
            width: 1200,
            height: 630,
        }
    },
    blog: {
        route: "/blog",
        title: "Writing / Blog",
        description: "Read my latest blog post about web development, technology, and software engineering practices.",
        image: {
            url: '/api/og?page=blog',
            width: 1200,
            height: 630,
        }
    },
    projects: {
        route: "/projects",
        title: "Projects",
        description: "A collection of mobile apps and web projects I've built.",
        image: {
            url: '/api/og?page=projects',
            width: 1200,
            height: 630,
        }
    },
    journey: {
        route: "/journey",
        title: "Journey",
        description: "Important points of my career and life, a kind of timeline.",
        image: {
            url: '/api/og?page=journey',
            width: 1200,
            height: 630,
        }
    },
    tools: {
        route: "/tools",
        title: "Tools",
        description: "A curated list of tools and software that I use daily to improve my workflow and productivity.",
        image: {
            url: '/api/og?page=tools',
            width: 1200,
            height: 630,
        }
    },
    workspace: {
        route: "/workspace",
        title: "Workspace",
        description: "Here's what I use daily to get my work done efficiently.",
        image: {
            url: '/api/og?page=workspace',
            width: 1200,
            height: 630,
        }
    },
    bookmarks: {
        route: "/bookmarks",
        title: "Bookmarks",
        description: "I bookmark some useful links, tweets, documentation and github repositories that I come across.",
        image: {
            url: '/api/og?page=bookmarks',
            width: 1200,
            height: 630,
        }
    },
};

export const DefaultPageMetadata: PageMetadata = {
    route: "/",
    title: 'Page',
    description: sharedMetadata.description,
    image: {
        url: '/api/og?page=home',
        width: 1200,
        height: 630,
    },
};

export function GetMetada(route: string) {
    const meta = PageMetadataList[route] || DefaultPageMetadata;
    var keywords = sharedMetadata.keywords;
    keywords.push(route);

    const subfix = meta.route != DefaultPageMetadata.route ? `— ${sharedMetadata.titleShort}` : '';

    const result: Metadata = {
        title: `${meta.title} ${subfix}`,
        description: meta.description,
        keywords: keywords,
        openGraph: {
            images: [meta.image],
        },
        icons: {
            icon: '/favicon.ico',
            apple: '/favicon.png',
        },
    };
    return result;
}