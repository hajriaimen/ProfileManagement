/**
 * @file Profile Avatar and Menu
 * @author BENHZEZ Ali
 * @date 2019-02-04
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  MenuItem,
  Menu,
  withStyles,
  Avatar,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import styles from './styles.css';
import CandidateProfileLogoutMenuItem from '../CandidateProfileLogoutMenuItem';
import CandidateProfileDeleteMenuItem from '../CandidateProfileDeleteMenuItem';
import CandidateProfileStatus from '../CandidateProfileStatus';


const StaticProfile = {
  firstName: 'Ali',
  lastName: 'Benhzez',
  email: 'ali.benhzez@imagineParmers.com',
  avatar: 'https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png?resize=300%2C300',
};

class UserAvatarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      status: false,
    };

    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange(status) {
    this.setState({ status: !status });
    // TO DO : API
    this.handleMenuClose();
  }

  handleProfileMenuOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  }

  handleMobileMenuOpen(event) {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  }

  handleMobileMenuClose() {
    this.setState({ mobileMoreAnchorEl: null });
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl, status } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <a href="/profile">
          <MenuItem onClick={this.handleMenuClose}>
              Profile
          </MenuItem>
        </a>
        <CandidateProfileLogoutMenuItem onClick={this.handleMenuClose} />
        <CandidateProfileDeleteMenuItem onClick={this.handleMenuClose} />
        <CandidateProfileStatus
          onClick={this.handleMenuClose}
          status={status}
          onStatusChange={this.onStatusChange}
          handleMenuClose={this.handleMenuClose}
        />
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <Avatar alt="Remy Sharp" src={StaticProfile.avatar} className={classes.avatar} />
          </IconButton>
        </MenuItem>
      </Menu>
    );

    return (
      <React.Fragment>
        <div className={classes.sectionDesktop}>
          <IconButton
            aria-owns={isMenuOpen ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar alt="Remy Sharp" src={StaticProfile.avatar} className={classes.avatar} />
          </IconButton>
        </div>

        <div className={classes.sectionMobile}>
          <IconButton
            aria-haspopup="true"
            onClick={this.handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>

        {renderMenu}
        {renderMobileMenu}
      </React.Fragment>
    );
  }
}

UserAvatarMenu.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(UserAvatarMenu);
