/**
 * @file Formulaire autre connaissances acquises
 * ( field array : careers )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React, { Component } from 'react';
import { FieldArray } from 'formik';
import { get as getLoDash } from 'lodash';
import PropTypes from 'prop-types';

import {
  Typography,
  Grid,
  Fab,
  FormControl,
  Select,
  InputLabel,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import { Add as AddIcon } from '@material-ui/icons';

const paddingInput = {
  padding: '15px',
};

const initialValuesExperience = {
  jobTitle: '',
  status: '',
  contractType: '',
  duration: '',
  geographicalResponsibility: '',
  postSize: '',
  tailleGroupe: '',
  fixedSalary: '',
  variableSalary: '',
  housing: false,
  vehicle: false,
  complementaryHealth: false,
  specialRetirementPlan: false,
};

class ProfessionnalCareerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      values: { careers },
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <FieldArray
          name="careers"
          render={arrayHelper => (
            <div>
              {careers.map((item, index) => (
                <Grid container>
                  <div style={{ paddingTop: '1rem' }}>
                    <Grid
                      container
                      style={{
                        margin: '10px',
                        padding: '25px',
                        border: '1px solid #2196f3',
                        clear: 'both',
                      }}
                      item
                      xs={8}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h4">
                          { /* eslint-disable-next-line react/jsx-one-expression-per-line */ }
                          Expérience # {index + 1}
                        </Typography>

                        <Fab
                          style={{ float: 'right' }}
                          variant="extended"
                          onClick={() => arrayHelper.remove(index)}
                        >
                          <DeleteIcon />
                        </Fab>
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <TextField
                          name={`careers.${index}.jobTitle`}
                          error={
                            getLoDash(touched, `careers[${index}].jobTitle`, false)
                            && !!getLoDash(errors, `careers[${index}].jobTitle`, false)
                          }
                          helperText={
                            getLoDash(touched, `careers.${index}.jobTitle`, false)
                            && getLoDash(errors, `careers[${index}].jobTitle`, '')
                          }
                          value={item.jobTitle}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Titre du poste"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <TextField
                          name={`careers.${index}.status`}
                          error={
                            getLoDash(touched, `careers[${index}].status`, false)
                            && !!getLoDash(errors, `careers[${index}].status`, false)
                          }
                          helperText={
                            getLoDash(touched, `careers.${index}.status`, false)
                            && getLoDash(errors, `careers[${index}].status`, '')
                          }
                          value={item.status}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Statut"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <FormControl
                          fullWidth
                          error={
                            getLoDash(touched, `careers[${index}].contractType`, false)
                            && !!getLoDash(errors, `careers[${index}].contractType`, false)
                          }
                        >
                          <InputLabel htmlFor="contractType">Type de contrat</InputLabel>

                          <Select
                            native
                            value={item.contractType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputProps={{
                              name: `careers[${index}].contractType`,
                              id: `careers[${index}].contractType`,
                            }}
                            fullWidth
                          >
                            <option value="" />
                            <option value="CDI">CDI</option>
                            <option value="CDD">CDD</option>
                            <option value="Interim">Interim</option>
                            <option value="Independant">Independant</option>
                            <option value="Stage">Stage</option>
                            <option value="Autre">Autre</option>
                          </Select>
                          <FormHelperText>
                            {getLoDash(touched, `careers.${index}.contractType`, false)
                              && getLoDash(errors, `careers[${index}].contractType`, '')}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <TextField
                          name={`careers.${index}.duration`}
                          type="number"
                          error={
                            getLoDash(touched, `careers[${index}].duration`, false)
                            && !!getLoDash(errors, `careers[${index}].duration`, false)
                          }
                          helperText={
                            getLoDash(touched, `careers.${index}.duration`, false)
                            && getLoDash(errors, `careers[${index}].duration`, '')
                          }
                          value={item.duration}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Durée dans le poste / mois"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <FormControl
                          fullWidth
                          error={
                            getLoDash(
                              touched,
                              `careers[${index}].geographicalResponsibility`,
                              false,
                            )
                            && !!getLoDash(
                              errors,
                              `careers[${index}].geographicalResponsibility`,
                              false,
                            )
                          }
                        >
                          <InputLabel htmlFor="geographicalResponsibility">
                            Responsabilité géographique du poste
                          </InputLabel>
                          <Select
                            native
                            value={item.geographicalResponsibility}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputProps={{
                              name: `careers[${index}].geographicalResponsibility`,
                              id: `careers[${index}].geographicalResponsibility`,
                            }}
                            fullWidth
                          >
                            <option value="" />
                            <option value="Local">Local</option>
                            <option value="Regional">Regional</option>
                            <option value="National">National</option>
                            <option value="International">International</option>
                            <option value="Intercontinental">Intercontinental</option>
                          </Select>
                          <FormHelperText>
                            {getLoDash(
                              touched,
                              `careers.${index}.geographicalResponsibility`,
                              false,
                            )
                              && getLoDash(errors, `careers[${index}].geographicalResponsibility`, '')}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <TextField
                          name={`careers.${index}.postSize`}
                          error={
                            getLoDash(touched, `careers[${index}].postSize`, false)
                            && !!getLoDash(errors, `careers[${index}].postSize`, false)
                          }
                          helperText={
                            getLoDash(touched, `careers.${index}.postSize`, false)
                            && getLoDash(errors, `careers[${index}].postSize`, '')
                          }
                          value={item.postSize}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Taille de l'entité du poste"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <TextField
                          name={`careers.${index}.tailleGroupe`}
                          error={
                            getLoDash(touched, `careers[${index}].tailleGroupe`, false)
                            && !!getLoDash(errors, `careers[${index}].tailleGroupe`, false)
                          }
                          helperText={
                            getLoDash(touched, `careers.${index}.tailleGroupe`, false)
                            && getLoDash(errors, `careers[${index}].tailleGroupe`, '')
                          }
                          value={item.tailleGroupe}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Taille du groupe d'appartenance"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} style={{ padding: '20px' }}>
                        <h2>SALAIRE</h2>
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <TextField
                          name={`careers.${index}.fixedSalary`}
                          value={item.fixedSalary}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Salaire fixe / mois"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} style={paddingInput}>
                        <TextField
                          name={`careers.${index}.variableSalary`}
                          value={item.variableSalary}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Salaire variable / mois"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} style={{ padding: '20px' }}>
                        <h2>Avantages</h2>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={item.vehicle}
                              name={`careers.${index}.vehicle`}
                              value="manageeEquipeField"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              color="primary"
                            />
)}
                          label="Véhicule de fonction"
                        />
                      </Grid>
                      {item.vehicle > 0 && (
                        <Grid item xs={12} style={paddingInput}>
                          <TextField
                            name={`careers.${index}.vehicleValue`}
                            value={item.vehicleValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Véhicule de fonction"
                            fullWidth
                          />
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={item.housing}
                              name={`careers.${index}.housing`}
                              value="manageeEquipeField"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              color="primary"
                            />
)}
                          label="Logement"
                        />
                      </Grid>
                      {item.housing > 0 && (
                        <Grid item xs={12} style={paddingInput}>
                          <TextField
                            name={`careers.${index}.housingValue`}
                            value={item.housingValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Logement"
                            fullWidth
                          />
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={item.complementaryHealth}
                              name={`careers.${index}.complementaryHealth`}
                              value="manageeEquipeField"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              color="primary"
                            />
)}
                          label="Complémentaire santé"
                        />
                      </Grid>
                      {item.complementaryHealth > 0 && (
                        <Grid item xs={12} style={paddingInput}>
                          <TextField
                            name={`careers.${index}.complementaryHealthValue`}
                            value={item.complementaryHealthValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Complémentaire santé"
                            fullWidth
                          />
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={item.specialRetirementPlan}
                              name={`careers.${index}.specialRetirementPlan`}
                              value="manageeEquipeField"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              color="primary"
                            />
)}
                          label="Régime de retraire particulier"
                        />
                      </Grid>
                      {item.specialRetirementPlan > 0 && (
                        <Grid item xs={12} style={paddingInput}>
                          <TextField
                            name={`careers.${index}.specialRetirementPlanValue`}
                            value={item.specialRetirementPlanValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Régime de retraire particulier"
                            fullWidth
                          />
                        </Grid>
                      )}
                    </Grid>
                  </div>
                </Grid>
              ))}

              <Grid item xs={12} style={{ padding: '20px' }}>
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  type="button"
                  onClick={() => arrayHelper.push(initialValuesExperience)}
                >
                  Ajouter une expérience
                  <AddIcon />
                </Button>
              </Grid>
            </div>
          )}
        />

        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
          style={{ marginRight: '15px' }}
        >
          Annuler
        </Button>

        <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
          Envoyer
        </Button>
      </form>
    );
  }
}

ProfessionnalCareerForm.propTypes = {
  values: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  errors: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  touched: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),

  dirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

ProfessionnalCareerForm.defaultProps = {
  values: { careers: [initialValuesExperience] },
  errors: { careers: [initialValuesExperience] },
  touched: { careers: [initialValuesExperience] },
};

export default ProfessionnalCareerForm;
