import React, { Component } from 'react';
import axios from 'axios';


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

  render () {
    return (
      <div>
        {this.state.list.map((beast) => {
          return(
            <div className="tile" key ={beast.id} >
              <h4>{beast.daemon}</h4>
              <p>Breed: {beast.breed}</p>
              <p>Name: {beast.name}</p>
              <p>{beast.desc}</p>
            </div>
          )
        })}
      </div>
    );
  }
}




export default List;
