import PropTypes from 'prop-types';
import React, { Component } from 'react';

const options = ['', 'Inovação', 'Carisma', 'Persistência'];

class SelectAttributes extends Component {
  render() {
    const { currentRound, selectedOption, handleChange } = this.props;
    return (
      <div>
        <h2>{`${currentRound}ª Rodada`}</h2>
        <p>Sua vez! Escolha um atributo para duelar.</p>
        <div>
          <select
            name="selectedOption"
            value={ selectedOption }
            onChange={ handleChange }
          >
            {options.map((option) => (
              <option value={ option } key={ option }>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

SelectAttributes.propTypes = {
  currentRound: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default SelectAttributes;
