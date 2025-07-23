"use client";

const projects = [
  {
    title: 'Personal Website',
    description: 'A modern portfolio website built with Next.js and TypeScript.',
    link: 'https://yourwebsite.com',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API and React.',
    link: 'https://github.com/yourusername/weather-app',
  },
  {
    title: 'Task Manager',
    description: 'A simple task management tool with authentication and CRUD features.',
    link: 'https://github.com/yourusername/task-manager',
  },
];

export default function ProjectsPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {projects.map((project) => (
          <div key={project.title} className="project-card" style={{
            flex: '1 1 250px',
            minWidth: 250,
            background: 'var(--card-bg)',
            borderRadius: '1rem',
            boxShadow: 'var(--card-shadow)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer',
            animation: 'fadeInUp 0.7s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,117,252,0.15)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'var(--card-shadow)';
          }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--primary)' }}>{project.title}</h2>
            <p style={{ color: 'var(--text-light)', margin: '1rem 0' }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', marginTop: 'auto' }}>
              View Project ↗
            </a>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 700px) {
          .project-card {
            min-width: 90vw !important;
            max-width: 100vw;
          }
        }
      `}</style>
    </main>
  );
} 