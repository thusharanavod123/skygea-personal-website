"use client";

export default function NavBar() {
  const linkStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    transition: 'color 0.2s',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    display: 'inline-block',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
      <nav style={{
        display: 'flex',
        gap: '2rem',
        padding: '1rem 2rem',
        background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
        borderRadius: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        alignItems: 'center',
      }}>
        {['Home', 'About', 'Projects', 'Contact'].map((label, idx) => {
          const href =
            label === 'Home'
              ? '/'
              : `/${label.toLowerCase()}`;
          return (
            <a
              key={label}
              href={href}
              style={linkStyle}
              onMouseOver={e => (e.currentTarget.style.color = '#ffd700')}
              onMouseOut={e => (e.currentTarget.style.color = '#fff')}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </div>
  );
} 