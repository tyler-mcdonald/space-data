export const LaunchInfo = ({ launch, rocket }) => {
  // date
  // rocket (pull from other API)
  // success/failure
  // mission details
  // mission article
  // mission youtube id
  //
  const { date_local, success, details, links } = launch;

  return (
    <>
      <div>
        <p>Date: {date_local}</p>
      </div>

      <div>
        <p>
          Mission {success ? "Success" : "Failure"}: {details}
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
        <a href={links.article} target="_blank" rel="noreferrer">
          Read Article
        </a>
      </div>
    </>
  );
};
