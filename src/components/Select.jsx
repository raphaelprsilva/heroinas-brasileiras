import PropTypes from 'prop-types';
import React, { Component } from 'react';

const rareOptions = ['normal', 'raro', 'muito raro'];

export default class Select extends Component {
  render() {
    const { label, name } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <select id={ name } data-testid={ `${name}-input` }>
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
};
