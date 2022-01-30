import React from 'react';
import './Map.css';
import credentials from './credentials';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

import {
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api';

const onLoad = (marker) => {
  console.log('marker: ', marker);
};

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const libraries = ['places'];
function Map(props) {
  return (
    <div>
      <LoadScript
        libraries={libraries}
        googleMapsApiKey={credentials.mapsKey}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={(props) ? props.position : center}

          zoom={10}
        >
          {props.markersList.map((position, i) => (
            <Marker onLoad={onLoad} position={position} key={i} />
          ))}
          <></>
        </GoogleMap>
      </LoadScript>

      <div className='target'>+</div>
      <p>Coordenadas: {JSON.stringify(props.position, null, 2)}</p>
    </div>
  );
};

export default React.memo(Map)
