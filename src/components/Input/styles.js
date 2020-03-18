import styled from 'styled-components';

const InputStyle = styled.input`
  width: 85%;
  height: 50px;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid #666;
  border-radius: 4px;
  background: #222;
  color: #fff;
  font-size: 1em;
  transition: border 0.4s;
  text-transform: uppercase;

  &::placeholder {
    color: #999;
  }

  &:hover {
    border: 1px solid #999;
  }

  &:focus {
    border: 1px solid #fff;
  }
`;

export { InputStyle };
