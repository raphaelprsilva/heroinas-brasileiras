import React, { Component } from 'react';
import PropTypes from 'prop-types';

import capitalize from '../../helper/index';

import * as S from './styled';

export default class TextArea extends Component {
  render() {
    const { label, name, value, onInputChange } = this.props;

    return (
      <S.TextAreaWrapper>
        <label htmlFor={ name }>{label}</label>
        <textarea
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
        />
      </S.TextAreaWrapper>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
