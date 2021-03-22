import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const apiKey="AIzaSyDx_3VyMFNcSqs50JQID5pxkllNEwfcJEE"

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const location = {
    lat: 25.06745958518908,
    lng: 91.40719641205442
  };

//   const onLoad = marker => {
//     console.log('marker: ', marker)
//   }
  

const Direction = ({origin, destination}) => {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
            <LoadScript
                googleMapsApiKey="apiKey"
                >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={10}
                >
                    {/* <Marker
                        onLoad={onLoad}
                        position={location}
                    /> */}
                  {
                    origin !== '' && destination !== '' && <DirectionsService
                    // required
                    options={{
                      destination: destination,
                      origin: origin,
                      travelMode: 'DRIVING'
                    }}
                    // required
                    callback={res => {
                        if(res !== null){
                          setDirectionResponse(res);
                        }
                    }}
                  />
                }
                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                    
                  />
                }
                </GoogleMap>
            </LoadScript>
        
    );
}
export default React.memo(Direction)
