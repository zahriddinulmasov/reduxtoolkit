import { Link } from "react-router-dom";
import styles from "./footerRight.module.scss";

const FooterRight = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasks__title_top}>
        <div className={styles.tasks__title_wrapper}>
          <h3 className={styles.tasks__title}>Tasks</h3>
          <Link className={styles.tasks__link} href="#">
            View all
          </Link>
        </div>
        <p className={styles.tasks__decs}>Today</p>
      </div>

      <ul className={styles.tasks__list}>
        <li className={styles.tasks__item}>
          <p className={styles.tasks__item_title}>Create new task</p>
          <span className={styles.tasks__item_span}>+</span>
        </li>

        <li className={styles.tasks__item1}>
          <input className={styles.tasks__item_input} type="checkbox" />
          <div className={styles.tasks__item_wrapper}>
            <h5 className={styles.tasks__item_title1}>Finish ticket update</h5>
            <button
              className={styles.tasks__item_btn}
              style={{ background: "#FEC400" }}
            >
              URGENT
            </button>
          </div>
        </li>

        <li className={styles.tasks__item1}>
          <input className={styles.tasks__item_input} type="checkbox" />
          <div className={styles.tasks__item_wrapper}>
            <h5 className={styles.tasks__item_title1}>
              Create new ticket example
            </h5>
            <button
              className={styles.tasks__item_btn}
              style={{ background: "#29CC97" }}
            >
              NEW
            </button>
          </div>
        </li>

        <li className={styles.tasks__item1}>
          <input
            className={styles.tasks__item_input}
            type="checkbox"
            defaultChecked
          />
          <div className={styles.tasks__item_wrapper}>
            <h5 className={styles.tasks__item_title1}>Update ticket report</h5>
            <button
              className={styles.tasks__item_btn}
              style={{ background: "#F0F1F7", color: "#9FA2B4" }}
            >
              DEFAULT
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default FooterRight;
