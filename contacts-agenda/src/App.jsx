import React from "react";
import avatar from "./imgs/userDona.png";
import Star from "./components/Star";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "Donna",
    lastName: "Paulsen",
    phone: "+1 (222) 847-3928",
    email: "donnapaulsen@example.com",
    isFavorite: false,
  });

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
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
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
