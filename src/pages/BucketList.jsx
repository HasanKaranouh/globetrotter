import { useState, useEffect } from 'react';

const BucketList = () => {
  const [savedCountries, setSavedCountries] = useState([]) ;


  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('bucketList')) || [];
    setSavedCountries(storedList);
  }, []);
  const handleRemove = (countryName) => {
    const updatedList = savedCountries.filter(country => country.name.common !== countryName);
    setSavedCountries(updatedList);
    localStorage.setItem('bucketList', JSON.stringify(updatedList));
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '80vh' }}>
      <h1>My Bucket List</h1>
      <p>Your dream destinations saved for the future.</p>

      {savedCountries.length === 0 ?   (
        <p style={{ marginTop: '30px', fontStyle: 'italic', color: '#666' }}>
          Your bucket list is empty. Go to the Explore page to add some!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          
          {savedCountries.map((country, index) => (
            <div key={index} style={{ border: '1px solid #eaeaea', padding: '20px', width: '250px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{country.name.common}</h3>
              <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '100%', borderRadius: '4px', marginBottom: '10px', border: '1px solid #eee' }} />
              <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
              
              <button onClick={() => handleRemove(country.name.common)}
                style={{ marginTop: '15px', padding: '8px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BucketList;