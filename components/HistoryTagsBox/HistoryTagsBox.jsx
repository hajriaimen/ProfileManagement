/**
 * @file Candidate Alert Create
 * @author BENHZEZ Ali
 * @date 2019-02-14
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import {
  Typography,
  MenuItem,
  Chip,
  Paper,
  TextField,
  NoSsr,
  withStyles,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'auto',
  },

  input: {
    display: 'flex',
    padding: 0,
  },

  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },

  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },

  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },

  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },

  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },

  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },

  divider: {
    height: theme.spacing.unit * 2,
  },
});

function NoOptionsMessage(props) {
  const { selectProps, innerProps, children } = props;

  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const {
    selectProps, innerRef, innerProps, children,
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: selectProps.classes.input,
          inputRef: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  const {
    innerRef,
    isFocused,
    isSelected,
    innerProps,
    children,
  } = props;

  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      {children}
    </MenuItem>
  );
}

function Placeholder(props) {
  const { selectProps, innerProps, children } = props;

  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

function ValueContainer(props) {
  const { selectProps, children } = props;
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

function MultiValue(props) {
  const {
    selectProps,
    children,
    isFocused,
    removeProps,
  } = props;

  return (
    <Chip
      tabIndex={-1}
      label={children}
      className={classNames(selectProps.classes.chip, {
        [selectProps.classes.chipFocused]: isFocused,
      })}
      onDelete={removeProps.onClick}
      deleteIcon={<CancelIcon {...removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  selectProps: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  removeProps: PropTypes.shape().isRequired,
};

function Menu(props) {
  const {
    selectProps, innerProps, children,
  } = props;
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}

Menu.propTypes = {
  selectProps: PropTypes.shape().isRequired,
  innerProps: PropTypes.shape().isRequired,
  children: PropTypes.shape().isRequired,
};

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer,
};

class HistoryTagsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return (value) => {
      const { onChange } = this.props;
      this.setState({
        [name]: value,
      });
      onChange(value);
    };
  }

  render() {
    const {
      classes,
      theme,
      options,
      value,
    } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    return (
      <div className={classes.root}>
        <NoSsr>
          <div className={classes.divider} />
          <Select
            classes={classes}
            styles={selectStyles}
            textFieldProps={{
              label: '',
              InputLabelProps: {
                shrink: true,
              },
            }}

            value={value}
            options={options}
            components={components}
            onChange={this.handleChange('selectedData')}
            placeholder="Critères mémorisés pour la recherche"
            isMulti
          />
        </NoSsr>
      </div>
    );
  }
}

NoOptionsMessage.propTypes = {
  selectProps: PropTypes.shape(),
  innerProps: PropTypes.shape(),
  children: PropTypes.string.isRequired,
};

NoOptionsMessage.defaultProps = {
  innerProps: null,
  selectProps: {
    options: null,
  },
};

inputComponent.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

Control.propTypes = {
  selectProps: PropTypes.shape().isRequired,
  innerRef: PropTypes.func.isRequired,
  innerProps: PropTypes.shape().isRequired,
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

Option.propTypes = {
  innerRef: PropTypes.func,
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  innerProps: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

Option.defaultProps = {
  innerRef: null,
};

Placeholder.propTypes = {
  selectProps: PropTypes.shape().isRequired,
  innerProps: PropTypes.shape(),
  children: PropTypes.string.isRequired,
};

Placeholder.defaultProps = {
  innerProps: {},
};

ValueContainer.propTypes = {
  selectProps: PropTypes.shape().isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape()), PropTypes.shape()]),
    PropTypes.shape(),
  ).isRequired,
};

HistoryTagsBox.propTypes = {

  value: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};


HistoryTagsBox.defaultProps = {
  value: [],
};

export default withStyles(styles, { withTheme: true })(HistoryTagsBox);
