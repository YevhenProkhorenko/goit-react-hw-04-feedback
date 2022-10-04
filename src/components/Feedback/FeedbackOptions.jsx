import React from 'react';
import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

export default function FeedbackOptions({ options, leaveFeedback }) {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        {options.map(option => (
          <button
            className={css.button}
            key={option}
            onClick={() => leaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func.isRequired,
};
