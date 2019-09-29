/**
 * @file Candidate Personal Info
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


class CandidatePersonalInfo extends React.Component {
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
        {/* personal infos */}
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <IconButton className={styles.iconEdit}>
              <Link href="/profile">
                <Edit />
              </Link>
            </IconButton>

            <Typography variant="h5" className={styles.parentTitle}>
              Informations personnelles
            </Typography>

            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                  Situation personnelle
              </Typography>

              {this.renderRow('Situation familiale', getLoDash(data, 'familySituation'))}
              {this.renderRow('Nombre d\'enfants', getLoDash(data, 'childrenNumber')) }
              {this.renderRow('Date de naissance', getLoDash(data, 'civility.identity.birthday')) }
              {this.renderRow('Pays de naissance', getLoDash(data, 'birthCountry.name')) }
            </Paper>

            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Coordonnées
              </Typography>

              {this.renderRow('Adresse', getLoDash(data, 'contactInfo.address')) }
              {this.renderRow('Ville', getLoDash(data, 'contactInfo.city')) }
              {this.renderRow('Pays', getLoDash(data, 'contactInfo.country.name')) }
              {this.renderRow('Mobile/gsm', getLoDash(data, 'contactInfo.mobile')) }
              {this.renderRow('Fixe personnel', getLoDash(data, 'contactInfo.deskPhonePerso')) }
              {this.renderRow('Fixe professionnel', getLoDash(data, 'contactInfo.deskPhonePro')) }
              {this.renderRow('Site internet', getLoDash(data, 'contactInfo.socialMedias'), 'array') }
            </Paper>

            <Paper className={styles.paper}>
              <Typography variant="h6" className={styles.childTitle}>
                Spécificité
              </Typography>

              {this.renderRow('Handicap déclaré', getLoDash(data, 'speciality.handicap')) }
              {this.renderRow('Adaptation au poste de travail?', getLoDash(data, 'speciality.workstationAdaptation')) }
              {this.renderRow('Type de contre-indications médicales', getLoDash(data, 'speciality.medicalContraindicationType'), 'array') }
              {this.renderRow('Appartenance à une population sujette à discrimination', getLoDash(data, 'speciality.discriminationPopulationSubject'), 'array') }
              {this.renderRow('speciality.status', getLoDash(data, 'speciality.status')) }
            </Paper>
          </Paper>
        </Grid>
        {/* end personal infos */}
      </React.Fragment>
    );
  }
}

CandidatePersonalInfo.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

CandidatePersonalInfo.defaultProps = {
  data: {},
};

export default CandidatePersonalInfo;
