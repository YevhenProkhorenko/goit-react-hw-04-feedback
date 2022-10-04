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

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = good => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    } else {
      const value = good;
      const percentage = (value / total) * 100;
      return Number(percentage.toFixed(0));
    }
  };

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

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(good);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[good, neutral, bad]}
          leaveFeedback={leaveFeedback}
        />
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

// export default class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   leaveFeedback = propertyName => {
//     this.setState(prevState => {
//       const value = prevState[propertyName];
//       return {
//         [propertyName]: value + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage(good) {
//     const total = this.countTotalFeedback();
//     if (!total) {
//       return 0;
//     } else {
//       const value = this.state[good];
//       const percentage = (value / total) * 100;
//       return Number(percentage.toFixed(0));
//     }
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage('good');

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             leaveFeedback={this.leaveFeedback}
//           />
//         </Section>
//         {!total ? (
//           <Notification message="There is no feedback"></Notification>
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         )}
//       </div>
//     );
//   }
// }
