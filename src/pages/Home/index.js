import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

import brazilianHeroin from '../../images/standing-1.svg';

class Home extends Component {
  render() {
    return (
      <S.PageWrapper>
        <img src={ brazilianHeroin } alt="balck woman with blue jacket" />
        <S.LinksWrapper>
          <h2>Jogo Triunfo - Heroínas Brasileiras</h2>
          <Link to="/deck">Ver cartas</Link>
          <Link to="/play">Jogar</Link>
        </S.LinksWrapper>
      </S.PageWrapper>
    );
  }
}

export default Home;
