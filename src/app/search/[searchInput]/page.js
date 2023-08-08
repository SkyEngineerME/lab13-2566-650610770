"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({params}) {
  const search = params.searchInput.replaceAll("%20"," ");

  const TarMov = movieDB.filter((movie) => movie.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())
  );
  

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {search} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {TarMov.length} result(s)</p>
      {TarMov.map((movie, i) => (<MovieRow key={movie.id} id={movie.id} title={movie.title} detail={movie.detail} rating={movie.rating} number={i + 1} />)) }
    </div>
  );
}
