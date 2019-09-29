/**
 * @file Candidate Logout Action
 * @author BENHZEZ Ali
 * @date 2019-02-12
 */
import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import Router from 'next/router';

class CandidateProfileLogout extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { onClick } = this.props;
    onClick();
    // TO DO : API
    Router.push('/');
  }

  render() {
    return (
      <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
    );
  }
}

CandidateProfileLogout.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default CandidateProfileLogout;
