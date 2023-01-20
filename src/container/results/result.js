import OverviewResults from "../../components/overviewResults/overviewResults";
import styles from "./result.module.scss";

const Results = () => {
  return (
    <div className={styles.results}>
      <div className={styles.results__left_wrapper}>
        <h1 className={styles.results__left_title}>Today’s trends</h1>
        <div className={styles.results__left_data_wrapper}>
          <data className={styles.results__left_data}>
            as of 25 May 2019, 09:41 PM
          </data>

          <div className={styles.results__left_days_wrapper}>
            <span className={styles.results__left_span1}></span>
            <p
              className={styles.results__left_days}
              style={{ margin: "0 32px 0 8px" }}
            >
              Today
            </p>
            <span className={styles.results__left_span2}></span>
            <p
              className={styles.results__left_days}
              style={{ marginLeft: "8px" }}
            >
              Yesterday
            </p>
          </div>
        </div>
      </div>

      <div className={styles.results__rigth}>
        <OverviewResults title="Resolved" count="449" path="/rating/1" />
        <OverviewResults title="Received" count="426" path="/rating/2" />
        <OverviewResults title="Average first response time" count="33 m" path="/rating/3" />
        <OverviewResults title="Average response time" count="3h 8m" path="/rating/4" />
        <OverviewResults title="Resolution within SLA" count="94%" path="/rating/5" />
      </div>
    </div>
  );
};
export default Results;
