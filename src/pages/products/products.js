import { useLocation, Link } from "react-router-dom";
import "./products.scss";

export const Products = () => {
  const location = useLocation();

  return (
    <>
      <h1>Products</h1>

      <Link to={`${location.pathname}/1`}>Telefon</Link>

      <Link to={`${location.pathname}/2`}>Televizor</Link>
    </>
  );
};
