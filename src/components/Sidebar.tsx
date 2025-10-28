import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sticky top-24">
      <div className="text-center mb-6">
        <Link to="/">
          <img 
            src="/images/profile.png" 
            alt="Profile" 
            className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
          />
        </Link>
        <h1 className="text-2xl font-bold mb-2">Guodong Lu</h1>
        <p className="text-gray-600">PhD Candidate</p>
      </div>
    </div>
  );
}
