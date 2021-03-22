import React, { useState } from 'react';
import Direction from '../Direction/Direction';

const PlaceSearch = () => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    return (
        <div>
            <input  type="text" placeholder="From" onBlur={e=> console.log(e.target.value)}></input>
            <input  type="text" placeholder="To" onBlur={e=> setDestination(e.target.value)}></input>
            <Direction origin={origin} destination={destination}></Direction>
        </div>
    );
};

export default PlaceSearch;