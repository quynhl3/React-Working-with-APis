import './App.css';
import News from './news/News';
import SideNews from ' ./News/SideNews';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news',
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en',
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en',
      },
    };
  }

  render() {
    return (
      <div>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
        <div>
          <SideNews news={this.state.news3} />
        </div>
      </div>
    );
  }
}

export default App;
