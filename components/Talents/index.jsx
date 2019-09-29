import React, { Component } from 'react';

import {
  List, ListItem, ListItemText, Grid, Typography,
} from '@material-ui/core';

import ProfessionnalCareer from './ProfessionnalCareer';
import CapitalKnowledge from './CapitalKnowledge';
import CapitalSkills from './CapitalSkills';
import InterculturalTalent from './InterculturalTalent';
import OtherKnowledgeAcquired from './OtherKnowledgeAcquired';

class MesTalents extends Component {
  constructor(props) {
    super(props);

    this.changeContainer = this.changeContainer.bind(this);

    this.state = {
      currentPage: 'parcours-professionnel',
    };
  }

  changeContainer(event, targetName) {
    this.setState({ currentPage: targetName });
  }

  render() {
    const { currentPage } = this.state;
    return (
      <div style={{ backgroundColor: 'white' }}>
        <Grid container>
          <Grid item xs={3} style={{ backgroundColor: 'white', paddingTop: '8px' }}>
            <List>
              {[
                {
                  name: 'Parcours professionnel',
                  target: 'parcours-professionnel',
                },
                {
                  name: 'Capital compétences',
                  target: 'capital-competences',
                },
                {
                  name: 'Capital connaissances',
                  target: 'capital-connaissances',
                },
                {
                  name: 'Talent interculturel',
                  target: 'talent-interculturel',
                },
                {
                  name: 'Autre connaissances acquises',
                  target: 'autre-connaissances-acquises',
                },
              ].map(lien => (
                <ListItem button key={lien.name} selected={lien.target === currentPage}>
                  <ListItemText
                    onClick={event => this.changeContainer(event, lien.target)}
                    primary={<Typography variant="h6">{lien.name}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={9} style={{ padding: '1rem' }}>
            {currentPage === 'parcours-professionnel' && <ProfessionnalCareer />}
            {currentPage === 'capital-connaissances' && <CapitalKnowledge />}
            {currentPage === 'capital-competences' && <CapitalSkills />}
            {currentPage === 'talent-interculturel' && <InterculturalTalent />}
            {currentPage === 'autre-connaissances-acquises' && <OtherKnowledgeAcquired />}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MesTalents;
