import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Search from './Search';

class Deck extends Component {
  render() {
    const {
      savedCards,
      onDeleteCard,
      searchCardName,
      searchCardRare,
      onInputChange,
      searchCardTrunfo,
    } = this.props;
    return (
      <>
        <h2>Baralho</h2>
        <Search
          searchCardName={ searchCardName }
          searchCardRare={ searchCardRare }
          searchCardTrunfo={ searchCardTrunfo }
          onInputChange={ onInputChange }
        />
        <div>
          {
            savedCards
              .map((card, index) => (
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
                />))
              .filter((cardItem) => {
                if (searchCardTrunfo) {
                  return cardItem.props.cardTrunfo;
                }
                if (searchCardRare === 'todas') {
                  return cardItem.props.cardName.includes(searchCardName);
                }
                return cardItem.props.cardName.includes(searchCardName)
                  && cardItem.props.cardRare === searchCardRare;
              })
          }
        </div>
      </>
    );
  }
}

Deck.propTypes = {
  onDeleteCard: PropTypes.func.isRequired,
  searchCardName: PropTypes.string.isRequired,
  searchCardTrunfo: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchCardRare: PropTypes.string.isRequired,
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
