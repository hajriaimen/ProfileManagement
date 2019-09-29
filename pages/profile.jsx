/**
 * @file Profile : Test ProfileFillingRate component
 * @route /profile
 * @author BENHZEZ Ali
 * @date 2019-02-11
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '../layouts/CandidateLayout';
import CandidateProfile from '../components/CandidateProfile';

export default () => (
  <Layout>
    <Grid container justify="center" style={{ paddingTop: '1.5rem' }}>
      <CandidateProfile />
    </Grid>
  </Layout>
);
