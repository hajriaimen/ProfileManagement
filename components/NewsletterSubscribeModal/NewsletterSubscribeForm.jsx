/* eslint-disable no-console */
/**
 * @file Subscribe Form
 * @author BENHZEZ Ali
 * @date 2019-02-05
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  civility: 'civility',
  firstname: '',
  lastname: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  civility: Yup.string().test('match', 'civility do not match', value => value !== 'civility'),
  firstname: Yup.string().required('Le prénom est obligatoire'),
  lastname: Yup.string().required('Le nom est obligatoire'),
  email: Yup.string().email('Adresse email non valide').required('L\'adresse email est obligatoire'),
});

const onFieldChange = (name, handleChange, setFieldTouched) => (e) => {
  e.persist();
  handleChange(e);
  setFieldTouched(name, true, false);
};

function renderFieldTextHelper(condition, value) {
  if (condition) {
    return (
      <FormHelperText style={{ color: '#f44336' }}>
        {value}
      </FormHelperText>
    );
  } return '';
}

function renderTextFieldTextHelper(condition, value) {
  if (condition) {
    return value;
  } return '';
}


class NewsletterSubscribeForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFieldChange = onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    // resetForm(initialValues);
    const { closeModal } = this.props;
    closeModal();
    console.log(values);
  }

  render() {
    return (
      <React.Fragment>
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
              civility,
              firstname,
              lastname,
              email,
            },
          }) => (
            <Form>
              <Grid container spacing={24} style={{ padding: '1rem' }}>
                <Select
                  id="civility"
                  name="civility"
                  value={civility}
                  error={touched.civility && Boolean(errors.civility)}
                  onChange={this.onFieldChange('civility', handleChange, setFieldTouched)}
                >
                  <MenuItem value="civility">
                    Civilité
                  </MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mme">Mme</MenuItem>
                  <MenuItem value="Mlle">Mlle</MenuItem>
                </Select>

                <Grid container>
                  {renderFieldTextHelper(
                    touched.civility && Boolean(errors.civility),
                    'La civilité est obligatoire',
                  )}
                </Grid>

              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <TextField
                    id="firstname"
                    placeholder="Prenom"
                    margin="normal"
                    fullWidth
                    helperText={renderTextFieldTextHelper(touched.firstname, errors.firstname)}
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
                    helperText={renderTextFieldTextHelper(touched.lastname, errors.lastname)}
                    error={touched.lastname && Boolean(errors.lastname)}
                    onChange={this.onFieldChange('lastname', handleChange, setFieldTouched)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    margin="normal"
                    fullWidth
                    value={email}
                    helperText={renderTextFieldTextHelper(touched.email, errors.email)}
                    error={touched.email && Boolean(errors.email)}
                    onChange={this.onFieldChange('email', handleChange, setFieldTouched)}
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
      </React.Fragment>
    );
  }
}

NewsletterSubscribeForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default NewsletterSubscribeForm;
