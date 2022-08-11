import PropTypes from 'prop-types';
import React, { Component } from 'react';
import capitalize from '../helper/index';

export default class Select extends Component {
  render() {
    const { label, name, value, onInputChange, disabled, options } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <select
          disabled={ disabled }
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
        >
          {options.map((option) => (
            <option value={ option } key={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  disabled: false,
};

Select.propTypes = {
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
