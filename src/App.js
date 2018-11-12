import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AddItemForm from './components/views/AddItemForm/AddItemForm';
import Home from './components/views/Home/Home';
import SingleItem from "./components/views/SingleItem/SingleItem";
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
                <div>
                    <header className="App-header App-menu">
                        <img src={logo} alt={`Atlas Grzybów`} className="App-logo"/>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/item/add">Add Item</Link>
                            </li>
                            <li>
                                <Link to="/item">Mushroom</Link>
                            </li>
                        </ul>
                    </header>
                    <div className="App-container">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/item" component={SingleItem} />
                        <Route path="/item/add" component={AddItemForm} />
                    </div>
                </div>
            </Router>
            <footer className="App-footer">
                <p>Copyright 2018</p>
            </footer>
      </div>
    );
  }
}

export default App;
