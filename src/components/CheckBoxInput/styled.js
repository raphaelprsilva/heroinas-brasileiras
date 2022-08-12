/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const InputWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75rem 0;

  label {
    padding: 0.5rem 1rem;
  }

  input {
    padding: 0.5rem 1rem;
    transform: scale(1.25);
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }

  input:checked {
    accent-color: #fa814a;
  }

  input:focus {
    border: 1.3px solid #a3a0a0;
  }
`;
