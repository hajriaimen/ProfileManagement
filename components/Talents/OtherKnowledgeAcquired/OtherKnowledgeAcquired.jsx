/**
 * @file Conteneur du formulaire autre connaissances acquises ( simple form )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import Form from './OtherKnowledgeAcquiredForm';

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
  computerLevel: '',
  internetLevel: '',
  levelSocialNetworks: '',
  levelCollaborativeTools: '',
};

const validationSchema = Yup.object({
  computerLevel: Yup.string().required('Champ obligatoire.'),
  internetLevel: Yup.string().required('Champ obligatoire.'),
  levelSocialNetworks: Yup.string().required('Champ obligatoire.'),
  levelCollaborativeTools: Yup.string().required('Champ obligatoire.'),
});

const OtherKnowledgeAcquired = () => (
  <Paper elevation={1} style={{ padding: '15px' }}>
    <Typography variant="h3">Autre connaissances acquises</Typography>
    <div style={{ margin: '15px', padding: '15px' }}>
      <Formik
        render={props => <Form {...props} />}
        initialValues={values}
        validationSchema={validationSchema}
      />
    </div>
  </Paper>
);

export default withStyles(styles)(OtherKnowledgeAcquired);
