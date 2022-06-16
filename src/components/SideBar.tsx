import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  onSelectedGenre: (genreId: GenreResponseProps) => void
  selectedGenre: GenreResponseProps
}

export function SideBar({ onSelectedGenre, selectedGenre }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
      onSelectedGenre(response.data[0])
    });

  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectedGenre(genre)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}