import React, { useState, useEffect } from 'react';

import { fetchPersonagens } from '../../api';

import { Loader } from '../Loader/styles';

import { ListWrapper, List, TitleWrapper, InfoWrapper } from './styles';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetchPersonagens();

    setCharacters(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleClick(character) {
    console.dir(character);
  }

  return (
    <>
      <Loader isLoading={loading}>
        <h1>Loading characters...</h1>
      </Loader>
      {characters.length > 0 && (
        <ListWrapper>
          <List>
            {characters.map(character => (
              <li key={character.name} onClick={() => handleClick(character)}>
                <TitleWrapper>
                  <h3>{character.name}</h3>
                </TitleWrapper>
                <hr />
                <InfoWrapper>
                  <p className="label">Gender:</p>
                  <p className="gender">{character.gender}</p>
                  <br />
                  <p className="label">Films:</p>
                  <p>{character.films.length}</p>
                </InfoWrapper>
              </li>
            ))}
          </List>
        </ListWrapper>
      )}
    </>
  );
}

export { CharacterList };
