/**
 * @file Single offer page
 * @author Aymen HAJRI
 * @date 2019-01-19
 */
import React from 'react';
import { withRouter } from 'next/router';
import Offer from '../components/Offer';
import Layout from '../layouts/Main';

const offer = ({ router }) => (
  <Layout >
    <Offer id={router.query.id} />
  </Layout>
);

export default withRouter(offer);
