/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 80px;
  background-color: #FF1789;
  padding: 0.5rem 0;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  transition: background-color 0.5s ease;

  :hover {
    cursor: pointer;
  }

  :disabled {
    background-color: #807c7a;
  }
`;
