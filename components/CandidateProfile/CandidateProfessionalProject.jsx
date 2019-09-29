/**
 * @file Candidate Profile Professional Project
 * @author BENHZEZ Ali
 * @date 2019-02-26
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { get as getLoDash } from 'lodash';
import {
  Grid,
  Paper,
  Typography,
  IconButton,
} from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import styles from './styles.css';


const renderlineElement = (element, value) => (
  <Grid key={element + value} container spacing={24}>
    <Grid item xs={6} className="leftGrid">
      {element}
    </Grid>

    <Grid item xs={6}>
      {value}
    </Grid>
  </Grid>
);


class CandidateProfessionalProject extends React.Component {
  constructor(props) {
    super(props);

    this.renderlineElement = renderlineElement.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(labl, value, type) {
    if (value) {
      if (type === 'array') {
        return (
          this.renderlineElement(labl, value.map(({ id, label }) => (
            <div key={id}>
              {label}
            </div>
          )))
        );
      } return this.renderlineElement(labl, value);
    } return '';
  }

  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        {/* start prof project */}
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <IconButton className={styles.iconEdit}>
              <Link href="/profile">
                <Edit />
              </Link>
            </IconButton>

            <Typography variant="h5" className={styles.parentTitle}>
              Projet professionnel
            </Typography>

            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Projet &Ambition
              </Typography>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Caractéristique du poste
                </Typography>

                {this.renderRow('Titre', getLoDash(data, 'ProjetAmbition.poste.titre'))}
                {this.renderRow('Metier', getLoDash(data, 'ProjetAmbition.poste.metier'), 'array')}
                {this.renderRow('Secteurs', getLoDash(data, 'ProjetAmbition.poste.secteur'))}
                {this.renderRow('Taille entreprise', getLoDash(data, 'ProjetAmbition.poste.taille_entreprise'))}
                {this.renderRow('Niveau de management', getLoDash(data, 'ProjetAmbition.poste.niveau_management'))}
                {this.renderRow('Responsabilité géographique du poste', getLoDash(data, 'ProjetAmbition.poste.responsabilite_geographique'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Niveau d&apos;expertise visée dans mon projet
                </Typography>

                {this.renderRow('Metier', getLoDash(data, 'ProjetAmbition.expertiseLevel.metiers'), 'array')}
                {this.renderRow('Niveau d\'expertise', getLoDash(data, 'ProjetAmbition.expertiseLevel.level'))}
                {this.renderRow('Secteur souhaité', getLoDash(data, 'ProjetAmbition.expertiseLevel.sector'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Management hiérarchique
                </Typography>

                {this.renderRow('Niveau de management à atteindre', getLoDash(data, 'ProjetAmbition.hierarchicalManagement.level'))}
                {this.renderRow('Taille des équipes à manager', getLoDash(data, 'ProjetAmbition.hierarchicalManagement.teamSize'))}
                {this.renderRow('Budget annuel à gérer', getLoDash(data, 'ProjetAmbition.hierarchicalManagement.annualBudgets'))}
                {this.renderRow('CA annuel à générer', getLoDash(data, 'ProjetAmbition.hierarchicalManagement.annualCA'))}
                {this.renderRow('Etre membre de comité ou pas', getLoDash(data, 'ProjetAmbition.hierarchicalManagement.BeCommitteeMember'))}
                {this.renderRow('Entité.BU filiale', getLoDash(data, 'ProjetAmbition.hierarchicalManagement.entite_bu_filiale'))}
                {this.renderRow('Entité.BU Corporate', getLoDash(data, 'ProjetAmbition.hierarchicalManagement.entite_bu_corporate'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Management de projet
                </Typography>

                {this.renderRow('Niveau de compétence à atteindre', getLoDash(data, 'ProjetAmbition.projectManagement.level'))}
                {this.renderRow('Nombre de personnes coordonnées', getLoDash(data, 'ProjetAmbition.projectManagement.nombre_personne_coordonnees'))}
                {this.renderRow('Budgets annuels gérés', getLoDash(data, 'ProjetAmbition.projectManagement.budgets_annuels_geres'))}
                {this.renderRow('CA annuel généré', getLoDash(data, 'ProjetAmbition.projectManagement.ca_annuel_generes'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Management de la complexité
                </Typography>

                {this.renderRow('Résolution de problème', getLoDash(data, 'ProjetAmbition.complexityManagement.resolution_probleme'))}
                {this.renderRow('Contenu du travail', getLoDash(data, 'ProjetAmbition.complexityManagement.contenu_travail'))}
                {this.renderRow('Relations interpersonnelles', getLoDash(data, 'ProjetAmbition.complexityManagement.relations_interpersonnelles'))}
                {this.renderRow('Contexte de changement', getLoDash(data, 'ProjetAmbition.complexityManagement.contexte_changement'))}
                {this.renderRow('Niveau organisation', getLoDash(data, 'ProjetAmbition.complexityManagement.niveau_organisation'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  CULTURE D&apos;ENTREPRISE SOUHAITEE
                </Typography>

                {this.renderRow('Secteur', getLoDash(data, 'ProjetAmbition.ces.secteur'))}
                {this.renderRow('Actionnariat', getLoDash(data, 'ProjetAmbition.ces.actionnariat'))}
                {this.renderRow('Organisation', getLoDash(data, 'ProjetAmbition.ces.organisation'))}
                {this.renderRow('Management', getLoDash(data, 'ProjetAmbition.ces.management'))}
                {this.renderRow('Politique RH', getLoDash(data, 'ProjetAmbition.ces.politique_RH'))}
                {this.renderRow('Climat travail', getLoDash(data, 'ProjetAmbition.ces.climat_travail'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  {'CULTURE DE MON FUTUR SUPERIEUR HIERARCHIQUE'}
                </Typography>

                {this.renderRow('Titre du Poste du N+1 du poste', getLoDash(data, 'ProjetAmbition.cfsh.titre_poste_n1'))}
                {this.renderRow('Style de management', getLoDash(data, 'ProjetAmbition.cfsh.style_management'), 'array')}
                {this.renderRow('Organisation', getLoDash(data, 'ProjetAmbition.cfsh.organisation'))}
                {this.renderRow('Management', getLoDash(data, 'ProjetAmbition.cfsh.management'), 'array')}
                {this.renderRow('Intégration des nouveaux', getLoDash(data, 'ProjetAmbition.cfsh.integration_nouveaux'))}
                {this.renderRow('mentoring (tuteur externe ou interne) durant période d\'essai', getLoDash(data, 'ProjetAmbition.cfsh.mentoring'))}
              </Paper>
            </Paper>

            {/* start my capitalKnowledge */}
            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Capital connaissances
              </Typography>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Diplomes
                </Typography>

                {getLoDash(data, 'capitalKnowledge.diplomes', []).map(diplome => (
                  <Paper key={diplome.id} className={styles.paper}>
                    <div className={styles.smallBlockTitle}>
                      {diplome.title}
                    </div>

                    {this.renderRow('Date debut', getLoDash(diplome, 'dateStart'))}
                    {this.renderRow('Date fin', getLoDash(diplome, 'dateEnd'))}
                    {this.renderRow('Domaine', getLoDash(diplome, 'domaine'))}
                    {this.renderRow('Nom de diplome', getLoDash(diplome, 'title'))}
                    {this.renderRow('Type d\'etablissememnt', getLoDash(diplome, 'etablissementType'))}
                    {this.renderRow('Pays', getLoDash(diplome, 'country'))}
                  </Paper>
                ))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Formations
                </Typography>
                {getLoDash(data, 'capitalKnowledge.formations', []).map(formation => (
                  <Paper key={formation.id} className={styles.paper}>
                    <div className={styles.smallBlockTitle}>
                      {formation.title}
                    </div>

                    {this.renderRow('Date debut', getLoDash(formation, 'dateStart'))}
                    {this.renderRow('Date fin', getLoDash(formation, 'dateEnd'))}
                    {this.renderRow('Domaine', getLoDash(formation, 'domaine'))}
                    {this.renderRow('Nom de diplome', getLoDash(formation, 'title'))}
                    {this.renderRow('Type d\'etablissememnt', getLoDash(formation, 'etablissementType'))}
                    {this.renderRow('Pays', getLoDash(formation, 'country'))}
                  </Paper>
                ))}
              </Paper>
            </Paper>
            {/* end my capitalKnowledge */}
          </Paper>
        </Grid>
        {/* end prof project */}
      </React.Fragment>
    );
  }
}

CandidateProfessionalProject.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

CandidateProfessionalProject.defaultProps = {
  data: {},
};

export default CandidateProfessionalProject;
