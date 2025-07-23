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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {projects.map((project) => (
          <div key={project.title} style={{
            flex: '1 1 250px',
            minWidth: 250,
            background: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{project.title}</h2>
            <p style={{ color: '#444', margin: '1rem 0' }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#2575fc', fontWeight: 600, textDecoration: 'none', marginTop: 'auto' }}>
              View Project ↗
            </a>
          </div>
        ))}
      </div>
    </main>
  );
} 