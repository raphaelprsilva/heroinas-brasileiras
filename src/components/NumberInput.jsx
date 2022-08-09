import PropTypes from 'prop-types';
import React, { Component } from 'react';

import capitalize from '../helper/index';

export default class NumberInput extends Component {
  render() {
    const { label, name, minInput, maxInput, value, onInputChange } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          type="number"
          min={ minInput }
          max={ maxInput }
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minInput: PropTypes.string.isRequired,
  maxInput: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
