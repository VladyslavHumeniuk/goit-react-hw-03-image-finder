import PropTypes from 'prop-types';
import './Modal.scss';
const { Component } = require('react');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressEsc);
  }

  pressEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg, alt } = this.props;
    return (
      <div className="overlay" onClick={this.onBackDropClick}>
        <div className="modal">
          <img src={largeImg} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
