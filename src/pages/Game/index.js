/* eslint-disable max-params */
import React, { Component } from 'react';

import * as S from './styled';
import './style.css';

import brazilianWomansHeroins from '../../utils/cardsData';
import {
  GameInfo,
  GameResult,
  SelectAttributes,
  UserDeckModal,
  Header,
} from '../../components';

const INITIAL_STATE = {
  gameEnd: false,
  showCardsBattle: false,
  isButtonDisabled: true,
  userDeck: [],
  machineDeck: [],
  showModal: false,
  userCardToFight: {},
  machineCardToFight: {},
  totalRounds: 6,
  currentRound: 1,
  wins: 0,
  loses: 0,
  selectedOption: '',
};

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.validateUserChoice = this.validateUserChoice.bind(this);
    this.updateDecks = this.updateDecks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.userWins = this.userWins.bind(this);
    this.userLoses = this.userLoses.bind(this);
  }

  componentDidMount() {
    this.updateDecks();
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => this.validateUserChoice(),
    );
  }

  handleNewGame() {
    this.setState({ ...INITIAL_STATE });
  }

  // eslint-disable-next-line react-func/max-lines-per-function
  handleClick(event) {
    const { userDeck,
      machineDeck,
      selectedOption,
      currentRound,
      totalRounds,
    } = this.state;

    const cardWomanName = event.currentTarget.dataset.name;
    const isCardName = ({ cardName }) => cardName === cardWomanName;
    const choosedCard = userDeck.find(isCardName);
    const randomMachineCard = machineDeck[Math.floor(Math.random() * machineDeck.length)];

    if (selectedOption === 'Inovação') {
      const newUserDeck = userDeck.filter(
        ({ cardName }) => cardName !== cardWomanName,
      );
      const newMachineDeck = machineDeck.filter(
        ({ cardName }) => cardName !== randomMachineCard.cardName,
      );

      if (+choosedCard.cardAttr1 >= +randomMachineCard.cardAttr1) {
        this.userWins(newUserDeck, newMachineDeck, choosedCard, randomMachineCard);
      } else {
        this.userLoses(newUserDeck, newMachineDeck, choosedCard, randomMachineCard);
      }
    }

    if (selectedOption === 'Carisma') {
      const newUserDeck = userDeck.filter(
        ({ cardName }) => cardName !== cardWomanName,
      );
      const newMachineDeck = machineDeck.filter(
        ({ cardName }) => cardName !== randomMachineCard.cardName,
      );

      if (+choosedCard.cardAttr2 >= +randomMachineCard.cardAttr2) {
        this.userWins(newUserDeck, newMachineDeck, choosedCard, randomMachineCard);
      } else {
        this.userLoses(newUserDeck, newMachineDeck, choosedCard, randomMachineCard);
      }
    }

    if (selectedOption === 'Persistência') {
      const newUserDeck = userDeck.filter(
        ({ cardName }) => cardName !== cardWomanName,
      );
      const newMachineDeck = machineDeck.filter(
        ({ cardName }) => cardName !== randomMachineCard.cardName,
      );

      if (+choosedCard.cardAttr3 >= +randomMachineCard.cardAttr3) {
        this.userWins(newUserDeck, newMachineDeck, choosedCard, randomMachineCard);
      } else {
        this.userLoses(newUserDeck, newMachineDeck, choosedCard, randomMachineCard);
      }
    }

    if (currentRound === totalRounds) {
      this.setState({ endGame: true });
    }
  }

  setUserWin(prevState, userDeck, machineDeck, choosedCard, randomMachineCard) {
    return {
      showCardsBattle: true,
      selectedOption: '',
      isButtonDisabled: true,
      userCardToFight: choosedCard,
      machineCardToFight: randomMachineCard,
      showModal: false,
      userDeck,
      machineDeck,
      currentRound: prevState.currentRound + 1,
      wins: prevState.wins + 1,
    };
  }

  setUserLose(
    prevState,
    userDeck,
    machineDeck,
    choosedCard,
    randomMachineCard,
  ) {
    return {
      showCardsBattle: true,
      selectedOption: '',
      isButtonDisabled: true,
      userCardToFight: choosedCard,
      machineCardToFight: randomMachineCard,
      showModal: false,
      userDeck,
      machineDeck,
      currentRound: prevState.currentRound + 1,
      loses: prevState.loses + 1,
    };
  }

  setRandomDeck(deck) {
    const RANDOM_FACTOR = 0.5;
    const MAX_INDEX = 6;
    return deck
      .sort(() => Math.random() - RANDOM_FACTOR)
      .filter((item, index) => index < MAX_INDEX);
  }

  userWins(newUserDeck, newMachineDeck, choosedCard, randomMachineCard) {
    this.setState((prevState) => this.setUserWin(
      prevState,
      newUserDeck,
      newMachineDeck,
      choosedCard,
      randomMachineCard,
    ));
  }

  userLoses(newUserDeck, newMachineDeck, choosedCard, randomMachineCard) {
    this.setState((prevState) => this.setUserLose(
      prevState,
      newUserDeck,
      newMachineDeck,
      choosedCard,
      randomMachineCard,
    ));
  }

  updateDecks() {
    this.setState({
      userDeck: this.setRandomDeck(brazilianWomansHeroins),
      machineDeck: this.setRandomDeck(brazilianWomansHeroins),
    });
  }

  validateUserChoice() {
    const { selectedOption } = this.state;

    if (!selectedOption.length) {
      this.setState({ isButtonDisabled: true });
    } else {
      this.setState({ isButtonDisabled: false });
    }
  }

  render() {
    const { isButtonDisabled, userDeck, currentRound, endGame } = this.state;
    const { totalRounds, wins, loses, selectedOption, showModal } = this.state;
    const { userCardToFight, machineCardToFight, showCardsBattle } = this.state;
    return (
      <S.GameWrapper>
        <S.MainWrapper>
          <Header />
          <GameInfo
            currentRound={ currentRound }
            totalRounds={ totalRounds }
            wins={ wins }
            loses={ loses }
          />
          <SelectAttributes
            currentRound={ currentRound }
            selectedOption={ selectedOption }
            handleChange={ this.handleChange }
          />
          <UserDeckModal
            isButtonDisabled={ isButtonDisabled }
            handleOpenModal={ this.handleOpenModal }
            showModal={ showModal }
            handleCloseModal={ this.handleCloseModal }
            userDeck={ userDeck }
            handleClick={ this.handleClick }
          />
          <GameResult
            showCardsBattle={ showCardsBattle }
            currentRound={ currentRound }
            endGame={ endGame }
            wins={ wins }
            loses={ loses }
            handleNewGame={ this.handleNewGame }
            userCardToFight={ userCardToFight }
            machineCardToFight={ machineCardToFight }
          />
        </S.MainWrapper>
      </S.GameWrapper>
    );
  }
}

export default Game;
