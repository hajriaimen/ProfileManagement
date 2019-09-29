/**
 * @file Post Page View
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

  commentsListPaper: {
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

const STATIC_POST = {
  id: 2,
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
  comments: [],
  excerpt: faker.lorem.slug(),
  created_at: '2018-12-12T08:46:44.962Z',
  tags: ['tag2', 'tag4'],
  new_comment: false,
  category: 'cat 1',
};


class BlogArticlePageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCommentForm: false,
      post: {},
    };

    this.getPost = this.getPost.bind(this);
    this.handleShowNewComment = this.handleShowNewComment.bind(this);
    this.handleCancelNewComment = this.handleCancelNewComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.showFormBlock = this.showFormBlock.bind(this);
  }

  componentWillMount() {
    this.getPost();
  }

  getPost() {
    this.setState({
      post: STATIC_POST,
    });
  }

  handleCancelNewComment() {
    this.setState({ showCommentForm: false });
  }

  handleShowNewComment() {
    this.setState({ showCommentForm: true });
  }

  addComment(data) {
    this.setState(prevState => ({
      post: { ...prevState.post, comments: [...prevState.post.comments, data] },
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
    const { post, showCommentForm } = this.state;

    return (
      <Paper className={classes.commentPaper}>
        <Typography variant="h5" component="h2">
          {`#${id} - ${post.title}`}
        </Typography>


        <Grid item xs={12}>
          {post.content}
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.label}>Mots clés:</Typography>
          {post.tags.map(tag => (
            <Paper className={classes.tag} key={tag}>{tag}</Paper>
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
              post.comments.map(({ email, comment }) => (
                <Paper key={email} className={classes.commentsListPaper}>
                  <p><b>{email}</b></p>
                  {comment}
                </Paper>
              ))}
        </Grid>

        <Grid id="comment-box" item xs={12}>
          {this.showFormBlock(showCommentForm)}
        </Grid>
      </Paper>
    );
  }
}

BlogArticlePageView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(BlogArticlePageView);
