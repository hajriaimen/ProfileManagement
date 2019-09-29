/**
 * @file Lost Password
 * @author Adel ELECHI
 * @date 2019-01-29
 */

import React from 'react';
import axios from 'axios';
import { Grid, Paper, Typography } from '@material-ui/core';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInitPassword from './formInitPassword';

const INIT_PASSWORD_URL = 'http://localhost:3001/init_password';

const validationSchema = Yup.object({
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
  confirmPassword: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
});

class initPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
    };
    this.handler = this.handler.bind(this);
  }

  handler(event, newPassword) {
    this.setState({ newPassword });
  }

  SendData(event) {
    event.preventDefault();
    const { newPassword } = this.state;

    axios.post(INIT_PASSWORD_URL, { newPassword });
  }

  render() {
    const { newPassword } = this.state;

    const values = {
      email: '',
    };

    return (
      <div className="login-form-container">
        <Grid container>
          <Grid container justify="center">
            <Grid item xs={5}>
              <Paper style={{ padding: '1rem' }}>
                <Typography
                  variant="h4"
                  component="h2"
                  style={{ paddingBottom: '5px', borderBottom: '2px solid #2196f3' }}
                >
                  Réinitialisation de votre mot de passe.
                </Typography>
                {newPassword && (
                  <Typography variant="body2" gutterBottom style={{ margin: '50px 0 15px 0' }}>
                    Votre mot de passe à été réinitialisé avec succès.
                  </Typography>
                )}

                {newPassword === '' && (
                  <Formik
                    render={props => <FormInitPassword {...props} handler={this.handler} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                  />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ margin: '30px' }}>
          {newPassword && (
            <Grid container>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Paper style={{ padding: '1rem' }}>
                    <Typography
                      variant="h4"
                      component="h2"
                      style={{ paddingBottom: '5px', borderBottom: '2px solid #FF9800' }}
                    >
                      Mail : Réinitialisation de votre mot de passe
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                      <br />
                      Bonjour,
                      <br />
                      <br />
                      La réinitialisation de votre mot de passe à été effectuée avec succès.
                      <br />
                      Connectez-vous sur votre espace Yooboot sur le lien suivant:
                      <br />
                      <Link href="/login">
                        <span
                          style={{
                            color: '#2196f3',
                            cursor: 'pointer',
                          }}
                        >
                          Yooboot.com
                        </span>
                      </Link>
                      <br />
                      <br />
                      Merci pour votre confiance.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          )}
        </div>

        <style jsx>
          {`
            .login-form-container {
              margin-top: 1rem;
            }
          `}
        </style>
      </div>
    );
  }
}

export default initPassword;
