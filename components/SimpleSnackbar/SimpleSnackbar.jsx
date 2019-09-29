import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      messageText: '',
    };
    this.showMessage = this.showMessage.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const { onRef } = this.props;
    onRef(this);
  }

  componentWillUnmount() {
    const { onRef } = this.props;
    onRef(undefined);
  }

  showMessage(messageText) {
    this.setState({ open: true, messageText });
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    const { open, messageText } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{messageText}</span>}
          action={[
            /* <Button key="undo" color="primary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>, */
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onRef: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
