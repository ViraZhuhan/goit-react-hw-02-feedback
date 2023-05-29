import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Title } from './Section.styled';

class Section extends Component {
  static defaultProps = {
    title: 'Please leave feedback',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  state = {
    title: this.props.title,
  };

  render() {
    const {title} = this.state;

    return (
      <div>
        <Title>{title}</Title>
      </div>
    );
  }
}

export default Section;
