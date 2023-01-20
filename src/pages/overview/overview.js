import styles from "./overview.module.scss";

import { useDispatch } from "react-redux";
import { headerTitleActions } from "../../store/commonTitle";
import { useEffect } from "react";

import OverviewCard from "../../components/overviewCard";
import Results from "../../container/results";
import FooterLeft from "../../container/footerLeft";
import FooterRight from "../../container/footerRight/footerRight";

const Overview = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerTitleActions.changeHeaderTitle("Overview"));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className={styles.overview__cards_wrapper}>
        <OverviewCard title="Unresolved" count="60" path="/statistics/1" />
        <OverviewCard title="Overdue" count="16" path="/statistics/2" />
        <OverviewCard title="Oven" count="43" path="/statistics/3" />
        <OverviewCard title="On hold" count="64" path="/statistics/4" />
      </div>

      <Results />
      <div className={styles.overview_bottom}>
        <FooterLeft />
        <FooterRight />
      </div>
    </div>
  );
};

export default Overview;
