import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const { label, name } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <textarea
          name={ name }
          id={ name }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
