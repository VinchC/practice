/* eslint-disable react/prop-types */
function Card({ card }) {
  console.log(card);
  return (
    <>
      <article>
        <p>{card.name}</p>
        <p>{card.race}</p>
        {card.card_images.map((image) => (
          <img key={image.id} src={image.image_url_small} />
        ))}
      </article>
    </>
  );
}

export default Card;
