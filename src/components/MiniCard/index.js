import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';

import defaultImage from '../../images/default-image.svg';
import superTrunfo from '../../images/super-trunfo.png';

import * as S from './styled';

class MiniCard extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteButton = false,
      onDeleteCard,
      handleClick,
      index,
    } = this.props;
    return (
      <S.CardWrapper onClick={ handleClick } data-name={ cardName }>
        <S.Border>
          <S.CardTitle data-testid="name-card">{cardName}</S.CardTitle>
          <S.ImageWrapper>
            <img
              src={ cardImage || defaultImage }
              alt={ cardName || 'Sem imagem' }
              data-testid="image-card"
            />
          </S.ImageWrapper>
          <S.List>
            <li data-testid="attr1-card">
              <span>Inovação</span>
              <div>{cardAttr1}</div>
            </li>
            <li data-testid="attr2-card">
              <span>Carisma</span>
              <div>{cardAttr2}</div>
            </li>
            <li data-testid="attr3-card">
              <span>Persistência</span>
              <div>{cardAttr3}</div>
            </li>
          </S.List>
          <S.SuperTrunfoDeleteButton>
            {cardTrunfo && (
              <S.SuperTrunfoWrapper data-testid="trunfo-card">
                <img
                  src={ superTrunfo }
                  alt="Ícone de uma mão segurando o símbolo feminino"
                />
                <span>Super Trunfo</span>
              </S.SuperTrunfoWrapper>
            )}
            {deleteButton ? (
              <Button
                index={ index }
                label="Excluir"
                name="delete"
                onSaveButtonClick={ () => onDeleteCard(index, cardTrunfo) }
                value={ false }
              />
            ) : (
              ''
            )}
          </S.SuperTrunfoDeleteButton>
        </S.Border>
      </S.CardWrapper>
    );
  }
}

MiniCard.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  deleteButton: PropTypes.bool.isRequired,
  onDeleteCard: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    .isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default MiniCard;
