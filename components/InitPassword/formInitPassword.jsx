/**
 * @file Lost Password
 * @author Adel ELECHI
 * @date 2019-01-28
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values, errors, touched, handleChange, isValid, setFieldTouched,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const infoSubmit = (event) => {
    event.preventDefault();
    // const myJSON = JSON.stringify(props.errors);
    // alert(myJSON);
  };

  return (
    <form onSubmit={infoSubmit}>
      <Typography variant="body2" gutterBottom style={{ margin: '50px 0 15px 0' }}>
        Pour réinitialiser votre mot de passe, merci de saisir votre E-mail d`inscription.
      </Typography>

      <TextField
        style={{ margin: '10px 0' }}
        id="password"
        name="password"
        helperText={touched.password ? errors.password : ''}
        error={touched.password && !!errors.password}
        label="Nouveau mot de passe"
        fullWidth
        type="password"
        onChange={event => change('password', event)}
      />
      <TextField
        style={{ margin: '10px 0' }}
        id="confirmPassword"
        name="confirmPassword"
        helperText={touched.confirmPassword ? errors.confirmPassword : ''}
        error={touched.confirmPassword && !!errors.confirmPassword}
        label="Confirmez votre mot de passe"
        fullWidth
        type="password"
        onChange={event => change('confirmPassword', event)}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid}
        style={{ margin: '15px 0' }}
        onClick={event => props.handler(event, values.password)}
      >
        Valider
      </Button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.shape({
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }),
  errors: PropTypes.shape({
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }),
  touched: PropTypes.shape({
    password: PropTypes.bool,
    confirmPassword: PropTypes.bool,
  }),
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired,
};

Form.defaultProps = {
  values: { password: '', confirmPassword: '' },
  errors: { password: '', confirmPassword: '' },
  touched: { password: false, confirmPassword: false },
};

export default Form;
