"use client"; 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterItem from './CharacterItem';

type Character = {
  id: number;
  name: string;
  image: string;
};

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Information</h1>
      <div className="grid grid-cols-3 gap-2">
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
