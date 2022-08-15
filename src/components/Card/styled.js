/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-height: 565px;
  display: flex;
  width: 350px;
  min-height: 565px;
  flex-direction: column;
  padding: 1.5rem 1rem;
  margin: 1.5rem 0;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fef2ec;
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 7.5px 12.5px rgb(0 0 0 / 20%);
  }
`;

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #ffffff;
  border-radius: 5px;
  max-height: 520px;
  height: 520px;
`;

export const CardTitle = styled.h3`
  min-height: 2.5rem;
  margin-top: 0.25rem;
  font-size: 1.5rem;
  padding: 0.5rem 0.25rem;
  font-weight: 600;
`;

export const ImageWrapper = styled.div`
  img {
    border: 1px solid #eaeaea;
    background-color: #ffffff;
    color: #2a2a2a;
    text-align: center;
    border-radius: 5px;
    object-fit: fill;
    width: 250px;
    height: 180px;
    line-height: 240px;
  }
`;

export const Description = styled.div`
  overflow-y: scroll;
  word-wrap: break-word;
  min-width: 250px;
  max-width: 250px;
  min-height: 60px;
  max-height: 60px;
  border-radius: 5px;
  margin-top: 0.25rem;
  padding: 0.25rem;
  background-color: #ffffff;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0rem;
    border-radius: 5px;

    span {
      width: 150px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 0.5rem 0.25rem;
      margin: 0.25rem;
      margin-right: 0;
      background-color: #ffffff;
      padding-left: 0.5rem;
    }

    div {
      min-height: 32px;
      text-align: center;
      color: #ffffff;
      width: calc(100% - 150px);
      padding: 0.5rem 0.25rem;
      margin: 0.25rem;
      margin-left: 0;
      background-color: #fa814a;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      padding-right: 0.75rem;
    }
  }
`;

export const SuperTrunfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: center;
  padding-bottom: 0.25rem;

  span {
    padding-right: 0.25rem;
    font-size: 0.8rem;
  }

  img {
    margin-right: 0.25rem;
    height: 25px;
    width: 25px;
  }
`;
