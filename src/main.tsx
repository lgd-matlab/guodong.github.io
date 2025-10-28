import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Guodong Lu</h1>
      <p className="text-xl text-gray-600 mb-8">PhD Candidate - Computational Materials Science</p>
      
      <nav className="flex gap-6 mb-8 border-b pb-4">
        <a href="/publications" className="text-blue-600 hover:underline">Publications</a>
        <a href="/talks" className="text-blue-600 hover:underline">Talks</a>
        <a href="/resources" className="text-blue-600 hover:underline">Resources</a>
        <a href="/portfolio" className="text-blue-600 hover:underline">Portfolio</a>
        <a href="/cv" className="text-blue-600 hover:underline">CV</a>
      </nav>
      
      <div className="prose">
        <h2>Welcome</h2>
        <p>Welcome to my academic portfolio website.</p>
      </div>
    </div>
  </div>
);
