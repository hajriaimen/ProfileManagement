import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';
import './styles.css';

const LOGIN_URL = 'http://localhost:3001/auth/login';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const VALIDATION_SCHAMA = Yup.object().shape({
  email: Yup.string().email('Adresse email non valide').required('L\'adresse email est obligatoire'),
  password: Yup.string()
    .min(8, 'Le mot de passe doit avoir au min 8 caracteres')
    .matches(/^.*[a-zA-Z].*$/, 'Le mot de passe doit avoir au min un caractere alphabetique')
    .matches(/^.*[0-9].*$/, 'Le mot de passe doit avoir au min un caractere numérique')
    .required('Le mot de passe est obligatoire'),
});

const change = (name, handleChange, setFieldTouched) => (e) => {
  e.persist();
  handleChange(e);
  setFieldTouched(name, true, false);
};

const onSubmit = async (values, {
  setSubmitting, setErrors, setStatus,
}) => {
  try {
    // resetForm(INITIAL_VALUES);
    axios.post(LOGIN_URL, values);
    setStatus({ success: true });
    Router.push('/candidate-space');
  } catch (error) {
    setStatus({ success: false });
    setSubmitting(false);
    setErrors({ submit: error.message });
  }
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.change = change.bind(this);
    this.onSubmit = onSubmit.bind(this);
  }

  render() {
    return (
      <div className="login-form-container">
        <Grid container>
          <Grid container justify="center">
            <Grid item xs={3}>
              <Paper style={{ padding: '1rem' }}>
                <Typography variant="h4" component="h2">
                  Login form
                </Typography>

                <Formik
                  initialValues={INITIAL_VALUES}
                  validationSchema={VALIDATION_SCHAMA}
                  onSubmit={this.onSubmit}
                  render={({
                    touched,
                    isValid,
                    handleChange,
                    setFieldTouched,
                    errors,
                    values: {
                      email, password,
                    },
                  }) => (
                    <Form>
                      <Grid item xs={12}>
                        <TextField
                          id="email"
                          name="email"
                          placeholder="john.doe@example.com"
                          margin="normal"
                          fullWidth
                          value={email}
                          helperText={touched.email ? errors.email : ''}
                          error={touched.email && Boolean(errors.email)}
                          onChange={this.change('email', handleChange, setFieldTouched)}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          id="password"
                          name="password"
                          placeholder="Mot de passe"
                          margin="normal"
                          fullWidth
                          value={password}
                          helperText={touched.password ? errors.password : ''}
                          error={touched.password && Boolean(errors.password)}
                          onChange={this.change('password', handleChange, setFieldTouched)}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          type="Submit"
                          disabled={!isValid}
                        >
                          Envoyer
                        </Button>

                        <Link href="/lost-password">
                          <span
                            style={{
                              float: 'right',
                              margin: '10px',
                              color: '#2196f3',
                              cursor: 'pointer',
                            }}
                          >
                            Mot de passe oublié ?
                          </span>
                        </Link>
                      </Grid>
                    </Form>
                  )}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
