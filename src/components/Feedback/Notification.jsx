import React from 'react';
import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

export default function Notification({ message }) {
  return <div className={css.notification}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
