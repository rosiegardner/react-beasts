import React from 'react';
import Beast from './Beast';
import PropTypes from 'prop-types';

function BeastList(props) {
  // const { Beast } = props;
  return (
    <React.Fragment>
    {props.beastList.map((beast) =>
    <Beast 
      whenBeastClicked = {props.onBeastSelection }
      daemon={beast.daemon}
      name={beast.name}
      desc={beast.desc}
      breed={beast.breed}
      strength={beast.strength}
      weapon={beast.weapon}
      key={beast.id} />
    
    )}
    </React.Fragment>
  )
}

BeastList.propTypes = {
  Beast: PropTypes.array,
  onBeastSelection: PropTypes.func
}

export default BeastList;