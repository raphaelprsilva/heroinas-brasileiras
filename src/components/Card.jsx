import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">{`Nome da Carta: ${cardName}`}</p>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <p data-testid="description-card">{`Descrição: ${cardDescription}`}</p>
        <p data-testid="attr1-card">{`Atributo1: ${cardAttr1}`}</p>
        <p data-testid="attr2-card">{`Atributo2: ${cardAttr2}`}</p>
        <p data-testid="attr3-card">{`Atributo3: ${cardAttr3}`}</p>
        <p data-testid="rare-card">{`Carta Rara: ${cardRare}`}</p>
        <div>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
