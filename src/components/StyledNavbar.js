import { NavLink } from "react-router-dom";

<nav className="navbar">
    <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
    >
        Home
    </NavLink>
    <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
    >
        Products
    </NavLink>
    <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
    >
        Login
    </NavLink>
</nav>