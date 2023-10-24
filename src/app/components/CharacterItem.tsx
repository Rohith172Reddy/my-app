import React from 'react';

type CharacterProps = {
  character: {
    id: number;
    name: string;
    image: string;
  };
};

const CharacterItem: React.FC<CharacterProps> = ({ character }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={character.image} alt={character.name} className="mx-auto mb-2 rounded-full" />
      <p className="text-lg font-semibold text-center">{character.name}</p>
    </div>
  );
};

export default CharacterItem;
