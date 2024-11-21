import { Code2, Laptop, Brush, Cloud, Terminal, Brain } from "lucide-react";

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
        name: "GitHub Copilot",
        description: "AI pair programmer that helps write better code"
      },
      {
        name: "Docker",
        description: "Container platform for building and sharing applications"
      }
    ]
  },
  {
    category: "Productivity",
    icon: Brain,
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
        name: "Figma",
        description: "Collaborative interface design tool"
      },
      {
        name: "Raycast",
        description: "Productivity tool with beautiful UI components"
      }
    ]
  },
  {
    category: "Terminal",
    icon: Terminal,
    items: [
      {
        name: "iTerm2",
        description: "Modern terminal emulator with great features"
      },
      {
        name: "Oh My Zsh",
        description: "Framework for managing Zsh configuration"
      }
    ]
  }
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