import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import ProgressBar from '@ramonak/react-progress-bar';

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
      return <ProgressBar completed={100} borderRadius="0px" bgcolor='#008000' />
    } else {
      return (
        <div className="App">
          {posts.map(post => {
            return (
              <div key={post.id}>
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