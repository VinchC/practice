import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";
import { useTheme } from "../contexts/theme";

function Home() {
  const { products } = useLoaderData();

  const { theme } = useTheme();

  return (
    <main className={`home ${theme}`}>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </main>
  );
}

export default Home;
