/**
 * @file Select Auto Complete for field array
 * @author Adel ELECHI
 * @date 2019-02-26
 * How to call this component
 * <SelectAutoComplete
          id="organizationCES"
          name="organizationCES"
          label="Organisation"
          placeholder="placeholder"
          defaultValue={organizationCES}
          setFieldValue={setFieldValue}
          handleChange={handleChange}
          setFieldTouched={setFieldTouched}
          touched={touched}
          errors={errors}
          optionsList={optionsList}
          isMulti={false}
        />
  organizationCES: Yup.string()
    .required('Champ obligatoire.')
    .nullable(),
 */


/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

import { FormControl, FormHelperText } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
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
  singleValue: {
    fontSize: 16,
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
    innerRef, isFocused, isSelected, innerProps, children,
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
    <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
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
    selectProps, children, isFocused, removeProps,
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
  const { selectProps, innerProps, children } = props;
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer,
};

class SelectAutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeSelect(value) {
    // const { isMulti } = this.props;

    this.setState({
      value,
    });

    const {
      handleChange, setFieldValue, setFieldTouched, name,
    } = this.props;

    // let valueInput = value.value;
    /* if (isMulti === true) {
      valueInput = value;
    } */

    handleChange(name);
    setFieldTouched(name, true);
    setFieldValue(name, value, false);
    return true;
  }

  render() {
    const { value } = this.state;
    const {
      classes,
      theme,
      touched,
      errors,
      optionsList,
      isMulti,
      name,
      placeholder,
      label,
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
      <div>
        <FormControl fullWidth error={touched[name] && !!errors[name]}>
          <Select
            classes={classes}
            styles={selectStyles}
            textFieldProps={{
              label,
              InputLabelProps: {
                shrink: true,
              },
            }}
            options={optionsList}
            components={components}
            value={value}
            onChange={this.handleChangeSelect}
            placeholder={placeholder}
            isMulti={isMulti}
            isClearable
          />
          <FormHelperText>{touched[name] ? errors[name] : ''}</FormHelperText>
        </FormControl>
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

SelectAutoComplete.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withStyles(styles, { withTheme: true })(SelectAutoComplete);
