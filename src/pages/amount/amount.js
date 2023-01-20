import { Link, useLocation } from "react-router-dom";
import "./amount.scss";

export const Amount = () => {
    const location = useLocation()

  return (
    <>
      <h1>Amount </h1>

      <Link to={`${location.pathname}/1`}>Mbabbe</Link>
      <Link to={`${location.pathname}/2`}>Neymar</Link>
    </>
  );
};
