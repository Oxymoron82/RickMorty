import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import s from "./Character.module.css"

export const Character = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCharacter(res.data)
      })
  }, [id]) // добавлен id как зависимость useEffect

  return (
    <div className="pageContainer">
      {character && (
        <div className={s.container}>
          <h1 className="pageTitle">{character.name}</h1>

          <div className={s.content}>
            <img className={s.img} src={character.image} alt="character" />

            <div className={s.description}>
              <div className={s.statusContainer}>
                <div style={{ fontSize: "20px", marginRight: "8px" }}>
                  {character.status === "Alive" && "🟢"}
                  {character.status === "Dead" && "🔴"}
                  {character.status === "unknown" && "⚪"}
                </div>
                <div>
                  {character.status} - {character.species}
                </div>
              </div>

              <div className={s.info}>
                <p className={s.subTitle}>Last known location:</p>
                <p className={s.subTitleResult}>{character.location.name}</p>
              </div>

              <div className={s.info}>
                <p className={s.subTitle}>Episode count:</p>
                <p className={s.subTitleResult}>{character.episode.length}</p>
              </div>
            </div>
          </div>

          <Link to={"/characters"} className="linkButton">
            Go back
          </Link>
        </div>
      )}
    </div>
  )
}
