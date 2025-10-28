export default function Sidebar() {
  return (
    <aside style={{
      width: '250px',
      padding: '2rem 1rem',
      borderRight: '1px solid #e0e0e0',
      position: 'sticky',
      top: '60px',
      height: 'calc(100vh - 60px)',
      overflowY: 'auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <img 
          src="/images/profile.png" 
          alt="Guodong Lu" 
          style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            border: '1px solid #e0e0e0',
            objectFit: 'cover'
          }} 
        />
        <h3 style={{ marginTop: '1rem' }}>Guodong Lu</h3>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>PhD Student</p>
      </div>
      
      <div style={{ fontSize: '0.9rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>📍 Location</p>
        <p style={{ marginBottom: '0.5rem' }}>🏛️ Institution</p>
        <p style={{ marginBottom: '0.5rem' }}>📧 Email</p>
      </div>
    </aside>
  );
}
