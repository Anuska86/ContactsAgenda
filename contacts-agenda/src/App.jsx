import React from "react";
import avatar from "./imgs/userDona.png";
import filledStar from "./imgs/filled-star.png";
import emptyStar from "./imgs/empty-star.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "Donna",
    lastName: "Paulsen",
    phone: "+1 (222) 847-3928",
    email: "donnapaulsen@example.com",
    isFavorite: false
  });

  let starIcon = contact.isFavorite ? filledStar : emptyStar;

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
    console.log("Toggle Favorite");
  }

  return (
    <main>
      <article className="card">
        <img
          className="avatar"
          src={avatar}
          alt="A profile picture of Dona Paulsen"
        />
        <div className="info">
          <button
            className="favorite-button"
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <img
              className="star"
              src={starIcon}
              alt={contact.isFavorite ? "Filled star icon" : "Empty star icon"}
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
