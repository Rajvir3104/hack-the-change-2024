// src/pages/maps.js
import React from 'react';
import GoogleMapComponent from '../../components/googlemaps/GoogleMap.js';

const Maps = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Explore Nearby Places</h1>
      <GoogleMapComponent />
    </div>
  );
};

export default Maps;
