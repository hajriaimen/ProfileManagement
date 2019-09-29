/**
 * @file main file : MailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';

import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  ListItemIcon,
  Paper,
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { get as getLoDash } from 'lodash';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

import InboxList from './InboxList';
import SentList from './SentList';
import DetailsMail from './DetailsMail';
import NewMessageAnonymous from './NewMessage/Anonymous';
import NewMessagePublic from './NewMessage/Public';
import DeletedList from './DeletedList';

import SimpleSnackbar from '../SimpleSnackbar';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: '#f6fbff',
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 2,
      width: 'auto',
      backgroundColor: 'aliceblue',
      marginTop: '15px',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      margin: '8px',
    },
  },
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

class MailBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modeUser: 'anonymous', // values: anonymous|public
      currentPage: 'boite-de-reception',
      openedMailId: 0,
      inboxList: [
        {
          id: 1,
          subject: 'Offre d`emploi: Développeur php',
          sender: 'Manpower',
          receiver: '12',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue diam nec ligula imperdiet, quis fermentum odio facilisis. Morbi vehicula varius augue. Vestibulum sagittis purus ac neque rutrum, eget gravida lectus vestibulum. Praesent imperdiet metus vitae tempor cursus. Mauris iaculis blandit ipsum, eu ornare ex varius ac. Vivamus ultricies erat dui, porttitor facilisis dolor porttitor nec. Ut dictum lacinia justo et pharetra. Pellentesque pellentesque lobortis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          date: '2019-02-03 14:02:00',
          visited: false,
          typeMail: 'mailBox',
        },
        {
          id: 19,
          subject: 'Nouvelle offre id-7',
          sender: 'Société anonyme 425',
          receiver: '12',
          description:
            'Donec a fringilla metus. Donec lorem ante, rutrum ac finibus non, facilisis sit amet libero. Etiam mi nulla, consequat a est ut, dignissim semper lacus. Curabitur in lacus mattis, dapibus risus nec, sollicitudin lacus. Proin a quam purus. Cras quis blandit quam. Nullam ligula quam, hendrerit non pretium sed, blandit sed quam. Integer imperdiet velit et arcu ornare, vel commodo metus ultricies. Vivamus eleifend, quam eu congue consectetur, neque nunc sodales orci',
          date: '2018-07-03 11:15:41',
          visited: false,
          typeMail: 'mailBox',
        },
        {
          id: 2,
          subject: 'Nouvelle offre id-6',
          sender: 'Société anonyme 752',
          receiver: '12',
          description:
            'Mauris ornare ultricies magna, in scelerisque magna mattis et. Nulla mollis nisi pulvinar maximus pulvinar. Mauris eros urna, tincidunt et augue id, convallis condimentum urna. Suspendisse mi mi, suscipit non nulla at, placerat ullamcorper neque',
          date: '2018-08-08 18:17:40',
          visited: false,
          typeMail: 'mailBox',
        },
        {
          id: 3,
          subject: 'Améliorer vos compétences',
          sender: 'Yooboot',
          receiver: '12',
          description:
            'Duis eget posuere erat, ac fermentum orci. Mauris egestas mauris at pretium fermentum. Curabitur suscipit ipsum consectetur elit ornare dignissim. Maecenas lorem eros, tempus eu gravida ac, posuere in magna. Phasellus rhoncus libero id sem fermentum mollis. Curabitur in ex velit. Sed at ex a metus commodo mattis eget vitae ante. Aenean ultricies nibh magna, quis mollis magna volutpat vitae',
          date: '2018-09-03 11:12:40',
          visited: true,
          typeMail: 'mailBox',
        },
        {
          id: 4,
          subject: 'Nouvelle offre id-5',
          sender: 'Société anonyme 258',
          receiver: '12',
          description:
            'Nam aliquet quis orci eu ullamcorper. Suspendisse id accumsan purus, quis blandit mi. Phasellus in ligula mollis, pretium tellus sit amet, sollicitudin nisl. Praesent at enim pharetra, hendrerit magna eu, condimentum velit. In hac habitasse platea dictumst. Etiam efficitur, sapien sed dignissim ultricies, purus mauris porta massa, fringilla viverra ex lorem in tellus. Interdum et malesuada fames',
          date: '2018-10-05 11:12:40',
          visited: true,
          typeMail: 'mailBox',
        },
        {
          id: 5,
          subject: 'Nouvelle offre id-4',
          sender: 'Yooboot',
          receiver: '12',
          description:
            'Vestibulum eu tristique ipsum, in lacinia massa. Nulla a elementum dolor. Integer molestie nec mi sit amet dapibus. Aliquam erat volutpat. Morbi eu vulputate mi, eu pretium metus. Integer ullamcorper lacus quis felis sagittis, vitae bibendum urna pretium. Duis fringilla, sem ac fringilla hendrerit, ipsum justo molestie ex, a ullamcorper metus diam vitae erat. Nunc varius massa et magna ornare laoreet. Maecenas consectetur at dui vitae fermentum. Vestibulum a tristique risus, eget facilisis ex. Pellentesque convallis mauris vitae suscipit semper',
          date: '2018-11-03 11:12:40',
          visited: false,
          typeMail: 'mailBox',
        },
        {
          id: 6,
          subject: 'Améliorer vos compétences',
          sender: 'Yooboot',
          receiver: '12',
          description:
            'Duis aliquam dolor risus, eget sodales neque vehicula aliquam. Nullam ornare suscipit hendrerit. Vivamus elementum hendrerit ullamcorper. Nunc suscipit viverra imperdiet. Nam vehicula nec sapien a pulvinar. Ut diam lectus, venenatis at mattis vel, semper sed tellus. Fusce tellus risus, sagittis id turpis in, bibendum malesuada magna. Phasellus feugiat, purus ac sagittis semper, nisi ligula maximus ipsum, nec finibus massa magna in dolor. Donec mattis velit non quam feugiat, sit amet convallis erat sollicitudin. Suspendisse potenti. Aenean in sapien molestie nisl elementum feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra',
          date: '2018-09-02 01:42:50',
          visited: false,
          typeMail: 'mailBox',
        },
      ],
      sentList: [
        {
          id: 120,
          subject: 'Nouvelle offre id-10',
          sender: 'Moi',
          receiver: 'Societé Ax_098',
          description:
            'Ut venenatis tincidunt erat sed fringilla. Proin orci ante, dictum a aliquam ac, malesuada blandit libero. Integer ipsum velit, fringilla sed velit a, ultricies varius risus. Sed commodo a diam eu ullamcorper. Praesent rutrum mauris sit amet dui eleifend feugiat. Curabitur vehicula arcu in orci commodo fringilla. Sed quis convallis odio',
          date: '2018-08-01 20:12:20',
          visited: true,
          typeMail: 'sentMail',
        },
      ],
      deletedMailsList: [],
    };

    this.changeContainer = this.changeContainer.bind(this);
    this.handleAddMailtoDeletedList = this.handleAddMailtoDeletedList.bind(this);
    this.handleAddMailtoSentList = this.handleAddMailtoSentList.bind(this);
    this.handleOpenMail = this.handleOpenMail.bind(this);
    this.handleOpenMailSent = this.handleOpenMailSent.bind(this);
    this.handleClickDeleteMailDetails = this.handleClickDeleteMailDetails.bind(this);
  }

  changeContainer(event, targetName) {
    this.setState({
      currentPage: targetName,
      openedMailId: null,
      openedMail: null,
    });
  }

  handleAddMailtoDeletedList(newelement) {
    const { deletedMailsList } = this.state;
    this.setState({
      deletedMailsList: [...deletedMailsList, newelement],
    });
    this.SimpleSnackbar.showMessage('Message placé dans la corbeille.');
  }

  handleAddMailtoSentList(newElement) {
    const { sentList } = this.state;
    const newElementData = { ...newElement, sender: 'Moi', date: 'A l`instant' };
    this.setState({
      sentList: [...sentList, newElementData],
    });
    this.SimpleSnackbar.showMessage('Message envoyé.');
  }

  handleOpenMail(idEmail, key) {
    const { inboxList } = this.state;
    this.setState({
      currentPage: 'detailsMail',
      openedMailId: idEmail,
      openedMail: inboxList[key],
    });

    this.setState(() => {
      inboxList[key].visited = true;

      return this.setState({
        inboxList,
      });
    });
  }

  handleOpenMailSent(idEmail, key) {
    const { sentList } = this.state;
    this.setState({
      currentPage: 'detailsMail',
      openedMailId: idEmail,
      openedMail: sentList[key],
    });

    this.setState(() => {
      sentList[key].visited = true;

      return this.setState({
        sentList,
      });
    });
  }

  handleClickDeleteMailDetails(event) {
    const {
      openedMailId, openedMail, inboxList, sentList,
    } = this.state;
    if (openedMail.typeMail === 'mailBox') {
      inboxList.find((mailItem, mailKey) => {
        if (mailItem.id === openedMailId) {
          // Add mail to deleted list
          this.handleAddMailtoDeletedList(mailItem);

          // Remove mail from mailBox
          inboxList.splice(mailKey, 1);
          this.setState({ inboxList });

          this.changeContainer(event, 'boite-de-reception');

          this.SimpleSnackbar.showMessage('Message placé dans la corbeille.');
        }
        return true;
      });
    } else if (openedMail.typeMail === 'sentMail') {
      sentList.find((mailItem, mailKey) => {
        if (mailItem.id === openedMailId) {
          // Add mail to deleted list
          this.handleAddMailtoDeletedList(mailItem);

          // Remove mail from mailBox
          sentList.splice(mailKey, 1);
          this.setState({ sentList });

          this.changeContainer(event, 'messages-envoyes');

          this.SimpleSnackbar.showMessage('Message placé dans la corbeille.');
        }
        return true;
      });
    }
  }

  render() {
    const {
      currentPage, openedMail, inboxList, sentList, modeUser, deletedMailsList,
    } = this.state;
    const { classes } = this.props;
    return (
      <div style={{ backgroundColor: 'white' }}>
        <Grid container>
          <Grid item xs={3} style={{ backgroundColor: 'white' }}>
            <Fab
              variant="extended"
              aria-label="Delete"
              style={{ margin: '15px 0px 15px 2px;' }}
              color="primary"
              onClick={event => this.changeContainer(event, 'NewMessage')}
            >
              <AddIcon style={{ margin: '0px 32px 0 0px' }} />
              <span style={{ margin: '0px 32px 0 0px' }}>Nouveau message</span>
            </Fab>
          </Grid>

          <Grid item xs={9} style={{ backgroundColor: 'white' }}>
            <div className={classes.search}>
              <Paper style={{ backgroundColor: 'aliceblue' }}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </Paper>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3} style={{ backgroundColor: 'white', paddingTop: '8px' }}>
            <List>
              <ListItem
                button
                selected={
                  currentPage === 'boite-de-reception'
                  || getLoDash(openedMail, 'typeMail', false) === 'mailBox'
                }
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>

                <ListItemText
                  onClick={event => this.changeContainer(event, 'boite-de-reception')}
                  primary={<Typography variant="h6">Boîte de réception</Typography>}
                />
              </ListItem>
              <ListItem
                button
                selected={
                  currentPage === 'messages-envoyes'
                  || getLoDash(openedMail, 'typeMail', false) === 'sentMail'
                }
              >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  onClick={event => this.changeContainer(event, 'messages-envoyes')}
                  primary={<Typography variant="h6">Messages envoyés</Typography>}
                />
              </ListItem>
              <ListItem button selected={currentPage === 'corbeille'}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText
                  onClick={event => this.changeContainer(event, 'corbeille')}
                  primary={<Typography variant="h6">Corbeille</Typography>}
                />
              </ListItem>
            </List>

            <SimpleSnackbar onRef={(ref) => { this.SimpleSnackbar = ref; }} />
          </Grid>

          <Grid item xs={9} style={{ padding: '1rem', marginBottom: '30px' }}>
            {currentPage === 'boite-de-reception' && (
              <div>
                <InboxList
                  inboxList={inboxList}
                  handleAddMailtoDeletedList={this.handleAddMailtoDeletedList}
                  handleOpenMail={this.handleOpenMail}
                />
              </div>
            )}

            {currentPage === 'messages-envoyes' && (
              <div>
                <SentList
                  sentList={sentList}
                  handleAddMailtoDeletedList={this.handleAddMailtoDeletedList}
                  handleOpenMail={this.handleOpenMailSent}
                />
              </div>
            )}

            {currentPage === 'corbeille' && (
              <div>
                <DeletedList deletedMailsList={deletedMailsList} />
              </div>
            )}

            {currentPage === 'detailsMail' && (
              <DetailsMail
                openedMail={openedMail}
                handleAddMailtoSentList={this.handleAddMailtoSentList}
                changeContainer={this.changeContainer}
                handleClickDeleteMailDetails={this.handleClickDeleteMailDetails}
                modeUser={modeUser}
              />
            )}

            {currentPage === 'NewMessage' && modeUser === 'anonymous' && (
              <NewMessageAnonymous
                handleAddMailtoSentList={this.handleAddMailtoSentList}
                changeContainer={this.changeContainer}
              />
            )}

            {currentPage === 'NewMessage' && modeUser === 'public' && (
              <NewMessagePublic
                handleAddMailtoSentList={this.handleAddMailtoSentList}
                changeContainer={this.changeContainer}
              />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

MailBox.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(MailBox);
