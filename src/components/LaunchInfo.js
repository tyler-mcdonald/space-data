import { formatDate } from "../utils/formatDate";
import { formatTime } from "../utils/formatTime";

export const LaunchInfo = ({ launch, rocket }) => {
  const { date_utc, success, details, links } = launch;
  const formattedDate = formatDate(date_utc);
  const formattedTime = formatTime(date_utc);

  return (
    <section className="flex">
      <div>
        <ul>
          <li>Launch: {formattedDate}</li>
          <li> {formattedTime}</li>
        </ul>
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
