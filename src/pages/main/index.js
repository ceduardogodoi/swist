import React from 'react';

import { Input } from '../../components/Input';
import { CharacterList } from '../../components/CharactersList';

import { Container, Wrapper, Heading, FormGrid } from './styles';

function Main() {
  return (
    <Container>
      <Wrapper>
        <Heading>Swist - Star Wars Lists</Heading>
        <form>
          <fieldset>
            <legend>Filters</legend>
            <FormGrid>
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Gender" />
              <Input type="text" placeholder="Birthday Year" />
            </FormGrid>
          </fieldset>
        </form>
        <CharacterList />
      </Wrapper>
    </Container>
  );
}

export default Main;
