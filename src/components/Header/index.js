import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

class Header extends Component {
  render() {
    return (
      <S.Wrapper>
        <h1>Jogo Triunfo - Heroínas Brasileiras</h1>
        <S.LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/play">Jogar</Link>
        </S.LinksWrapper>
      </S.Wrapper>
    );
  }
}

export default Header;
