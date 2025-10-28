import { ExternalLink, FileText, Quote } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Machine Learning Method to Investigate the Influence of Alloy Elements on Non-Metal Interstitials in HCP Metals",
    authors: "Guodong Lu, et al.",
    venue: "Materials & Design",
    year: 2025,
    category: "manuscripts",
    paperUrl: "/files/paper1.pdf",
    bibtexUrl: "/files/bibtex1.bib",
    citation: "Lu, G., et al. (2025). Machine Learning Method to Investigate the Influence of Alloy Elements on Non-Metal Interstitials in HCP Metals. Materials & Design.",
  },
  {
    id: 2,
    title: "Development of a Zr-Nb-H-O reactive force field for molecular dynamics simulations of in-reactor corrosion",
    authors: "Co-author",
    venue: "Computational Materials Science",
    year: 2024,
    category: "manuscripts",
    paperUrl: "/files/paper2.pdf",
  },
  {
    id: 3,
    title: "First-principles investigation of the interaction between oxygen and alloy atoms in α-zirconium",
    authors: "Guodong Lu, et al.",
    venue: "Journal of Nuclear Materials",
    year: 2024,
    category: "manuscripts",
    paperUrl: "/files/paper3.pdf",
  },
  {
    id: 4,
    title: "Entropy-driven highly chaotic MXene-based heterostructures as an efficient sulfur redox electrocatalysts for Li-S battery",
    authors: "Co-first author",
    venue: "Advanced Functional Materials",
    year: 2024,
    category: "manuscripts",
  },
];

export default function Publications() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1>Publications</h1>
        <p className="text-muted-foreground mt-4">
          You can also find my articles on{" "}
          <a href="#" className="text-primary hover:underline">
            my Google Scholar profile
          </a>
          .
        </p>
      </div>

      <section>
        <h2 className="mb-6">Journal Articles</h2>
        
        <div className="space-y-6">
          {publications
            .filter(pub => pub.category === "manuscripts")
            .map((pub) => (
              <article key={pub.id} className="hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">
                  {pub.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">
                  Published in <em>{pub.venue}</em>, {pub.year}
                </p>

                {pub.citation && (
                  <p className="text-sm mb-4 italic text-muted-foreground">
                    Recommended citation: {pub.citation}
                  </p>
                )}

                <div className="flex flex-wrap gap-3">
                  {pub.paperUrl && (
                    <a
                      href={pub.paperUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity no-underline"
                    >
                      <FileText className="h-4 w-4" />
                      Download Paper
                    </a>
                  )}
                  
                  {pub.bibtexUrl && (
                    <a
                      href={pub.bibtexUrl}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity no-underline"
                    >
                      <Quote className="h-4 w-4" />
                      Download BibTeX
                    </a>
                  )}
                </div>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
