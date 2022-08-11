import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  render() {
    const { savedCards, onDeleteCard } = this.props;
    return (
      <>
        <h2>Baralho</h2>
        <div>
          {
            savedCards.map((card, index) => (
              <Card
                key={ `${card.cardName}-${index}` }
                index={ index }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardDescription={ card.cardDescription }
                cardImage={ card.cardImage }
                cardName={ card.cardName }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                onDeleteCard={ onDeleteCard }
                deleteButton
              />
            ))
          }
        </div>
      </>
    );
  }
}

Deck.propTypes = {
  onDeleteCard: PropTypes.func.isRequired,
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Deck;
