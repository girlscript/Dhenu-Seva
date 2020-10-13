import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/Alert';

class FeedbackAlert extends React.Component {
  render() {
    return (
      <Alert
        variant={this.props.variant}
        style={{ marginTop: '10px', textAlign: 'left', paddingBottom: '0' }}
      >
        <p>{this.props.message}</p>
      </Alert>
    );
  }
}

FeedbackAlert.defaultProps = {
  variant: 'warning',
  message: 'Invalid detail',
};

FeedbackAlert.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default FeedbackAlert;
