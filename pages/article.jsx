/**
 * @file Post Page
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Layout from '../layouts/Main';
import BlogArticlePageView from '../components/BlogArticlePageView';


const ArticlePage = ({ router }) => (
  <Layout>
    <BlogArticlePageView id={router.query.id} />
  </Layout>
);

ArticlePage.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(ArticlePage);
