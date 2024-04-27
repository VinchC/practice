/* eslint-disable react/prop-types */
import { useNavigate, useLocation } from "react-router-dom";

function Card({ card }) {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(card);
  return (
    <>
      <article onClick={() => navigate(`/card/${card.id}`)}>
        <p>{card.name}</p>
        <p>{card.race}</p>
        {card.card_images.map((image) => (
          <img key={card.id} src={image.image_url_small} />
        ))}
        {location.pathname !== "/" && (
          <section>
            <p>Description : {card.desc}</p>
            <p>Attaque : {card.atk}</p>
            <p>Défense : {card.def}</p>
          </section>
        )}
      </article>
    </>
  );
}

export default Card;
