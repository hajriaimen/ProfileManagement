/**
 * @file Formulaire capital competences ( simple form )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Grid,
  FormControl,
  Select,
  InputLabel,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Tooltip,
} from '@material-ui/core';

const paddingInput = {
  padding: '15px',
};

const initialValues = {
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
  interpersonalRelationships: '',
  changeContext: '',
  organizationLevel: '',
};

class CapitalSkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      values: {
        job,
        expertiseLevel,
        durationExpertise,
        managementLevel,
        duration,
        sizeManagedTeams,
        managedAnnualBudgets,
        caAnnualGenerated,
        problemResolution,
        workContent,
        interpersonalRelationships,
        changeContext,
        organizationLevel,
        teamManager,
        executiveCommitteeMember,
        entityBUSubsidiary,
        entityBuCorporate,
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
        {' '}
        <Typography variant="h4">Niveau d`expertise</Typography>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth error={touched.job && !!errors.job}>
            <InputLabel htmlFor="job">Métier</InputLabel>

            <Select
              native
              value={job}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'job',
                id: 'job',
              }}
            >
              <option value="" />
              <option value="job_1">Métier 1 </option>
              <option value="job_2">Métier 2 </option>
              <option value="job_3">Métier 3 </option>
            </Select>
            <FormHelperText>{touched.job ? errors.job : ''}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth error={touched.expertiseLevel && !!errors.expertiseLevel}>
            <InputLabel htmlFor="expertiseLevel">Niveau d`expertise</InputLabel>
            <Select
              native
              value={expertiseLevel}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'expertiseLevel',
                id: 'expertiseLevel',
              }}
            >
              <option value="" />
              <Tooltip title="Moins de 1 an d'expérience dans le métier. Développe encore son professionnalisme et ses connaissances techniques dans sa spécialité/ dans son métier">
                <option value="type_1">Niveau 1 : Débutant</option>
              </Tooltip>
              <Tooltip title="Entre 1 et  5  ans d'expérience dans le métier, Reconnu dans sa spécialité, transmet  son savoir faire à d’autres, apporte sa contribution dans différents projets dans sa spécialité.">
                <option value="type_2">Niveau 2 : Spécialiste métier</option>
              </Tooltip>
              <Tooltip title="Entre 5 et 10 ans d'expérience dans le métier. Apporte, son expertise et son conseil aux autres collègues de son entreprise/établissement. Est une force de proposition auprès de la direction générale, intervient comme spécialiste pour des projets importants sur le moyen terme.">
                <option value="type_3">Niveau 3 : Expert métier</option>
              </Tooltip>
              <Tooltip title="Plus de 10 ans d'expérience  dans le métier, apporte son conseil au plus haut niveau de l’entreprise et intervient sur plusieurs spécialités  et sur des projets à fort enjeux stratégique pour l’entreprise.">
                <option value="type_4">Niveau 4 : Expert confirmé</option>
              </Tooltip>
              <Tooltip title="Reconnu par ses pairs en dehors de son entreprise/établissement, est une référence dans sa spécialité, touche souvent aux activités de recherche et développement, réalise des publications internationales et/ou fait de la recherche dans l’entreprise ou dans un établissement d’études">
                <option value="type_5">Niveau 5 : Expert de haut niveau (R &D)</option>
              </Tooltip>
            </Select>
            <FormHelperText>{touched.expertiseLevel ? errors.expertiseLevel : ''}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth error={touched.durationExpertise && !!errors.durationExpertise}>
            <InputLabel htmlFor="durationExpertise">Durée</InputLabel>
            <Select
              native
              value={durationExpertise}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'durationExpertise',
                id: 'durationExpertise',
              }}
            >
              <option value="" />
              <option value={0}>Moins de 1 an</option>
              {
                [...Array(14).keys()].map(d => (
                  // eslint-disable-next-line react/jsx-one-expression-per-line
                  <option value={d + 1}>{d + 1} an{(d > 1) && 's'}</option>
                ))
              }
              <option value={99}>Plus que 15 ans</option>
            </Select>
            <FormHelperText>{touched.durationExpertise ? errors.durationExpertise : ''}</FormHelperText>
          </FormControl>
        </Grid>
        <br />
        <Typography variant="h4">Management hiérarchique</Typography>
        <br />
        <div>Managez vous au moins un manager d`équipe?</div>
        <Grid item xs={12} style={paddingInput}>
          <FormControlLabel
            control={(
              <Checkbox
                checked={teamManager}
                onChange={handleChange}
                onBlur={handleBlur}
                value="teamManager"
                name="teamManager"
                color="primary"
              />
              )}
            label="Oui"
          />
        </Grid>
        <div>
          {teamManager > 0 && (
            <div>
              <Grid item xs={12} style={paddingInput}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="expertiseLevel">Niveaux de management</InputLabel>
                  <Select
                    native
                    value={managementLevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{
                      name: 'managementLevel',
                      id: 'managementLevel',
                    }}
                  >
                    <option value="" />

                    <Tooltip title="Encadre temporairement des intérimaires et CDD (remplacement ou adjoint). Si vous etes Contremaitre/agent maitrise / manager débutant de moins d'un an.">
                      <option value="type_1">Niveau 1 : Manager débutant</option>
                    </Tooltip>
                    <Tooltip title="Manage une équipe ayant des fonctions/postes identiques  ou une équipe d’employés et techniciens  de facon permannente mais Ne manage pas de mangers ( cadres ) . Manage une direction fonctionnelle ou un service de production d'une petite entreprise. Managez un projet sur votre entité / site.">
                      <option value="type_2">Niveau 2 : Manager </option>
                    </Tooltip>
                    <Tooltip title="Manage une équipe ayant des postes/fonctions différentes mais appartenant  à la même famille métier  (départements, entité administrative, centre de profit ou centre de coût autonome). Si Vous manager un département comme une filiales commerciales, une DRH ou la DFC d'une grande entreprise importante. si vous pilotez un projet transversal comme projet leader , faisant intervenir plusieurs sites/entités.">
                      <option value="type_3">Niveau 3 : Manager confirmé</option>
                    </Tooltip>
                    <Tooltip title="Manage des spécialistes ayant des métiers différents.  Manage une entité autonome dans laquelle seuls quelques (3/5)  métiers sont représentés. Vous managez une direction  ayant des métiers diffétentes comme par exemple manage  la production, la logistique et la planification etc.). Vous etes membre d'un comité de direction">
                      <option value="type_4">Niveau 4 : Manager senior</option>
                    </Tooltip>
                    <Tooltip title="Managez une entreprise/Etablissement  où tous les métiers sont représentés (production, commerial, finance , RH, etc.). Vous etes Général Manager, vous etes responsable de votre rentabilité (PNL)">
                      <option value="type_5">Niveau 5 : General Manager</option>
                    </Tooltip>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} style={paddingInput}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="duration_management">Durée</InputLabel>
                  <Select
                    native
                    value={duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{
                      name: 'duration_management',
                      id: 'duration_management',
                    }}
                  >
                    <option value="" />
                    <option value={0}>Moins de 1 an</option>
                    {
                      [...Array(14).keys()].map(d => (
                        // eslint-disable-next-line react/jsx-one-expression-per-line
                        <option value={d + 1}>{d + 1} an{(d > 1) && 's'}</option>
                      ))
                    }
                    <option value={99}>Plus que 15 ans</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} style={paddingInput}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="sizeManagedTeams">Taille d`équipes managées</InputLabel>
                  <Select
                    native
                    value={sizeManagedTeams}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{
                      name: 'sizeManagedTeams',
                      id: 'sizeManagedTeams',
                    }}
                  >
                    <option value="" />
                    <option value="niveau_1">Moins de 5 personnes</option>
                    <option value="niveau_2">5 à 9 personnes</option>
                    <option value="niveau_3">10 à 19 personnes</option>
                    <option value="niveau_4">20 à 49 personnes</option>
                    <option value="niveau_5">50 à 99 personnes</option>
                    <option value="niveau_6">100 à 499 personnes</option>
                    <option value="niveau_7">500 à 999 personnes</option>
                    <option value="niveau_8">1000 personnes et plus</option>
                  </Select>
                </FormControl>
              </Grid>
              <br />
              <div>Etes vous membre d`un comité de direction ?</div>
              <Grid item xs={12} style={paddingInput}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={executiveCommitteeMember}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="executiveCommitteeMember"
                      name="executiveCommitteeMember"
                      color="primary"
                    />
                    )}
                  label="Oui"
                />
              </Grid>
              {executiveCommitteeMember > 0 && (
                <div>
                  <Grid item xs={12} style={paddingInput}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={entityBUSubsidiary}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="entityBUSubsidiary"
                          name="entityBUSubsidiary"
                          color="primary"
                        />
                        )}
                      label="Entité.BU filiale"
                    />
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={entityBuCorporate}
                          onChange={handleChange}
                          value="entityBuCorporate"
                          name="entityBuCorporate"
                          color="primary"
                        />
                        )}
                      label="Entité.BU Corporate"
                    />
                  </Grid>
                </div>
              )}
            </div>
          )}
        </div>
        <br />
        <Typography variant="h4">Dimension de mes responsabilités</Typography>
        <br />
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth>
            <InputLabel htmlFor="managedAnnualBudgets">Budgets annuelsgérés</InputLabel>
            <Select
              native
              value={managedAnnualBudgets}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'managedAnnualBudgets',
                id: 'managedAnnualBudgets',
              }}
            >
              <option value="" />
              <option value="niveau_1">Moins de 10 K€</option>
              <option value="niveau_2">10 à 49 K €</option>
              <option value="niveau_3">50 à 99 K€</option>
              <option value="niveau_4">100 à 199 K€</option>
              <option value="niveau_5">200 à 999 K€</option>
              <option value="niveau_6">1 000 à 4999 K€</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth>
            <InputLabel htmlFor="caAnnualGenerated">CA annuel généré</InputLabel>
            <Select
              native
              value={caAnnualGenerated}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'caAnnualGenerated',
                id: 'caAnnualGenerated',
              }}
            >
              <option value="" />
              <option value="niveau_1">Moins de 10 K€</option>
              <option value="niveau_2">10 à 49 K €</option>
              <option value="niveau_3">50 à 99 K€</option>
              <option value="niveau_4">100 à 199 K€</option>
              <option value="niveau_5">200 à 999 K€</option>
              <option value="niveau_6">1 000 à 4999 K€</option>
            </Select>
          </FormControl>
        </Grid>
        <br />
        <Typography variant="h4">Management de la complexité</Typography>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth>
            <InputLabel htmlFor="problemResolution">Résolution de problème</InputLabel>
            <Select
              native
              value={problemResolution}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'problemResolution',
                id: 'problemResolution',
              }}
            >
              <option value="" />
              <option value="niveau_1">Appliquer</option>
              <option value="niveau_2">Adabter</option>
              <option value="niveau_3">Changer</option>
              <option value="niveau_4">Exporer</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth>
            <InputLabel htmlFor="workContent">Contenu du travail</InputLabel>
            <Select
              native
              value={workContent}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'workContent',
                id: 'workContent',
              }}
            >
              <option value="" />
              <option value="niveau_1">
                Taches quotidiennes, prévues par le desciptif de poste
              </option>
              <option value="niveau_2">
                Planification organisation et suivi du travail hebdomadaire
              </option>
              <option value="niveau_3">Management de personnes et de leur travail</option>
              <option value="niveau_4">
                Coordination entre différentes entités (Projets ou inter jobs)
              </option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth>
            <InputLabel htmlFor="interpersonalRelationships">
              Relations interpersonnelles
            </InputLabel>
            <Select
              native
              value={interpersonalRelationships}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'interpersonalRelationships',
                id: 'interpersonalRelationships',
              }}
            >
              <option value="" />
              <option value="niveau_1">
                Echanges des informations simples sur son travail quotidien. Facilitaion du travail
              </option>
              <option value="niveau_2">
                Echanges pour convaincre(manage des équipes, animés des réunions / formations,
                écoute le marché). Role de communicationt
              </option>
              <option value="niveau_3">
                Echanges complexes l`entreprise (mobilise, influence le choix de l`entreprise, etc)
              </option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth>
            <InputLabel htmlFor="changeContext">Contexte de changement</InputLabel>
            <Select
              native
              value={changeContext}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'changeContext',
                id: 'changeContext',
              }}
            >
              <option value="" />
              <option value="niveau_1">
                Stable: exercice du poste sans changements majeurs connus (en cours ou à venir)
              </option>
              <option value="niveau_2">
                Changement significatif avec impact sensible sur les méthodes et techniques de
                travail
              </option>
              <option value="niveau_3">
                Evolution: impact fort sur le travail ou le métier et sur l`organisation globale de
                l`entreprise
              </option>
              <option value="niveau_4">
                Rupture (contexte avec changements majeurs: novelles stratégies marchés / nouveaux
                marchés en développement / nouvelle technologie)
              </option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth>
            <InputLabel htmlFor="organizationLevel">Niveau d`organisation</InputLabel>
            <Select
              native
              value={organizationLevel}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'organizationLevel',
                id: 'organizationLevel',
              }}
            >
              <option value="" />
              <option value="niveau_1">
                pyramidale , les décisions pprises par le patron seul
              </option>
              <option value="niveau_2">
                pyramidale mais chaque entité propose et améliore les choses sans passer
                nécesssairement par le big boss
              </option>
              <option value="niveau_3">
                entités souples ou les déisions see prennent après échanges entre ses membres
              </option>
              <option value="niveau_4">
                entités agiles coordonnées, fonctionnement par projets sur des équipes flexibles
              </option>
            </Select>
          </FormControl>
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

CapitalSkillsForm.propTypes = {
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

CapitalSkillsForm.defaultProps = {
  values: initialValues,
  errors: initialValues,
  touched: initialValues,
};

export default CapitalSkillsForm;
