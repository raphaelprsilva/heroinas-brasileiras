import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class Search extends Component {
  render() {
    const { searchCardName, onInputChange } = this.props;
    return (
      <div>
        <h3>Filtros de Busca</h3>
        <TextInput
          label="Nome da Carta"
          name="nameFilter"
          value={ searchCardName }
          onInputChange={ onInputChange }
        />
      </div>
    );
  }
}

Search.propTypes = {
  searchCardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
