import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../components/Card";

function CardDetails() {
  const card = useLoaderData();
  const navigate = useNavigate();
  // console.log(card);
  return (
    <>
      <main>
        <Card card={card.data.data[0]} />
        <button type="button" onClick={() => navigate("/")}>
          Back to the list
        </button>
      </main>
    </>
  );
}

export default CardDetails;
