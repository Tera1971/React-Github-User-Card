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
      axios
      .get(res.data.followers_url)
      .then(res=>{
        console.log(res.data)
        this.setState({
          user: res.data,
          followers: res.data
        })
      })
    })
  }
  render(){
    return(
      <div className = 'first-div'>
        <h1>Github Usercard</h1>
        <Card
         userImg = {this.state.user.avatar_url}
         name = {this.state.user.name}
         username = {this.state.user.login}
         profile = {this.state.user.url}
         followers = {this.state.user.followers}
         following = {this.state.user.following}
         bio = {this.state.user.bio}
         />
         <h2>My Followers</h2>
         {this.state.followers.map(user=>{
           return
           <Card
           userImg = {user.avatar_url}
           name = {user.name}
           userName = {user.login}
           profile = {user.url}
           followers = {user.followers}
           following = {user.following}
           bio = {user.bio}
          />

          
        })
        }
      </div>
    )
  }
}

export default App;
