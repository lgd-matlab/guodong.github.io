import { BookOpen, Code, Database, Brain } from "lucide-react";

const resources = [
  {
    category: "Computational Materials Science",
    icon: Database,
    items: [
      { name: "VASP", url: "https://www.vasp.at/", description: "Vienna Ab initio Simulation Package" },
      { name: "LAMMPS", url: "https://www.lammps.org/", description: "Large-scale Atomic/Molecular Massively Parallel Simulator" },
      { name: "Pymatgen", url: "https://pymatgen.org/", description: "Python Materials Genomics library" },
      { name: "ASE", url: "https://wiki.fysik.dtu.dk/ase/", description: "Atomic Simulation Environment" },
    ],
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: [
      { name: "SISSO", url: "https://github.com/rouyang2017/SISSO", description: "Sure Independence Screening and Sparsifying Operator" },
      { name: "SHAP", url: "https://github.com/slundberg/shap", description: "SHapley Additive exPlanations" },
      { name: "scikit-learn", url: "https://scikit-learn.org/", description: "Machine Learning in Python" },
      { name: "DeePMD", url: "https://github.com/deepmodeling/deepmd-kit", description: "Deep Potential Molecular Dynamics" },
    ],
  },
  {
    category: "Programming & Tools",
    icon: Code,
    items: [
      { name: "Python", url: "https://www.python.org/", description: "Programming language for scientific computing" },
      { name: "Git", url: "https://git-scm.com/", description: "Version control system" },
      { name: "Jupyter", url: "https://jupyter.org/", description: "Interactive computing notebooks" },
    ],
  },
  {
    category: "Learning Resources",
    icon: BookOpen,
    items: [
      { name: "Materials Project", url: "https://materialsproject.org/", description: "Open database of computed materials properties" },
      { name: "AFLOW", url: "http://www.aflowlib.org/", description: "Automatic Flow for Materials Discovery" },
    ],
  },
];

export default function Resources() {
  return (
    <div className="space-y-8">
      <div>
        <h1>Resources</h1>
        <p className="text-muted-foreground mt-4">
          A curated collection of computational tools, libraries, and resources for materials science research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((section) => {
          const Icon = section.icon;
          return (
            <article key={section.category} className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold border-b-0">
                  {section.category}
                </h2>
              </div>

              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name} className="border-l-4 border-primary pl-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
