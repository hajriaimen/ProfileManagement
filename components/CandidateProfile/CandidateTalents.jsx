/**
 * @file Candidate Profile my talents
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

class CandidateTalents extends React.Component {
  constructor(props) {
    super(props);

    this.renderlineElement = renderlineElement.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(labl, value, type) {
    if (value) {
      if (type === 'array') {
        return (
          renderlineElement(labl, value.map(({ id, label }) => (
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
        {/* start my talents */}
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <IconButton className={styles.iconEdit}>
              <Link href="/profile">
                <Edit />
              </Link>
            </IconButton>

            <Typography variant="h5" className={styles.parentTitle}>
              Talents
            </Typography>

            {/* start my experiences */}
            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Expériences
              </Typography>

              { getLoDash(data, 'experiences', []).map(experience => (
                <Paper key={experience.id} className={styles.paper}>
                  <div className={styles.title}>
                    {experience.postTitle}
                  </div>

                  {this.renderRow('Statut', getLoDash(experience, 'status'))}
                  {this.renderRow('Type de contrat', getLoDash(experience, 'contractType'))}
                  {this.renderRow('Duree', getLoDash(experience, 'duration'))}
                  {this.renderRow('Responsabilité', getLoDash(experience, 'responsability'))}
                  {this.renderRow('Taille de l\'entité du poste', getLoDash(experience, 'postEntitySize'))}
                  {this.renderRow('Taille de groupe d\'appartenance', getLoDash(experience, 'groupSize'))}
                  {this.renderRow('Salaire fixe', getLoDash(experience, 'fixSalary'))}
                  {this.renderRow('Salaire variable', getLoDash(experience, 'variableSalary'))}

                  <Grid container spacing={24}>
                    <Grid item xs={6} className={styles.leftGrid}>
                      Avantages
                    </Grid>

                    <Grid item xs={6}>
                      {getLoDash(experience, 'avantages', []).map(({ id, label, value }) => (
                        <div key={id}>
                          {label}
                          {value}
                        </div>
                      ))}
                    </Grid>
                  </Grid>
                </Paper>
              )) }
            </Paper>
            {/* end my experiences */}

            {/* start my capitalSkill */}
            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Capital compétence
              </Typography>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Niveau d&apos;expertise
                </Typography>

                {this.renderRow('Métier', getLoDash(data, 'capitalSkill.expertiseLevel.metier'))}
                {this.renderRow('Niveau d\'expertise', getLoDash(data, 'capitalSkill.expertiseLevel.level'))}
                {this.renderRow('Durée', getLoDash(data, 'capitalSkill.expertiseLevel.duration'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Management hiérarchique
                </Typography>

                {this.renderRow('Menager vous au moins un manager d\'equipe', getLoDash(data, 'capitalSkill.hierarchicalManagement'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Dimension de mes responsabilité
                </Typography>

                {this.renderRow('Budgets annuels génés', getLoDash(data, 'capitalSkill.responsibilitiesDimension.managedAnnualBudgets'))}
                {this.renderRow('CA annuels génés', getLoDash(data, 'capitalSkill.responsibilitiesDimension.AnnualCA'))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Management de la complexité
                </Typography>

                {this.renderRow('Resolution de probleme', getLoDash(data, 'capitalSkill.complexityManagement.problemResolution'))}
                {this.renderRow('Contenu du travail', getLoDash(data, 'capitalSkill.complexityManagement.jobContent'))}
                {this.renderRow('Relations interpersonnelles', getLoDash(data, 'capitalSkill.complexityManagement.interpersonalRelationship'))}
                {this.renderRow('Contexte de changement', getLoDash(data, 'capitalSkill.complexityManagement.changeContext'))}
                {this.renderRow('Niveau d\'organisation', getLoDash(data, 'capitalSkill.complexityManagement.organizationLevel'))}
              </Paper>
            </Paper>
            {/* end my capitalSkill */}

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

            {/* start my intellectualTalent */}
            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Talent intellectuel
              </Typography>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  Communication intellectuelle
                </Typography>

                {getLoDash(data, 'intellectualTalent.interculturalCommunication', []).map(item => (
                  <div key={item.langague}>
                    {this.renderRow(getLoDash(item, 'langague'), getLoDash(item, 'level'))}
                  </div>
                ))}
              </Paper>

              <Paper className={styles.paper}>
                <Typography variant="h6" className={styles.title}>
                  interculturalDimension
                </Typography>

                <Typography variant="h6" className={styles.title}>
                  Pays visité
                </Typography>

                {getLoDash(data, 'intellectualTalent.interculturalDimension.visitedCounrty', []).map(item => (
                  <Paper key={item.country.name} style={{ padding: '0.5rem', margin: '0.5rem' }}>
                    {this.renderRow('Pays', getLoDash(item, 'country.name'))}
                    {this.renderRow('Durée', getLoDash(item, 'duration'))}
                    {this.renderRow('Region', getLoDash(item, 'region'))}
                  </Paper>
                ))}

                <Typography variant="h6" className={styles.title}>
                  Pays vécu
                </Typography>

                {getLoDash(data, 'intellectualTalent.interculturalDimension.livedCountry', []).map(item => (
                  <Paper key={item.country.name} className={styles.paper}>
                    {this.renderRow('Pays', getLoDash(item, 'country.name'))}
                    {this.renderRow('Durée', getLoDash(item, 'duration'))}
                    {this.renderRow('Region', getLoDash(item, 'region'))}
                  </Paper>
                ))}

                <Typography variant="h6" className={styles.title}>
                  Pays travaillé
                </Typography>

                {getLoDash(data, 'intellectualTalent.interculturalDimension.workCountry', []).map(item => (
                  <Paper key={item.country.name} className={styles.paper}>
                    {this.renderRow('Pays', getLoDash(item, 'country.name'))}
                    {this.renderRow('Durée', getLoDash(item, 'duration'))}
                    {this.renderRow('Region', getLoDash(item, 'region'))}
                  </Paper>
                ))}
              </Paper>
            </Paper>
            {/* end my intellectualTalent */}

            {/* start my intellectualTalent */}
            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Autre connaissances aquises
              </Typography>

              {this.renderRow('Niveau informatique/bureatique', getLoDash(data, 'otherKnowledges.softwareLevel'))}
              {this.renderRow('Utilisation d\'internet', getLoDash(data, 'otherKnowledges.internet'))}
              {this.renderRow('Utilisation de reseaux sociaux', getLoDash(data, 'otherKnowledges.socialMedia'))}
              {this.renderRow('Utilisation des outils collaboratifs', getLoDash(data, 'otherKnowledges.collaborativeTools'))}
            </Paper>
          </Paper>
        </Grid>
        {/* end my intellectualTalent */}
      </React.Fragment>
    );
  }
}

CandidateTalents.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

CandidateTalents.defaultProps = {
  data: {},
};

export default CandidateTalents;
