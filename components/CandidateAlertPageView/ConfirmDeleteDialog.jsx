/**
 * @file Candidate Confirm Delete Alert
 * @author BENHZEZ Ali
 * @date 2019-03-05
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


const ConfirmDeleteDialog = ({
  open, onClose, onDelete,
}) => (

  <React.Fragment>
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Confirmation de supperssion</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir supprimer cette Alerte?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onDelete} color="secondary">Oui</Button>
        <Button onClick={onClose} color="primary">Non</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
);


ConfirmDeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default (ConfirmDeleteDialog);
