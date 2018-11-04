import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AddItemForm from './components/views/AddItemForm/AddItemForm';
import Home from './components/views/Home/Home';
import SingleItem from "./components/views/SingleItem/SingleItem";

class App extends Component {
  render() {
    return (
      <div className="App">

            <Router>
                <div>
                    <header className="App-header App-menu">
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

                    <Route exact path="/" component={Home} />
                    <Route exact path="/item" component={SingleItem} />
                    <Route path="/item/add" component={AddItemForm} />
                </div>
            </Router>

      </div>
    );
  }
}

export default App;
