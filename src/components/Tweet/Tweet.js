import React, { PropTypes } from 'react';

import './Tweet.css';
import { highlightedStr } from '../../helpers';

const Tweet = ({ username, fullname, content, avatar, date }) => (
  <div className="tweet">
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
);

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Tweet;
