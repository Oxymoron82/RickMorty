import { useEffect, useState } from "react";
import axios from "axios";
import s from "./EpisodePage.module.css";

export const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((res) => {
        setEpisodes(res.data.results);
        setInfo(res.data.info);
      })
      .catch((err) => console.error("Ошибка загрузки эпизодов", err));
  }, [page]);

  return (
    <div className={s.container}>
      <h1 className="pageTitle">Episodes</h1>

      <div className={s.grid}>
        {episodes.map((ep) => (
          <div key={ep.id} className={s.card}>
            <h2>{ep.name}</h2>
            <p><strong>Air Date:</strong> {ep.air_date}</p>
            <p><strong>Episode:</strong> {ep.episode}</p>
          </div>
        ))}
      </div>

      <div className={s.pagination}>
        <button
          disabled={!info.prev}
          onClick={() => setPage((p) => p - 1)}
        >
          ← Prev
        </button>
        <span>Page {page}</span>
        <button
          disabled={!info.next}
          onClick={() => setPage((p) => p + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};
