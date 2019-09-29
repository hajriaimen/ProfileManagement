/**
 * @file Profile : Test ProfileFillingRate component
 * @route /profile
 * @author Aymen Hajri
 * @date 2019-02-11
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchCriteria from '../components/SearchCriteria';

export default () => (
  <Grid container justify="center" style={{ paddingTop: '1.5rem' }}>
    <SearchCriteria />
  </Grid>
);
