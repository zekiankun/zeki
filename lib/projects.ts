import { type Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Personal Website",
    description: "kocosman.com.tr - Built with Next.js, TypeScript, and Tailwind CSS",
    image: "https://osmkoc.com/wp-content/uploads/2024/11/osmkoc_newss.jpg",
    demoUrl: "https://kocosman.com.tr",
    sourceUrl: "https://github.com/osman-koc/my-web-site"
  },
  {
    title: "GuidGenerator - VSCode Extension",
    description: "Generate and insert GUIDs (uuid) effortlessly into your code using a simple shortcut.",
    image: "https://kocdev.gallerycdn.vsassets.io/extensions/kocdev/guidgenerator/0.0.6/1691729877308/Microsoft.VisualStudio.Services.Icons.Default",
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=kocdev.guidgenerator",
    sourceUrl: "https://github.com/osman-koc/vscode-guid-generator"
  },
  {
    title: "Whistle SOS",
    description: "Emergency whistle app for earthquake situations",
    image: "https://play-lh.googleusercontent.com/RA5xl79ALrLWIL8SptFCc6UQIN-iVdf-Y5d0KsNsUI0H3Yn4MwOHf6WgB4K7n6mAGMA=w240-h480-rw",
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.DepremDudugu"
      },
      {
        type: "appstore",
        url: "https://apps.apple.com/app/id6477729209"
      }
    ]
  },
  {
    title: "Random Quotes",
    description: "Daily inspirational quotes app",
    image: "https://play-lh.googleusercontent.com/ecgtkF_JnTvt_9Haz1X878rvkUu0AXeCCISm156LQZQo52JTpv5_bml3Yq1WW7vDHoQ=w240-h480-rw",
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.randomquotes"
      },
      {
        type: "appstore",
        url: "https://apps.apple.com/app/id6477748373"
      }
    ]
  },
  {
    title: "Baby Sleeper",
    description: "Soothing sounds and lullabies for babies",
    image: "https://play-lh.googleusercontent.com/lUVE3_TOvgVdRentWDpLwDj-qq5j2N4ciZvehsfrWBL-VuHNSesqOauqSvL4kaGjZDI=w240-h480-rw",
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.babysleeper"
      }
    ]
  },
  {
    title: "Simple ToDo",
    description: "Minimalist todo list app for daily tasks",
    image: "https://play-lh.googleusercontent.com/Sfkbt3l8SdK1WWJ637Gi0d4WskqF3SPn32uo3V7_CpjZQnMXZr56Au0Mo2bMuM8srA=w240-h480-rw",
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmkoc.simpletodo"
      }
    ]
  }
];