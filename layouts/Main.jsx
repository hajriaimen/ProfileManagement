import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../components/TopNav';

const MainLayout = ({ children }) => (
  <div>
    <TopNav />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
