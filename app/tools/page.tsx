import { Code2, Brush, CheckCircle, Brain } from "lucide-react";
import { GetMetada } from '@/lib/page-metadata';

export const metadata = GetMetada('tools');

const tools = [
  {
    category: "Development",
    icon: Code2,
    items: [
      {
        name: "Visual Studio Code",
        description: "My primary code editor with custom theme and essential extensions"
      },
      {
        name: "Visual Studio 2022",
        description: "Visual Studio 2022 is a powerful IDE for building and debugging modern applications."
      },
      {
        name: "Microsoft SQL Server Management Studio",
        description: "A tool for managing, configuring, and querying SQL Server databases."
      },
      {
        name: "Azure Data Studio",
        description: "A lightweight, modern IDE for data development and management."
      },
      {
        name: "Docker",
        description: "Container platform for building and sharing applications"
      }
    ]
  },
  {
    category: "AI Tools",
    icon: Brain,
    items: [
      {
        name: "ChatGPT",
        description: "An AI language model developed by OpenAI, designed to generate human-like text based on user prompts."
      },
      {
        name: "Claude.ai",
        description: "An AI assistant created by Anthropic, focused on safety and reliability in generating text and assisting with various tasks. "
      },
      {
        name: "Bolt.new",
        description: "An AI-powered web development agent that enables users to prompt, run, edit, and deploy full-stack applications directly from the browser without local setup."
      },
      {
        name: "v0.dev",
        description: " platform that allows users to build and deploy AI applications with minimal coding, streamlining the development process."
      },
      {
        name: "Microsoft Copilot",
        description: "An AI-powered assistant integrated into Microsoft products, designed to enhance productivity by assisting with tasks like coding, writing, and data analysis."
      },
    ]
  },
  {
    category: "Productivity",
    icon: CheckCircle,
    items: [
      {
        name: "Notion",
        description: "All-in-one workspace for notes and documentation"
      },
      {
        name: "Obsidian",
        description: "Knowledge base that works on local Markdown files"
      },
      {
        name: "Rectangle",
        description: "Window management made easy for macOS"
      }
    ]
  },
  {
    category: "Design",
    icon: Brush,
    items: [
      {
        name: "Adobe Photoshop",
        description: "A leading software for photo editing and graphic design."
      },
      {
        name: "Canva",
        description: "An easy-to-use platform for creating designs and visuals."
      },
      {
        name: "Figma",
        description: "Collaborative interface design tool"
      },
    ]
  },
];

export default function ToolsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Tools & Software</h1>
        <p className="text-muted-foreground">
          A curated list of tools and software that I use daily to improve my workflow and productivity.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {tools.map(({ category, icon: Icon, items }) => (
          <div key={category} className="rounded-lg border p-6">
            <div className="flex items-center gap-3 mb-6">
              <Icon className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">{category}</h2>
            </div>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.name} className="group">
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}