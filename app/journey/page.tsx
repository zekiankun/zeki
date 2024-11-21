"use client";

const journeyItems = [
  {
    year: "2024",
    events: [
      {
        title: "New UI for my website",
        description: "Launched a modern Next.js template with improved design and functionality.",
      },
      {
        title: "Joined Turkcell",
        description: "Member of a scrum team developing a framework for low-code and no-code development.",
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
        title: "Joined KocDigital",
        description: "Member of a IoT scrum team as a developer developing backend services.",
      }
    ]
  },
  {
    year: "2018",
    events: [
      {
        title: "Joined Rasyotek",
        description: "Started career as a junior software developer.",
      }
    ]
  }
];

export default function JourneyPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <h1 className="text-3xl font-bold">Journey</h1>
      
      <div className="space-y-16">
        {journeyItems.map((item) => (
          <div key={item.year} className="relative grid grid-cols-[100px_1fr] gap-8">
            <div className="text-xl font-medium sticky top-20">
              {item.year}
            </div>
            
            <div className="space-y-12 relative">
              {item.events.map((event, eventIndex) => (
                <div 
                  key={`${item.year}-${eventIndex}`}
                  className="relative pl-12"
                >
                  {/* Connecting line only between events */}
                  {eventIndex < item.events.length - 1 && (
                    <div className="absolute left-[11px] top-[28px] h-[calc(100%+20px)] w-[2px] bg-border/30" />
                  )}
                  
                  {/* Plus icon */}
                  <div className="absolute left-0 top-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-medium">+</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <h3 className="text-lg font-medium mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}