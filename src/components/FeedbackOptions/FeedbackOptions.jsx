import React from 'react';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(elem => (
        <Button key={elem} type="button" onClick={onLeaveFeedback} name={elem}>
          {elem}
        </Button>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;
