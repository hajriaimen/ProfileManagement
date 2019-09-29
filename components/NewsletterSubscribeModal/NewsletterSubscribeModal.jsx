/**
 * @file Subscribe Modal
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  withStyles,
  Modal,
} from '@material-ui/core';
import NewsletterSubscribeForm from './NewsletterSubscribeForm';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    width: '25%',
    top: '40%',
    left: '45%',
    transform: 'translate(-40%, -45%)',
  },
});

const defaultState = {
  open: false,
};

class NewsletterSubscribeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  render() {
    const { classes, open, onClose } = this.props;

    return (
      <React.Fragment>
        <Modal
          open={open}
          onClose={onClose}
        >
          <div className={classes.paper}>
            <Grid container spacing={24} style={{ paddingTop: '1rem' }}>
              <Typography variant="h6" id="modal-title">
              Ajouter votre coordonnées
              </Typography>
            </Grid>

            <NewsletterSubscribeForm closeModal={onClose} />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

NewsletterSubscribeModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewsletterSubscribeModal);
