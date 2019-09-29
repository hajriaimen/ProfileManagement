/**
 * @file Lost Password
 * @author Adel ELECHI
 * @date 2019-01-29
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values: { email },
    values,
    errors,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const infoSubmit = (event) => {
    event.preventDefault();
    // const myJSON = JSON.stringify(props.values);
    // alert(myJSON);
  };
  const { emailMessage, emailError } = props;

  return (
    <form onSubmit={infoSubmit}>
      <TextField
        style={{ margin: '10px 0' }}
        id="email"
        name="email"
        helperText={errors.email ? errors.email : emailMessage || ''}
        error={!!errors.email || !!emailError}
        label="Email"
        fullWidth
        value={email}
        onChange={event => change('email', event)}
      />
      <Button
        /* type="submit" */
        variant="contained"
        color="primary"
        disabled={!isValid}
        style={{ margin: '15px 0' }}
        onClick={event => props.handler(event, values.email)}
      >
        Envoyer
      </Button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string,
  }),
  errors: PropTypes.shape({
    email: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired,
  emailMessage: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
};

Form.defaultProps = {
  values: { email: '' },
  errors: { email: '' },
};

export default Form;
