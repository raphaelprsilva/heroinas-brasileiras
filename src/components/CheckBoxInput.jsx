import PropTypes from 'prop-types';
import React, { Component } from 'react';

import capitalize from '../helper/index';

export default class CheckBoxInput extends Component {
  render() {
    const { label, name, value, onInputChange } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          type="checkbox"
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          checked={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CheckBoxInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
