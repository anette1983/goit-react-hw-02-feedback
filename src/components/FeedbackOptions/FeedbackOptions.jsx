// імпортувати стайлщз, проптайпс

const Feedbackoptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button type="button" onClick={onLeaveFeedback} key={option}>
        {option}
      </button>
    ))}
  </>
);

export default Feedbackoptions;



