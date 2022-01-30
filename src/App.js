import './App.css';
import Map from './Map';
import credentials from './credentials';
import React, { useState } from 'react';



const mapsURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${credentials.mapsKey}`;

function App() {
  const [lat, setLat] = useState(19.426967);
  const [lng, setLng] = useState(-99.167473);
  const [list, setList] = useState([
    { lat: parseFloat(19.426967), lng: parseFloat(-99.167473) },
    { lat: parseFloat(19.456967), lng: parseFloat(-99.167473) },
  ]);
  return (
    <div>

      <h1>eSource Capital!</h1>
      <p>Workshop Google Maps + React :)</p>

      
      
      <Map markersList={list} position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}></Map>

      
      {/* <Map
        isMarkerShown
        googleMapURL={mapsURL}
        containerElement={<div style={{ height: '350px' }} />}
        mapElement={<div style={{ height: '90%' }} />}
        loadingElement={<p>Cargando</p>}
        position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        markersList={list}
      /> */}
      <div style={{ paddingTop: '20px' }}>
        <input
          type="number"
          value={lat}
          step="0.05"
          onChange={(e) => setLat(e.target.value)}
          placeholder="latitud"
        />
        <input
          type="number"
          value={lng}
          step="0.05"
          onChange={(e) => setLng(e.target.value)}
          placeholder="longitud"
        />
        <p>
          Nuevo Marcador en {lat}, {lng}
        </p>
        <button
          onClick={(e) =>
            setList([...list, { lat: parseFloat(lat), lng: parseFloat(lng) }])
          }
        >
          Agregar Marcador
        </button>

        <p>Lista: {JSON.stringify(list, null, 2)}</p>
      </div>
    </div>
  );
}

export default App;
