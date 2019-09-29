/**
 * @file a component renders a list of chekboxes and a text field
 * for the candidate to choose his reason(s) (at least one) to join
 *  the plateform (new Job, pro Career, Entreprise Career, other )
 * and he will validate his choice with a submit button
 * @author Ayemn HAJRI
 * @date 2019-01-29
 */

import React from 'react';

import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@material-ui/core';

import SignUp from '../SignUp/SignUp';

class Choices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newJob: false,
      proCareer: false,
      EntrepriseCareer: false,
      other: false,
      otherDescription: '',
      toggleSignUp: false,
    };

    this.validateChoice = this.validateChoice.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
  }

  /** validate the user checked one value at least */
  validateChoice() {
    const {
      newJob, proCareer, EntrepriseCareer, other, otherDescription,
    } = this.state;
    return (
      newJob
      || proCareer
      || EntrepriseCareer
      || (other && otherDescription
      )
    );
  }

  // handle changes of the TextField and the checkboxes
  handleChoiceOptione(name, event) {
    if (event.target.id === 'otherDescription') {
      this.setState({ [name]: event.target.value });
    } else {
      this.setState({ [name]: event.target.checked });
    }
  }

  // submit the value when the button is clicked


  showSignUp() {
    const { toggleSignUp } = this.state;
    this.setState({ toggleSignUp: !toggleSignUp });
  }

  render() {
    const {
      newJob,
      proCareer,
      EntrepriseCareer,
      other,
      otherDescription,
      toggleSignUp,
    } = this.state;

    if (!toggleSignUp) {
      return (
        <Grid
          container
          justify="center"
          style={{ visibility: (toggleSignUp) ? 'hidden' : 'visible' }}
        >
          <form onSubmit={this.submitChoice}>
            <Grid container className="Candidate-choice" style={{ paddingTop: '1rem' }} justify="center">
              <Grid item xs={7} className="title">
                <Typography variant="h4" component="h2">
                  Pour quelle raison vous inscrivez-vous ?
                </Typography>
              </Grid>

              {/** form that contains a multiple checkboxes */}
              <Grid item xs={6}>
                <FormGroup>
                  <Grid item>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={newJob}
                          onChange={event => this.handleChoiceOptione('newJob', event)}
                          value="newJob"
                          color="primary"
                        />
                      )}
                      label="Trouver un nouveau job"
                    />
                  </Grid>

                  <Grid item>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={proCareer}
                          onChange={event => this.handleChoiceOptione('proCareer', event)}
                          value="proCareer"
                          color="primary"
                        />
                      )}
                      label="Bâtir mon projet professionnel "
                    />
                  </Grid>

                  <Grid item>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={EntrepriseCareer}
                          onChange={event => this.handleChoiceOptione('EntrepriseCareer', event)}
                          value="EntrepriseCareer"
                          color="primary"
                        />
                      )}
                      label="Faire avancer ma carrière dans l’entreprise"
                    />
                  </Grid>

                  <Grid item>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={other}
                          onChange={event => this.handleChoiceOptione('other', event)}
                          value="other"
                          color="primary"
                        />
                      )}
                      label="Autre : préciser"
                    />
                    <Grid item>
                      <TextField
                        id="otherDescription"
                        multiline
                        label="Description"
                        onChange={event => this.handleChoiceOptione('otherDescription', event)}
                        rowsMax="4"
                        value={other ? otherDescription : ''}
                        margin="normal"
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                </FormGroup>
              </Grid>

              {/** validation button */}
              <Grid container justify="center" className="button-Grid">
                <Grid item>

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!this.validateChoice()}
                    onClick={this.showSignUp}
                  >
                    Suivant
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      );
    }
    return (
      <Grid style={{ visibility: (toggleSignUp) ? 'visible' : 'hidden' }}>
        <SignUp
          choices={this.state}
        />
      </Grid>
    );
  }
}

export default Choices;
