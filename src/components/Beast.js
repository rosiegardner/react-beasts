import React from 'react';

const Beast = ({beast}) =>
  <div className="tile" key={beast.id}>
    <h4>{beast.daemon}</h4>
    <p>Name: {beast.name}</p>
    <p>" {beast.desc} "</p>
    <p>Breed: {beast.breed}</p>
    <p>Strength: {beast.strength}</p>
    <p>Weapon: {beast.weapon}</p>
  </div>
  
export default Beast;