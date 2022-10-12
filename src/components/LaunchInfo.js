export const LaunchInfo = ({ launch }) => {
  // date
  // rocket (pull from other API)
  // success/failure
  // mission details
  // mission article
  // mission youtube id
  //

  return (
    <>
      <div>
        <p>Date: {launch.date_local}</p>
      </div>

      <div>
        <p>
          Mission {launch.success ? "Success" : "Failure"}: {launch.details}
        </p>
      </div>

      <div>
        <img src={launch.links.patch.small} alt="mission patch" />
      </div>

      <div>
        <p>Rocket</p>
        <p>#</p>
      </div>

      <div>
        <a
          href={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
          target="_blank"
          rel="noreferrer"
        >
          Watch on Youtube
        </a>
      </div>

      <br></br>

      <div>
        <a href={launch.links.article} target="_blank" rel="noreferrer">
          Read Article
        </a>
      </div>
    </>
  );
};
