import PropTypes from 'prop-types';
import React, { Component } from 'react';

import capitalize from '../../helper/index';

import * as S from './styled';

export default class Select extends Component {
  render() {
    const { label, name, value, onInputChange, disabled, options } = this.props;

    return (
      <S.SelectWrapper>
        <label htmlFor={ name }>{label}</label>
        <select
          disabled={ disabled }
          name={ `card${capitalize(name)}` }
          id={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onInputChange }
        >
          {options.map((option) => (
            <option value={ option } key={ option }>
              {option}
            </option>
          ))}
        </select>
      </S.SelectWrapper>
    );
  }
}

Select.defaultProps = {
  disabled: false,
};

Select.propTypes = {
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
