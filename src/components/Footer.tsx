export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-border bg-card mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Guodong Lu. All rights reserved.</p>
          <p className="mt-1">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
