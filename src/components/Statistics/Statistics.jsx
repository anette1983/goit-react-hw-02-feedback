// props add and styles

import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <div>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>
            total: <span>{total}</span>
          </p>
          <p>
            Positive feedback: <span>{positivePercentage}</span>%
          </p>
        </div>
      ) : (
        // <Notification message="There is no feedback"></Notification>
        <div>
          <Notification message="There is no feedback"/>
        </div>
      )}
    </div>
  );
};

export default Statistics;
