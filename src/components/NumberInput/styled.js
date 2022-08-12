/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const InputWrapper = styled.span`
  display: flex;
  justify-content: space-between;

  label {
    padding: 0.5rem 0;
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid #eaeaea;
    width: 200px;
    border-radius: 5px;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }

  input:focus {
    border: 1.3px solid #a3a0a0;
  }
`;
