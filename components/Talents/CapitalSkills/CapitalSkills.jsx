/**
 * @file Conteneur du formulaire capital competences ( simple form )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import Form from './CapitalSkillsForm';

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
  job: '',
  expertiseLevel: '',
  durationExpertise: '',
  teamManager: false,
  managementLevel: '',
  duration: '',
  sizeManagedTeams: '',
  executiveCommitteeMember: false,
  entityBUSubsidiary: false,
  entityBuCorporate: false,
  managedAnnualBudgets: '',
  caAnnualGenerated: '',
  problemResolution: '',
  workContent: '',
  relationsInterpersonnelles: '',
  changeContext: '',
  organizationLevel: '',
};
const validationSchema = Yup.object({
  job: Yup.string().required('Champ obligatoire.'),
  expertiseLevel: Yup.string().required('Champ obligatoire.'),
  durationExpertise: Yup.string().required('Champ obligatoire.'),
});

const CapitalSkills = () => (
  <Paper elevation={1} style={{ padding: '15px' }}>
    <Typography variant="h3">Capital compétences</Typography>
    <div style={{ margin: '15px', padding: '15px' }}>
      <Formik
        render={props => <Form {...props} />}
        initialValues={values}
        validationSchema={validationSchema}
      />
    </div>
  </Paper>
);

export default withStyles(styles)(CapitalSkills);
