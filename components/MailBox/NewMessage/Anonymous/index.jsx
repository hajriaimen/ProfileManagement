/**
 * @file index file : from NewMessage ( type : Public ) : sub component du mailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';
import { Formik } from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import * as Yup from 'yup';
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
  receiver: Yup.string().required('Champ obligatoire.'),
  mailType: Yup.string().required('Champ obligatoire.'),
  // subject: Yup.string().required('Champ obligatoire.'),
  // description: Yup.string().required('Champ obligatoire.'),
  idOffre: Yup.string(),
});

const defaultMessageCandidat = [
  {
    id: 0,
    mailType: 'type_1',
    subject: 'Object 1',
    description:
      'Message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 message 1 ',
  },
  {
    id: 1,
    mailType: 'type_2',
    subject: 'Object 2',
    description:
      'Message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2 message 2',
  },
  {
    id: 2,
    mailType: 'type_3',
    subject: 'Object 3',
    description:
      'Message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3 message 3',
  },
  {
    id: 3,
    mailType: 'type_4',
    subject: 'Object 4',
    description:
      'Message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4 message 4',
  },
];

class NewMessageAnonymousContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleAddMailtoSentList, changeContainer } = this.props;

    return (
      <div style={{ padding: '0 15px 15px 15px' }}>
        <Paper elevation={1} style={{ padding: '15px', borderTop: '3px solid #2196f3' }}>
          <Typography variant="h3">Nouveau message</Typography>

          <Formik
            render={props => (
              <Form
                {...props}
                defaultMessageCandidat={defaultMessageCandidat}
                handleAddMailtoSentList={handleAddMailtoSentList}
                changeContainer={changeContainer}
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

NewMessageAnonymousContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleAddMailtoSentList: PropTypes.func.isRequired,
  changeContainer: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewMessageAnonymousContainer);
