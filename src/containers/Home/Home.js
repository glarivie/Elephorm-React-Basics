import React from 'react';

import './Home.css';
import { tweets } from '../../constants';

import Tweet from '../../components/Tweet';

const Home = () => (
  <div className="homepage">
    {tweets.map((tweet , index) => (
      <Tweet {...tweet} key={index} />
    ))}
  </div>
);

export default Home;
