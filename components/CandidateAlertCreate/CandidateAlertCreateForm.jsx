/**
 * @file Candidate Alert Create Form
 * @author BENHZEZ Ali
 * @date 2019-02-14
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormHelperText,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { Form } from 'formik';
import HistoryTagsBox from '../HistoryTagsBox';


const HISTORY_TAGS = [
  { label: 'Informatique' },
  { label: 'Developpeur' },
  { label: 'manager' },
  { label: 'Dveloppement PHP' },
].map(tag => ({
  value: tag.label,
  label: tag.label,
}));

const INITIAL_VALUES = {
  identity: '',
  ConsultationPlace: {
    viaSite: false,
    viaMail: false,
  },
  resultFrequency: 'resultFrequency',
  criterionsData: [],
  freshCandidateFiles: 'freshCandidateFiles',
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

function renderIdentityTextHelper(condition, value) {
  if (condition) {
    return value;
  } return '';
}


class CandidateAlertCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      touched,
      isValid,
      handleChange,
      setFieldTouched,
      errors,
      setFieldValue,
      onFieldChange,
      values: {
        identity,
        ConsultationPlace,
        resultFrequency,
        freshCandidateFiles,
        criterionsData,
      },
    } = this.props;

    const { viaSite, viaMail } = ConsultationPlace;

    return (
      <Form>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              id="identity"
              placeholder="Identité"
              margin="normal"
              fullWidth
              helperText={renderIdentityTextHelper(touched.identity, errors.identity)}
              error={touched.identity && Boolean(errors.identity)}
              value={identity}
              onChange={onFieldChange('identity', handleChange, setFieldTouched)}
            />
          </Grid>
        </Grid>

        <Typography>
            Lieu de consultation des résultats des offres remontées
        </Typography>

        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <FormControlLabel
                control={(
                  <Checkbox
                    id="ConsultationPlace.viaSite"
                    name="ConsultationPlace.viaSite"
                    checked={viaSite}
                    value={viaSite.toString()}
                    error={errors.ConsultationPlace}
                    onChange={onFieldChange('ConsultationPlace.viaSite', handleChange, setFieldTouched)}
                  />
                )}
                label="Sur site"
              />
            </Grid>

            <Grid item xs={12}>
              {renderFieldTextHelper(
                touched.ConsultationPlace
                && errors.ConsultationPlace
                && errors.ConsultationPlace.viaSite,
                'IL faut cocher au moins une case',
              )}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <FormControlLabel
              control={(
                <Checkbox
                  id="ConsultationPlace.viaMail"
                  name="ConsultationPlace.viaMail"
                  checked={viaMail}
                  value={viaMail.toString()}
                  error={errors.ConsultationPlace}
                  onChange={onFieldChange('ConsultationPlace.viaMail', handleChange, setFieldTouched)}
                />
                )}
              label="Par email"
            />
          </Grid>
        </Grid>

        <Grid container spacing={24} style={{ padding: '1rem' }}>
          <Select
            fullWidth
            id="resultFrequency"
            name="resultFrequency"
            value={resultFrequency}
            error={touched.resultFrequency && Boolean(errors.resultFrequency)}
            onChange={onFieldChange('resultFrequency', handleChange, setFieldTouched)}
          >
            <MenuItem value="resultFrequency">
              Fréquence des résultats
            </MenuItem>
            <MenuItem value="quotidien">Quotidien</MenuItem>
            <MenuItem value="hebdomadaire">Hebdomadaire</MenuItem>
            <MenuItem value="mensuel">Mensuel</MenuItem>
          </Select>

          <Grid container>
            {renderFieldTextHelper(
              touched.resultFrequency && errors.resultFrequency,
              'Fréquence des résultats est obligatoire',
            )}
          </Grid>
        </Grid>

        <Grid container spacing={24} style={{ padding: '1rem' }}>
          <HistoryTagsBox
            fullWidth
            id="criterionsData"
            name="criterionsData"
            value={criterionsData}
            options={HISTORY_TAGS}
            error={touched.criterionsData && Boolean(errors.criterionsData)}
            onChange={(value) => {
              setFieldValue('criterionsData', value);
              setFieldTouched('criterionsData', true, false);
            }}
          />

          <Grid container>
            {renderFieldTextHelper(
              touched.criterionsData && errors.criterionsData,
              errors.criterionsData,
            )}
          </Grid>
        </Grid>

        <Grid container spacing={24} style={{ padding: '1rem' }}>
          <Select
            fullWidth
            id="freshCandidateFiles"
            name="freshCandidateFiles"
            value={freshCandidateFiles}
            error={touched.freshCandidateFiles && Boolean(errors.freshCandidateFiles)}
            onChange={onFieldChange('freshCandidateFiles', handleChange, setFieldTouched)}
          >
            <MenuItem value="freshCandidateFiles">
              Fraicheur des dossiers candidats recherchés
            </MenuItem>
            <MenuItem value="quotidien">Chaque jour</MenuItem>
            <MenuItem value="hebdomadaire">Chaque semaine</MenuItem>
            <MenuItem value="mensuel">Chaque mois</MenuItem>
          </Select>

          <Grid container>
            {renderFieldTextHelper(
              touched.freshCandidateFiles && errors.freshCandidateFiles,
              'Fraicheur des dossiers est obligatoire',
            )}
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
    );
  }
}

CandidateAlertCreateForm.propTypes = {
  values: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  errors: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  touched: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  isValid: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

CandidateAlertCreateForm.defaultProps = {
  values: INITIAL_VALUES,
  errors: {},
  touched: {},
};

export default CandidateAlertCreateForm;
