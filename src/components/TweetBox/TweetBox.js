import React, { Component, PropTypes } from 'react';

import './TweetBox.css';

class TweetBox extends Component {
  static propTypes = {
    publish: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ value });

  handleSubmit = () => {
    const { value } = this.state;
    const { publish } = this.props;

    if (value.length && value.length <= 140) {
      publish(value);

      this.setState({ value: '' });
    }
  };

  render() {
    const { value } = this.state;


    return (
      <div className="tweetbox">
        <textarea
          rows={3}
          value={value}
          onChange={this.handleChange}
          placeholder="Composez votre tweet"
        />
        <div className="action">
          <span className="count">{140 - value.length}</span>
          <button
            type="button"
            disabled={!value.length || value.length > 140}
            onClick={this.handleSubmit}
          >
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default TweetBox;
