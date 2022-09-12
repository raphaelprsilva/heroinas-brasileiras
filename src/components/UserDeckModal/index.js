import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

import MiniCard from '../MiniCard/index';

class UserDeckModal extends Component {
  render() {
    const {
      isButtonDisabled,
      handleOpenModal,
      showModal,
      handleCloseModal,
      userDeck,
      handleClick,
    } = this.props;
    return (
      <div>
        <button
          type="button"
          disabled={ isButtonDisabled }
          onClick={ handleOpenModal }
        >
          Selecione uma carta do seu baralho
        </button>
        <ReactModal
          ariaHideApp={ false }
          isOpen={ showModal }
          contentLabel="Minimal Modal Example"
          onRequestClose={ handleCloseModal }
          className="cards-battle-modal"
          overlayClassName="overlay"
        >
          <button type="button" onClick={ handleCloseModal }>
            Close Modal
          </button>
          <section
            style={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            } }
          >
            {userDeck.map((card, index) => (
              <MiniCard
                key={ `${card.cardName}-${index}` }
                index={ index }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardDescription={ card.cardDescription }
                cardImage={ card.cardImage }
                cardName={ card.cardName }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                handleClick={ handleClick }
              />
            ))}
          </section>
        </ReactModal>
      </div>
    );
  }
}

UserDeckModal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  userDeck: PropTypes.arrayOf(PropTypes.shape({
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardDescription: PropTypes.string,
    cardImage: PropTypes.string,
    cardName: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
};

export default UserDeckModal;
