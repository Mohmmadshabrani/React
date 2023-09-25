const DateComponent = () => {
  const date = new Date();

  return <div>{date.toDateString()}</div>;
};

export default DateComponent;
