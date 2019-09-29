/**
 * @file Help Search Box
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import {
  Paper,
  IconButton,
  MenuItem,
  withStyles,
  Grid,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const staticSuggestions = [
  { label: 'tag1' },
  { label: 'tag2' },
  { label: 'tag3' },
  { label: 'tag4' },
  { label: 'tag5' },
  { label: 'tag6' },
];

const renderInputComponent = (inputProps) => {
  const {
    classes, inputRef = () => {}, ref, ...other
  } = inputProps;

  return (
    <div
      style={{
        border: 'solid',
        borderColor: 'grey',
        margin: '-0.4rem 0',
        padding: '-0.4rem',
      }}
    >
      <Grid container style={{ margin: '0 0 -0.6rem  0 ' }}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            InputProps={{
              disableUnderline: true,
              inputRef: (node) => {
                ref(node);
                inputRef(node);
              },
              classes: {
                input: classes.input,
              },
            }}
            {...other}
          />
        </Grid>

        <Grid item xs={2} style={{ marginTop: '-0.2rem ' }}>
          <IconButton aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      {parts.map((part, index) => {
        if (part.highlight) {
          return (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          );
        }

        return (
          <strong key={String(index)} style={{ fontWeight: 300 }}>
            {part.text}
          </strong>
        );
      })
      }
    </MenuItem>
  );
};

const getSuggestions = (value) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  if (inputLength === 0) {
    return [];
  }

  return staticSuggestions.filter((suggestion) => {
    const keep = count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

    if (keep) {
      count += 1;
    }
    return keep;
  });
};

const getSuggestionValue = suggestion => suggestion.label;

const styles = theme => ({
  root: {
    height: 'auto',
    flexGrow: 1,
  },

  container: {
    position: 'relative',
  },

  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },

  suggestion: {
    display: 'block',
  },

  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  divider: {
    height: theme.spacing.unit * 2,
  },
});

class HelpSearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      single: '',
      suggestions: [],
    };

    this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value),
    });
  }

  handleSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  handleChange(name) {
    return (event, { newValue }) => {
      const { getFaqByTag, getFAQ } = this.props;

      this.setState({
        [name]: newValue,
      });

      if (newValue.length > 0) {
        getFaqByTag(newValue);
      } else {
        getFAQ();
      }
    };
  }

  render() {
    const { classes } = this.props;
    const { suggestions, single } = this.state;

    const autosuggestProps = {
      renderInputComponent,
      suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
    };

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6} style={{ margin: '1rem' }}>
            <Autosuggest
              type="search"
              fullWidth
              {...autosuggestProps}
              inputProps={{
                classes,
                placeholder: 'Chercher',
                value: single,
                onChange: this.handleChange('single'),
              }}
              theme={{
                container: classes.container,
                suggestionsContainerOpen: classes.suggestionsContainerOpen,
                suggestionsList: classes.suggestionsList,
                suggestion: classes.suggestion,
              }}
              renderSuggestionsContainer={options => (
                <Paper {...options.containerProps} square>
                  {options.children}
                </Paper>
              )}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

HelpSearchBox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  getFAQ: PropTypes.func.isRequired,
  getFaqByTag: PropTypes.func.isRequired,
};

export default withStyles(styles)(HelpSearchBox);
