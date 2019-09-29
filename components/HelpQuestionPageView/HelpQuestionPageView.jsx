/**
 * @file Question Page View
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import {
  withStyles,
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import CommentForm from '../CommentForm';

const styles = {
  commentPaper: {
    padding: '1rem',
    margin: '1rem 15%',
  },

  commentListPaper: {
    padding: '0.5rem',
    margin: '0.5rem',
    backgroundColor: '#80808033',
  },

  tag: {
    backgroundColor: '#b5d2f7',
    display: 'inline-block',
    padding: '0.5rem',
    margin: '0.5rem',
  },

  grid: {
    padding: '1rem',
    margin: '1rem',
  },

  label: {
    display: 'inline-block',
    padding: '0.5rem',
    margin: '0.5rem',
  },
};

const staticQuestion = {
  id: 2,
  question: faker.lorem.paragraphs(1),
  content: faker.lorem.paragraphs(5),
  created_at: '2018-12-12T08:46:44.962Z',
  tags: ['tag2', 'profile'],
  comments: [],
};

class HelpQuestionPageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCommentForm: false,
      question: {},
    };

    this.getquestion = this.getquestion.bind(this);
    this.handleCancelNewComment = this.handleCancelNewComment.bind(this);
    this.handleShowNewComment = this.handleShowNewComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentWillMount() {
    this.getquestion();
  }

  getquestion() {
    this.setState({
      question: staticQuestion,
    });
  }

  handleShowNewComment() {
    this.setState({ showCommentForm: true });
  }

  handleCancelNewComment() {
    this.setState({ showCommentForm: false });
  }

  addComment(data) {
    this.setState(prevState => ({
      question: {
        ...prevState.question,
        comments: [...prevState.question.comments, data],
      },
    }));
    this.setState({ showCommentForm: false });
  }

  showFormBlock(condition) {
    if (condition) {
      return (
        <CommentForm
          handleCancelNewComment={this.handleCancelNewComment}
          addComment={this.addComment}
        />
      );
    } return '';
  }

  render() {
    const { classes, id } = this.props;
    const { question, showCommentForm } = this.state;

    return (
      <div>

        <Paper className={classes.commentPaper}>
          <Typography variant="h4" component="h2">
            {`#${id} - ${question.question}`}
          </Typography>

          <Grid item xs={12}>
            {question.content}
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.label}>Mots clés:</Typography>
            {question.tags.map(tag => (
              <Paper className={classes.tag} key={tag}>
                {tag}
              </Paper>
            ))}
          </Grid>

          <Grid item xs={12} className={classes.grid}>
            <Button
              variant="contained"
              type="button"
              onClick={this.handleShowNewComment}
            >
              Commenter
            </Button>
          </Grid>

          <Grid item xs={12} className={classes.grid}>
            { // comments list
              question.comments.map(
                ({ email, comment }) => (
                  <Paper key={email} className={classes.commentListPaper}>
                    <p><b>{email}</b></p>
                    {comment}
                  </Paper>
                ),
              )}
          </Grid>

          <Grid id="comment-box" item xs={12}>
            {this.showFormBlock(showCommentForm)}
          </Grid>
        </Paper>
      </div>
    );
  }
}

HelpQuestionPageView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(HelpQuestionPageView);
