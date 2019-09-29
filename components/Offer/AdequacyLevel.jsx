/**
 * @file adequacy  Level component that renders a bar to show the level of adequacy
 * if the profile is complete else it shows a dialog to inform
 * the candiate to complete his profile
 * @author Aymen HAJRI
 * @date 2019-02-13
 */

import React from 'react';
import {
  Grid,
  Button,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MobileStepper from '@material-ui/core/MobileStepper';

// niveau d'adéquation
const ADEQUACY_VALUE = 8;

// savoir le status de profil si complet ou nn
const IS_PROFILE_COMPLETE = false;


class AdequacyLevel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adequacyValue: ADEQUACY_VALUE,
      isProfileComplete: IS_PROFILE_COMPLETE,
      openAdequacy: false,
      openAdequacyAlert: false,
    };

    this.toggleAdequacyButton = this.toggleAdequacyButton.bind(this);
    this.openAdequacyAlert = this.openAdequacyAlert.bind(this);
    this.closeAdequacyAlert = this.closeAdequacyAlert.bind(this);
  }

  // methode pour savoir si le candidat à demander son niveau d'adéquation
  toggleAdequacyButton() {
    this.setState(prevState => ({
      openAdequacy:
      !prevState.openAdequacy,
    }));
  }

  // changer le state du Dialog si le profil de candidat n'est pas complet
  openAdequacyAlert() {
    this.setState({ openAdequacyAlert: true });
  }

  // changer le state du Dialog pour le fermer
  closeAdequacyAlert() {
    this.setState({ openAdequacyAlert: false });
  }

  render() {
    const {
      adequacyValue, isProfileComplete, openAdequacy, openAdequacyAlert,
    } = this.state;

    // afficher le niveau si le profil est complet
    if (openAdequacy && isProfileComplete) {
      return (
        <div>
          <Grid container>

            {/** boutton pour montrer le niveau d'adéquation */}
            <Grid item xs={2}>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={this.toggleAdequacyButton}
                style={{ visibility: (openAdequacy) ? 'hidden' : 'visible' }}
              >
                Adequacy Level
              </Button>
            </Grid>

            {/** progress bar pour montrer le niveau d'adéquation */}
            <Grid item xs={10}>
              <MobileStepper
                variant="progress"
                steps={10}
                position="static"
                activeStep={adequacyValue}
              />
            </Grid>
          </Grid>
        </div>
      );
    }

    // si le profil de candidat n'est pas complet, le modal sera affiché
    return (
      <div>

        {/** boutton pour montrer le niveau d'adéquation */}
        <Grid item xs={2}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => { this.toggleAdequacyButton(); this.openAdequacyAlert(); }}
            style={{ visibility: (openAdequacy && openAdequacyAlert) ? 'hidden' : 'visible' }}
          >
              Adequacy Level
          </Button>
        </Grid>

        {/** Dialog pour informer le candidat queson profil n'est pas complet */}
        <Dialog
          open={openAdequacyAlert && !isProfileComplete && this.openAdequacyAlert}
          onClose={this.closeAdequacyAlert}
        >
          <DialogContent>
            <DialogContentText>
              votre profil n&apos;est pas complet
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeAdequacyAlert} color="primary">
              Annuler
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default AdequacyLevel;
