/**
 * @file Contact Form
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
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

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  mobile: '',
  message: '',
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Le prénom est obligatoire'),
  lastname: Yup.string().required('Le nom est obligatoire'),
  email: Yup.string().email('Adresse email non valide').required('L\'adresse email est obligatoire'),
  mobile: Yup.string().matches(/^[0-9]*$/, 'Le mobile doit etre numerique').required('Le numero mobile est obligatoire'),
  message: Yup.string().required('Le commentaire est obligatoire'),
});

const onFieldChange = (name, handleChange, setFieldTouched) => (e) => {
  e.persist();
  handleChange(e);
  setFieldTouched(name, true, false);
};

const onSubmit = async (values, {
  setSubmitting,
  setErrors,
  setStatus,
  resetForm,
}) => {
  try {
    resetForm(initialValues);
    setStatus({ success: true });
  } catch (error) {
    setStatus({ success: false });
    setSubmitting(false);
    setErrors({ submit: error.message });
  }
};

function renderFieldTextHelper(condition, value) {
  if (condition) {
    return value;
  } return '';
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFieldChange = onFieldChange.bind(this);
    this.onSubmit = onSubmit.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Paper style={{ padding: '1rem', margin: '1rem 20%', width: '100%' }}>
          <Grid container spacing={24} style={{ margin: '2.1rem 0' }}>
            <Typography variant="h4" component="h2">
              NOUS SOMMES À VOTRE ÉCOUTE !
            </Typography>
          </Grid>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.onSubmit}
            render={({
              touched,
              isValid,
              handleChange,
              setFieldTouched,
              errors,
              values: {
                firstname,
                lastname,
                email,
                mobile,
                message,
              },
            }) => (
              <Form>
                <Grid container spacing={24}>
                  <Grid item xs={6}>
                    <TextField
                      id="firstname"
                      placeholder="Prenom"
                      margin="normal"
                      fullWidth
                      helperText={renderFieldTextHelper(touched.firstname, errors.firstname)}
                      error={touched.firstname && Boolean(errors.firstname)}
                      value={firstname}
                      onChange={this.onFieldChange('firstname', handleChange, setFieldTouched)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      id="lastname"
                      placeholder="Nom"
                      margin="normal"
                      fullWidth
                      value={lastname}
                      helperText={renderFieldTextHelper(touched.lastname, errors.lastname)}
                      error={touched.lastname && Boolean(errors.lastname)}
                      onChange={this.onFieldChange('lastname', handleChange, setFieldTouched)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      id="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      margin="normal"
                      fullWidth
                      value={email}
                      helperText={renderFieldTextHelper(touched.email, errors.email)}
                      error={touched.email && Boolean(errors.email)}
                      onChange={this.onFieldChange('email', handleChange, setFieldTouched)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile"
                      margin="normal"
                      fullWidth
                      value={mobile}
                      helperText={renderFieldTextHelper(touched.mobile, errors.mobile)}
                      error={touched.mobile && Boolean(errors.mobile)}
                      onChange={this.onFieldChange('mobile', handleChange, setFieldTouched)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      min="3"
                      name="message"
                      placeholder="Ecrire votre message"
                      margin="normal"
                      multiline
                      rows={2}
                      rowsMax={4}
                      fullWidth
                      value={message}
                      helperText={renderFieldTextHelper(touched.message, errors.message)}
                      error={touched.message && Boolean(errors.message)}
                      onChange={this.onFieldChange('message', handleChange, setFieldTouched)}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="Submit"
                    style={{ margin: '1rem' }}
                    disabled={!isValid}
                  >
                    Envoyer
                  </Button>
                </Grid>
              </Form>
            )}
          />
        </Paper>
      </React.Fragment>
    );
  }
}

export default ContactForm;
