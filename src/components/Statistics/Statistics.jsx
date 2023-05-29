import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import { StatisticsList, StatisticsTitle, Rezult } from './Statistics.styled';

const Statistics = ({good, neutral, bad, total, positivePercentage} ) => {
    return (
      <div>
        <StatisticsTitle>Statistics</StatisticsTitle>
        {total !== 0 ? (
          <>
            <StatisticsList>
              <Rezult>Good: {good}</Rezult>
              <Rezult>Neutral: {neutral}</Rezult>
              <Rezult>Bad: {bad}</Rezult>
              <Rezult>Total: {total}</Rezult>
              <Rezult>
                Positive feedback: {positivePercentage}%
              </Rezult>
            </StatisticsList>
          </>
        ) : (
          <Notification />
        )}
      </div>
    );
  }

  Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

export default Statistics;
