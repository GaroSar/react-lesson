import React from 'react';
import './App.css';

class App extends React.Component{

  state = {
    country: "Armenia",
  }



  render() {
    console.log(this.state);
    return (
      <div className="App">
        <button>country change</button>
        {
          this.state.country
        }
      </div>
    )
  }
}

export default App;
