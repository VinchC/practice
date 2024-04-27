import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import Card from "../components/Card";

function CardDetails() {
  const card = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(card);
  return (
    <>
      <main>
        <Card card={card.data.data[0]} />
        {location.pathname !== "/" && (
          <section>
            <p>Description</p>
            <p>Attaque</p>
            <p>Défense</p>
          </section>
        )}
        <button type="button" onClick={() => navigate("/")}>
          Back to the list
        </button>
      </main>
    </>
  );
}

export default CardDetails;
