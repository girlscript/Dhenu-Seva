import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class FeedbackModal extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <Modal show={this.props.isOpen} onHide={this.props.onClose}>
        <Modal.Body>{this.props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

FeedbackModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

export default FeedbackModal;
