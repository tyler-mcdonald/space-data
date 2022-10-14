import { formatDate } from "../utils/formatDate";

export const LaunchInfo = ({ launch, rocket }) => {
  const { date_utc, success, details, links } = launch;
  const formattedDate = formatDate(date_utc);

  return (
    <section className="flex">
      <div>
        <p>Launch: {formattedDate}</p>
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
