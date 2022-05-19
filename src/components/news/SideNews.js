//using axios to fetch data
import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class SideNews extends Component {
  //create state
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

    // axios.post(url, {
    //   data: {
    //     news: {
    //       title: 'hello',
    //       description: 'balsdjklj'
    //     }
    //   }
    // })

    axios
      .get(url)
      .then((response) => {
        //update state
        this.setState({
          //responses returns with json data
          sidenews: response.data.articles,
        });
      })
      .catch((err) => this.setState({ error: true }));
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map((item) => (
        <SingleSide key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default SideNews;
