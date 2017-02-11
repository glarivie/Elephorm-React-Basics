import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import './Tweet.css';
import { highlightedStr } from '../../helpers';

class Tweet extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };

  state = {
    isFocus: false,
  };

  handleFocus = ({ type }) => this.setState({
    isFocus: type === 'mouseenter',
  });

  render() {
    const { username, fullname, content, avatar, date, index, remove } = this.props;
    const { isFocus } = this.state;

    return (
      <div className="tweet">
        <div className="avatar">
          <img src={avatar} role="presentation" alt="avatar" />
        </div>
        <div className="data">
          <div className="infos">
            <strong className="fullname">{fullname}</strong>
            <small className="gray">@{username}</small>
            <small className="gray date">{date}</small>
            {username === 'guillaume' && (
              <FontAwesome
                name={isFocus ? 'trash' : 'trash-o'}
                className="gray trash"
                onClick={() => remove(index)}
                onMouseEnter={this.handleFocus}
                onMouseLeave={this.handleFocus}
              />
            )}
          </div>
          <div className="content">
            <p>{highlightedStr(content)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
