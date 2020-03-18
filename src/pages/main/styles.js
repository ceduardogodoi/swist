import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    width: 100%;

    fieldset {
      width: 100%;
      padding: 20px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 1024px;
`;

const Heading = styled.h1`
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export { Container, Heading, FormGrid, Wrapper };
