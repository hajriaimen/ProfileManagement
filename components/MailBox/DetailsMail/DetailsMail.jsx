/**
 * @file detailsMail : sub component du MailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React, { Component } from 'react';

import { Typography, Paper } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Undo from '@material-ui/icons/Undo';
import Print from '@material-ui/icons/Print';

import PropTypes from 'prop-types';

import ReplyMessage from '../ReplyMessage/Anonymous';
import ReplyMessagePublic from '../ReplyMessage/Public';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyMessage: 0,
      replyList: [],
    };
    this.showReplyMessage = this.showReplyMessage.bind(this);
    this.hideReplyMessage = this.hideReplyMessage.bind(this);
    this.addReplyMessage = this.addReplyMessage.bind(this);
  }

  showReplyMessage() {
    this.setState({ replyMessage: 1 });
  }

  hideReplyMessage() {
    this.setState({ replyMessage: 0 });
  }

  addReplyMessage(newelement) {
    const { replyList } = this.state;
    this.setState({
      replyList: [...replyList, newelement],
    });
  }

  render() {
    const { replyMessage, replyList } = this.state;
    const {
      modeUser,
      openedMail,
      handleClickDeleteMailDetails,
      handleAddMailtoSentList,
      changeContainer,
    } = this.props;

    return (
      <React.Fragment>
        <Card style={{ borderTop: '3px solid #2196f3', backgroundColor: '#f4f4f44d' }}>
          <Typography
            variant="h3"
            gutterBottom
            style={{ padding: '16px 16px 0 16px', margin: '0' }}
          >
            {openedMail.subject}
            <IconButton aria-label="Delete" style={{ float: 'right' }}>
              <Print />
            </IconButton>
          </Typography>
          <CardHeader
            avatar={(
              <Avatar aria-label="Recipe" style={{ backgroundColor: '#FFC107' }}>
                {openedMail.sender[0]}
              </Avatar>
)}
            title={openedMail.sender}
            subheader={`${openedMail.date} (Il ya 5 jours)`}
          />
          <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />
          <CardContent>
            <Typography component="p">{openedMail.description}</Typography>

            <div>
              {replyList.map(replyItem => (
                <Paper
                  key={Math.random()}
                  elevation={1}
                  style={{ padding: '15px', borderTop: '3px solid #FFC107', margin: '15px 0' }}
                >
                  <CardHeader
                    avatar={(
                      <Avatar aria-label="Recipe" style={{ backgroundColor: '#03A9F4' }}>
                        {replyItem.sender[0]}
                      </Avatar>
)}
                    title={replyItem.sender}
                    subheader={`${replyItem.date} (Il ya 5 jours)`}
                  />
                  <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />

                  <CardContent>
                    <Typography component="p">{replyItem.description}</Typography>
                  </CardContent>
                </Paper>
              ))}
            </div>

            {openedMail.typeMail === 'mailBox' && replyMessage === 0 && (
              <div style={{ marginTop: '15px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: '15px' }}
                  onClick={this.showReplyMessage}
                >
                  <Undo />
                  Répondre
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: '15px' }}
                  onClick={handleClickDeleteMailDetails}
                >
                  <DeleteIcon />
                  Supprimer
                </Button>
              </div>
            )}

            {openedMail.typeMail === 'sentMail' && replyMessage === 0 && (
              <div style={{ marginTop: '15px' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: '15px' }}
                  onClick={handleClickDeleteMailDetails}
                >
                  <DeleteIcon />
                  Supprimer
                </Button>
              </div>
            )}
          </CardContent>

          {replyMessage === 1 && modeUser === 'anonymous' && (
            <ReplyMessage
              openedMail={openedMail}
              handleAddMailtoSentList={handleAddMailtoSentList}
              changeContainer={changeContainer}
              hideReplyMessage={this.hideReplyMessage}
              addReplyMessage={this.addReplyMessage}
            />
          )}
          {replyMessage === 1 && modeUser === 'public' && (
            <ReplyMessagePublic
              openedMail={openedMail}
              handleAddMailtoSentList={handleAddMailtoSentList}
              changeContainer={changeContainer}
              hideReplyMessage={this.hideReplyMessage}
              addReplyMessage={this.addReplyMessage}
            />
          )}
        </Card>
      </React.Fragment>
    );
  }
}

InputForm.propTypes = {
  modeUser: PropTypes.string.isRequired,
  openedMail: PropTypes.shape({}).isRequired,
  handleClickDeleteMailDetails: PropTypes.func.isRequired,
  handleAddMailtoSentList: PropTypes.func.isRequired,
  changeContainer: PropTypes.func.isRequired,
};

export default InputForm;
