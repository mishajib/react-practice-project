import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount = () => {
    this.getPosts();
  }

  getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      }).catch((error) => {
        console.log(error.response);
      })
  }

  render() {
    let { posts } = this.state;
    if (posts.length === 0) {
      return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    } else {
      return (
        <div className="App">
          {this.state.posts.map(post => {
            return (
              <div>
                <h1>Title: {post.title}</h1>
                <p>Body: {post.body}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }
}

export default App;