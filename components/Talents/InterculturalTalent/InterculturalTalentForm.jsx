/**
 * @file Formulaire parcours professionnel
 * ( field array :
 *        languages,
 *        visitedCountries,
 *        livedCountries,
 *        jobCountries
 * )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get as getLoDash } from 'lodash';
import { FieldArray } from 'formik';

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

import DeleteIcon from '@material-ui/icons/Delete';
import { Add as AddIcon } from '@material-ui/icons';

const paddingInput = {
  padding: '15px',
};

const initialValuesLangue = {
  language: '',
  level: '',
};

const initialValuesPaysVisite = {
  country: '',
  duree: '',
  region: '',
};

const initialValuesPaysVecu = {
  country: '',
  duree: '',
  region: '',
};

const initialValuesPaysTravail = {
  country: '',
  duree: '',
  region: '',
};

const CountriesOption = () => (
  <React.Fragment>
    <option value="" />
    <option value="country_1">Francais</option>
    <option value="country_2">Albanais</option>
    <option value="country_3">Allemand</option>
    <option value="country_4">Anglais</option>
    <option value="country_5">Arabe</option>
    <option value="country_6">Arménien</option>
    <option value="country_7">Bulgare</option>
    <option value="country_8">Chinois</option>
    <option value="country_9">Croate</option>
    <option value="country_10">Danois</option>
    <option value="country_11">Espagnol</option>
    <option value="country_12">Estonien</option>
    <option value="country_13">Finnois</option>
    <option value="country_14">Grec</option>
    <option value="country_15">Hongrois</option>
    <option value="country_16">Irlandais</option>
    <option value="country_17">Islandais</option>
    <option value="country_18">Italien</option>
    <option value="country_19">Indi</option>
    <option value="country_20">Japonais</option>
  </React.Fragment>
);

const RegionOption = () => (
  <React.Fragment>
    <option value="" />
    <option value="region_1">Amérique du Nord</option>
    <option value="region_2">Amérique Centrale</option>
    <option value="region_3">Amérique du Sud sauf Brésil</option>
    <option value="region_4">Brésil</option>
    <option value="region_5">Afrique du Nord</option>
    <option value="region_6">Afrique Ouest</option>
    <option value="region_7">Afrique de l`Est</option>
    <option value="region_8">Afrique du Sud</option>
    <option value="region_9">Europe Nord-Ouest</option>
    <option value="region_10">Europe Sud-Ouest</option>
    <option value="region_11">Europe de l`Est sauf Russie</option>
    <option value="region_12">Russie</option>
    <option value="region_13">Europe Sud-Est</option>
    <option value="region_14">Europe Nord-Est</option>
    <option value="region_15">Turquie et Asie `mineure`</option>
    <option value="region_16">Moyen Orient</option>
    <option value="region_17">Inde</option>
    <option value="region_18">Chine</option>
    <option value="region_19">Asie Sud Est</option>
    <option value="region_20">Asie Nord Est</option>
  </React.Fragment>
);

class InterculturalTalentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      values: {
        languages, visitedCountries, livedCountries, jobCountries,
      },
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
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              margin: '20px 0 0  15px',
              borderBottom: '3px  solid #2196f3',
            }}
          >
            Communication intercuturelle
          </Typography>

          <FieldArray
            name="languages"
            render={arrayHelper => (
              <div>
                {languages.map((item, index) => (
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
                        xs={12}
                      >
                        <Grid item xs={12}>
                          <Typography variant="h4">
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Langue # {index + 1}
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
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `languages[${index}].language`, false)
                              && !!getLoDash(errors, `languages[${index}].language`, false)
                            }
                          >
                            <InputLabel htmlFor="language">Liste des languages</InputLabel>
                            <Select
                              native
                              value={item.language}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `languages[${index}].language`,
                                id: `languages[${index}].language`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="language_1">Francais</option>
                              <option value="language_2">Albanais</option>
                              <option value="language_3">Allemand</option>
                              <option value="language_4">Anglais</option>
                              <option value="language_5">Arabe</option>
                              <option value="language_6">Arménien</option>
                              <option value="language_7">Bulgare</option>
                              <option value="language_8">Chinois</option>
                              <option value="language_9">Croate</option>
                              <option value="language_10">Danois</option>
                              <option value="language_11">Espagnol</option>
                              <option value="language_12">Estonien</option>
                              <option value="language_13">Finnois</option>
                              <option value="language_14">Grec</option>
                              <option value="language_15">Hongrois</option>
                              <option value="language_16">Irlandais</option>
                              <option value="language_17">Islandais</option>
                              <option value="language_18">Italien</option>
                              <option value="language_19">Indi</option>
                              <option value="language_20">Japonais</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `languages.${index}.language`, false)
                                && getLoDash(errors, `languages[${index}].language`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `languages[${index}].level`, false)
                              && !!getLoDash(errors, `languages[${index}].level`, false)
                            }
                          >
                            <InputLabel htmlFor="level">Niveau de pratique</InputLabel>
                            <Select
                              native
                              value={item.level}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `languages[${index}].level`,
                                id: `languages[${index}].level`,
                              }}
                            >
                              <option value="" />
                              <option value="nivau_1">Basique : Quelques mots</option>
                              <option value="nivau_2">Elémentaire : Phrases simples</option>
                              <option value="nivau_3">Intermédiaire : Echanges simples</option>
                              <option value="nivau_4">Courante : Pratique courante</option>
                              <option value="nivau_5">Bilingue</option>
                              <option value="nivau_6">Natif : Langue maternelle</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `languages.${index}.level`, false)
                                && getLoDash(errors, `languages[${index}].level`, '')}
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
                    onClick={() => arrayHelper.push(initialValuesLangue)}
                  >
                    Ajouter une language
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
            Dimension interculturelle
          </Typography>
          <Typography
            variant="h6"
            style={{
              margin: '20px',
            }}
          >
            Liste des country que j`ai visités (tourisme)
          </Typography>

          <FieldArray
            name="visitedCountries"
            render={arrayHelper => (
              <div>
                {visitedCountries.map((item, index) => (
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
                        xs={10}
                      >
                        <Grid item xs={12}>
                          <Typography variant="h4">
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Pays Visité # {index + 1}
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
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `visitedCountries[${index}].country`, false)
                              && !!getLoDash(errors, `visitedCountries[${index}].country`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Liste des country visité</InputLabel>
                            <Select
                              native
                              value={item.country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `visitedCountries[${index}].country`,
                                id: `visitedCountries[${index}].country`,
                              }}
                            >
                              <CountriesOption />
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `visitedCountries.${index}.country`, false)
                                && getLoDash(errors, `visitedCountries[${index}].country`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `visitedCountries[${index}].duree`, false)
                              && !!getLoDash(errors, `visitedCountries[${index}].duree`, false)
                            }
                          >
                            <InputLabel htmlFor="duree">Durée</InputLabel>
                            <Select
                              native
                              value={item.duree}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `visitedCountries[${index}].duree`,
                                id: `visitedCountries[${index}].duree`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="duree_1">Moins de 1</option>
                              <option value="duree_2">1 an</option>
                              <option value="duree_3">2 ans</option>
                              <option value="duree_4">3 ans</option>
                              <option value="duree_5">4 ans</option>
                              <option value="duree_6">5 ans</option>
                              <option value="duree_6">Plus que 5 ans</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `visitedCountries.${index}.duree`, false)
                                && getLoDash(errors, `visitedCountries[${index}].duree`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `visitedCountries[${index}].region`, false)
                              && !!getLoDash(errors, `visitedCountries[${index}].region`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Région</InputLabel>
                            <Select
                              native
                              value={item.region}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `visitedCountries[${index}].region`,
                                id: `visitedCountries[${index}].region`,
                              }}
                              fullWidth
                            >
                              <RegionOption />
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `visitedCountries.${index}.region`, false)
                                && getLoDash(errors, `visitedCountries[${index}].region`, '')}
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
                    onClick={() => arrayHelper.push(initialValuesPaysVisite)}
                  >
                    Ajouter un country
                    <AddIcon />
                  </Button>
                </Grid>
              </div>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{
              margin: '20px',
            }}
          >
            Liste des country où j`ai vécu
          </Typography>

          <FieldArray
            name="livedCountries"
            render={arrayHelper => (
              <div>
                {livedCountries.map((item, index) => (
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
                        xs={10}
                      >
                        <Grid item xs={12}>
                          <Typography variant="h4">
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Pays Vécu # {index + 1}
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
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `livedCountries[${index}].country`, false)
                              && !!getLoDash(errors, `livedCountries[${index}].country`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Liste des country visité</InputLabel>
                            <Select
                              native
                              value={item.country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `livedCountries[${index}].country`,
                                id: `livedCountries[${index}].country`,
                              }}
                            >
                              <CountriesOption />
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `livedCountries.${index}.country`, false)
                                && getLoDash(errors, `livedCountries[${index}].country`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `livedCountries[${index}].duree`, false)
                              && !!getLoDash(errors, `livedCountries[${index}].duree`, false)
                            }
                          >
                            <InputLabel htmlFor="duree">Durée</InputLabel>
                            <Select
                              native
                              value={item.duree}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `livedCountries[${index}].duree`,
                                id: `livedCountries[${index}].duree`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="duree_1">Moins de 1</option>
                              <option value="duree_2">1 an</option>
                              <option value="duree_3">2 ans</option>
                              <option value="duree_4">3 ans</option>
                              <option value="duree_5">4 ans</option>
                              <option value="duree_6">5 ans</option>
                              <option value="duree_6">Plus que 5 ans</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `livedCountries.${index}.duree`, false)
                                && getLoDash(errors, `livedCountries[${index}].duree`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `livedCountries[${index}].region`, false)
                              && !!getLoDash(errors, `livedCountries[${index}].region`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Région</InputLabel>
                            <Select
                              native
                              value={item.region}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `livedCountries[${index}].region`,
                                id: `livedCountries[${index}].region`,
                              }}
                              fullWidth
                            >
                              <RegionOption />
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `livedCountries.${index}.region`, false)
                                && getLoDash(errors, `livedCountries[${index}].region`, '')}
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
                    onClick={() => arrayHelper.push(initialValuesPaysVisite)}
                  >
                    Ajouter un country
                    <AddIcon />
                  </Button>
                </Grid>
              </div>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{
              margin: '20px',
            }}
          >
            Liste des country où j`ai travaillé
          </Typography>

          <FieldArray
            name="jobCountries"
            render={arrayHelper => (
              <div>
                {jobCountries.map((item, index) => (
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
                        xs={10}
                      >
                        <Grid item xs={12}>
                          <Typography variant="h4">
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Pays travaillé # {index + 1}
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
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `jobCountries[${index}].country`, false)
                              && !!getLoDash(errors, `jobCountries[${index}].country`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Liste des country visité</InputLabel>
                            <Select
                              native
                              value={item.country}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `jobCountries[${index}].country`,
                                id: `jobCountries[${index}].country`,
                              }}
                            >
                              <CountriesOption />
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `jobCountries.${index}.country`, false)
                                && getLoDash(errors, `jobCountries[${index}].country`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `jobCountries[${index}].duree`, false)
                              && !!getLoDash(errors, `jobCountries[${index}].duree`, false)
                            }
                          >
                            <InputLabel htmlFor="duree">Durée</InputLabel>
                            <Select
                              native
                              value={item.duree}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `jobCountries[${index}].duree`,
                                id: `jobCountries[${index}].duree`,
                              }}
                              fullWidth
                            >
                              <option value="" />
                              <option value="duree_1">Moins de 1</option>
                              <option value="duree_2">1 an</option>
                              <option value="duree_3">2 ans</option>
                              <option value="duree_4">3 ans</option>
                              <option value="duree_5">4 ans</option>
                              <option value="duree_6">5 ans</option>
                              <option value="duree_6">Plus que 5 ans</option>
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `jobCountries.${index}.duree`, false)
                                && getLoDash(errors, `jobCountries[${index}].duree`, '')}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} style={paddingInput}>
                          <FormControl
                            fullWidth
                            error={
                              getLoDash(touched, `jobCountries[${index}].region`, false)
                              && !!getLoDash(errors, `jobCountries[${index}].region`, false)
                            }
                          >
                            <InputLabel htmlFor="country">Région</InputLabel>
                            <Select
                              native
                              value={item.region}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              inputProps={{
                                name: `jobCountries[${index}].region`,
                                id: `jobCountries[${index}].region`,
                              }}
                              fullWidth
                            >
                              <RegionOption />
                            </Select>
                            <FormHelperText>
                              {getLoDash(touched, `jobCountries.${index}.region`, false)
                                && getLoDash(errors, `jobCountries[${index}].region`, '')}
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
                    onClick={() => arrayHelper.push(initialValuesPaysVecu)}
                  >
                    Ajouter un country
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

InterculturalTalentForm.propTypes = {
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

InterculturalTalentForm.defaultProps = {
  values: {
    languages: initialValuesLangue,
    visitedCountries: initialValuesPaysVisite,
    jobCountries: initialValuesPaysTravail,
  },
  errors: {
    languages: initialValuesLangue,
    visitedCountries: initialValuesPaysVisite,
    jobCountries: initialValuesPaysTravail,
  },
  touched: {
    languages: initialValuesLangue,
    visitedCountries: initialValuesPaysVisite,
    jobCountries: initialValuesPaysTravail,
  },
};

export default InterculturalTalentForm;
