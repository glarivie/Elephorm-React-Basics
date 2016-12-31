import React, { Component, PropTypes } from 'react';

import './TweetBox.css';

class TweetBox extends Component {
  static propTypes = {

  };

  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div className="tweetbox">
        <textarea
          rows={3}
          value={value}
          onChange={this.handleChange}
        />
        <div className="action">
          <span className="count">{140 - value.length}</span>
          <button type="button" disabled={!value.length}>
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default TweetBox;
