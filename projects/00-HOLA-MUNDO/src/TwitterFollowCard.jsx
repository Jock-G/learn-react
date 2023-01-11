import { useState } from "react";

export function TwitterFolowCard({
  formatUserName = (userName) => {
    userName;
  },
  userName = "unknown",
  name,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong>{userName}</strong>
          <span className="tw-followCard-username">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside className="">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-button-text">{text}</span>
          <span className="tw-followCard-button-unfollowText">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
