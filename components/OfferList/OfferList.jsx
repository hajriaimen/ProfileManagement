/**
 * @file Component renders a card list of offers based on the OfferCard component
 * @author Aymen HAJRI
 * @date 2019-01-18
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';

import OfferCard from './OfferCard';
//import SearchCriteria from '../SearchCriteria';
import CollapseCheckbox from '../SearchCriteria/CollapseCheckbox';

// class OfferList to show the list of job offers
class OfferList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      rowsPerPage: 5,
      sort: 1,
    };
    this.updateFilterePosts = this.updateFilterePosts.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentWillMount() {
    const { filtred } = this.props;
    this.setState({ posts: [...filtred] });
  }

  componentDidUpdate(prevProps) {
    this.updateFilterePosts(prevProps);
  }

  // function to filter the result of the search
  // @params: prevProps to check if there is a diffrence with the old result
  // returns a table with the new search new elements
  updateFilterePosts(prevProps) {
    const { filtred } = this.props;
    if (prevProps.filtred !== filtred) {
      this.setState({
        posts: [...filtred],
      });
    }
  }

  handleChangeRowsPerPage(event) {
    // setRowsPerPage(+event.target.value);
    this.setState({ rowsPerPage: +event.target.value });
  }

  handleChangePage(event, newPage) {
    this.setState({ page: newPage });
  }

  render() {
    const {
      posts, rowsPerPage, page, sort,
    } = this.state;
    return (
      <Grid container>
        <Grid item xs={2} md={2} lg={2} xl={2} style={{ float: 'left', margin: '0px 50px' }}>
          <CollapseCheckbox />
        </Grid>
        <Grid item xs={7} md={7} lg={8} xl={8}>
          <Grid>
            {/** map over job offers  as cards */}
            {
              posts.sort((a, b) => (sort * (a.price - b.price)))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(post => <OfferCard key={post.id} post={post} />)
          }
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            style={{ margin: ' auto' }}
          >
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={posts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}

            />
          </Grid>
        </Grid>
      </Grid>

    );
  }
}

OfferList.propTypes = {
  filtred: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OfferList;
