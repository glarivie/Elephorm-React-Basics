import React, { Component } from 'react';
import moment from 'moment';

import './Home.css';
import { tweets } from '../../constants';

import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';

class Home extends Component {
  state = {
    tweets,
  };

  publish = tweet => {
    const { tweets } = this.state;

    this.setState({
      tweets: [{
        avatar: 'http://vignette3.wikia.nocookie.net/ladygaga/images/5/5d/Twitter_egg_avatar.jpg',
        username: 'guillaume',
        fullname: 'Guillaume',
        content: tweet,
        date: moment().format('DD/MM/YYYY'),
      },
      ...tweets,
    ],
    });
  };

  render() {
    const { tweets } = this.state;

    console.log(tweets);

    return (
      <div className="homepage">
        <TweetBox publish={this.publish} />
        <div className="tweets">
          {tweets.map((tweet , index) => (
            <Tweet {...tweet} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
