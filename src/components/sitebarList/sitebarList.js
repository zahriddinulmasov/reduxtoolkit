import styles from "./sitebarList.module.scss";

const SitebarList = ({children}) => {
  return (
    <div className={styles.sitebarList}>
      {children}
    </div>
  );
};

export default SitebarList;
