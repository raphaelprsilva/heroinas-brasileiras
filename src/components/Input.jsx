import PropTypes from 'prop-types';
import React, { Component } from 'react';

import capitalize from '../helper/index';

export default class Input extends Component {
  render() {
    const { label, type, name, value, onInputChange } = this.props;

    const standardInput = (
      <input
        type={ type }
        name={ `card${capitalize(name)}` }
        id={ name }
        data-testid={ `${name}-input` }
        value={ value }
        onChange={ onInputChange }
      />
    );

    const checkBoxInput = (
      <input
        type={ type }
        name={ `card${capitalize(name)}` }
        id={ name }
        data-testid={ `${name}-input` }
        checked={ value }
        onChange={ onInputChange }
      />
    );

    return (
      <label htmlFor={ name }>
        {label}
        {type === 'text' || type === 'number' ? standardInput : checkBoxInput}
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
