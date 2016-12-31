import React from 'react';

import './Home.css';
import { tweets } from '../../constants';
import { highlightedStr } from '../../helpers';

const Home = () => (
  <div className="homepage">
    {tweets.map(({ username, fullname, content, avatar, date }, index) => (
      <div className="tweet" key={index}>
        <div className="avatar">
          <img src={avatar} role="presentation" alt="avatar" />
        </div>
        <div className="data">
          <div className="infos">
            <strong className="fullname">{fullname}</strong>
            <small className="gray">@{username}</small>
            <small className="gray date">{date}</small>
          </div>
          <div className="content">
            <p>{highlightedStr(content)}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Home;
