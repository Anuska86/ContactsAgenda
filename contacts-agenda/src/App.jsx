import React from "react"
import avatar from "./imgs/user.png"
import starFilled from "./imgs/star-filled.png"
import starEmpty from "./imgs/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Donna",
        lastName: "Paulsen",
        phone: "+1 (222) 847-3928",
        email: "donnapaulsen@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
  

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "Filled star icon" : "Empty star icon"}
                            className="favorite"
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
    )
}
