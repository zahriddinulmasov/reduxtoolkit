import { Link } from "react-router-dom";
import styles from "./overviewResults.module.scss";

const OverviewResults = ({ title, count, path="/" }) => {
  return (
    <Link to={path} className={styles.overviewResult}>
      <h1 className={styles.overviewResult__title}>{title}</h1>
      <p className={styles.overviewResult__count}>{count}</p>
    </Link>
  );
};

export default OverviewResults;
