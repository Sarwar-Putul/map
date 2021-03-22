import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey="AIzaSyDx_3VyMFNcSqs50JQID5pxkllNEwfcJEE"

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const location = {
    lat: 25.06745958518908,
    lng: 91.40719641205442
  };

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  

const Map = () => {
    return (
            <LoadScript
                googleMapsApiKey="apiKey"
                >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={10}
                >
                    <Marker
                        onLoad={onLoad}
                        position={location}
                    />
                </GoogleMap>
            </LoadScript>
        
    );
}
export default React.memo(Map)
