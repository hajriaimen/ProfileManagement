/**
 * @file Formulaire capital connaissances
 * ( Field array :
 *        diplomas,
 *        training
 * )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React, { Component } from 'react';
import { FieldArray } from 'formik';
import { get as getLoDash } from 'lodash';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import { Add as AddIcon } from '@material-ui/icons';

import {
  Typography,
  Grid,
  FormControl,
  Select,
  InputLabel,
  Button,
  FormHelperText,
  Fab,
} from '@material-ui/core';

import SelectAutoComplete from '../../SelectAutoComplete';

const paddingInput = {
  padding: '15px',
};

const initialValuesDiplome = {
  dateMonthBegin: '',
  dateYearBegin: '',
  dateMonthEnd: '',
  dateYearEnd: '',
  domain: '',
  level: '',
  diplomaName: '',
  establishmentType: '',
  country: '',
};

const initialValuesFormation = {
  dateMonthBegin: '',
  dateYearBegin: '',
  dateMonthEnd: '',
  dateYearEnd: '',
  domain: '',
  level: '',
  trainingName: '',
  establishmentType: '',
  country: '',
};


const optionsDiplomes = [
  {
    value: 'dip_1',
    label: "Diplôme d'État d'accompagnant éducatif et social",
  },
  {
    value: 'dip_2',
    label: "Diplôme d'État d'assistant familial",
  },
  {
    value: 'dip_3',
    label: "Diplôme d'État d'éducateur spécialisé",
  },
  {
    value: 'dip_4',
    label: 'Brevet de technicien agricole',
  },
];

const optionsTraining = [
  {
    value: 'dip_1',
    label: 'Savoir lire et analyser le bilan de son entreprise',
  },
  {
    value: 'dip_2',
    label: 'Gestion quotidienne de la trésorerie et élaboration du tableau de bord',
  },
  {
    value: 'dip_3',
    label: 'Maîtriser les techniques d’analyse financière',
  },
  {
    value: 'dip_4',
    label: 'Gestion de la trésorerie et culture cash',
  },
];

class OtherKnowledgeAcquiredForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      values: { diplomas, training },
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      setFieldValue,
      setFieldTouched,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              margin: '20px 0 0  15px',
              borderBottom: '3px  solid #2196f3',
            }}
          >
            Diplômes
          </Typography>

          <FieldArray
            name="diplomas"
            render={arrayHelper => (
              <div>
                {diplomas.map((item, index) => (
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
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Diplôme # {index + 1}
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
                          <Grid item xs={12}>
                            Date de début
                          </Grid>
                          <FormControl
                            error={
                              getLoDash(touched, `diplomas[${index}].dateMonthBegin`, false)
                              && !!getLoDash(errors, `diplomas[${index}].dateMonthBegin`, false)
                            }
                          >
                            <InputLabel htmlFor="dateMonthBegin">Mois</InputLabel>

                            <Select
                              native
                              value={item.dateMonthBegin}
                              style={{ marginRight: '10px' }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].dateMonthBegin`,
                                id: `diplomas[${index}].dateMonthBegin`,
                              }}
                            >
                              <option value="" />
                              {[...Array(12).keys()].map(m => (
                                <option value={m + 1}>{m + 1}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.dateMonthBegin`, false)
                                && getLoDash(errors, `diplomas[${index}].dateMonthBegin`, '')}
                            </FormHelperText>
                          </FormControl>
                          <FormControl
                            error={
                              getLoDash(touched, `diplomas[${index}].dateYearBegin`, false)
                              && !!getLoDash(errors, `diplomas[${index}].dateYearBegin`, false)
                            }
                          >
                            <InputLabel htmlFor="dateMonthBegin">Année</InputLabel>

                            <Select
                              native
                              value={item.dateYearBegin}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].dateYearBegin`,
                                id: `diplomas[${index}].dateYearBegin`,
                              }}
                            >
                              <option value="" />
                              {[...Array(60).keys()].map(y => (
                                <option value={y + 1960}>{y + 1960}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.dateYearBegin`, false)
                                && getLoDash(errors, `diplomas[${index}].dateYearBegin`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <Grid item xs={12}>
                            Date de fin
                          </Grid>
                          <FormControl
                            error={
                              getLoDash(touched, `diplomas[${index}].dateMonthEnd`, false)
                              && !!getLoDash(errors, `diplomas[${index}].dateMonthEnd`, false)
                            }
                          >
                            <InputLabel htmlFor="dateMonthEnd">Mois</InputLabel>

                            <Select
                              native
                              value={item.dateMonthEnd}
                              style={{ marginRight: '10px' }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].dateMonthEnd`,
                                id: `diplomas[${index}].dateMonthEnd`,
                              }}
                            >
                              <option value="" />
                              {[...Array(12).keys()].map(m => (
                                <option value={m + 1}>{m + 1}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.dateMonthEnd`, false)
                                && getLoDash(errors, `diplomas[${index}].dateMonthEnd`, '')}
                            </FormHelperText>
                          </FormControl>
                          <FormControl
                            error={
                              getLoDash(touched, `diplomas[${index}].dateYearEnd`, false)
                              && !!getLoDash(errors, `diplomas[${index}].dateYearEnd`, false)
                            }
                          >
                            <InputLabel htmlFor="dateYearEnd">Année</InputLabel>

                            <Select
                              native
                              value={item.dateYearEnd}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].dateYearEnd`,
                                id: `diplomas[${index}].dateYearEnd`,
                              }}
                            >
                              <option value="" />
                              {[...Array(60).keys()].map(y => (
                                <option value={y + 1960}>{y + 1960}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.dateYearEnd`, false)
                                && getLoDash(errors, `diplomas[${index}].dateYearEnd`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `diplomas[${index}].domain`, false)
                              && !!getLoDash(errors, `diplomas[${index}].domain`, false)
                            }
                          >
                            <InputLabel htmlFor="domain">Domaine du diplôme</InputLabel>
                            <Select
                              native
                              value={item.domain}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].domain`,
                                id: `diplomas[${index}].domain`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="domain_1">domain 1</option>
                              <option value="domain_2">domain 2</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.domain`, false)
                                && getLoDash(errors, `diplomas[${index}].domain`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `diplomas[${index}].level`, false)
                              && !!getLoDash(errors, `diplomas[${index}].level`, false)
                            }
                          >
                            <InputLabel htmlFor="level">Niveau du diplôme</InputLabel>
                            <Select
                              native
                              value={item.level}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].level`,
                                id: `diplomas[${index}].level`,
                              }}
                            >
                              <option value="" />
                              <option value="nivau_1">Collège à Bac</option>
                              <option value="nivau_2">Bac+2 : DUT, BTS, DEUG</option>
                              <option value="nivau_3">Bac+3 : Licence</option>
                              <option value="nivau_4">
                                Bac+4 : Maîtrise, IEP, IUP, Master prof.1
                              </option>
                              <option value="nivau_5">
                                Bac+5 : DESS, Gdes écoles, MBA, Master prof. 2
                              </option>
                              <option value="nivau_6">Bac+5 : DEA, Master recherche</option>
                              <option value="nivau_7">Bac+5 : Doctorat</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.level`, false)
                                && getLoDash(errors, `diplomas[${index}].level`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <SelectAutoComplete
                            id="diplomaName"
                            name="diplomaName"
                            fieldAarray
                            fieldAarrayName="diplomas"
                            fieldAarrayIndex={index}
                            label="Nom du diplôme"
                            placeholder="placeholder..."
                            // defaultValue={organizationCES}
                            setFieldValue={setFieldValue}
                            handleChange={handleChange}
                            setFieldTouched={setFieldTouched}
                            touched={touched}
                            errors={errors}
                            optionsList={optionsDiplomes}
                            isMulti={false}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `diplomas[${index}].establishmentType`, false)
                              && !!getLoDash(errors, `diplomas[${index}].establishmentType`, false)
                            }
                          >
                            <InputLabel htmlFor="establishmentType">
                              Type d`établissement
                            </InputLabel>
                            <Select
                              native
                              value={item.establishmentType}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].establishmentType`,
                                id: `diplomas[${index}].establishmentType`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="type_1">Collège, lycée</option>
                              <option value="type_2">IUT</option>
                              <option value="type_3">Université</option>
                              <option value="type_4">Ecole Commerce</option>
                              <option value="type_5">Ecole d`Ingénieur</option>
                              <option value="type_6">Autre Ecole</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.establishmentType`, false)
                                && getLoDash(errors, `diplomas[${index}].establishmentType`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `diplomas[${index}].country`, false)
                              && !!getLoDash(errors, `diplomas[${index}].country`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Pays</InputLabel>
                            <Select
                              native
                              value={item.country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `diplomas[${index}].country`,
                                id: `diplomas[${index}].country`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="country_1">France</option>
                              <option value="country_2">Argentine</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `diplomas.${index}.country`, false)
                                && getLoDash(errors, `diplomas[${index}].country`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
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
                    onClick={() => arrayHelper.push(initialValuesDiplome)}
                  >
                    Ajouter un diplôme
                    <AddIcon />
                  </Button>
                </Grid>
              </div>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              margin: '20px 0 0  15px',
              borderBottom: '3px  solid #2196f3',
            }}
          >
            Formation
          </Typography>

          <FieldArray
            name="training"
            render={arrayHelper => (
              <div>
                {training.map((item, index) => (
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
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Formation # {index + 1}
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
                          <Grid item xs={12}>
                            Date de début
                          </Grid>
                          <FormControl
                            error={
                              getLoDash(touched, `training[${index}].dateMonthBegin`, false)
                              && !!getLoDash(errors, `training[${index}].dateMonthBegin`, false)
                            }
                          >
                            <InputLabel htmlFor="dateMonthBegin">Mois</InputLabel>

                            <Select
                              native
                              value={item.dateMonthBegin}
                              style={{ marginRight: '10px' }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].dateMonthBegin`,
                                id: `training[${index}].dateMonthBegin`,
                              }}
                            >
                              <option value="" />
                              {[...Array(12).keys()].map(m => (
                                <option value={m + 1}>{m + 1}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.dateMonthBegin`, false)
                                && getLoDash(errors, `training[${index}].dateMonthBegin`, '')}
                            </FormHelperText>
                          </FormControl>
                          <FormControl
                            error={
                              getLoDash(touched, `training[${index}].dateYearBegin`, false)
                              && !!getLoDash(errors, `training[${index}].dateYearBegin`, false)
                            }
                          >
                            <InputLabel htmlFor="dateMonthBegin">Année</InputLabel>

                            <Select
                              native
                              value={item.dateYearBegin}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].dateYearBegin`,
                                id: `training[${index}].dateYearBegin`,
                              }}
                            >
                              <option value="" />
                              {[...Array(60).keys()].map(y => (
                                <option value={y + 1960}>{y + 1960}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.dateYearBegin`, false)
                                && getLoDash(errors, `training[${index}].dateYearBegin`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <Grid item xs={12}>
                            Date de fin
                          </Grid>
                          <FormControl
                            error={
                              getLoDash(touched, `training[${index}].dateMonthEnd`, false)
                              && !!getLoDash(errors, `training[${index}].dateMonthEnd`, false)
                            }
                          >
                            <InputLabel htmlFor="dateMonthEnd">Mois</InputLabel>

                            <Select
                              native
                              value={item.dateMonthEnd}
                              style={{ marginRight: '10px' }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].dateMonthEnd`,
                                id: `training[${index}].dateMonthEnd`,
                              }}
                            >
                              <option value="" />
                              {[...Array(12).keys()].map(m => (
                                <option value={m + 1}>{m + 1}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.dateMonthEnd`, false)
                                && getLoDash(errors, `training[${index}].dateMonthEnd`, '')}
                            </FormHelperText>
                          </FormControl>
                          <FormControl
                            error={
                              getLoDash(touched, `training[${index}].dateYearEnd`, false)
                              && !!getLoDash(errors, `training[${index}].dateYearEnd`, false)
                            }
                          >
                            <InputLabel htmlFor="dateYearEnd">Année</InputLabel>

                            <Select
                              native
                              value={item.dateYearEnd}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].dateYearEnd`,
                                id: `training[${index}].dateYearEnd`,
                              }}
                            >
                              <option value="" />
                              {[...Array(60).keys()].map(y => (
                                <option value={y + 1960}>{y + 1960}</option>
                              ))}
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.dateYearEnd`, false)
                                && getLoDash(errors, `training[${index}].dateYearEnd`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `training[${index}].domain`, false)
                              && !!getLoDash(errors, `training[${index}].domain`, false)
                            }
                          >
                            <InputLabel htmlFor="domain">domain du formation</InputLabel>
                            <Select
                              native
                              value={item.domain}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].domain`,
                                id: `training[${index}].domain`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="domain_1">domain 1</option>
                              <option value="domain_2">domain 2</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.domain`, false)
                                && getLoDash(errors, `training[${index}].domain`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `training[${index}].level`, false)
                              && !!getLoDash(errors, `training[${index}].level`, false)
                            }
                          >
                            <InputLabel htmlFor="level">Niveau du diplôme</InputLabel>
                            <Select
                              native
                              value={item.level}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].level`,
                                id: `training[${index}].level`,
                              }}
                            >
                              <option value="" />
                              <option value="nivau_1">Collège à Bac</option>
                              <option value="nivau_2">Bac+2 : DUT, BTS, DEUG</option>
                              <option value="nivau_3">Bac+3 : Licence</option>
                              <option value="nivau_4">
                                Bac+4 : Maîtrise, IEP, IUP, Master prof.1
                              </option>
                              <option value="nivau_5">
                                Bac+5 : DESS, Gdes écoles, MBA, Master prof. 2
                              </option>
                              <option value="nivau_6">Bac+5 : DEA, Master recherche</option>
                              <option value="nivau_7">Bac+5 : Doctorat</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.level`, false)
                                && getLoDash(errors, `training[${index}].level`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <SelectAutoComplete
                            id="trainingName"
                            name="trainingName"
                            fieldAarray
                            fieldAarrayName="training"
                            fieldAarrayIndex={index}
                            label="Nom du formation"
                            placeholder="placeholder..."
                            // defaultValue={organizationCES}
                            setFieldValue={setFieldValue}
                            handleChange={handleChange}
                            setFieldTouched={setFieldTouched}
                            touched={touched}
                            errors={errors}
                            optionsList={optionsTraining}
                            isMulti={false}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `training[${index}].establishmentType`, false)
                              && !!getLoDash(errors, `training[${index}].establishmentType`, false)
                            }
                          >
                            <InputLabel htmlFor="establishmentType">
                              Type d`établissement
                            </InputLabel>
                            <Select
                              native
                              value={item.establishmentType}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].establishmentType`,
                                id: `training[${index}].establishmentType`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="type_1">Collège, lycée</option>
                              <option value="type_2">IUT</option>
                              <option value="type_3">Université</option>
                              <option value="type_4">Ecole Commerce</option>
                              <option value="type_5">Ecole d`Ingénieur</option>
                              <option value="type_6">Autre Ecole</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.establishmentType`, false)
                                && getLoDash(errors, `training[${index}].establishmentType`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `training[${index}].country`, false)
                              && !!getLoDash(errors, `training[${index}].country`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Pays</InputLabel>
                            <Select
                              native
                              value={item.country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `training[${index}].country`,
                                id: `training[${index}].country`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="country_1">France</option>
                              <option value="country_2">Argentine</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `training.${index}.country`, false)
                                && getLoDash(errors, `training[${index}].country`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
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
                    onClick={() => arrayHelper.push(initialValuesFormation)}
                  >
                    Ajouter une formation
                    <AddIcon />
                  </Button>
                </Grid>
              </div>
            )}
          />
        </Grid>

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

OtherKnowledgeAcquiredForm.propTypes = {
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
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

OtherKnowledgeAcquiredForm.defaultProps = {
  values: { diplomas: [initialValuesDiplome], training: [initialValuesFormation] },
  errors: { diplomas: [initialValuesDiplome], training: [initialValuesFormation] },
  touched: { diplomas: [initialValuesDiplome], training: [initialValuesFormation] },
};

export default OtherKnowledgeAcquiredForm;
