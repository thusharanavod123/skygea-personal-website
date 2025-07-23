import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem' }}>
      <div style={{
        width: 140,
        height: 140,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        maxWidth: '80vw',
      }}>
        <span style={{ color: '#fff', fontSize: 48, fontWeight: 700 }}>👤</span>
      </div>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        margin: 0,
        background: 'linear-gradient(90deg, var(--secondary), var(--primary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'fadeIn 1.2s',
      }}>
        Your Name
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginTop: '1rem', textAlign: 'center', maxWidth: 500, animation: 'fadeIn 2s' }}>
        Welcome to my portfolio! I am a passionate developer eager to build amazing web experiences. Explore my projects and get in touch!
      </p>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
