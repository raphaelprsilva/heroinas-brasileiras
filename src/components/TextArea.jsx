import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const { label, name, value, onInputChange } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <textarea
          name={ name }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
