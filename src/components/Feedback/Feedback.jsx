// import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './FeedbackStatistics';
import Notification from './Notification';
import { useState } from 'react';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = propertyName => {
    switch (propertyName) {
      case 'good':
        setGood(prev => prev + 1);
        return;
      case 'neutral':
        setNeutral(prev => prev + 1);
        return;
      case 'bad':
        setBad(prev => prev + 1);
        return;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    } else {
      const percentage = (good / total) * 100;
      return Number(percentage.toFixed(0));
    }
  };

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];
  const positivePercentage = countPositiveFeedbackPercentage(good);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} leaveFeedback={leaveFeedback} />
      </Section>
      {!total ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}
