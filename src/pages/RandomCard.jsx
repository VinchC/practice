import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

function RandomCard() {
  const card = useLoaderData();
  // console.log(cards.data);
  return <Card card={card.data} />;
}

export default RandomCard;
