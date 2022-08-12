import PropTypes from 'prop-types';
import React, { Component } from 'react';

import capitalize from '../../helper/index';

import * as S from './styled';

export default class NumberInput extends Component {
  render() {
    const { label, name, minInput, maxInput, value, onInputChange } = this.props;

    return (
      <S.InputWrapper>
        <label htmlFor={ name }>{label}</label>
        <input
          type="number"
          min={ minInput }
          max={ maxInput }
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
        />
      </S.InputWrapper>
    );
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minInput: PropTypes.string.isRequired,
  maxInput: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
