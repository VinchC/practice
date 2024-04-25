import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import { useTheme } from "../contexts/theme";

function Detail() {
  const product = useLoaderData();

  const { theme } = useTheme();

  return (
    <main className={`detail ${theme}`}>
      <Product data={product} />
    </main>
  );
}

export default Detail;
