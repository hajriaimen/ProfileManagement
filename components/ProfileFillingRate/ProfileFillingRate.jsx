/**
 * @file Profile Filling Rate
 * @author BENHZEZ Ali
 * @date 2019-02-11
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  MobileStepper,
} from '@material-ui/core';
import styles from './styles.css';

const classes = {
  progress: styles.progress,
};

const ProfileFillingRate = ({ rates }) => (
  <React.Fragment>
    <div>
      <Typography variant="h6" className={styles.title}>
        Taux de remplissage du profil
      </Typography>

      <div className={styles.div}>
        <Typography className={styles.title}>Global</Typography>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <MobileStepper
              variant="progress"
              steps={100}
              position="static"
              activeStep={rates.global}
              classes={classes}
            />
          </Grid>

          <Grid item xs={2}>
            <Typography>{`${rates.global}%`}</Typography>
          </Grid>
        </Grid>
      </div>

      <div className={styles.div}>
        <Typography className={styles.title}>Informations personnelles</Typography>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <MobileStepper
              variant="progress"
              steps={100}
              position="static"
              activeStep={rates.personnalInfos}
              classes={classes}
            />
          </Grid>

          <Grid item xs={2}>
            <Typography>{`${rates.personnalInfos}%`}</Typography>
          </Grid>
        </Grid>
      </div>

      <div className={styles.div}>
        <Typography className={styles.title}>Talents</Typography>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <MobileStepper
              variant="progress"
              steps={100}
              position="static"
              activeStep={rates.talents}
              classes={classes}
            />
          </Grid>

          <Grid item xs={2}>
            <Typography>{`${rates.talents}%`}</Typography>
          </Grid>
        </Grid>
      </div>

      <div className={styles.div}>
        <Typography className={styles.title}>Projet professionnel</Typography>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <MobileStepper
              variant="progress"
              steps={100}
              position="static"
              activeStep={rates.profProject}
              classes={classes}
            />
          </Grid>

          <Grid item xs={2}>
            <Typography>{`${rates.profProject}%`}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  </React.Fragment>
);

ProfileFillingRate.propTypes = {
  rates: PropTypes.shape({
    global: PropTypes.number.isRequired,
    personnalInfos: PropTypes.number.isRequired,
    talents: PropTypes.number.isRequired,
    profProject: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfileFillingRate;
