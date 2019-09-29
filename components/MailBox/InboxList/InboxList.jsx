/**
 * @file inboxList : sub component du mailBox
 * @author Adel ELECHI
 * @date 2019-03-06
 */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

class CustomPaginationActionsTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    const { inboxList } = this.props;
    // console.log(inboxList);
    this.state = {
      inboxList,
      page: 0,
      rowsPerPage: 5,
    };
    this.handleClickDeleteMe = this.handleClickDeleteMe.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  handleClickDeleteMe(index) {
    const { inboxList } = this.state;
    const { handleAddMailtoDeletedList } = this.props;
    // Add mail to deleted list
    handleAddMailtoDeletedList(inboxList[index]);

    // Remove mail from mailBox
    inboxList.splice(index, 1);
    this.setState({ inboxList });
  }

  render() {
    const { classes, handleOpenMail } = this.props;
    const { inboxList, rowsPerPage, page } = this.state;
    const MathMinResult = Math.min(rowsPerPage, inboxList.length - page * rowsPerPage);
    const emptyRows = rowsPerPage - MathMinResult;
    return (
      <Paper className={classes.root} style={{ marginTop: '0px' }}>
        <div className={classes.tableWrapper}>
          {inboxList.length > 0 && (
            <Table className={classes.table}>
              <TableBody>
                {inboxList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .sort((a, b) => (a.date > b.date ? -1 : 0))
                  .map((inboxItem, key) => (
                    <TableRow key={inboxItem.id} selected={inboxItem.visited}>
                      <TableCell>
                        <span
                          className={inboxItem.visited ? '' : 'mailVisited'}
                          onClick={() => handleOpenMail(inboxItem.id, key)}
                          style={{ cursor: 'pointer' }}
                        >
                          {inboxItem.sender}
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <span
                          className={inboxItem.visited ? '' : 'mailVisited'}
                          onClick={() => handleOpenMail(inboxItem.id, key)}
                          style={{ cursor: 'pointer' }}
                        >
                          {inboxItem.subject}
                          <span style={{ fontWeight: '500', color: '#707070' }}>
                            {` - ${truncate(inboxItem.description, {
                              length: 24,
                              separator: /,.: +/,
                              omission: ' ...',
                            })}`}
                          </span>
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <span className={inboxItem.visited ? '' : 'mailVisited'}>
                          {inboxItem.date}
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => this.handleClickDeleteMe(key)}
                          style={{ cursor: 'pointer' }}
                          aria-label="Delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
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
                    count={inboxList.length}
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
          {inboxList.length === 0 && (
            <div style={{ padding: '0 15px' }}>
              <p>Aucun message dans boîte de réception.</p>
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
  handleAddMailtoDeletedList: PropTypes.func.isRequired,
  handleOpenMail: PropTypes.func.isRequired,
  inboxList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);
