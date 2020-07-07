import React, {Component} from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';


class App extends Component {
/*
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES

    };
  }
  */
  render() {
    return (
      <BrowserRouter>
      <div >
          <Main />
      </div>
      </BrowserRouter>
    );
  }
}




export default App;
