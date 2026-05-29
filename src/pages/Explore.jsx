import { useState } from 'react';

const Explore = () => {

  const [searchTerm, setSearchTerm] = useState(''); //what I type in the search bar
  const [countryData, setCountryData] = useState(null);//store the country info in tis
  const [error, setError] = useState('');//if spelling is wrong, put error message here

  
  const handleSearch = async (e) => { //the function that calls the restcountries API
    e.preventDefault(); 
    setError('');
    setCountryData(null);

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
      if (!response.ok) {
        throw new Error('Country not found. Please check your spelling!');
      }
      const data = await response.json();
      setCountryData(data[0]); // The API returns an array; we take the closest match(the first one)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '80vh' }}>
      <h1>Explore Destinations</h1>
      <p>Discover flags, capitals, and regions from around the world.</p>
      

      <form onSubmit={handleSearch} style={{ margin: '20px 0' }}>
        
  );
};

export default Explore;