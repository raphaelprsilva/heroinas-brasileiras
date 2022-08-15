/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DeckWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const DeckItemsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    margin: 1.25rem auto 1.25rem;
    font-size: 1.75rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
