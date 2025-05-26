import logo from "../../assets/img/logo.png"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

export const Header = () => {
  return (
    <div className={s.header}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="logotype" />
      </NavLink>

      <nav className={s.navLinks}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/characters"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          Characters
        </NavLink>

        <NavLink
          to="/locations"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          Locations
        </NavLink>

        <NavLink
          to="/episodes"
          className={({ isActive }) =>
            isActive ? `${s.link} ${s.active}` : s.link
          }
        >
          Episodes
        </NavLink>
      </nav>
    </div>
  )
}
