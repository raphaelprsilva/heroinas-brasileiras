import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Select from './Select';
import CheckBoxInput from './CheckBoxInput';

const options = ['todas', 'normal', 'raro', 'muito raro'];

class Search extends Component {
  render() {
    const {
      searchCardName,
      searchCardRare,
      searchCardTrunfo,
      onInputChange,
    } = this.props;

    return (
      <div>
        <h3>Filtros de Busca</h3>
        <TextInput
          disabled={ searchCardTrunfo }
          label="Nome da Carta"
          name="nameFilter"
          value={ searchCardName }
          onInputChange={ onInputChange }
        />
        <Select
          disabled={ searchCardTrunfo }
          options={ options }
          label=" Filtro por Raridade "
          name="rareFilter"
          value={ searchCardRare }
          onInputChange={ onInputChange }
        />
        <CheckBoxInput
          label="Mostrar Super Trunfo"
          name="superTrunfoFilter"
          value={ searchCardTrunfo }
          onInputChange={ onInputChange }
        />
      </div>
    );
  }
}

Search.propTypes = {
  searchCardName: PropTypes.string.isRequired,
  searchCardRare: PropTypes.string.isRequired,
  searchCardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
