export const formatDate = (date) => {
  // "2006-03-24T22:30:00.000Z"
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  const monthName = toMonthName(month);

  // format date
  const formattedDate = `${monthName} ${day}, ${year}`;
  return formattedDate;
};
