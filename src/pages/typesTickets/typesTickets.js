import { Link, useLocation } from "react-router-dom";
import "./typesTickets.scss";

export const TypesTickets = () => {
    const location = useLocation()
  return (
    <>
      <h1>TypesTickets</h1>

      <Link to={`${location.pathname}/1`}>Yukli</Link>
      <Link to={`${location.pathname}/2`}>Yuksiz</Link>
    </>
  );
};
