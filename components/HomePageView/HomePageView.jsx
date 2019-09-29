/**
 * @file Homepage view
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import { Grid } from '@material-ui/core';

const HomePageView = () => (
  <Grid container justify="center" style={{ padding: '1.5rem 0' }}>
    <Grid item xs={6} style={{ textAlign: 'center' }}>
      <video muted width="100%" height="100%" controls preload="none">
        <source
          src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4"
          type="video/mp4"
        />
      </video>
    </Grid>
  </Grid>
);

export default HomePageView;
