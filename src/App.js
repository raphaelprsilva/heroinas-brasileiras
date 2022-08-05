import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange() {
    console.log('on input change');
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    console.log('on input change');
  }

  render() {
    return (
      <>
        <Form
          cardName="Nome da carta"
          cardDescription="Descrição da carta"
          cardAttr1="12"
          cardAttr2="34"
          cardAttr3="56"
          cardImage="url-to-image"
          cardRare="raro"
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName="Nome da carta"
          cardDescription="Descrição da carta"
          cardAttr1="12"
          cardAttr2="34"
          cardAttr3="56"
          cardImage="url-to-image"
          cardRare="raro"
          cardTrunfo={ false }
        />
      </>
    );
  }
}

export default App;
