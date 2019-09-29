/**
 * @file Conteneur du formulaire capital connaissances
 * ( Field array :
 *        diplomas,
 *        training
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
import Form from './CapitalKnowledgeForm';

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
  diplomas: [
    {
      dateMonthBegin: '',
      dateYearBegin: '',
      dateMonthEnd: '',
      dateYearEnd: '',
      domain: '',
      level: '',
      diplomaName: '',
      establishmentType: '',
      country: '',
    },
  ],
  training: [
    {
      dateMonthBegin: '',
      dateYearBegin: '',
      dateMonthEnd: '',
      dateYearEnd: '',
      domain: '',
      level: '',
      trainingName: '',
      establishmentType: '',
      country: '',
    },
  ],
};
const validationSchema = Yup.object({
  diplomas: Yup.array().of(
    Yup.object().shape({
      dateMonthBegin: Yup.string().required('Champ obligatoire.'),
      dateYearBegin: Yup.string().required('Champ obligatoire.'),
      dateMonthEnd: Yup.string().required('Champ obligatoire.'),
      dateYearEnd: Yup.string().required('Champ obligatoire.'),
      domain: Yup.string().required('Champ obligatoire.'),
      level: Yup.string().required('Champ obligatoire.'),
      diplomaName: Yup.string()
        .required('Champ obligatoire.')
        .nullable(),
      establishmentType: Yup.string().required('Champ obligatoire.'),
      country: Yup.string().required('Champ obligatoire.'),
    }),
  ),
  training: Yup.array().of(
    Yup.object().shape({
      dateMonthBegin: Yup.string().required('Champ obligatoire.'),
      dateYearBegin: Yup.string().required('Champ obligatoire.'),
      dateMonthEnd: Yup.string().required('Champ obligatoire.'),
      dateYearEnd: Yup.string().required('Champ obligatoire.'),
      domain: Yup.string().required('Champ obligatoire.'),
      level: Yup.string().required('Champ obligatoire.'),
      trainingName: Yup.string()
        .required('Champ obligatoire.')
        .nullable(),
      establishmentType: Yup.string().required('Champ obligatoire.'),
      country: Yup.string().required('Champ obligatoire.'),
    }),
  ),
});

const CapitalKnowledge = () => (
  <Paper elevation={1} style={{ padding: '15px' }}>
    <Typography variant="h3">Capital connaissances</Typography>
    <div style={{ margin: '15px', padding: '15px' }}>
      <Formik
        render={props => <Form {...props} />}
        initialValues={values}
        validationSchema={validationSchema}
      />
    </div>
  </Paper>
);

export default withStyles(styles)(CapitalKnowledge);
