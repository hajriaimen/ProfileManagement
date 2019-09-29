/**
 * @file index file : from NewMessage ( type : Anonymous ) : sub component du mailBox
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
  subject: '',
  description: '',
  idOffre: '',
};

const validationSchema = Yup.object({
  receiver: Yup.string().required('Champ obligatoire.'),
  subject: Yup.string().required('Champ obligatoire.'),
  description: Yup.string().required('Champ obligatoire.'),
  idOffre: Yup.string(),
});

class NewMessagePublicContainer extends Component {
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

NewMessagePublicContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  handleAddMailtoSentList: PropTypes.func.isRequired,
  changeContainer: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewMessagePublicContainer);
