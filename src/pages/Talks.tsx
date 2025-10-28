import { MapPin, Calendar, Presentation } from "lucide-react";

const talks = [
  {
    id: 1,
    title: "Machine Learning Applications in Materials Science",
    type: "Conference Presentation",
    venue: "China Materials Conference",
    location: "Guangzhou, China",
    date: "2024-07-01",
    description: "Presented research on machine learning methods for investigating alloy element effects on non-metal interstitials in HCP metals.",
    slidesUrl: "/files/slides1.pdf",
  },
  {
    id: 2,
    title: "First-Principles Calculations of Zirconium Alloys",
    type: "Conference Presentation",
    venue: "China Materials Conference",
    location: "Shenzhen, China",
    date: "2023-07-01",
    description: "Discussed DFT investigations of oxygen interactions with alloying elements in α-zirconium.",
    slidesUrl: "/files/slides2.pdf",
  },
];

export default function Talks() {
  return (
    <div className="space-y-6">
      <h1>Talks and Presentations</h1>

      <div className="space-y-6 mt-8">
        {talks.map((talk) => (
          <article key={talk.id} className="hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-3">
              <Presentation className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2 border-b-2 pb-2">
                  {talk.title}
                </h2>
                
                <p className="text-sm font-medium text-primary mb-2">
                  {talk.type}
                </p>

                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{talk.venue}, {talk.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(talk.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                  </div>
                </div>

                {talk.description && (
                  <p className="mb-4">{talk.description}</p>
                )}

                {talk.slidesUrl && (
                  <a
                    href={talk.slidesUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity no-underline"
                  >
                    <Presentation className="h-4 w-4" />
                    Download Slides
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {talks.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No talks or presentations available yet.
        </p>
      )}
    </div>
  );
}
