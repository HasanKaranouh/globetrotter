import { useState } from 'react';

const Explore = () => {

  const [searchTerm, setSearchTerm] = useState('') ; //what I type in the search bar
  const [countryData, setCountryData] = useState(null);//store the country info in tis
  const [error, setError] = useState('');//if spelling is wrong, put error message here

  
  const handleSearch = async (e) => { //the function that calls the restcountries API
    e.preventDefault(); 
    setError('');
    setCountryData(null) ;

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
      if (!response.ok) {
        throw new Error('Country not found. Please check your spelling!');}
      const data = await response.json();
      setCountryData(data[0]) ; // The API returns an array, we take the closest match (the first one )
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSaveToBucketList = () => {
    const existingList = JSON.parse(localStorage.getItem('bucketList')) || [];
    const isAlreadySaved = existingList.some(country => country.name.common === countryData.name.common);

    if (isAlreadySaved) {
      alert(`${countryData.name.common} is already in your Bucket List!`);
    } else {
      existingList.push(countryData);
      localStorage.setItem('bucketList', JSON.stringify(existingList));
      alert(`${countryData.name.common} has been added to your Bucket List! ✈️`);
    }
  };



  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '80vh' }}>
      <h1>Explore Destinations</h1>
      <p>Discover flags, capitals, and regions from around the world.</p>
      

      <form onSubmit={handleSearch} style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          placeholder="Search for a country (e.g., Italy, Japan)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          style={{ padding: '12px', width: '280px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#0070f3', color: 'white', cursor: 'pointer' }}>
          Search
        </button>
      </form>


      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}


      {countryData && (
        <div style={{ border: '1px solid #eaeaea', padding: '30px', display: 'inline-block', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', backgroundColor: '#fff', marginTop: '20px' }}>
          <h2 style={{ margin: '0 0 15px 0' }}>{countryData.name.common}</h2>
          <img src={countryData.flags.png} alt={`Flag of ${countryData.name.common}`} style={{ width: '220px', borderRadius: '4px', marginBottom: '15px' }} />
          <p style={{ margin: '8px 0' }}><strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
          <p style={{ margin: '8px 0' }}><strong>Region:</strong> {countryData.region} ({countryData.subregion})</p>
          <p style={{ margin: '8px 0' }}><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
        <button 
            onClick={handleSaveToBucketList} 
            style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
            + Save to Bucket List
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;