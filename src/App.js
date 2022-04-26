import axios from 'axios';
import React from 'react'

class App extends React.Component {

  //state for storing data
  state = { advice: ' ' };

  //life cycle method that runs when the component is mounted
  componentDidMount(){
    //since we are calling axios twice, we create a method
    this.fetchAdvice();
  }

  //function in a class is a method
  //method is a function that belong to a class
  fetchAdvice = () => {
    //https request to get data from a route
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip
      //set the state of the program
      this.setState({advice})
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  //we want to display the the data in this section
  //to provide access to the data we add it to a state
  render() {

    const { advice } = this.state

    return (
      <div className='app'>
        <div className='card'> 
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={this.fetchAdvice}>
              <span>GIVE ME ADVICE!</span>
            </button>
        </div>
      </div>
    )
  }
}


export default App;
