import styled from 'styled-components';

export const PageWrapper = styled.main`
  background: #fafafa;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
    height: 500px;
    border-right: 1px solid black;

    @media (max-width: 956px) {
      width: 400px;
      height: 400px;
    }

    @media (max-width: 690px) {
      width: 300px;
      height: 300px;
      border-right: none;
      border-bottom: 1px solid black;
      padding-bottom: 1.5rem;
    }
  }

  @media (max-width: 690px) {
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
  }
`;

export const LinksWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  @media (max-width: 956px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 690px) {
    height: 200px;
  }

  h2 {
    font-size: 1.5rem;
    padding-bottom: 1rem;

    @media (max-width: 956px) {
      font-size: 1.3rem;
    }
  }

  a {
    background-color: #2B44FF;
    color: #fafafa;
    border-radius: 5px;
    padding: 0.75rem 0.75rem;
    margin: 0.75rem;
    transition: 0.3s;
  }

  a:hover {
    background-color: #fafafa;
    color: #2B44FF;
    border: 1px solid #6a6a6a;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }
`;
