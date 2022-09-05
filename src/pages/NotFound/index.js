import React, { Component } from 'react';

import notFound from '../../images/404-Error.svg';

import * as S from './styled';

class NotFound extends Component {
  render() {
    return (
      <S.Wrapper>
        <span>Desculpe, mas a página não foi encontrada.</span>
        <S.ImageWrapper
          src={ notFound }
          alt="Number 404, rocket and astronaut indicating that page was not found"
        />
      </S.Wrapper>
    );
  }
}

export default NotFound;
