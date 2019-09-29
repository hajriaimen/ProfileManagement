/**
 * @file Candidate Profile Delete
 * @author BENHZEZ Ali
 * @date 2019-02-12
*/

import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';
import Router from 'next/router';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';

class CandidateProfileDeleteMenuItem extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    const { onClick } = this.props;

    onClick();
    this.setState({ open: false });
  }

  handleDelete() {
    // TO DO : API
    this.handleClose();
    Router.push('/login');
  }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <MenuItem onClick={this.handleClickOpen}>Supprimer le compte</MenuItem>
        <ConfirmDeleteDialog open={open} onClose={this.handleClose} onDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}

CandidateProfileDeleteMenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CandidateProfileDeleteMenuItem;
