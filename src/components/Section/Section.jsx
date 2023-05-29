import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <div>
      {<Title>{title}</Title>}
      {children}
    </div>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
