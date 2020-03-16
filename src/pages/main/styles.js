import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;

  form {
    display: flex;
    justify-content: center;

    fieldset {
      width: 60vw;

      border: 1px solid #ccc;

      legend {
        margin-left: 20px;
      }
    }
  }
`;

const Heading = styled.h1`
  text-align: center;
`;

const Fields = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 170px;
  height: 50px;
  margin: 10px;
  padding: 5px 10px;

  border: 1px solid #333;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;

  font-size: 1em;

  transition: border 0.4s;

  &:focus {
    border: 1px solid #ccc;
  }
`;

export { Container, Heading, Fields, Input };
