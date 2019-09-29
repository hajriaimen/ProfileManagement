/**
 * @file Conteneur du formulaire parcours professionnel
 * ( field array :
 *        languages,
 *        visitedCountries,
 *        livedCountries,
 *        jobCountries
 * )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import Form from './InterculturalTalentForm';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`,
  },
  container: {
    maxWidth: '200px',
  },
});

const values = {
  languages: [
    {
      language: '',
      level: '',
    },
  ],
  visitedCountries: [
    {
      country: '',
      duration: '',
      region: '',
    },
  ],
  livedCountries: [
    {
      country: '',
      duration: '',
      region: '',
    },
  ],
  jobCountries: [
    {
      country: '',
      duration: '',
      region: '',
    },
  ],
};
const validationSchema = Yup.object({
  languages: Yup.array().of(
    Yup.object().shape({
      language: Yup.string().required('Champ obligatoire.'),
      level: Yup.string().required('Champ obligatoire.'),
    }),
  ),
  visitedCountries: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required('Champ obligatoire.'),
      duration: Yup.string().required('Champ obligatoire.'),
      region: Yup.string().required('Champ obligatoire.'),
    }),
  ),
  livedCountries: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required('Champ obligatoire.'),
      duration: Yup.string().required('Champ obligatoire.'),
      region: Yup.string().required('Champ obligatoire.'),
    }),
  ),
  jobCountries: Yup.array().of(
    Yup.object().shape({
      country: Yup.string().required('Champ obligatoire.'),
      duration: Yup.string().required('Champ obligatoire.'),
      region: Yup.string().required('Champ obligatoire.'),
    }),
  ),
});

const InterculturalTalent = () => (
  <Paper elevation={1} style={{ padding: '15px' }}>
    <Typography variant="h3">Talent interculturel</Typography>
    <div style={{ margin: '15px', padding: '15px' }}>
      <Formik
        render={props => <Form {...props} />}
        initialValues={values}
        validationSchema={validationSchema}
      />
    </div>
  </Paper>
);
export default withStyles(styles)(InterculturalTalent);
