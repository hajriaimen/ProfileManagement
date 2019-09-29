/**
 * @file Help Page View
 * @author BENHZEZ Ali
 * @date 2019-02-01
 */

import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import {
  withStyles,
  Grid,
  Typography,
  Avatar,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpSearchBox from '../HelpSearchBox';

const styles = {
  postGrid: {
    display: 'inline-block',
  },

  postPanel: {
    padding: '0.5rem',
    margin: '1rem',
    borderStyle: 'solid',
    borderWidth: '0 0 0.2px 0',
    color: 'grey',
  },

  readMore: {
    color: 'blue',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },

  postContent: {
    margin: '1rem 0 0 0',
  },

  tag: {
    backgroundColor: '#b5d2f7',
    display: 'inline-block',
    padding: '0.5rem',
    margin: '0.5rem',
  },
};

const staticHelpModules = ['Profile', 'Blog', 'Offers'];

const staticFAQ = (() => {
  const posts = [];
  for (let index = 0; index < 6; index += 1) {
    posts.push({
      id: index + 1,
      question: faker.lorem.paragraphs(1),
      createdAt: faker.date.past().toLocaleString(),
      tags: [`tag${index}`],
    });
  }

  return posts;
})();


class HelpPageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FAQ: [],
      helpModules: [],
      expanded: '',
    };

    this.getFAQ = this.getFAQ.bind(this);
    this.getFaqByTag = this.getFaqByTag.bind(this);
    this.getHelpModules = this.getHelpModules.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.getFAQ();
    this.getHelpModules();
  }

  getFAQ() {
    this.setState({
      FAQ: staticFAQ,
    });
  }

  getFaqByTag(value) {
    const faqs = [];
    staticFAQ.map((item) => {
      if (
        item.tags.indexOf(value) !== -1
        || item.question.indexOf(value) !== -1
      ) {
        faqs.push(item);
      }

      this.setState({
        FAQ: faqs,
      });
      return true;
    });
  }

  getHelpModules() {
    this.setState({
      helpModules: staticHelpModules,
    });
  }

  handleChange(panel) {
    return () => {
      const { expanded } = this.state;
      if (expanded === panel) this.setState({ expanded: '' });
      else this.setState({ expanded: panel });
    };
  }

  render() {
    const { classes } = this.props;
    const { FAQ, helpModules, expanded } = this.state;

    return (
      <React.Fragment>
        <Grid container style={{ margin: '1rem 15%', width: '70%' }}>
          <Grid item xs={6}>
            <Typography variant="h4" component="h2" style={{ padding: '1rem' }}>
              Questions fréquemment posées
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <HelpSearchBox
              underlineStyle={{ display: 'none' }}
              getFaqByTag={this.getFaqByTag}
              getFAQ={this.getFAQ}
              style={{ display: 'inline-block' }}
            />
          </Grid>


          {// FAQ list
          FAQ.map(({
            id, question,
          }) => (
            <Grid item xs={12} key={id} className="">
              <div className={classes.postPanel}>
                <Grid container>
                  <Avatar>?</Avatar>
                  <Grid item xs={11} style={{ margin: '0.8rem' }}>
                    <span>
                      <a href={`help/question/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        {question}
                      </a>
                    </span>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ))}

          <Grid container>
            {// Module list
            helpModules.map(itemModule => (
              <Grid
                key={itemModule}
                item
                xs={12}
                style={{ padding: '0', margin: '0.5rem ' }}
              >
                <ExpansionPanel
                  expanded={expanded === itemModule.toLowerCase()}
                  onChange={this.handleChange(
                    itemModule.toLowerCase(),
                  )}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h4" component="h2">
                      {itemModule}
                    </Typography>
                  </ExpansionPanelSummary>

                  <ExpansionPanelDetails>
                    <Grid item xs={12}>
                      {// FAQ By Module
                      FAQ.map(({ id, question, tags }) => {
                        if (tags.indexOf(itemModule.toLowerCase()) !== -1) {
                          return (
                            <Grid key={id} item xs={12} className="">
                              <div className={classes.postPanel}>
                                <Grid container>
                                  <Avatar>?</Avatar>
                                  <Grid item xs={11} style={{ margin: '0.8rem' }}>
                                    <span>
                                      <a href={`help/question/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        {question}
                                      </a>
                                    </span>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                          );
                        }
                        return '';
                      })}
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

HelpPageView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(HelpPageView);
