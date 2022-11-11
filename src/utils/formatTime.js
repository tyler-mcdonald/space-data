export const formatTime = (date) => {
  // "2006-03-24T22:30:00.000Z"
  const time = date.slice(11, 16);
  return time + " UTC";
};
