export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#111111',
      color: '#eeeeee',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace',
      padding: '20px'
    }}>
      
      <h1 style={{ fontSize: '3rem', margin: '0' }}>
        Gustavo Katsuo
      </h1>
      
      <p style={{ fontSize: '1.2rem', color: '#888888', marginTop: '10px' }}>
        Desenvolvedor & Entusiasta de Tecnologia
      </p>

      <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        <a href="https://github.com/gustavokatsuo" target="_blank" style={{
          color: '#00ffcc',
          textDecoration: 'none',
          border: '1px solid #00ffcc',
          padding: '10px 20px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          GitHub
        </a>
        
        <a href="https://www.linkedin.com/in/gustavokatsuo" target="_blank" style={{
          color: '#00ffcc',
          textDecoration: 'none',
          border: '1px solid #00ffcc',
          padding: '10px 20px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          LinkedIn
        </a>
      </div>

    </main>
  );
}