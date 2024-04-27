/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Card({ card }) {
  const navigate = useNavigate();
  // console.log(card);
  return (
    <>
      <article>
        <p>{card.name}</p>
        <p>{card.race}</p>
        {card.card_images.map((image) => (
          <a key={image.id} onClick={() => navigate(`/card/${card.id}`)}>
            <img src={image.image_url_small} />
          </a>
        ))}
      </article>
    </>
  );
}

export default Card;
