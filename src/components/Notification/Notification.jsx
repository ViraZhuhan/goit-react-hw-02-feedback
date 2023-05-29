import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Message } from './Notification.styled';

class Notification extends Component {
  static defaultProps = {
    message: 'There is no feedback',
  };

  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  state = {
    message: this.props.message,
  };

  render() {
    const {message} = this.state

    return (
      <div>
        <Message>{message}</Message>
      </div>
    );
  }
}

export default Notification;