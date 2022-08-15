import React, { Component } from 'react';

import trunfoLogo from '../../images/logo_trunfo_game.svg';

import * as S from './styled';

class Header extends Component {
  render() {
    return (
      <S.Wrapper>
        <img src={ trunfoLogo } alt="Trunfo Logo" />
        <h1>Jogo Trunfo - Heroínas Brasileiras</h1>
      </S.Wrapper>
    );
  }
}

export default Header;
