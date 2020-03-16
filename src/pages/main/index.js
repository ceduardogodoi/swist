import React from 'react';

import { Container, Heading, Fields, Input } from './styles';

function Main() {
  return (
    <Container>
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
    </Container>
  );
}

export default Main;
