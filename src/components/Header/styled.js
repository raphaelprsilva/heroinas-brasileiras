import styled from 'styled-components';

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  color: #fafafa;
  background-color: #2B44FF;
  font-size: 1.25rem;
`;

export const LinksWrapper = styled.div`
  width: 300px;

  a {
    font-size: 1rem;
    color: #FAFAFA;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  a:hover {
    color: #2B44FF;
    background-color: #FFFFFF;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }
`;
