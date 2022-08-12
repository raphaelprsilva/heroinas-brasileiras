/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TextAreaWrapper = styled.span`
    display: flex;
  flex-direction: column;

  label {
    padding: 0.5rem 0;
  }

  textarea {
    padding: 0.5rem 1rem;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }

  textarea:focus {
    border: 1.3px solid #a3a0a0;
  }

  textarea::-webkit-scrollbar {
    width: 0.5em;
  }

  textarea::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;
