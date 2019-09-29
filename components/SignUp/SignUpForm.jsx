/**
 * @file Formulaire inscription contient du champs
 * (user name, email, password, confirm password )
 * et une bouton submit pour envoyer envoyer les données.
 * @author Aymen HAJRI
 * @date 2019-03-05
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  TextField,
} from '@material-ui/core';


const initialValuesInfos = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = (props) => {
  const {
    values,
    handleBlur,
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    choices,
  } = props;

  // function to handle the text field value
  const changeTextFieldValue = (e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(e.target.name, true, true);
  };

  // function to handle the submit button
  const infoSubmit = (event) => {
    event.preventDefault();
    const userLogin = JSON.stringify({ values }, choices);
    console.log(userLogin);
  };

  return (
    <div style={{ padding: '20px 20px' }}>
      <form justify="center" onSubmit={infoSubmit}>

        <Grid item xs={10} style={{ margin: 'auto', padding: '20px 20px' }}>
          <TextField
            label="Nom utilisateur"
            name="userName"
            onChange={changeTextFieldValue}
            onBlur={handleBlur}
            error={errors.userName && touched.userName}
            helperText={touched.userName ? errors.userName : ''}
            fullWidth
          />
          <TextField
            label="EMAIL"
            type="email"
            name="email"
            onChange={changeTextFieldValue}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={touched.email ? errors.email : ''}
            fullWidth
          />
          <TextField
            label="mot de passe"
            name="password"
            type="password"
            onChange={changeTextFieldValue}
            onBlur={handleBlur}
            error={errors.password && touched.password}
            helperText={touched.password ? errors.password : ''}
            fullWidth
          />
          <TextField
            label="confirmer mot de passe"
            name="confirmPassword"
            type="password"
            onChange={changeTextFieldValue}
            onBlur={handleBlur}
            error={errors.confirmPassword && touched.confirmPassword}
            helperText={touched.confirmPassword ? errors.confirmPassword : ''}
            fullWidth
          />

          {/**  submit button Grid */}
          <Button
            variant="contained"
            type="submit"
            disabled={!isValid}
            fullWidth
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  values: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,

  }),
  choices: PropTypes.shape({
    newJob: PropTypes.bool,
    proCareer: PropTypes.bool,
    EntrepriseCareer: PropTypes.bool,
    otherDescription: PropTypes.string,
  }),
  errors: PropTypes.shape({
    initialValuesInfos: PropTypes.object,
  }),

  touched: PropTypes.shape({
    initialValuesInfos: PropTypes.object,
  }),

  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

SignUpForm.defaultProps = {
  values: {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  errors: initialValuesInfos,
  touched: initialValuesInfos,
  choices: {
    newJob: true,
    proCareer: false,
    EntrepriseCareer: false,
    otherDescription: '',
  },
};

export default SignUpForm;
