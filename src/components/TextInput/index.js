import PropTypes from 'prop-types';
import React, { Component } from 'react';

import capitalize from '../../helper';

import * as S from './styled';

export default class TextInput extends Component {
  render() {
    const { label, name, value, onInputChange, disabled } = this.props;

    return (
      <S.InputWrapper>
        <label htmlFor={ name }>{ label }</label>
        <input
          disabled={ disabled }
          type="text"
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
          autoComplete="off"
        />
      </S.InputWrapper>
    );
  }
}

TextInput.defaultProps = {
  disabled: false,
};

TextInput.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
