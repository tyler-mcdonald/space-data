import { formatDate } from "../utils/formatDate";
import { formatTime } from "../utils/formatTime";
const placeholderImage = require("../styles/images/spaceX.png");

export const LaunchInfo = ({ launch, rocket }) => {
  const { name, date_utc, success, details, links } = launch;
  const formattedDate = formatDate(date_utc);
  const formattedTime = formatTime(date_utc);

  return (
    <section className="flex">
      <div>
        <h1>{name}</h1>
      </div>

      <div>
        <ul>
          <li>{formattedDate}</li>
          <li> {formattedTime}</li>
        </ul>
      </div>

      <div>
        {/* display patch image or placeholder */}
        {links.patch.small ? (
          <img src={links.patch.small} alt={name + " patch"} />
        ) : (
          <img
            className="placeholder"
            src={placeholderImage}
            alt="rocket launch next to spaceX building"
          />
        )}
      </div>

      <div>
        <h3>Spacecraft: {rocket.name}</h3>
      </div>

      <div>
        <p>
          Mission {success ? "Success" : "Failure"}
          {details ? `: ${details}` : ""}
        </p>
      </div>

      {/* Youtube link */}
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

      {/* Article link */}
      <div>
        {links.article ? (
          <a href={links.article} target="_blank" rel="noreferrer">
            Read Article
          </a>
        ) : null}
      </div>
    </section>
  );
};
