import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styled from 'styled-components';

export const GameInfoWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WinsAndLoses = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    padding: 0.5rem;
  }
`;

class GameInfo extends Component {
  render() {
    const { currentRound, totalRounds, wins, loses } = this.props;
    return (
      <GameInfoWrapper>
        <div>
          <span>
            Rodadas:
            {' '}
            <span>{currentRound}</span>
            {' '}
            /
            {' '}
            <span>{totalRounds}</span>
          </span>
        </div>
        <WinsAndLoses>
          <span>
            Vitórias:
            {' '}
            <span>{wins}</span>
          </span>
          <span>
            Derrotas:
            {' '}
            <span>{loses}</span>
          </span>
        </WinsAndLoses>
      </GameInfoWrapper>
    );
  }
}

GameInfo.propTypes = {
  currentRound: PropTypes.number.isRequired,
  loses: PropTypes.number.isRequired,
  totalRounds: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
};

export default GameInfo;
