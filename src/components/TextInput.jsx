import PropTypes from 'prop-types';
import React, { Component } from 'react';

import capitalize from '../helper/index';

export default class TextInput extends Component {
  render() {
    const { label, name, value, onInputChange } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          type="text"
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

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
