import { Link } from "react-router-dom";
import TicketsList from "../../components/ticketsList/ticketsList";
import styles from "./footerLeft.module.scss";

function footerLeft() {
  return (
    <div className={styles.footerLeft}>
      <div className={styles.footerLeft__t}>
        <div className={styles.footerLeft__title_wrapper}>
          <h2 className={styles.footerLeft__title}>Unresolved tickets</h2>
          <Link className={styles.footerLeft__link} href="/">
            View details
          </Link>
        </div>
        <div className={styles.footerLeft__title_bottom}>
          <span>Group:</span> <b>Support</b>
        </div>
      </div>

      <TicketsList title="Waiting on Feature Request" count="4238" path="/ticket/1"/>
      <TicketsList title="Awaiting Customer Response" count="1005" path="/ticket/2"/>
      <TicketsList title="Awaiting Developer Fix" count="914" path="/ticket/3"/>
      <TicketsList title="Pending" count="281" path="/ticket/4"/>
    </div>
  );
}

export default footerLeft;
