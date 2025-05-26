import { NavLink } from "react-router-dom"
import s from "./HomePage.module.css"
 

export const HomePage = () => {
  return (
    
    <div>
      <h1 className={`pageTitle ${s.title}`}>The Rick and Morty</h1>
      <div className={s.mainWrapper}>
        <NavLink to={"/characters"} className={"linkButton"}>
          Characters
        </NavLink>
        <NavLink to={"/locations"} className={"linkButton"}>
          Locations
        </NavLink>
        <NavLink to={"/episodes"} className={"linkButton"}>
          Episodes
        </NavLink>
      </div>
    </div>
  )
}