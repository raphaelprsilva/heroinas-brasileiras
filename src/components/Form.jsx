import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import Button from './Button';

export default class Form extends Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <Input
          label="Nome da carta"
          type="text"
          name="name"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <TextArea
          label="Descrição"
          name="description"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Input
          label="Inovação"
          type="number"
          name="attr1"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Input
          label="Carisma"
          type="number"
          name="attr2"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Input
          label="Persistência"
          type="number"
          name="attr3"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Input
          label="Selecione a imagem"
          type="text"
          name="image"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <Input
          label="Super Trunfo"
          type="checkbox"
          name="trunfo"
          value={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <Select
          label="Raridade"
          name="rare"
          value={ cardRare }
          onInputChange={ onInputChange }
        />
        <Button
          label="Salvar"
          name="save"
          value={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
