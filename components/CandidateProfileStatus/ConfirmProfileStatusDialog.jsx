/**
 * @file Candidate Profile Confirm Delete Login
 * @author BENHZEZ Ali
 * @date 2019-02-12
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';


const ConfirmProfileStatusDialog = ({
  status,
  open,
  onClose,
  dialogTitle,
  dialogContentText,
  toggleStatus,
}) => (
  <React.Fragment>

    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {dialogTitle}
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogContentText}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={toggleStatus(status)} color="secondary"> Oui </Button>
        <Button onClick={onClose} color="primary"> Non </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
);

ConfirmProfileStatusDialog.propTypes = {
  status: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogContentText: PropTypes.string.isRequired,
  toggleStatus: PropTypes.func.isRequired,
};

export default ConfirmProfileStatusDialog;
