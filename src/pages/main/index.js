import React, { useEffect, useState } from 'react';

import { fetchPersonagens } from '../../api';

import {
  Container,
  Wrapper,
  Heading,
  Fields,
  Input,
  CharacterList,
  TitleWrapper,
  InfoWrapper,
  Loader
} from './styles';

function Main() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchPersonagens();

      setPersonagens(response);
      setCarregando(false);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Loader isLoading={carregando}>
        <h1>Carregando personagens...</h1>
      </Loader>
      <Wrapper>
        <Heading>Swist - Star Wars Lists</Heading>
        <form>
          <fieldset>
            <legend>Filtros</legend>
            <Fields>
              <Input type="text" placeholder="Nome" />
              <Input type="text" placeholder="Gênero" />
              <Input type="text" placeholder="Ano de aniversário" />
            </Fields>
          </fieldset>
        </form>
        {personagens.length > 0 && (
          <CharacterList>
            {personagens.map(personagem => (
              <li key={personagem.name}>
                <TitleWrapper>
                  <h3>{personagem.name}</h3>
                </TitleWrapper>
                <hr />
                <InfoWrapper>
                  <p className="label">Genêro:</p>
                  <p className="gender">{personagem.gender}</p>
                  <br />
                  <p className="label">Quant. filmes:</p>
                  <p>{personagem.films.length}</p>
                </InfoWrapper>
              </li>
            ))}
          </CharacterList>
        )}
      </Wrapper>
    </Container>
  );
}

export default Main;
