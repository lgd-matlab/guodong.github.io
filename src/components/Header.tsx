import { Link } from 'react-router-dom';

export default function Header() {
  const navLinks = [
    { title: 'Publications', url: '/publications' },
    { title: 'Talks', url: '/talks' },
    { title: 'Resources', url: '/resources' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Blog Posts', url: '/categories' },
    { title: 'CV', url: '/cv' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: '#fff',
      borderBottom: '1px solid #e0e0e0',
      padding: '1rem 2rem',
      zIndex: 1000
    }}>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', marginRight: 'auto' }}>
          Guodong Lu
        </Link>
        {navLinks.map((link) => (
          <Link key={link.url} to={link.url} style={{ padding: '0.5rem' }}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
