import React from "React";
import axios from "axios";
import "./App.css";
import Card from "./Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      followers: [],
      following: []
    };
  }
  handleChanges = (e) => {
    this.setState({
     
      ...this.state,
      followers: e.target.value

    });
  };

  componentDidMount() {
    axios
    .get("https://api.github.com/users/Tera1971").then((res) => {
      console.log(res.data);
      axios.get(res.data.followers_url).then((res) => {
        console.log(res.data);
        this.setState({ followers: res.data.user });
      
      });
    });
  }
  componentDidUpdate(prevState, prevProps) {
    // if statements here equivalent to useEffect dependency array
    if (prevState.followers !== this.state.followers) {
      console.log("followers have changed!");
    }
  }

  fetchFollowers = () => {
    console.log("fetching users");
    axios
      .get(`https://api.github.com/users/Tera1971"${this.state.followers}/images`)
      .then((res) => {
        this.setState({ followers: res.data.message });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="first-div">
        <h1>Github Usercard</h1>
        <Card
          userImg={this.state.user.avatar_url}
          name={this.state.user.name}
          username={this.state.user.login}
          profile={this.state.user.url}
          followers={this.state.user.followers}
          following={this.state.user.following}
          bio={this.state.user.bio}
        />
        <h2>My Followers</h2>
        {this.state.followers.map((user) => {
          return (
            <Card
              userImg={user.avatar_url}
              name={user.name}
              userName={user.login}
              profile={user.url}
              followers={user.followers}
              following={user.following}
              bio={user.bio}
            />
          );
        })}
      </div>
    );
  }
}

export default App;