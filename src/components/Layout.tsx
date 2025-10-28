import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1400px] mx-auto w-full">
        <Sidebar />
        
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
