import React from 'react';
import PropTypes from 'prop-types';

function Beast(props) {
  return (
    <React.Fragment>
      <div className="tile" onClick = {() => props.whenBeastClicked(props.id)}>
       <h4>{props.daemon}</h4>
       <p>Name: {props.name}</p>
       {/* <p>"{props.desc}"</p> */}
       <p>Breed: {props.breed}</p>
       <p>Strength: {props.strength}</p>
       <p>Weapon: {props.weapon}</p>
      </div>
    </React.Fragment>
  );
}

Beast.propTypes = {
  daemon: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  breed: PropTypes.string,
  strength: PropTypes.number,
  weapon: PropTypes.string,
  whenBeastClicked: PropTypes.func
};

export default Beast;

// function Beast(props) {
//   // const { Beast } = props;
//   return (
//     <React.Fragment>
//     {props.beastList.map(({beast}) =>
//     <Beast 
//       daemon={beast.daemon}
//       name={beast.name}
//       desc={beast.desc}
//       breed={beast.breed}
//       strength={beast.strength}
//       weapon={beast.weapon}
//       key={beast.id} />
    
//     )}
//     </React.Fragment>
//   )
// }

// Beast.propTypes = {
//   Beast: PropTypes.array
// }

// export default Beast;


// const Beast = ({beast}) =>
//   <div className="tile" key={beast.id}>
//     <h4>{beast.daemon}</h4>
//     <p>Name: {beast.name}</p>
//     <p>"{beast.desc}"</p>
//     <p>Breed: {beast.breed}</p>
//     <p>Strength: {beast.strength}</p>
//     <p>Weapon: {beast.weapon}</p>
//   </div>
  