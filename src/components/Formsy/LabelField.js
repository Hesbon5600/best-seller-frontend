import React from 'react';

const ErrorLabel = ({...props}) => {
  const {
    message
  } = props;
  return (
    <React.Fragment>
      {message
        ?
        <div className="alert-danger">
          <small>{message}</small>
        </div>
        : ''
      }
    </React.Fragment>
  )
}

export default ErrorLabel;