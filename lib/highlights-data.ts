import { type Highlight } from "@/types/highlight";

const imageFolderPath = '/images/highlights';

export const HighlightList: Highlight[] = [
    {
        year: "2024",
        events: [
            {
                title: "New UI for my new website: osmankoc.dev",
                description: "Leaving my old website osmkoc.com, I published my new website developed with Tailwind CSS and shadcn/ui supported Next.js.",
            },
            {
                title: "Presentation at the Medipol University",
                description: "I talked about no-code software development and Turkcell LCAP platform at Medipol University. I am happy to have a pleasant conversation with fellow students.",
                imageUrl: `${imageFolderPath}/2024_presentation_medipol.jpg`
            },
            {
                title: 'Launched "En Yakın Eczaneyi Bul" Telegram Bot',
                description: "Created a Node.js-based Telegram bot to locate nearby pharmacies or on-call pharmacies outside working hours. Open-source on GitHub for contributions.",
            },
            {
                title: "Joined Turkcell",
                description: "I started working as an Export Developer at Turkcell as a member of a scrum team developing a framework for low-code and no-code development.",
            }
        ]
    },
    {
        year: "2023",
        events: [
            {
                title: "Published GuidGenerator Extension",
                description: "Developed GuidGenerator, a VS Code and Visual Studio extension for generating Guid (UUID) values effortlessly."
            }
        ]
    },
    {
        year: "2022",
        events: [
            {
                title: "Moved to Çerkezköy",
                description: "I moved to Çerkezköy district of Tekirdağ. It is a quiet city, there are not many activities to do in it. The best feature is that it is close to Istanbul :)",
            },
            {
                title: "Promoted to Senior Developer",
                description: "Member of a IoT scrum team as a scrum master and developer developing backend services.",
            }
        ]
    },
    {
        year: "2021",
        events: [
            {
                title: "Master's degree training started",
                description: "I started my master's degree in Electrical-Electronics and Computer Engineering."
            }
        ]
    },
    {
        year: "2020",
        events: [
            {
                title: 'Released "Whistle SOS" (Deprem Düdüğü) App',
                description: "Developed a lightweight app with no ads or permissions, providing emergency whistle sounds that work offline. Available on Google Play and App Store.",
            },
            {
                title: "Joined KoçDigital",
                description: "I started working at KoçDigital, a Koç Holding company, to work in the IoT sector as a Specialist Developer.",
            },
            {
                title: "Launched My First Mobile App: Getmar",
                description: "Introduced Getmar, a Flutter-built app for comparing market product prices and tracking weekly catalogs. Backend powered by ASP.NET Core. Available on Google Play.",
                imageUrl: `${imageFolderPath}/2020_myfirstapp_getmar.jpg`
            }
        ]
    },
    {
        year: "2019",
        events: [
            {
                title: "Graduated (Bachelor's degree)",
                description: "Graduated as the third highest-ranking student in my undergraduate program.",
                imageUrl: `${imageFolderPath}/2019_graduated_bachelor.jpg`
            }
        ]
    },
    {
        year: "2018",
        events: [
            {
                title: "Joined Rasyotek",
                description: "I started my career as a Junior Software Developer (C# / .NET).",
            },
            {
                title: "Presented at EFIS Symposium",
                description: "Shared my work on Driver Sleep Alert System at the Future Engineers International Student Symposium (EFIS) held at Bülent Ecevit University.",
                imageUrl: `${imageFolderPath}/2018_efis_presentation.jpg`
            }
        ]
    },
    {
        year: "2017",
        events: [
            {
                title: "Published my website: osmkoc.com",
                description: "I published my personal blog site with Wordpress.",
            }
        ]
    },
];
