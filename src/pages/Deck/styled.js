import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormCardWrapper = styled.div`
  width: 100%;
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 1.5rem;
    font-size: 1.75rem;
  }
`;

export const FormCardPreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
