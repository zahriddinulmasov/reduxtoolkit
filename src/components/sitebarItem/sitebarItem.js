import { NavLink } from "react-router-dom";

import "./sitebarItem.scss";

const SitebarItem = ({ icon, title, path = "/" }) => {
  return (
    <div>
      <NavLink to={path} className="sitebarItem">
        {icon}
        <h5 className="sitebarItem__title">{title}</h5>
      </NavLink>
    </div>
  );
};

export default SitebarItem;
