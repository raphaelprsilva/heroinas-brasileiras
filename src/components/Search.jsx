import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Select from './Select';

const options = ['todas', 'normal', 'raro', 'muito raro'];

class Search extends Component {
  render() {
    const { searchCardName, searchCardRare, onInputChange } = this.props;
    return (
      <div>
        <h3>Filtros de Busca</h3>
        <TextInput
          label="Nome da Carta"
          name="nameFilter"
          value={ searchCardName }
          onInputChange={ onInputChange }
        />
        <Select
          options={ options }
          label=" Filtro por Raridade "
          name="rareFilter"
          value={ searchCardRare }
          onInputChange={ onInputChange }
        />
      </div>
    );
  }
}

Search.propTypes = {
  searchCardName: PropTypes.string.isRequired,
  searchCardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
