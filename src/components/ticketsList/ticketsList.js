import { Link } from "react-router-dom"
import styles from "./ticketsList.module.scss"

const TicketsList = ({ title, count, path="/" }) => {
    return(
        <Link to={path} className={styles.list}>
            <h3 className={styles.list__title}>{title}</h3>
            <p className={styles.list__count}>{count}</p>
        </Link>
    )
}

export default TicketsList