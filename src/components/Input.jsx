import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { label, type, name } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        <input
          type={ type }
          name={ name }
          id={ name }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
