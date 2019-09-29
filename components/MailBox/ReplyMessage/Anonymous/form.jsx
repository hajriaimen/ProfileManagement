/**
 * @file from replyMessage ( type : Anonymous) : sub component du mailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';

import {
  Grid,
  FormControl,
  Select,
  InputLabel,
  Button,
  FormHelperText,
  TextField,
  FilledInput,
} from '@material-ui/core';

import PropTypes from 'prop-types';

const paddingInput = {
  padding: '15px',
};

class ReplyMessageAnonymous extends Component {
  changeMailType(event) {
    const { setFieldValue, handleChange, defaultMessageCandidat } = this.props;
    handleChange(event);
    setFieldValue('subject', defaultMessageCandidat[event.target.value].subject, false);
    setFieldValue('description', defaultMessageCandidat[event.target.value].description, false);
  }

  render() {
    const {
      openedMail,
      values: { mailType, description },
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      isValid,
      defaultMessageCandidat,
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
          <FormControl variant="filled" fullWidth error={touched.mailType && !!errors.mailType}>
            <InputLabel htmlFor="mailType">Type réponse</InputLabel>
            <Select
              native
              value={mailType}
              onChange={event => this.changeMailType(event)}
              onBlur={handleBlur}
              input={<FilledInput name="mailType" id="mailType" />}
            >
              <option value="" />
              {defaultMessageCandidat.map(messageItem => (
                <option key={Math.random()} value={messageItem.id}>
                  {messageItem.subject}
                </option>
              ))}
            </Select>
            <FormHelperText>{touched.mailType ? errors.mailType : ''}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} style={paddingInput}>
          <TextField
            disabled
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
        <Grid item xs={12} style={paddingInput}>
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
        </Grid>
      </form>
    );
  }
}

ReplyMessageAnonymous.propTypes = {
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
  handleBlur: PropTypes.func.isRequired,
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

ReplyMessageAnonymous.defaultProps = {
  values: {},
  errors: {},
  touched: {},
};

export default ReplyMessageAnonymous;
