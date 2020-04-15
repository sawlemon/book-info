import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();

    this.state = {
      books : [
      ],
      searchField : '',
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(books => this.setState({books:books}))

  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  };

  render(){
    const {books,searchField } = this.state;
    const filteredBooks = books.filter(book => book.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
      <h1>Book-Info</h1>
      <SearchBox
        placeholder="bookname" 
        handleChange={this.handleChange} 
      />
        
      <CardList books={filteredBooks}></CardList>
       
    </div>
    );
  }
}

export default App;
