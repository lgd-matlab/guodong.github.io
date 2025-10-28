export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      borderTop: '1px solid #e0e0e0',
      padding: '2rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#666',
      marginTop: 'auto'
    }}>
      <p>
        © {currentYear} Guodong Lu, Powered by React
      </p>
    </footer>
  );
}
