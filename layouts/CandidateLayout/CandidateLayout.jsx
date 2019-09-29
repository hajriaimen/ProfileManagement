/**
 * @file Profile Layout
 * @author BENHZEZ Ali
 * @date 2019-02-11
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import MainLayout from '../Main';
import ProfileRate from '../../components/ProfileFillingRate';

const staticRates = {
  global: 50,
  personnalInfos: 40,
  talents: 30,
  profProject: 80,
};

const CandidateLayout = ({ children }) => (
  <MainLayout>
    <Grid container>
      <Grid item xs={2}>
        <ProfileRate rates={staticRates} />
      </Grid>

      <Grid item xs={10} style={{ padding: '1rem' }}>
        {children}
      </Grid>
    </Grid>
  </MainLayout>
);

CandidateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CandidateLayout;
