/**
 * @file deletedList : sub component du MailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { truncate } from 'lodash';

import TablePaginationActionsWrapped from '../../TablePaginationActions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

// eslint-disable-next-line react/no-multi-comp
class CustomPaginationActionsTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    const { deletedMailsList } = this.props;

    this.state = {
      deletedMailsList,
      page: 0,
      rowsPerPage: 5,
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { deletedMailsList, rowsPerPage, page } = this.state;
    const MathMinResult = Math.min(rowsPerPage, deletedMailsList.length - page * rowsPerPage);
    const emptyRows = rowsPerPage - MathMinResult;
    return (
      <Paper className={classes.root} style={{ marginTop: '0px' }}>
        <div className={classes.tableWrapper}>
          {deletedMailsList.length > 0 && (
            <Table className={classes.table}>
              <TableBody>
                {deletedMailsList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .sort((a, b) => (a.date > b.date ? -1 : 0))
                  .map(deletedMailsItem => (
                    <TableRow key={deletedMailsItem.id} selected={deletedMailsItem.visited}>
                      <TableCell>
                        <span className={deletedMailsItem.visited ? '' : 'mailVisited'}>
                          {deletedMailsItem.sender}
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <span className={deletedMailsItem.visited ? '' : 'mailVisited'}>
                          {deletedMailsItem.subject}
                          <span style={{ fontWeight: '500', color: '#707070' }}>
                            {` - ${truncate(deletedMailsItem.description, {
                              length: 24,
                              separator: /,.: +/,
                              omission: ' ...',
                            })}`}
                          </span>
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <span className={deletedMailsItem.visited ? '' : 'mailVisited'}>
                          {deletedMailsItem.date}
                        </span>
                      </TableCell>
                      {/*
                    <TableCell align="right">
                      <DeleteIcon
                        color="action"
                        onClick={() => this.handleClickDeleteMe(key)}
                        style={{ cursor: 'pointer' }}
                      />
                    </TableCell>
                    */}
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={3}
                    count={deletedMailsList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      native: true,
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActionsWrapped}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          )}
          {deletedMailsList.length === 0 && (
            <div style={{ padding: '0 15px' }}>
              <p>Aucun message dans la corbeille.</p>
            </div>
          )}
        </div>

        <style jsx>
          {`
            .mailVisited {
              font-weight: 600;
            }
          `}
        </style>
      </Paper>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  deletedMailsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);
