import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeastList from './BeastList';

// axios.defaults.baseURL ='http://localhost:3001/beasts'
// const url = 'http://localhost:3001/beasts'

function BeastControl() {

const [beastVisibleOnPage, setBeastVisibleOnPage] = useState(false);
// const [error, setError] = useState("");
// const [loading, setLoading] = useState(true);
// const [response, setResponse] = useState(null);
const [beastDraw, setBeastDraw] = useState(null);
const [mainBeastList, setMainBeastList] = useState([]);
const [post, setPost] = useState(null);




  // componentDidMount() {
  //   axios.get('http://localhost:3001/beasts')
  //   .then(response => {
  //     console.log(response)
  //     this.setState({mainBeastList: response.data})
  //   })
  //   .catch(error => console.log(error))
  // }

  // useEffect(() => {
  //   const fetchBeast = () => {
  //     axios
  //     .get('http://localhost:3001/beasts')
  //     .then(response => setResponse(response.data))
  //     .catch(err => ErrorEvent(err))
  //     .finally(() => setLoading(false))
  //   }
  //   fetchBeast();
  // }, ['http://localhost:3001/beasts'])

  // useEffect(() => {
  //   axios
  //   .get(url)
  //   .then((response) => {
  //     setPost(response.data)
  //     console.log(response.data)
  //   })
  // }, [])

  const handleChangingSelectedBeast = (id) => {
    const beastDraw = mainBeastList.filter((beast) => beast.id === id)[0];
      setBeastDraw(beastDraw);
  };
  
  const handleClick = () => {
    if (beastDraw != null) {
      setBeastVisibleOnPage(false);
      setMainBeastList(null);
      setBeastDraw(null);
    } else {
      setBeastVisibleOnPage(!beastVisibleOnPage);
    }
  }
  
  
    let currentlyVisibleBeast = null;
    let buttonText = "Show Swamp Beasts";

    if (beastVisibleOnPage) {
      currentlyVisibleBeast = <BeastList 
      beastList={mainBeastList}
      onBeastSelection={handleChangingSelectedBeast} />
      buttonText = "Get out me swamp"
    } 
    return (
      
      <React.Fragment>
        {/* { response, error, loading } */}
        {currentlyVisibleBeast}
        
        <button onClick={handleClick}>{buttonText}</button>
      </React.Fragment>
      );
      
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

