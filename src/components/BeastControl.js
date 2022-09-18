import React from 'react';
import axios from 'axios';
import BeastList from './BeastList';


class BeastControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beastVisibleOnPage: false,
      mainBeastList: [],
      beastDraw: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/beasts')
    .then(response => {
      console.log(response)
      this.setState({mainBeastList: response.data})
    })
    .catch(error => console.log(error))
  }

  handleChangingSelectedBeast = (id) => {
    const beastDraw = this.state.mainBeastList.filter(
      (beast) => beast.id === id
    )[0];
    this.setState({ beastDraw: beastDraw });
  };
  
  handleClick = () => {
    this.setState(prevState => ({
      beastVisibleOnPage: !prevState.beastVisibleOnPage
    }));
  }
  
  render () {
    let currentlyVisibleBeast = null;
    let buttonText = "Show Beast";
    if (this.state.beastVisibleOnPage) {
      currentlyVisibleBeast = <BeastList 
      beastList={this.state.mainBeastList}
      onBeastSelection={this.handleChangingSelectedBeast} />
      buttonText = "return Home"
    } 
    return (
      <React.Fragment>
        {currentlyVisibleBeast}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
      );
    }
  }
  
  export default BeastControl;

  //   <div>
  //   {this.state.beastList.map((beast) => {
  //     return(
  //       <Beast beast={beast} key={beast.id} />
  //       )
  //     })}
  //   <button className='playCard' >
  //     HIT ME!
  //   </button>
  // </div>
  
// draw card -> one at a time -> randomly 
// handleDrawClick = () => {
//   {this.state.list.map((beast, i) => {
//     <div>
//       {beast}
//       onClick={() => this.setstate({ expanded: i })}
//       {this.state.expanded === i && (
//         <Beast beast={beast} key={beast.id} />
//       )}
//       </div>
//   })}
// }


//   render () {
//     return (
//       <div>
//         {this.state.beasts.map((beast) => {
//           return (
//           <Beast beast={beast} key={beast.id} />
//           )
//         })}
//       </div>
//     );
//   }
// }
/* {this.state.list.map((beast, i) => {
  <div>
    {beast.name}
    <button className='playCard' onClick={() => this.setState({ expanded: i })}>
    HIT ME!
    </button>
    {this.state.expanded === i && (
      <Beast key={beast.name} beast={beast} />
    )}
    </div>
})} */
/* <button className='playCard' onClick={this.handleDrawClick} >
  HIT ME!
</button> */

// const BeastInfo = ({ beast }) => {
  //   return (
    //     <ul>
    //       {Object.entries(beast).map(([key, value]) => (
      //         <li key={key}>{ `${key}: ${value}` }</li>
      //       ))}
      //     </ul>
      //   );
// };




// render () {
//   return (
//     <div>
//       {this.state.list.map((beast) => {
//         return(
//           <Beast beast={beast} key={beast.id} />
//         )
//       })}
//       <button className='playCard' onClick={this.handleDrawClick} >
//         90218!
//       </button>
//     </div>
//   );
// }
// }