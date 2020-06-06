import React, { Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    uset: '',
    followers: []
    };
  }
  componentDidMount(){
    axios
    .get('https://api.github.com/users/Tera1971')
    .then(res=>{
      console.log(res.data)
    })
  }
}

export default App;
