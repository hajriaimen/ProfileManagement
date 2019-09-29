/**
 * @file validation du formulaire(inscription) SignUpForm component avec Formik et yup
 * @author Aymen HAJRI
 * @date 2019-03-05
*/

import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Grid, Paper, Typography } from '@material-ui/core';

import SignUpForm from './SignUpForm';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    const { choices } = this.props;
    this.state = {
      choice: choices,
    };
  }

  render() {
    const { choice } = this.state;
    const userInfos = Object.assign({ choice });

    return (
      <Grid item xs={6} style={{ margin: 'auto', padding: '20px 20px' }}>
        <Paper style={{
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Grid>
            <Typography variant="h4" component="h2">
              INSCRIPTION
            </Typography>
          </Grid>

          <Formik
            render={props => <SignUpForm {...props} />}
            initialValues={userInfos}
            validationSchema={Yup.object().shape({
              userName: Yup.string().required(),
              email: Yup.string().email().required(),
              password: Yup.string().required().min(6),
              confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            })}
          />
        </Paper>
      </Grid>
    );
  }
}
SignUp.propTypes = {
  choices: PropTypes.shape({
    newJob: PropTypes.bool,
    proCareer: PropTypes.bool,
    EntrepriseCareer: PropTypes.bool,
    otherDescription: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  choices: {
    newJob: true,
    proCareer: false,
    EntrepriseCareer: false,
    otherDescription: '',
  },
};

export default SignUp;
