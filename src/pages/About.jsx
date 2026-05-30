const About = () => {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', minHeight: '80vh', color: '#333' }}>

      <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '10px', color: '#111' }}>
        About GlobeTrotter
      </h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '50px' }}>
        Your passport to the world, built with React.
      </p>

      <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8', fontSize: '18px' }}>
        <p style={{ marginBottom: '40px', textAlign: 'center', }}>
          GlobeTrotter is a modern web application designed to help you explore dynamic routing, API integration, and browser storage in a seamless, refresh-free environment.
        </p>
        <h3 style={{ fontSize: '24px', color: '#0070f3', marginBottom: '20px', borderBottom: '2px solid #eaeaea', paddingBottom: '10px' }}>
          Features:
        </h3>
  
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '20px' }}>
            <strong>React Router:</strong> Smooth page navigation.
          </li>
          <li style={{ marginBottom: '20px' }}>
            <strong>REST API:</strong> Live global data from the REST Countries API.
          </li>
          <li style={{ marginBottom: '20px' }}>
            <strong>Local Storage:</strong> Persistent user data saving for the Bucket List feature.
          </li>
        </ul>
        <div style={{ marginTop: '60px', textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #eaeaea' }}>
          <p style={{ fontSize: '14px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', margin: '0' }}>
            Designed & Developed by
          </p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', margin: '10px 0 0 0' }}>
            Hasan Karanouh
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;