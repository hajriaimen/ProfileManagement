/**
 * @file Lost Password
 * @author Adel ELECHI
 * @date 2019-01-28
 */
import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormLostPassword from './formLostPassword';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email ')
    .required('Email is required '),
});

class LostPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailState: false,
      emailError: false,
      emailMessage: '',
    };

    this.handler = this.handler.bind(this);
  }

  handler(event, email) {
    this.setState({ email });

    if (email === 'email@exist.fr') {
      this.setState({ emailState: 'email-exist' });
    } else {
      this.setState({
        emailState: 'not-found',
        emailError: true,
        emailMessage: "Cet e-mail n'est pas référencé dans la base.",
      });
    }
  }

  SendData(event) {
    event.preventDefault();
    const { email } = this.state;

    // axios.post(INIT_PASSWORD_URL, { email });

    if (email === 'email@exist.fr') {
      this.setState({ emailState: 'email-exist' });
    } else {
      this.setState({
        emailState: 'not-found',
        emailError: true,
        emailMessage: "Cet e-mail n'est pas référencé dans la base.",
      });
    }
  }

  render() {
    const { emailState, emailError, emailMessage } = this.state;
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
                  Mot de passe oublié.
                </Typography>

                {emailState === 'email-exist' && (
                  <div>
                    <Typography variant="body2" gutterBottom style={{ margin: '50px 0 15px 0' }}>
                      Un email de récupération de mot de passe vous a été envoyé.
                      <br />
                      Cliquez sur le lien dans l’email pour réinitialiser votre mot de passe.
                      <br />
                    </Typography>

                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ margin: '50px 0 15px 0', color: '#9e9e9ea8' }}
                    >
                      Vous ne retrouvez pas l’email ? Il est peut-être dans vos courriers
                      indésirables.
                    </Typography>
                  </div>
                )}

                {(emailState === false || emailState === 'not-found') && (
                  <Formik
                    render={props => (
                      <FormLostPassword
                        {...props}
                        handler={this.handler}
                        emailMessage={emailMessage}
                        emailError={emailError}
                      />
                    )}
                    initialValues={values}
                    validationSchema={validationSchema}
                  />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ margin: '30px' }}>
          {emailState !== 'email-exist' && (
            <div>
              <h3>Email de test </h3>
              email@exist.fr
            </div>
          )}

          {emailState === 'email-exist' && (
            <Grid container>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Paper style={{ padding: '1rem' }}>
                    <Typography
                      variant="h4"
                      component="h2"
                      style={{ paddingBottom: '5px', borderBottom: '2px solid #FF9800' }}
                    >
                      Mail : Mot de passe oublié
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                      <br />
                      Bonjour,
                      <br />
                      <br />
                      Vous avez demandé la réinitialisation de votre mot passe.
                      <br />
                      Pour confirmer, Merci de cliquer sur ce lien
                      <br />
                      <Link href="/init-password">
                        <span
                          style={{
                            color: '#2196f3',
                            cursor: 'pointer',
                          }}
                        >
                          INIT_PASSWORD_URL
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

export default LostPassword;
