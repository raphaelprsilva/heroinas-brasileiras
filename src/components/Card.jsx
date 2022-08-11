import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from './Button';

export default class Card extends Component {
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
      index,
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">
          {deleteButton ? cardName : `Nome da Carta: ${cardName}`}
        </p>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <p data-testid="description-card">
          {deleteButton ? cardDescription : `Descrição: ${cardDescription}`}
        </p>
        <p data-testid="attr1-card">
          {deleteButton ? cardAttr1 : `Inovação: ${cardAttr1}`}
        </p>
        <p data-testid="attr2-card">
          {deleteButton ? cardAttr2 : `Carisma: ${cardAttr2}`}
        </p>
        <p data-testid="attr3-card">
          {deleteButton ? cardAttr3 : `Persistência: ${cardAttr3}`}
        </p>
        <p data-testid="rare-card">
          {deleteButton ? cardRare : `Carta Rara: ${cardRare}`}
        </p>
        <div>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        </div>
        {
          deleteButton
            ? (
              <Button
                index={ index }
                label="Excluir"
                name="delete"
                onSaveButtonClick={ () => onDeleteCard(index, cardTrunfo) }
                value={ false }
              />
            )
            : ''
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  deleteButton: PropTypes.bool.isRequired,
  onDeleteCard: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
