/**
 * @file Enable Disable Profile Status
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';
import ConfirmProfileStatusDialog from './ConfirmProfileStatusDialog';

const BTN_LABEL_ENABLE = 'Activer le profil';
const BTN_LABEL_DISABLE = 'Désactiver le profil';
const DIALOG_TITLE_ENABLE = 'Confirmation d\'activation';
const DIALOG_TITLE_DISABLE = 'Confirmation de mise en veille';
const DIALOG_CONTENT_TEXT_ENABLE = 'Êtes-vous sûr de vouloir activer votre profil?';
const DIALOG_CONTENT_TEXT_DISABLE = 'Êtes-vous sûr de vouloir metttre en veille votre profil?';


class CandidateProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggleStatus = this.toggleStatus.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  toggleStatus(status) {
    return () => {
      const { onStatusChange } = this.props;

      onStatusChange(status);
      // TO DO : API
      this.handleClose();
    };
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    const { handleMenuClose } = this.props;

    handleMenuClose();
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { status } = this.props;
    let MenuItemLabel;
    let dialogTitle;
    let dialogContentText;

    (() => {
      if (status) {
        MenuItemLabel = BTN_LABEL_DISABLE;
        dialogTitle = DIALOG_TITLE_DISABLE;
        dialogContentText = DIALOG_CONTENT_TEXT_DISABLE;
      } else {
        MenuItemLabel = BTN_LABEL_ENABLE;
        dialogTitle = DIALOG_TITLE_ENABLE;
        dialogContentText = DIALOG_CONTENT_TEXT_ENABLE;
      }
    })();


    return (
      <React.Fragment>
        <MenuItem onClick={this.handleClickOpen}>
          {MenuItemLabel}
        </MenuItem>

        <ConfirmProfileStatusDialog
          status={status}
          open={open}
          onClose={this.handleClose}
          onDelete={this.handleDelete}
          dialogTitle={dialogTitle}
          dialogContentText={dialogContentText}
          toggleStatus={this.toggleStatus}
        />
      </React.Fragment>
    );
  }
}

CandidateProfileStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default CandidateProfileStatus;
