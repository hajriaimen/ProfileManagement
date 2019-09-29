/**
 * @file Blog Page View
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
  Select,
  MenuItem,
} from '@material-ui/core';

const styles = {
  postGrid: {
    display: 'inline-block',
    width: '100%',
  },

  postPaper: {
    padding: '0.5rem',
    margin: '1rem',
  },

  readMore: {
    color: 'blue',
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

  category: {
    backgroundColor: '#b5d2f7',
    display: 'inline-block',
    padding: '0.5rem',
    margin: '0.5rem',
  },

  label: {
    display: 'inline-block',
    padding: '0.5rem',
    margin: '0.5rem',
  },
  grid: {
    display: 'inline-block',
  },

};

const staticCategories = [
  { id: 1, label: 'cat 1' },
  { id: 2, label: 'cat 2' },
  { id: 3, label: 'cat 3' },
  { id: 4, label: 'cat 4' },
];

const staticPosts = (() => {
  const posts = [];

  for (let index = 0; index < 6; index += 1) {
    posts.push({
      id: index + 1,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      comments: [],
      excerpt: faker.lorem.paragraphs(),
      createdAt: faker.date.past().toLocaleString(),
      tags: ['tag1'],
      newComment: false,
      category: `cat ${(index % 2) + 1}`,
    });
  }

  return posts;
})();


const compareDateAsc = (a, b) => {
  const aCreatedAt = (a.createdAt.substring(0, 10)).split('/').reverse().join('/');
  const bCreatedAt = (b.createdAt.substring(0, 10)).split('/').reverse().join('/');

  if (aCreatedAt < bCreatedAt) { return -1; }
  if (aCreatedAt > bCreatedAt) { return 1; }
  return 0;
};

const compareDateDesc = (a, b) => {
  const aCreatedAt = (a.createdAt.substring(0, 10)).split('/').reverse().join('/');
  const bCreatedAt = (b.createdAt.substring(0, 10)).split('/').reverse().join('/');

  if (aCreatedAt < bCreatedAt) { return 1; }
  if (aCreatedAt > bCreatedAt) { return -1; }
  return 0;
};


class BlogPageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      categories: [],
      fields: {
        category: 'all',
        dateOrder: 'desc',
        search: '',
      },
    };

    this.getPosts = this.getPosts.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getPostsBySelectedValue = this.getPostsBySelectedValue.bind(this);
  }

  componentWillMount() {
    this.getPosts();
    this.getCategories();
  }

  getPosts() {
    this.setState({
      posts: staticPosts,
    });
  }

  getCategories() {
    this.setState({
      categories: staticCategories,
    });
  }

  getPostsBySelectedValue(field, value) {
    let posts = [];
    const { fields } = this.state;
    let { category, dateOrder } = fields;
    if (field === 'category') {
      category = value;
    }

    if (field === 'dateOrder') {
      dateOrder = value;
    }
    if (category === 'all') {
      posts = staticPosts;
    } else {
      staticPosts.map((item) => {
        if (item.category === category) {
          posts.push(item);
        }

        return '';
      });
    }

    if (dateOrder === 'desc') {
      posts.sort(compareDateDesc);
    } else posts.sort(compareDateAsc);
    this.setState({ posts });
    return true;
  }

  handleChange(field) {
    return (event) => {
      const { fields } = this.state;

      this.setState({
        fields: Object.assign({}, fields, {
          [field]: event.target.value,
        }),
      });
      this.getPostsBySelectedValue(field, event.target.value);
    };
  }

  render() {
    const { classes } = this.props;
    const { fields, posts, categories } = this.state;

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <div style={{ width: '100%', padding: '1rem', margin: '1rem 15%' }}>
            <Grid container spacing={24}>

              <Grid item xs={6} style={{ display: 'inline-block' }}>
                <Select
                  id="standard-search"
                  label="Search field"
                  type="search"
                  fullWidth
                  value={fields.category}
                  onChange={this.handleChange('category')}
                >
                  <MenuItem value="all"> Toutes les catégories </MenuItem>

                  {// add all categories to select
                  categories.map(({ label }) => (
                    <MenuItem key={label} value={label}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={6} style={{ display: 'inline-block' }}>
                <Select
                  id="standard-search"
                  label="Search field"
                  type="search"
                  fullWidth
                  value={fields.dateOrder}
                  onChange={this.handleChange('dateOrder')}
                >
                  <MenuItem value="desc">
                    Date plus récente à plus ancienne
                  </MenuItem>
                  <MenuItem value="asc">
                    Date plus ancienne à plus récente
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
          </div>

          <Grid item xs={12} style={{ margin: '1rem 15%' }}>
            <Typography variant="h6" style={{ paddingLeft: '2rem' }}>
              La liste des articles
            </Typography>

            {// posts list
            posts.map(({
              id,
              title,
              excerpt,
              createdAt,
              tags,
              category,
            }) => (
              <Grid item xs={12} key={id} className={classes.postGrid}>
                <Paper className={classes.postPaper}>
                  <Typography variant="h6" component="h2">
                    {`#${id} - ${title}`}
                  </Typography>

                  <Typography>
                    Créé le
                    { ` ${createdAt}`}
                  </Typography>

                  <Grid item xs={12} className={classes.postContent}>
                    {excerpt}
                    <span>
                      <a href={`blog/post/${id}`}>
                        Plus ...
                      </a>
                    </span>
                  </Grid>

                  <Grid container>
                    <Grid item xs={6} className={classes.grid}>
                      <Typography className={classes.label}>Mots clés:</Typography>
                      {tags.map(tag => (
                        <Paper className={classes.tag} key={tag}>
                          {tag}
                        </Paper>
                      ))}
                    </Grid>

                    <Grid item xs={6} className={classes.grid}>
                      <Typography className={classes.label}> Categorie: </Typography>
                      <Paper className={classes.category} key={category}>
                        {category}
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}

          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

BlogPageView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(BlogPageView);
