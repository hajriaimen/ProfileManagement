/**
 * @file Formulaire autre connaissances acquises ( simple form )
 * @author Adel ELECHI
 * @date 2019-02-08
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Grid, FormControl, Select, InputLabel, Button, FormHelperText,
} from '@material-ui/core';

const paddingInput = {
  padding: '15px',
};

const initialValues = {
  computerLevel: '',
  internetLevel: '',
  levelSocialNetworks: '',
  levelCollaborativeTools: '',
};

class OtherKnowledgeAcquiredForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      values: {
        computerLevel,
        internetLevel,
        levelSocialNetworks,
        levelCollaborativeTools,
      },
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth error={touched.computerLevel && !!errors.computerLevel}>
            <InputLabel htmlFor="computerLevel">Niveau informatique</InputLabel>

            <Select
              native
              value={computerLevel}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'computerLevel',
                id: 'computerLevel',
              }}
            >
              <option value="" />
              <option value="niveau_1">Notions de base</option>
              <option value="niveau_2">Pratique régulière</option>
              <option value="niveau_3">Maîtrise</option>
              <option value="niveau_4">Expert, Formateur</option>
            </Select>
            <FormHelperText>
              {touched.computerLevel ? errors.computerLevel : ''}
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} style={paddingInput}>
          <FormControl fullWidth error={touched.internetLevel && !!errors.internetLevel}>
            <InputLabel htmlFor="internetLevel">Utilisation d`internet</InputLabel>

            <Select
              native
              value={internetLevel}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'internetLevel',
                id: 'internetLevel',
              }}
            >
              <option value="" />
              <option value="niveau_1">Quand c`est indispenable 0,25%</option>
              <option value="niveau_2">Fréquemment dans le cadre personnel 0,25%</option>
              <option value="niveau_3">Fréquemment dans le cadre de mon travail 0,50%</option>
            </Select>
            <FormHelperText>{touched.internetLevel ? errors.internetLevel : ''}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} style={paddingInput}>
          <FormControl
            fullWidth
            error={touched.levelSocialNetworks && !!errors.levelSocialNetworks}
          >
            <InputLabel htmlFor="levelSocialNetworks">Utilisation des reseaux sociaux</InputLabel>

            <Select
              native
              value={levelSocialNetworks}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'levelSocialNetworks',
                id: 'levelSocialNetworks',
              }}
            >
              <option value="" />
              <option value="niveau_1">Quand c`est indispenable 0,25%</option>
              <option value="niveau_2">Fréquemment dans le cadre personnel 0,25%</option>
              <option value="niveau_3">Fréquemment dans le cadre de mon travail 0,50%</option>
            </Select>
            <FormHelperText>
              {touched.levelSocialNetworks ? errors.levelSocialNetworks : ''}
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} style={paddingInput}>
          <FormControl
            fullWidth
            error={touched.levelCollaborativeTools && !!errors.levelCollaborativeTools}
          >
            <InputLabel htmlFor="metier">Utilisation des outils collaboratifs</InputLabel>

            <Select
              native
              value={levelCollaborativeTools}
              onChange={handleChange}
              onBlur={handleBlur}
              inputProps={{
                name: 'levelCollaborativeTools',
                id: 'levelCollaborativeTools',
              }}
            >
              <option value="" />
              <option value="niveau_1">Quand c`est indispenable 0,25%</option>
              <option value="niveau_2">Fréquemment dans le cadre personnel 0,25%</option>
              <option value="niveau_3">Fréquemment dans le cadre de mon travail 0,50%</option>
            </Select>
            <FormHelperText>
              {touched.levelCollaborativeTools ? errors.levelCollaborativeTools : ''}
            </FormHelperText>
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

OtherKnowledgeAcquiredForm.propTypes = {
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
};

OtherKnowledgeAcquiredForm.defaultProps = {
  values: initialValues,
  errors: initialValues,
  touched: initialValues,
};

export default OtherKnowledgeAcquiredForm;
