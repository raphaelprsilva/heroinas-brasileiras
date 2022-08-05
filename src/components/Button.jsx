import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { name, label, value, onSaveButtonClick } = this.props;
    return (
      <button
        type="submit"
        name={ name }
        data-testid={ `${name}-button` }
        disabled={ value }
        onClick={ onSaveButtonClick }
      >
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};
