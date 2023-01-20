import { Link, useLocation, useParams } from "react-router-dom";
// import styles from "./ticketsList.module.scss";

const TicketsList = () => {
  const params = useParams();
  const location = useLocation();
  return (
    <div>
      <h1>TicketsList {params.id}</h1>

      <Link to={`${location.pathname}/types`}>Biznes klass</Link>

      <Link to={`${location.pathname}/types`}>Ekanom klass</Link>
    </div>
  );
};

export default TicketsList;
