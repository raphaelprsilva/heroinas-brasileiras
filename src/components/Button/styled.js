/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: #fa814a;
  padding: 0.5rem 0;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  transition: background-color 0.5s ease;

  :hover {
    background-color: #f95f18;
    cursor: pointer;
  }

  :disabled {
    background-color: #807c7a;
  }
`;
