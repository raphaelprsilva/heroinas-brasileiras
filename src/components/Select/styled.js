/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SelectWrapper = styled.span`
  display: flex;
  justify-content: space-between;

  label {
    padding: 0.5rem 0;
  }

  select {
    padding: 0.5rem 1rem;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    width: 200px;
    border-radius: 5px;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }

  select:focus {
    border: 1.3px solid #a3a0a0;
  }
`;
