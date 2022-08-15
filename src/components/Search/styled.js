import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 1.25rem auto 1.25rem;
    font-size: 1.75rem;
  }
`;

export const SearchItemsWrapper = styled.section`
  max-height: 250px;
  display: flex;
  width: 950px;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 1rem;
  margin: 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 7.5px 12.5px rgb(0 0 0 / 20%);
  }

  @media(max-width: 978px) {
    flex-direction: column;
    width: 600px;
  }
`;
