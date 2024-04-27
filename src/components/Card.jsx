/* eslint-disable react/prop-types */
function Card({ card }) {
  // console.log(card);
  return (
    <>
      <article>
        <p>{card.name}</p>
        <p>{card.race}</p>
        {card.card_images.map((image) => (
          <a key={image.id} href={`/card/${card.id}`}>
            <img src={image.image_url_small} />
          </a>
        ))}
      </article>
    </>
  );
}

export default Card;
