/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
import {v1 as uuid} from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Todoinput";
import TodoList from './components/TodoList';

export default class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false,
    };
    handleChange = e => {
        this.setState({
            item: e.target.value,
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item,
        }
        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            id: uuid(),
            editItem: false,
        });
    }
    clearList = () => {
        this.setState({
            items: [],
        })
    }
    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems,
        });
    }
    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);

        this.setState({
           items: filteredItems,
           item: selectedItem,
           id: id,
           editItem: true,
        });
    }

    render() {
      return(
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />
              <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleDelete}
              />
            </div>
          </div>
        </div>
      );
    }
}

