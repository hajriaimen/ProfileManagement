/**
 * @file index file : from replyMessage ( type : Anonymous) : sub component du mailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';
import Undo from '@material-ui/icons/Undo';

import { Typography } from '@material-ui/core';

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
  mailType: '',
  subject: '',
  description: '',
  idOffre: '',
};

const validationSchema = Yup.object({
  receiver: Yup.string(),
  mailType: Yup.string().required('Champ obligatoire.'),
  subject: Yup.string(),
  description: Yup.string(),
  idOffre: Yup.string(),
});

const defaultMessageCandidat = [
  {
    id: 0,
    mailType: 'type_1',
    subject: 'Object réponse 1',
    description:
      'Réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 réponse 1 ',
  },
  {
    id: 1,
    mailType: 'type_2',
    subject: 'Object réponse 2',
    description:
      'Réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2 réponse 2',
  },
  {
    id: 2,
    mailType: 'type_3',
    subject: 'Object réponse 3',
    description:
      'Réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3 réponse 3',
  },
  {
    id: 3,
    mailType: 'type_4',
    subject: 'Object réponse 4',
    description:
      'Réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4 réponse 4',
  },
];

class ReplyMessageAnonymousContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      openedMail,
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
                defaultMessageCandidat={defaultMessageCandidat}
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

ReplyMessageAnonymousContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleAddMailtoSentList: PropTypes.func.isRequired,
  changeContainer: PropTypes.func.isRequired,
  openedMail: PropTypes.shape({}).isRequired,
  hideReplyMessage: PropTypes.func.isRequired,
  addReplyMessage: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReplyMessageAnonymousContainer);
