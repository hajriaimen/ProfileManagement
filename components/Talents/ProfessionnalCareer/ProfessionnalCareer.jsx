/**
 * @file Conteneur du formulaire autre connaissances acquises
 * ( field array : careers )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import Form from './ProfessionnalCareerForm';

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
  careers: [
    {
      jobTitle: '',
      status: '',
      contractType: '',
      duration: '',
      geographicalResponsibility: '',
      postSize: '',
      groupSize: '',
      fixedSalary: '',
      variableSalary: '',
      housing: false,
      vehicle: false,
      complementaryHealth: false,
      specialRetirementPlan: false,
    },
  ],
};

const validationSchema = Yup.object({
  careers: Yup.array().of(
    Yup.object().shape({
      jobTitle: Yup.string()
        .min(3, 'Minimum 3 caractères.')
        .max(40, 'Maximum 40 caractères.')
        .required('Champ obligatoire.'),
      status: Yup.string().required('Champ obligatoire.'),
      contractType: Yup.string().required('Champ obligatoire.'),
      duration: Yup.string().required('Champ obligatoire.'),
      geographicalResponsibility: Yup.string().required('Champ obligatoire.'),
    }),
  ),
});

const ProfessionnalCareer = () => (
  <Paper elevation={1} style={{ padding: '15px' }}>
    <Typography variant="h3">Parcours professionnel</Typography>
    <div style={{ margin: '15px', padding: '15px' }}>
      <Formik
        render={props => <Form {...props} />}
        initialValues={values}
        validationSchema={validationSchema}
      />
    </div>
  </Paper>
);

export default withStyles(styles)(ProfessionnalCareer);
