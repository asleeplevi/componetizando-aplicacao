import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { Content } from './components/Content';
import { GenreResponseProps, SideBar } from './components/SideBar';


export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function handleClickButton(genre: GenreResponseProps) {
    setSelectedGenre(genre);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onSelectedGenre={handleClickButton} selectedGenre={selectedGenre} />
      <Content selectedGenre={selectedGenre} />
    </div>
  )
}