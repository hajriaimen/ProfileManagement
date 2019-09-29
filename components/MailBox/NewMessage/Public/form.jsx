/**
 * @file from newMessage ( type : public ) : sub component du mailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';

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

class CustomComponent extends Component {
  changeMailType(event) {
    const { setFieldValue, handleChange, defaultMessageCandidat } = this.props;
    handleChange(event);
    setFieldValue('subject', defaultMessageCandidat[event.target.value].subject, false);
    setFieldValue('description', defaultMessageCandidat[event.target.value].description, false);
  }

  render() {
    const {
      values: {
        receiver, subject, description, idOffre,
      },
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      isValid,
    } = this.props;

    const submitForm = (event) => {
      event.preventDefault();
      handleSubmit(event);
      if (isValid) {
        const { values, handleAddMailtoSentList, changeContainer } = this.props;
        const NewValues = { ...values, sender: 'Moi' };
        // console.log(NewValues);
        handleAddMailtoSentList(NewValues);
        changeContainer(event, 'boite-de-reception');
      } else {
        // console.log('form is not valid');
      }
    };
    return (
      <form onSubmit={submitForm}>
        <Grid item xs={12} style={paddingInput}>
          <TextField
            id="receiver"
            name="receiver"
            helperText={touched.receiver ? errors.receiver : ''}
            error={touched.receiver && Boolean(errors.receiver)}
            label="À"
            fullWidth
            value={receiver}
            onChange={handleChange}
            variant="filled"
          />
        </Grid>

        <Grid item xs={12} style={paddingInput}>
          <TextField
            id="subject"
            name="subject"
            helperText={touched.subject ? errors.subject : ''}
            error={touched.subject && Boolean(errors.subject)}
            label="Objet"
            fullWidth
            value={subject}
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

        <Grid item xs={12} style={paddingInput}>
          <FormControl variant="filled" fullWidth error={touched.idOffre && !!errors.idOffre}>
            <InputLabel htmlFor="idOffre">Offre</InputLabel>
            <Select
              native
              value={idOffre}
              onChange={handleChange}
              onBlur={handleBlur}
              input={<FilledInput name="idOffre" id="idOffre" />}
            >
              <option key="1" value="" />
              <option key="2" value="type_1">Développeur PHP Symfony 3/4</option>
              <option key="3" value="type_2">Développeur web JEE</option>
              <option key="4" value="type_3">Développeur web Python</option>
              <option key="5" value="type_4">Développeur web Wordpress</option>
              <option key="6" value="type_5">Développeur web full Stack</option>
            </Select>
            <FormHelperText>{touched.idOffre ? errors.idOffre : ''}</FormHelperText>
          </FormControl>
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
      </form>
    );
  }
}

CustomComponent.propTypes = {
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

  changeContainer: PropTypes.func.isRequired,
  handleAddMailtoSentList: PropTypes.func.isRequired,
  defaultMessageCandidat: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

CustomComponent.defaultProps = {
  values: {},
  errors: {},
  touched: {},
};

export default CustomComponent;
