import { Mail, MapPin, Building2, Github } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-80 border-r-0 lg:border-r-4 border-b-4 lg:border-b-0 border-border bg-card p-6 lg:p-8">
      <div className="flex flex-col items-center text-center lg:sticky lg:top-24">
        {/* Avatar */}
        <div className="mb-6">
          <img
            src="/images/profile.png"
            alt="Guodong Lu"
            className="w-44 h-44 rounded-full border-4 border-border object-cover"
          />
        </div>

        {/* Name and Title */}
        <h2 className="text-2xl font-serif font-bold mb-2 border-b-0">
          Guodong Lu
        </h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Research Assistant specializing in computational materials science and machine learning
        </p>

        {/* Contact Information */}
        <div className="w-full space-y-3 text-sm">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Building2 className="h-4 w-4 flex-shrink-0" />
            <span>Hunan University</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>Changsha, Hunan, China</span>
          </div>
          
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <a 
              href="mailto:djtulgd@gmail.com"
              className="hover:text-primary transition-colors"
            >
              djtulgd@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Github className="h-4 w-4 flex-shrink-0" />
            <a 
              href="https://github.com/lgd-matlab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              lgd-matlab
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
