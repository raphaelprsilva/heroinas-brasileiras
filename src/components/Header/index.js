import React, { Component } from 'react';

import styled from 'styled-components';
import trunfoLogo from '../../images/logo_trunfo_game.svg';

const Wrapper = styled.div`
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

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <img src={ trunfoLogo } alt="Trunfo Logo" />
        <h1>Jogo Trunfo - Heroínas Brasileiras</h1>
      </Wrapper>
    );
  }
}

export default Header;
