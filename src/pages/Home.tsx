export default function Home() {
  return (
    <div>
      <h1>Welcome to Guodong Lu's Academic Portfolio</h1>
      <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
        This is the home page of your academic portfolio. Add your introduction, research interests, 
        and recent updates here.
      </p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>About Me</h2>
        <p>Add your biography and research interests here.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Recent News</h2>
        <ul style={{ marginLeft: '1.5rem' }}>
          <li>Add recent news and updates</li>
          <li>Publications, presentations, awards</li>
        </ul>
      </section>
    </div>
  );
}
