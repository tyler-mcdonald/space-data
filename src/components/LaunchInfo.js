export const LaunchInfo = ({ launch, rocket }) => {
  // date
  // rocket (pull from other API)
  // success/failure
  // mission details
  // mission article
  // mission youtube id
  //
  const { date_utc, success, details, links } = launch;

  const formatDate = (date) => {
    // "2006-03-24T22:30:00.000Z"
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const time = date.slice(11, 16);

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

  return (
    <section className="flex">
      <div>
        <p>Launch: {formatDate(date_utc)}</p>
        <p></p>
      </div>

      <div>
        <p>
          Mission {success ? "Success" : "Failure"}
          {details ? `: ${details}` : ""}
        </p>
      </div>

      <div>
        <img src={links.patch.small} alt="mission patch" />
      </div>

      <div>
        <p>{rocket.name}</p>
      </div>

      <div>
        <a
          href={`https://www.youtube.com/watch?v=${links.youtube_id}`}
          target="_blank"
          rel="noreferrer"
        >
          Watch on Youtube
        </a>
      </div>

      <br></br>

      <div>
        {/* check if article exists */}
        {links.article ? (
          <a href={links.article} target="_blank" rel="noreferrer">
            Read Article
          </a>
        ) : null}
      </div>
    </section>
  );
};
