import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;

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

export { ListWrapper, List, TitleWrapper, InfoWrapper };
