import PropTypes from 'prop-types';
import React, { Component } from 'react';
import capitalize from '../helper/index';

const rareOptions = ['normal', 'raro', 'muito raro'];

export default class Select extends Component {
  render() {
    const { label, name, value, onInputChange } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <select
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
        >
          {rareOptions.map((rareOption) => (
            <option value={ rareOption } key={ rareOption }>
              {rareOption}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
