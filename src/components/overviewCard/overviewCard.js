import { Link } from "react-router-dom";
import styles from "./overviewCard.module.scss";

const OverviewCard = ({ title, count, path = "/" }) => {
  return (
    <Link to={path} className={styles.overviewCard}>
      <h3 className={styles.overviewCard__title}>{title}</h3>
      <p className={styles.overviewCard__count}>{count}</p>
    </Link>
  );
};

export default OverviewCard;
