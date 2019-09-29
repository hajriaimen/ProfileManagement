/**
 * @file Candidate Alert Create
 * @author BENHZEZ Ali
 * @date 2019-02-14
 */

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Grid, Paper, Typography,
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CreateForm from './CandidateAlertCreateForm';

const CREATE_URL = 'http://localhost:3001';
const UPDATE_URL = 'http://localhost:3001';


let INITIAL_VALUES = {
  identity: '',
  ConsultationPlace: {
    viaSite: false,
    viaMail: false,
  },
  resultFrequency: 'resultFrequency',
  criterionsData: [],
  freshCandidateFiles: 'freshCandidateFiles',
};

const STATIC_VALUES = {
  identity: '4256782',
  ConsultationPlace: {
    viaSite: true,
    viaMail: false,
  },
  resultFrequency: 'quotidien',
  criterionsData: [
    { value: 'Informatique', label: 'Informatique' },
    { value: 'Developpeur', label: 'Developpeur' },
    { value: 'manager', label: 'manager' },
  ],
  freshCandidateFiles: 'quotidien',
};

const VALIDATION_SCHAMA = Yup.object().shape({
  identity: Yup.string().required('L\'identité est obligatoire'),
  ConsultationPlace: Yup.object({
    viaSite: Yup.boolean(),
    viaMail: Yup.boolean(),
  })
    .test(
      'isOneChecked',
      null,
      (obj) => {
        if (obj.viaSite || obj.viaMail) {
          return true;
        }
        return new Yup.ValidationError(
          'Please check one checkbox',
          null,
          'ConsultationPlace.viaSite',
        );
      },
    ),
  resultFrequency: Yup.string().test('match', 'msg', value => value !== 'resultFrequency'),
  criterionsData: Yup.array()
    .of(Yup.object().shape({}))
    .required('Critères mémorisés pour la recherche sont obligatoires') // these constraints are shown if and only if inner constraints are satisfied
    .min(3, 'Ce champ doit avoir au min 3 critères'),
  freshCandidateFiles: Yup.string().test('match', 'msg', value => value !== 'freshCandidateFiles'),
});

const onFieldChange = (name, handleChange, setFieldTouched) => (e) => {
  e.persist();
  handleChange(e);
  setFieldTouched(name, true, false);
};


class CandidateAlertCreate extends React.Component {
  constructor(props) {
    super(props);

    this.onFieldChange = onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { id } = this.props;
    if (id) {
      // TODO
      INITIAL_VALUES = STATIC_VALUES;
    }
  }

  onSubmit(values, { setSubmitting, setErrors, setStatus }) {
    const { id } = this.props;
    if (id) {
      // TODO Call API UPDATE ALERT
      try {
        axios.post(UPDATE_URL, values);
        setStatus({ success: true });
      } catch (error) {
        setStatus({ success: false });
        setSubmitting(false);
        setErrors({ submit: error.message });
      }
    } else {
      // TODO Call API CREATE ALERT
      try {
        axios.post(CREATE_URL, values);
        setStatus({ success: true });
      } catch (error) {
        setStatus({ success: false });
        setSubmitting(false);
        setErrors({ submit: error.message });
      }
    }
  }

  render() {
    const { id } = this.props;

    return (
      <Grid container>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Paper style={{ padding: '1rem' }}>
              <Typography variant="h4" component="h2">
                {(() => {
                  if (id) return <React.Fragment>Mise à jour d&apos;une alerte</React.Fragment>;
                  return <React.Fragment>Creation d&apos;une alerte</React.Fragment>;
                })()}
              </Typography>

              <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={VALIDATION_SCHAMA}
                onSubmit={this.onSubmit}
                render={props => <CreateForm onFieldChange={this.onFieldChange} {...props} />}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

CandidateAlertCreate.propTypes = {
  id: PropTypes.string,
};

CandidateAlertCreate.defaultProps = {
  id: null,
};

export default CandidateAlertCreate;
