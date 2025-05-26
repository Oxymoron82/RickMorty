// ✅ Только один раз объявлен компонент LocationPage

import { useEffect, useState } from "react"
import axios from "axios"
import s from "./LocationPage.module.css"

export const LocationPage = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location")
      .then((res) => {
        setLocations(res.data.results)
      })
      .catch((err) => console.error("Ошибка загрузки локаций:", err))
  }, [])

  return (
    <div className={s.container}>
      <h1 className="pageTitle">Locations</h1>
      <div className={s.grid}>
        {locations.map((loc) => (
          <div key={loc.id} className={s.card}>
            <h2>{loc.name}</h2>
            <p><strong>Type:</strong> {loc.type}</p>
            <p><strong>Dimension:</strong> {loc.dimension}</p>
            <p><strong>Residents:</strong> {loc.residents.length}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
