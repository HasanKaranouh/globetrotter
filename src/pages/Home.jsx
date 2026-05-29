import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '48px', color: '#0070f3', marginBottom: '20px' }}>Welcome to GlobeTrotter! 🌍</h1>
      
      <p style={{ fontSize: '19px', color: '#555', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
        Your companion for discovering new countries, learning about different regions, and building your dream travel bucket list.
      </p>
      
      <Link to="/Explore" style={{ padding: '15px 30px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,112,243,0.3)' }}>
        Start Exploring Now
      </Link>
    </div>
  );
};
export default Home;