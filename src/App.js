import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      books : [
      ]
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({books:users}))

  }
  render(){
    return(
      <div className="App">
        {this.state.books.map(book => (
        <h1 key={book.id}> {book.name} </h1>)) }
    </div>
    );
  }
}

export default App;
