import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {
  //create state
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    //news source is tesla => q=tesla
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

    //fetch - given a url => if a response is given then do..
    fetch(url)
      .then((response) => {
        //need to return response to do anything
        return response.json();
      })
      .then((data) => {
        //data.articles returns an arr of articles
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => this.setState({ error: true }));
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewSingle key={item.id} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default News;
