/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FormWrapper = styled.form`
  max-height: 600px;
  display: flex;
  width: 350px;
  min-height: 565px;
  flex-direction: column;
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
`;
