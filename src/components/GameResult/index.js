import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Card from '../Card';

class GameResult extends Component {
  render() {
    const {
      showCardsBattle,
      currentRound,
      endGame,
      wins,
      loses,
      handleNewGame,
      userCardToFight,
      machineCardToFight,
    } = this.props;
    return (
      <div>
        <section>
          {!showCardsBattle ? (
            ''
          ) : (
            <section style={ { display: 'flex' } }>
              <h3>{`Resultado da ${currentRound - 1}ª rodada`}</h3>
              {endGame ? (
                <div>
                  <h2>
                    {wins > loses ? 'Você venceu! ✌🏾' : 'Você perdeu. 😥'}
                  </h2>
                  <h2>{wins === loses && 'Você empatou! 🤨'}</h2>
                  <button type="button" onClick={ handleNewGame }>
                    Deseja começar um novo jogo?
                  </button>
                </div>
              ) : (
                ''
              )}
              <Card
                cardName={ userCardToFight.cardName }
                cardDescription={ userCardToFight.cardDescription }
                cardAttr1={ userCardToFight.cardAttr1 }
                cardAttr2={ userCardToFight.cardAttr2 }
                cardAttr3={ userCardToFight.cardAttr3 }
                cardImage={ userCardToFight.cardImage }
                cardRare={ userCardToFight.cardRare }
                cardTrunfo={ userCardToFight.cardTrunfo }
              />
              <Card
                cardName={ machineCardToFight.cardName }
                cardDescription={ machineCardToFight.cardDescription }
                cardAttr1={ machineCardToFight.cardAttr1 }
                cardAttr2={ machineCardToFight.cardAttr2 }
                cardAttr3={ machineCardToFight.cardAttr3 }
                cardImage={ machineCardToFight.cardImage }
                cardRare={ machineCardToFight.cardRare }
                cardTrunfo={ machineCardToFight.cardTrunfo }
              />
            </section>
          )}
        </section>
      </div>
    );
  }
}

GameResult.defaultProps = {
  endGame: false,
};

GameResult.propTypes = {
  currentRound: PropTypes.number.isRequired,
  endGame: PropTypes.bool,
  handleNewGame: PropTypes.func.isRequired,
  loses: PropTypes.number.isRequired,
  machineCardToFight: PropTypes.shape({
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardDescription: PropTypes.string,
    cardImage: PropTypes.string,
    cardName: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  }).isRequired,
  showCardsBattle: PropTypes.bool.isRequired,
  userCardToFight: PropTypes.shape({
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardDescription: PropTypes.string,
    cardImage: PropTypes.string,
    cardName: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  }).isRequired,
  wins: PropTypes.number.isRequired,
};

export default GameResult;
