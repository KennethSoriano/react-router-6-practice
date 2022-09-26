import { NavLink } from "react-router-dom";

<nav className="navbar">
    <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
    >
        Home
    </NavLink>
</nav>