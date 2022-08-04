import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { name, label } = this.props;
    return (
      <button type="submit" name={ name } data-testid={ `${name}-button` }>
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
