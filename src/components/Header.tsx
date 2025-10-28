import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex flex-wrap gap-6">
          <li><Link to="/publications" className="hover:text-blue-600">Publications</Link></li>
          <li><Link to="/talks" className="hover:text-blue-600">Talks</Link></li>
          <li><Link to="/resources" className="hover:text-blue-600">Resources</Link></li>
          <li><Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link></li>
          <li><Link to="/categories" className="hover:text-blue-600">Blog Posts</Link></li>
          <li><Link to="/cv" className="hover:text-blue-600">CV</Link></li>
        </ul>
      </nav>
    </header>
  );
}
