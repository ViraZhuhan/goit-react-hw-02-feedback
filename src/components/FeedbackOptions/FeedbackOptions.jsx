import React from 'react';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(element => (
        <Button key={element} type="button" onClick={onLeaveFeedback} name={element}>
          {element}
        </Button>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;
