import React from 'react';

const Beast = ({beast}) =>
  <div className="tile" key={beast.id}>
    <h4>{beast.daemon}</h4>
    <p>Breed: {beast.breed}</p>
    <p>Name: {beast.name}</p>
    <p>{beast.desc}</p>
  </div>
  
export default Beast;