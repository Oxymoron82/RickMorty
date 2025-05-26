import { useState, useEffect } from "react"
import axios from "axios"
import s from "./CharacterPage.module.css"
import { Link } from "react-router-dom" // правильный импорт

export const CharacterPage = () => {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  })
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character")
  }, [])

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        setCharacters(res.data.results)
        setInfo(res.data.info)
        setError(null)
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Error loading data")
        setCharacters([])
      })
  }

  const nextPageHandler = () => {
    if (info.next) {
      fetchData(info.next)
    }
  }

  const previousPageHandler = () => {
    if (info.prev) {
      fetchData(info.prev)
    }
  }

  const searchHandler = (event) => {
    const value = event.currentTarget.value
    fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
  }

  return (
    <div className={"pageContainer"}>
      <h1 className={"pageTitle"}>Character Page</h1>
      <input
        type="search"
        className={s.search}
        onChange={searchHandler}
        placeholder="Search..."
      />
      {error && <div className="errorMessage">{error}</div>}

      {!error && characters.length > 0 && (
        <>
          <div className={s.characters}>
            {characters.map((character) => (
              <div key={character.id} className={s.character}>
                <Link to={`/characters/${character.id}`} className={s.characterLink}>
                  {character.name}
                </Link>
                <img src={character.image} alt={`${character.name} avatar`} />
              </div>
            ))}
          </div>
          <div className={s.buttonContainer}>
            <button
              className={s.linkButton}
              disabled={!info.prev}
              onClick={previousPageHandler}
            >
              Back
            </button>
            <button
              className={s.linkButton}
              disabled={!info.next}
              onClick={nextPageHandler}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
