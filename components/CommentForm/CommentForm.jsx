/**
 * @file Post Comment form
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Paper, Typography, TextField, Button,
} from '@material-ui/core';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  comment: '',
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Le prenom est obligatoire'),
  lastname: Yup.string().required('Le nom est obligatoire'),
  email: Yup.string().email('Adresse email non valide').required('L\'adresse email est obligatoire'),
  comment: Yup.string().required('Le commentaire est obligatoire'),
});

const onFieldChange = (name, handleChange, setFieldTouched) => (e) => {
  e.persist();
  handleChange(e);
  setFieldTouched(name, true, false);
};

function renderFieldTextHelper(condition, value) {
  if (condition) {
    return value;
  } return '';
}


class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFieldChange = onFieldChange.bind(this);
  }

  render() {
    const { addComment, handleCancelNewComment } = this.props;

    return (
      <React.Fragment>
        <Paper style={{ padding: '1rem', margin: '2.1rem' }}>
          <Typography variant="h4" component="h2">
            Nouveau Commentaire
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setTimeout(() => {
                addComment(values);
              }, 500);
            }}
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
                comment,
              },
            }) => (
              <Form>
                <Grid container spacing={24}>
                  <Grid item xs={3}>
                    <TextField
                      id="firstname"
                      placeholder="Prenom"
                      margin="normal"
                      value={firstname}
                      helperText={renderFieldTextHelper(touched.firstname, errors.firstname)}
                      error={touched.firstname && Boolean(errors.firstname)}
                      onChange={this.onFieldChange('firstname', handleChange, setFieldTouched)}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <TextField
                      id="lastname"
                      placeholder="Nom"
                      margin="normal"
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

                  <Grid item xs={12}>
                    <TextField
                      id="comment"
                      name="comment"
                      placeholder="Ecrire votre comentaire"
                      multiline
                      rows={2}
                      rowsMax={4}
                      fullWidth
                      value={comment}
                      helperText={renderFieldTextHelper(touched.comment, errors.comment)}
                      error={touched.comment && Boolean(errors.comment)}
                      onChange={this.onFieldChange('comment', handleChange, setFieldTouched)}
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

                  <Button
                    variant="contained"
                    type="button"
                    onClick={handleCancelNewComment}
                  >
                    Annuler
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  handleCancelNewComment: PropTypes.func.isRequired,
};

export default CommentForm;
