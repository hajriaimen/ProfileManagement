/**
 * @file Candidate Alert Create Page
 * @author BENHZEZ Ali
 * @date 2019-02-14
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Layout from '../../../layouts/Main';
import CandidateAlertCreateForm from '../../../components/CandidateAlertCreate';

const AlertPage = ({ router }) => (
  <Layout>
    <CandidateAlertCreateForm id={router.query.id} />
  </Layout>
);

AlertPage.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(AlertPage);
