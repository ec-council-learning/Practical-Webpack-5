import { NavLink, useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const location = useLocation();
  return (
    <nav>
      <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
        App1
      </NavLink>
      <NavLink
        to="/app2"
        className={location.pathname === "/app2" ? "active" : ""}
      >
        App2
      </NavLink>
    </nav>
  );
};
