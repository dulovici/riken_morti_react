import './App.css';
import { Header } from './Header/Header';
import { Characters } from './Characters/Characters';
import { Character } from './Character/Character'
import { useState } from 'react';


function App() {
  const [id, setId] = useState(null);

  const catchId = (id) => {
    setId(id)
  }

  return (
    <>
      <Header return={catchId} />
      {id === null ? <Characters catch={catchId} /> : <Character id={id} />}
    </>
  );
}

export default App;
