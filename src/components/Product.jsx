import PropTypes from "prop-types"; 
import { useNavigate } from "react-router-dom";

function Product({data}) {

  const navigate = useNavigate();
  
  return (
    <article onClick={() => navigate(`/products/${data.id}`)}>
      <h3>{data.title}</h3>
      <img src={data?.images[0]} />
    </article>
  );
}

Product.propTypes = {
  data: PropTypes.object
};

export default Product;
