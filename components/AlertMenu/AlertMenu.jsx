/**
 * @file NOtification Alert Menu in the NavBar
 * onclick it will dropdown a list of notifcations
 * and link 'Afficher plus' to redirect to the notifications page
 * the candidate can add an offer from the notification list to
 * the "panier transit"
 * @author Aymen Hajri
 * @date 2019-03-25
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  MenuItem,
  Menu,
  withStyles,
  List,
  ListItem,
  Typography,
  Grid,
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import Notifications from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

// statc object of the notifications
const OFFER_FROM_ALERT = [{
  id: '6',
  title: 'react developper',
  inCart: false,
},
{
  id: '5',
  title: 'react developper',
  inCart: false,
},
{
  id: '3',
  title: 'react developper',
  inCart: false,
},
];

// styling of the drop down menu
const styles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class AlertMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      alertsList: [...OFFER_FROM_ALERT],
    };

    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    this.addOfferToCart = this.addOfferToCart.bind(this);
  }

  // function to add an offer from the notifications
  // list to the "panier transit"
  // @param: id of the notification wich is the id of an offer
  addOfferToCart(id) {
    const { alertsList } = this.state;
    const alerts = alertsList.map((alert) => {
      if (alert.id !== id) return alert;
      return {
        ...alert,
        inCart: !alert.inCart,
      };
    });

    this.setState({ alertsList: alerts });
  }

  // open the list of notification when clicked on the
  // notification icon
  handleProfileMenuOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  // close the menu list when clicked on
  // the notification icon
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
    const {
      anchorEl, mobileMoreAnchorEl, alertsList,
    } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <List className={classes.root}>
          <div>

            {/** map over the list of notifications */}
            {alertsList.map(alert => (

              // notification item
              <ListItem key={alert.id}>
                <Grid>
                  <Grid item xs={1} style={{ float: 'right' }}>

                    {/** add to shopping cart icon will change the color if clicked */}
                    <IconButton aria-label="Cart" onClick={() => this.addOfferToCart(alert.id)}>
                      <AddShoppingCart color={alert.inCart ? 'primary' : 'disabled'} />
                    </IconButton>
                  </Grid>

                  <Grid item xs={10}>
                    <Typography component="p">
                      {alert.title}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}

            <Divider />
          </div>
        </List>

        {/** to do candidat alert page
          // link to redirect the candidate to show more notifications
        */}
        <a href="/CandidateAlertPageView">
          <MenuItem onClick={this.handleMenuClose} style={{ color: 'deepskyblue' }}>
              Show more notifications
          </MenuItem>
        </a>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <Notifications />
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
            <Notifications />
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

AlertMenu.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AlertMenu);
