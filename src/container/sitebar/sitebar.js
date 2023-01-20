import styles from "./sitebar.module.scss";
import SitebarList from "../../components/sitebarList";
import SitebarItem from "../../components/sitebarItem";

import logoSite from "../../assets/images/logoSite.png";
import {
  OverviewIcon,
  TicketsIcon,
  IdeasIcon,
  ContactsIcon,
  AgentsIcon,
  ArticlesIcon,
  SettingsIcon,
  SubscriptionIcon,
} from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const Sitebar = () => {
  return (
    <>
      <div className={styles.sitebar}>
        <div className={styles.sitebar__top}>
          <Link className={styles.sitebar__logo_link} href="/">
            <img src={logoSite} alt="logo__site" width={180} height={32} />
          </Link>
        </div>
        <SitebarList>
          <SitebarItem icon={<OverviewIcon />} title="Overview" path="/" />
          <SitebarItem icon={<TicketsIcon />} title="Tickets" path="/tickets" />
          <SitebarItem icon={<IdeasIcon />} title="Ideas" path="/ideas" />
          <SitebarItem
            icon={<ContactsIcon />}
            title="Contacts"
            path="/contacts"
          />
          <SitebarItem icon={<AgentsIcon />} title="Agents" path="/agents" />
          <SitebarItem
            icon={<ArticlesIcon />}
            title="Articles"
            path="/articles"
          />
          <span className={styles.sitebar__line}></span>
          <SitebarItem
            icon={<SettingsIcon />}
            title="Settings"
            path="/settings"
          />
          <SitebarItem
            icon={<SubscriptionIcon />}
            title="Subscription"
            path="/subscription"
          />
        </SitebarList>
      </div>
    </>
  );
};

export default Sitebar;
