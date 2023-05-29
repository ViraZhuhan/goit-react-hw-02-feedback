import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section/Section';
import { Container } from './App.styled';

class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  onLeaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalValue = this.countTotalFeedback();

    return (
      <Container>
        <Section />
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={Object.keys(this.state)}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalValue}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}

export default App;