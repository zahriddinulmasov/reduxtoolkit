import styles from "./header.module.scss";

import { useSelector } from "react-redux";

import search from "../../assets/images/search.png";
import newL from "../../assets/images/new.png";
import man from "../../assets/images/man.png";

const Header = () => {
  const title = useSelector(state => state.headerTitle.titleState)

  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
      <div className={styles.header__right}>
        <img
          style={{ cursor: "pointer" }}
          src={search}
          alt="logo_search"
          width={16}
          height={16}
        />
        <img
          style={{ margin: "0 32px  0 24px", cursor: "pointer" }}
          src={newL}
          alt="logo_new"
          width={16}
          height={16}
        />
        <h3 className={styles.header__name}>Jones Ferdinand</h3>
        <img
          style={{ cursor: "pointer" }}
          src={man}
          alt="logo__man"
          width={44}
          height={44}
        />
      </div>
    </div>
  );
};

export default Header;
