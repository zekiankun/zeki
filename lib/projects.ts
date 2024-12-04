import { type Project } from "@/types/project";

const imageFolderPath = '/images/projects';

export const ProjectList: Project[] = [
  {
    title: "Personal Website",
    description: "osmankoc.dev - Built with Next.js, TypeScript, and Tailwind CSS",
    image: "https://osmkoc.com/wp-content/uploads/2024/11/osmkoc_newss.jpg",
    demoUrl: "https://osmankoc.dev",
    sourceUrl: "https://github.com/osman-koc/my-web-site"
  },
  {
    title: "En Yakın Hastaneyi Bul - Telegram Bot",
    description: "It is a Telegram bot that transmits the name, address, telephone and map location information of the nearest hospitals around you by location. It works only in Türkiye for the moment.",
    image: `${imageFolderPath}/en-yakin-hastaneyi-bul-bot.jpg`,
    demoUrl: "https://t.me/EnYakinHastaneBot",
    sourceUrl: "https://github.com/osman-koc/en-yakin-hastane-telegram-botu"
  },
  {
    title: "En Yakın Eczaneyi Bul - Telegram Bot",
    description: "It is a Telegram bot that transmits the name, address, telephone and map location information of the pharmacies that are closest or on duty around you by location. It works only in Türkiye for the moment.",
    image: `${imageFolderPath}/en-yakin-eczaneyi-bul-bot.jpg`,
    demoUrl: "https://t.me/EnYakinEczaneBot",
    sourceUrl: "https://github.com/osman-koc/en-yakin-eczane-telegram-botu"
  },
  {
    title: "GuidGenerator - VSCode Extension",
    description: "Generate and insert GUIDs (uuid) effortlessly into your code using a simple shortcut.",
    image: "https://kocdev.gallerycdn.vsassets.io/extensions/kocdev/guidgenerator/0.0.6/1691729877308/Microsoft.VisualStudio.Services.Icons.Default",
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=kocdev.guidgenerator",
    sourceUrl: "https://github.com/osman-koc/vscode-guid-generator"
  },
  {
    title: "GuidGenerator - Visual Studio Extension",
    description: "Generate and insert GUIDs effortlessly into your code using a simple shortcut.",
    image: "https://kocdev.gallerycdn.vsassets.io/extensions/kocdev/vsguidgenerate/0.0.3/1691761600857/Microsoft.VisualStudio.Services.Icons.Default",
    demoUrl: "https://marketplace.visualstudio.com/items?itemName=kocdev.vsguidgenerate",
    sourceUrl: "https://github.com/osman-koc/vs-guid-generator"
  },
  {
    title: "Whistle SOS (Deprem Düdüğü)",
    description: "Emergency whistle app for earthquake situations.  Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/RA5xl79ALrLWIL8SptFCc6UQIN-iVdf-Y5d0KsNsUI0H3Yn4MwOHf6WgB4K7n6mAGMA=w240-h480-rw",
    sourceUrl: "https://github.com/osman-koc/deprem-dudugu",
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
    title: "Seçim Afişi Oluşturucu",
    description: "It is a web page that allows you to create election posters of political parties in Türkiye for yourself for entertainment purposes. Developed with Python.",
    image: "https://github.com/osman-koc/secim-afisi-olusturucu/raw/master/static/img/banner.jpg",
    demoUrl: "http://secimafisi.kocdev.site/",
    sourceUrl: "https://github.com/osman-koc/secim-afisi-olusturucu",
  },
  {
    title: "Random Quotes",
    description: "Daily inspirational quotes app.  Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/ecgtkF_JnTvt_9Haz1X878rvkUu0AXeCCISm156LQZQo52JTpv5_bml3Yq1WW7vDHoQ=w240-h480-rw",
    sourceUrl: "https://github.com/osman-koc/random-quotes-app",
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
    title: "Simple ToDo",
    description: "Minimalist todo list app for daily tasks. Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/Sfkbt3l8SdK1WWJ637Gi0d4WskqF3SPn32uo3V7_CpjZQnMXZr56Au0Mo2bMuM8srA=w240-h480-rw",
    sourceUrl: "https://github.com/osman-koc/simple-todo-app",
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmkoc.simpletodo"
      }
    ]
  },
  {
    title: "Baby Sleeper",
    description: "Soothing sounds and lullabies for babies.  Developed with Flutter.",
    image: "https://play-lh.googleusercontent.com/lUVE3_TOvgVdRentWDpLwDj-qq5j2N4ciZvehsfrWBL-VuHNSesqOauqSvL4kaGjZDI=w240-h480-rw",
    sourceUrl: "https://github.com/osman-koc/baby-sleeper-app",
    storeLinks: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.osmankoc.babysleeper"
      }
    ]
  },
];