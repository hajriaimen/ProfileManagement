/**
 * @file Question Page
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Layout from '../layouts/Main';
import HelpQuestionPageView from '../components/HelpQuestionPageView';


const QuestionPage = ({ router }) => (
  <Layout>
    <HelpQuestionPageView id={router.query.id} />
  </Layout>
);

QuestionPage.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(QuestionPage);
