import React from 'react';

import './Home.css';
import { tweets } from '../../constants';

import Tweet from '../../components/Tweet';

const Home = () => (
  <div className="homepage">
    <div className="tweets">
      {tweets.map((tweet , index) => (
        <Tweet {...tweet} key={index} />
      ))}
    </div>
  </div>
);

export default Home;
