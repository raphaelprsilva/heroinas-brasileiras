import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import Header from './components/Header';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  savedCards: [],
  formErrors: {},
  cardNameFilter: '',
  cardRareFilter: 'todas',
  cardSuperTrunfoFilter: false,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.updateState(name, value);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    this.addNewCard();
    this.clearFormData();
  }

  onDeleteCard(index, cardTrunfo) {
    const { savedCards } = this.state;
    savedCards.splice(index, 1);
    if (cardTrunfo) this.setState({ hasTrunfo: false });
    this.setState({ savedCards });
  }

  addNewCard() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    const newCard = {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
    }), () => {
      if (!hasTrunfo && newCard.cardTrunfo) this.setState({ hasTrunfo: true });
    });
  }

  clearFormData() {
    this.setState((prevState) => ({
      ...INITIAL_STATE,
      savedCards: prevState.savedCards,
      hasTrunfo: prevState.hasTrunfo,
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    }));
  }

  validateFormFields() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const MIN_VALUE = 0;
    const MAX_VALUE = 210;

    const areFieldsEmpty = [cardName, cardDescription, cardImage, cardRare]
      .some((cardItem) => !cardItem);
    const cardAttrSum = [cardAttr1, cardAttr2, cardAttr3].reduce(
      (acc, curr) => acc + +curr,
      0,
    );
    const areAttrInvalid = [cardAttr1, cardAttr2, cardAttr3].some((attr) => {
      const min = 0;
      const max = 90;
      return attr < min || attr > max;
    });
    const areFormDataInvalid = cardAttrSum < MIN_VALUE
      || cardAttrSum > MAX_VALUE
      || areFieldsEmpty
      || areAttrInvalid;
    if (areFormDataInvalid) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  updateState(name, value) {
    this.setState(
      () => ({
        [name]: value,
      }),
      () => this.validateFormFields(),
    );
  }

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
      hasTrunfo,
      savedCards,
      isSaveButtonDisabled,
      cardRareFilter,
      cardNameFilter,
      cardSuperTrunfoFilter,
    } = this.state;
    return (
      <div>
        <Header />
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          deleteButton={ false }
          index={ false }
          onDeleteCard={ false }
        />
        <Deck
          savedCards={ savedCards }
          searchCardName={ cardNameFilter }
          searchCardRare={ cardRareFilter }
          searchCardTrunfo={ cardSuperTrunfoFilter }
          onInputChange={ this.onInputChange }
          onDeleteCard={ this.onDeleteCard }
        />
      </div>
    );
  }
}

export default App;
