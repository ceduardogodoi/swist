import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    width: 100%;

    fieldset {
      width: 100%;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
`;

const Loader = styled.div`
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  transition: display 1s ease-in-out;

  h1 {
    align-self: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 672px;
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
  border: 1px solid #666;
  border-radius: 4px;
  background: #222;
  color: #fff;
  font-size: 1em;
  transition: border 0.4s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border: 1px solid #fff;
  }
`;

const CharacterList = styled.ul`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  li {
    margin: 10px;
    width: 200px;
    height: 250px;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.4);
    background: #222;
    border-radius: 10px;
  }

  hr {
    border: 1px solid #666;
    width: 80%;
    margin: 0 auto;
  }
`;

const TitleWrapper = styled.div`
  margin: 15px 0;
  text-transform: uppercase;
  font-size: 17px;
  text-align: center;
`;

const InfoWrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  font-size: 22px;

  .label {
    color: #bbb;
  }

  .gender {
    text-transform: capitalize;
  }
`;

export {
  Container,
  Heading,
  Fields,
  Input,
  Wrapper,
  CharacterList,
  TitleWrapper,
  InfoWrapper,
  Loader
};
