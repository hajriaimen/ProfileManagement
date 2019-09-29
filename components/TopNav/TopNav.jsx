/**
 * @file Top navigation component
 * @author Zakaria ABDELAZIZ
 * @date 2018-12-25
 */

import React from 'react';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Tabs,
  Tab,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NewsLetterSubscribeModal from '../NewsletterSubscribeModal';
import styles from './styles.scss';
import UserAvatarMenu from '../UserAvatarMenu';
import AlertMenu from '../AlertMenu';


const NavigationTabs = ({ items, currentRoute }) => {
  const handleChange = (event, value) => {
    event.preventDefault();
    if (!(find(items, { route: value })).action) {
      Router.push(value);
    }
  };

  const executeAction = (event, action) => {
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <Tabs value={currentRoute} onChange={handleChange}>
      {
        items.map(({
          name,
          route,
          tooltip,
          action,
        }) => (
          <Tooltip key={name} value={route} title={tooltip || ''}>
            <Tab
              value={route}
              label={name}
              style={{ fontWeight: 'bold', minWidth: 'auto' }}
              component="a"
              href={route}
              onClick={event => executeAction(event, action)}
            />
          </Tooltip>
        ))
      }
    </Tabs>
  );
};

NavigationTabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    route: PropTypes.string,
    tooltip: PropTypes.string,
    action: PropTypes.func,
  })).isRequired,
  currentRoute: PropTypes.string.isRequired,
};

class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsLetterModalOpen: false,
      menuItems: [
        { name: 'Accueil', route: '/' },
        { name: 'Blog', route: '/blog' },
        { name: 'Contact', route: '/contact' },
        { name: 'Offres', route: '/offers' },
        { name: 'FAQ', tooltip: 'Foire au questions', route: '/help' },
        {
          name: 'Newsletter',
          route: '/newsletter',
          action: () => { this.setState({ newsLetterModalOpen: true }); },
        },
        { name: 'Mes talents', route: '/mes-talents' },

      ],
    };

    this.closeNewsLetterModal = this.closeNewsLetterModal.bind(this);
  }

  closeNewsLetterModal() {
    this.setState({ newsLetterModalOpen: false });
  }

  render() {
    const { menuItems, newsLetterModalOpen } = this.state;
    const { router } = this.props;

    return (
      <div className={styles.grow}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              className={styles.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <div className={styles.grow}>
              <NavigationTabs items={menuItems} currentRoute={router.route} />
            </div>

            <Link href="/mailbox">
              <AlertMenu />
            </Link>

            <Link href="/mailbox">
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link href="/login">
              <Button color="inherit" className={styles.loginLink}>S&apos;identifier / S&apos;inscrire</Button>
            </Link>

            <UserAvatarMenu />
          </Toolbar>
        </AppBar>

        <NewsLetterSubscribeModal open={newsLetterModalOpen} onClose={this.closeNewsLetterModal} />
      </div>
    );
  }
}

TopNav.propTypes = {
  router: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ])).isRequired,
};

export default withRouter(TopNav);
