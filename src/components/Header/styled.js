/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: 999px;
  display: flex;
  height: 6rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2a2a2a;
  background-color: #f95f18;

  img {
    width: 6rem;
  }
`;
