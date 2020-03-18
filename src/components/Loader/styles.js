import styled from 'styled-components';

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

export { Loader };
