import React, { Component } from 'react';
import axios from 'axios';
import Beast from './Beast';


class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/beasts')
    .then(response => {
      console.log(response)
      this.setState({list: response.data})
    })
    .catch(error => console.log(error))
  }

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

  render () {
    return (
      <div>
        {this.state.beasts.map((beast) => {
          return (
          <Beast beast={beast} key={beast.id} />
          )
        })}
      </div>
    );
  }
}

export default List;

{/* {this.state.list.map((beast, i) => {
  <div>
    {beast.name}
    <button className='playCard' onClick={() => this.setState({ expanded: i })}>
    HIT ME!
    </button>
    {this.state.expanded === i && (
      <Beast key={beast.name} beast={beast} />
    )}
    </div>
})} */}
{/* <button className='playCard' onClick={this.handleDrawClick} >
  HIT ME!
</button> */}

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