import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
<<<<<<< HEAD
import {DISHES} from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES

    };
  }
  render() {
    return (
      <div >
        <Navbar dark color="primary"> 
        <div className="container">
          <NavbarBrand href ="/">Ristorante con Fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
=======

function App() {
  return (
    <div >
      <Navbar dark color="primary"> 
      <div className="container">
        <NavbarBrand href ="/">Ristorante con Fusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu />
    </div>
  );
>>>>>>> 1d5eb112050a9a74d863937ebc743cffce44d3c3
}




export default App;
