/**
 * @file index file : from replyMessage ( type : Public ) : sub component du mailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import Undo from '@material-ui/icons/Undo';

import PropTypes from 'prop-types';

import Form from './form';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`,
  },
  container: {
    maxWidth: '200px',
  },
});

const values = {
  receiver: '',
  subject: '',
  description: '',
  idOffre: '',
};

const validationSchema = Yup.object({
  receiver: Yup.string(),
  subject: Yup.string(),
  description: Yup.string().required('Champ obligatoire.'),
  idOffre: Yup.string(),
});

class ReplyMessagePublicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { openedMail } = this.props;
    const {
      handleAddMailtoSentList,
      changeContainer,
      hideReplyMessage,
      addReplyMessage,
    } = this.props;

    return (
      <div style={{ padding: '0 15px 15px 15px' }}>
        <Paper elevation={1} style={{ padding: '15px', borderTop: '3px solid #2196f3' }}>
          <Typography variant="h3">
            <Undo style={{ fontSize: '40px' }} />
            Répondre
          </Typography>
          <Formik
            render={props => (
              <Form
                {...props}
                handleAddMailtoSentList={handleAddMailtoSentList}
                changeContainer={changeContainer}
                hideReplyMessage={hideReplyMessage}
                openedMail={openedMail}
                addReplyMessage={addReplyMessage}
              />
            )}
            initialValues={values}
            validationSchema={validationSchema}
          />
        </Paper>
      </div>
    );
  }
}

ReplyMessagePublicContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleAddMailtoSentList: PropTypes.func.isRequired,
  changeContainer: PropTypes.func.isRequired,
  openedMail: PropTypes.shape({}).isRequired,
  hideReplyMessage: PropTypes.func.isRequired,
  addReplyMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReplyMessagePublicContainer);
