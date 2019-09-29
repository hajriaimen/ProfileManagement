/**
 * @file Component renders a card list of offers based on the OfferCard component
 * @author Aymen HAJRI
 * @date 2019-03-28
 */

import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ACCOUNTBALANCE from '@material-ui/icons/AccountBalance';
import LOCATION from '@material-ui/icons/LocationOn';
import BUISNESS from '@material-ui/icons/Business';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import Assignment from '@material-ui/icons/Assignment';
import POLL from '@material-ui/icons/Poll';
import RESPONSABILITY from '@material-ui/icons/HowToReg';

const FILTERS = {
  companies: [
    {
      id: 1,
      name: 'IP',
    },
    {
      id: 2,
      name: 'imaginePartners',
    },
    {
      id: 3,
      name: 'google',
    },
    {
      id: 4,
      name: 'Microsoft',
    },
  ],
};
const CITIES = ['paris', 'tunis', 'alger', 'lyon'];
const SECTORS = ['IT', 'Industrie', 'Public', 'Medical'];
const POST_TITLES = ['ingénieur', 'technicien', 'assistant'];
const CONTRACT_TYPES = ['CDI', 'Stage', 'CDD', 'Détachement'];
const DOMAINS = ['IT', 'biology', 'chemie', 'mécanique'];
const RESONSABILITIES_LEVEL = [
  'chef d équipe',
  'chef de projet',
  'tech lead',
  'assistant',
];

class FilterByCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [...FILTERS.companies],
      companiesFilter: [],

      cityFilter: [...CITIES],
      sectorsFilter: [...SECTORS],
      titresFilter: [...POST_TITLES],
      contratFilter: [...CONTRACT_TYPES],
      domaineFilter: [...DOMAINS],
      responsabilityFilter: [...RESONSABILITIES_LEVEL],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.updateCareerFieldCheck = this.updateCareerFieldCheck.bind(this);
  }

  handleChange(event, name) {
    event.preventDefault();
    const { cityFilter } = this.state;
    this.setState({
      cityFilter: [{ ...cityFilter.value }, event.target.checked],
    });
  }

  handleChange2(name, index, event) {
    console.log(event);
    this.setState((state) => {
      const { name } = state;
      companies[index][name] = event.target;
      companies[index].checked = true; // to do
      return this.setState({
        companies,
      });
    });

    console.log(this.state.companiesFilter);
  }

  updateCareerFieldCheck(target, index, key, name) {
    const test = name.toString();
    this.setState((state) => {
      const { test } = state;
      test[index][key] = target.checked;
      return this.setState({
        test,
      });
    });
    console.log(this.state.name);
  }

  render() {
    const {
      companies,
      cityFilter,
      sectorsFilter,
      titresFilter,
      contratFilter,
      domaineFilter,
      responsabilityFilter,
    } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ margin: ' 0px 0px', float: 'right' }}
      >
        <Grid
          item
          xs={12}
          style={{
            width: '100%',
            backgroundColor: '#ddd',
          }}
        >
          <Paper>
            <Grid
              item
              xs={12}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'auto',
              }}
            >
              <FormGroup>
                <Grid container row>
                  <ACCOUNTBALANCE />
                  <Typography component="h2" variant="caption" gutterBottom>
                    SOCIETÉ
                  </Typography>
                </Grid>

                {companies.map((company, index) => (
                  <Grid>
                    <FormControlLabel
                      control={(
                        <div>
                          {company.checked}
                          <Checkbox
                            onChange={(event) => {
                              this.updateCareerFieldCheck(event.target, index, 'checked', 'companies');
                            }}
                            color="primary"
                          />
                          <Typography component="h2" variant="caption" inline>
                            {company.name}
                          </Typography>
                        </div>

                  )}
                    />
                  </Grid>
                ))}

                {/**  liste de ville à cocher */}
                <Grid container row>
                  <LOCATION />
                  <Typography component="h2" variant="caption" inline>
                    VILLES
                  </Typography>
                </Grid>
                {cityFilter.map(ville => (
                  <Grid>
                    <FormControlLabel
                      control={(
                        <div>
                          <Checkbox
                            checked={ville}
                            onChange={event => this.handleChange(event, ville)}
                            value="checkedB"
                            color="primary"
                          />
                          <Typography component="h2" variant="caption" inline>
                            {ville}
                          </Typography>
                        </div>
                      )}
                    />
                  </Grid>
                ))}

                {/**  liste de ville à cocher */}
                <Grid container row>
                  <BUISNESS />
                  <Typography component="h2" variant="caption" inline>
                  SECTEUR
                  </Typography>
                </Grid>
                {sectorsFilter.map(secteur => (
                  <FormControlLabel
                    control={(
                      <div>
                        <Checkbox
                          checked={secteur}
                          onChange={event => this.handleChange(event, secteur)}
                          value="checkedC"
                          color="primary"
                        />
                        <Typography component="h2" variant="caption" inline>
                          {secteur}
                        </Typography>
                      </div>
                  )}

                  />
                ))}
                {/**  liste de ville à cocher */}
                <Grid container row>
                  <BusinessCenter />
                  <Typography component="h2" variant="caption" inline>
                    Titre de poste
                  </Typography>

                </Grid>
                {titresFilter.map(titre => (
                  <FormControlLabel
                    control={(
                      <div>
                        <Checkbox
                          checked={titre}
                          onChange={event => this.handleChange(event, titre)}
                          value="checkedA"
                          color="primary"
                        />
                        <Typography component="h2" variant="caption" inline>
                          {titre}
                        </Typography>
                      </div>
                    )}
                  />
                ))}
                {/**  liste de ville à cocher */}
                <Grid container row>
                  <Assignment />
                  <Typography component="h2" variant="caption" inline>
                    Type de contrat
                  </Typography>
                </Grid>

                {contratFilter.map(contrat => (
                  <FormControlLabel
                    control={(
                      <div>
                        <Checkbox
                          checked={contrat}
                          onChange={event => this.handleChange(event, contrat)}
                          value="checkedA"
                          color="primary"
                        />
                        <Typography component="h2" variant="caption" inline>
                          {contrat}
                        </Typography>
                      </div>
                      )}
                  />
                ))}
                {/**  liste de ville à cocher */}
                <Grid container row>
                  <POLL />
                  <Typography component="h2" variant="caption" inline>
                  Domaine d'activité
                  </Typography>
                </Grid>
                {domaineFilter.map(domaine => (
                  <FormControlLabel
                    control={(
                      <div>
                        <Checkbox
                          checked={domaine}
                          onChange={event => this.handleChange(event, domaine)}
                          value="checkedA"
                          color="primary"
                        />
                        <Typography component="h2" variant="caption" inline>
                          {domaine}
                        </Typography>
                      </div>
                      )}
                  />
                ))}
                {/**  liste de ville à cocher */}
                <Grid container row>
                  <RESPONSABILITY />
                  <Typography component="h2" variant="caption" inline style={{ margin: '0px' }}>
                    Responsabilité
                  </Typography>
                </Grid>
                {responsabilityFilter.map(responsability => (
                  <FormControlLabel
                    control={(
                      <div>
                        <Checkbox
                          checked={responsability}
                          onChange={event => this.handleChange(event, 'checkedA')}
                          value="checkedA"
                          color="primary"
                        />
                        <Typography component="h2" variant="caption" inline>
                          {responsability}
                        </Typography>
                      </div>
                      )}
                  />
                ))}
              </FormGroup>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default FilterByCheck;
