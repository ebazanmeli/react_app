import React from 'react';
import './App.css';
import Sites from './Sites';

class App extends React.Component{

  state = {
    sites: []
  }

  //cuando el componenete se haya cargado
  componentDidMount() {
    //es un get
    fetch("https://api.mercadolibre.com/sites/")
        .then(res => res.json())
        .then((data) => {
          this.setState({
            sites: data
          })
        })
        .catch(console.log)
  }

  render() {
    return (
        <Sites sites={this.state.sites} />
    );
  }
}

export default App;
