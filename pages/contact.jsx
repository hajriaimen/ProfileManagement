/**
 * @file Contact Page
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '../layouts/Main';
import ContactForm from '../components/ContactForm';

export default () => (
  <Layout>
    <Grid container>
      <ContactForm />
    </Grid>
  </Layout>
);
