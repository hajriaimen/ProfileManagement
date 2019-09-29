/**
 * @file from replyMessage ( type : public ) : sub component du mailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';

import { Grid, Button, TextField } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import PropTypes from 'prop-types';

const paddingInput = {
  padding: '15px',
};

class ReplyMessagePublic extends Component {
  changeMailType(event) {
    const { setFieldValue, handleChange, defaultMessageCandidat } = this.props;
    handleChange(event);
    setFieldValue('subject', defaultMessageCandidat[event.target.value].subject, false);
    setFieldValue('description', defaultMessageCandidat[event.target.value].description, false);
  }

  render() {
    const {
      openedMail,
      values: { description },
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleSubmit,
      handleReset,
      isValid,
      hideReplyMessage,
    } = this.props;

    const submitForm = (event) => {
      event.preventDefault();
      handleSubmit(event);
      if (isValid) {
        const { values, handleAddMailtoSentList, addReplyMessage } = this.props;
        const NewValues = {
          ...values,
          sender: 'Moi',
          date: 'A l`instant',
          receiver: openedMail.sender,
          subject: `Re: ${openedMail.subject}`,
        };

        // console.log(NewValues);
        handleAddMailtoSentList(NewValues);
        hideReplyMessage();
        addReplyMessage(NewValues);
      } else {
        // console.log('form is not valid');
      }
    };

    return (
      <form onSubmit={submitForm}>
        <Grid item xs={12} style={paddingInput}>
          <TextField
            disabled
            id="receiver"
            name="receiver"
            helperText={touched.receiver ? errors.receiver : ''}
            error={touched.receiver && Boolean(errors.receiver)}
            label="À"
            fullWidth
            value={openedMail.sender}
            onChange={handleChange}
            variant="filled"
          />
        </Grid>

        <Grid item xs={12} style={paddingInput}>
          <TextField
            id="description"
            name="description"
            helperText={touched.description ? errors.description : ''}
            error={touched.description && Boolean(errors.description)}
            label="Message"
            fullWidth
            multiline
            rows="5"
            value={description}
            onChange={handleChange}
            variant="filled"
          />
        </Grid>

        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
          style={{ marginRight: '15px' }}
        >
          Annuler
        </Button>

        <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
          Envoyer
        </Button>

        <IconButton onClick={hideReplyMessage} aria-label="Delete" style={{ float: 'right' }}>
          <DeleteIcon />
        </IconButton>
      </form>
    );
  }
}

ReplyMessagePublic.propTypes = {
  values: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  errors: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  touched: PropTypes.shape({
    inputElement: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),

  dirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,

  hideReplyMessage: PropTypes.func.isRequired,
  addReplyMessage: PropTypes.func.isRequired,
  handleAddMailtoSentList: PropTypes.func.isRequired,
  defaultMessageCandidat: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openedMail: PropTypes.shape({}).isRequired,
};

ReplyMessagePublic.defaultProps = {
  values: {},
  errors: {},
  touched: {},
};

export default ReplyMessagePublic;
