/**
 * @file Candidate Alert Page View
 * @author BENHZEZ Ali
 * @date 2019-03-05
 */

import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import faker from 'faker';
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Tooltip,
  Button,
  Grid,
} from '@material-ui/core';
import SyncIcon from '@material-ui/icons/Sync';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';

const CRITERIONS = (() => {
  const criterionsData = [];

  for (let index = 0; index < 3; index += 1) {
    criterionsData.push(
      faker.random.arrayElement([
        'Developpement',
        'Dveloppement PHP',
        'media',
        'reseaux',
        'frontend',
      ]),
    );
  }
  return criterionsData;
})();

const STATIC_DATA = (() => {
  const alerts = [];

  for (let index = 0; index < 10; index += 1) {
    alerts.push({
      id: faker.random.number({ min: 1, max: 100 }),
      identity: `identité${index}`,
      enabled: faker.random.arrayElement([true, false]),
      consultationPlace: faker.random.arrayElement(['Sur le site ', 'Par email']),
      resultFrequency: faker.random.arrayElement(['Quotidien ', 'Hebdomadaire', 'Mensuel']),
      criterions: CRITERIONS,
      freshCandidateFiles: faker.random.arrayElement(['Chaque jour', 'Chaque semaine', 'Chaque mois']),
      createdAt: faker.date.past().toLocaleString(),
      updatedAt: faker.date.past().toLocaleString(),
    });
  }
  return alerts;
})();

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  if (order === 'desc') return (a, b) => desc(a, b, orderBy);
  return (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'identity', label: ' Identité' },
  { id: 'enabled', label: 'Statut' },
  { id: 'consultationPlace', label: 'Lieu de consultation des résultats' },
  { id: 'resultFrequency', label: 'Fréquence des résultats' },
  { id: 'freshCandidateFiles', label: 'Fraicheur des dossiers' },
  { id: 'createdAt', label: 'date de cr' },
  { id: 'updatedAt', label: ' date derniere maj ' },
  { id: 'criterions', label: ' Criteres ' },
  { id: 'action', label: 'Action' },
];

const EnhancedTableHead = (props) => {
  const { order, orderBy } = props;
  const createSortHandler = property => (event) => {
    props.onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {rows.map(
          row => (
            <TableCell
              key={row.id}
              align="center"
              padding="default"
              sortDirection={(() => {
                if (orderBy === row.id) return order;
                return false;
              })()}
            >
              <Tooltip
                title="Sort"
                placement="bottom-start"
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ),
          this,
        )}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  addBtn: {
    margin: '1rem',
  },
});


class CandidateAlertPageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      open: false,
      order: 'asc',
      orderBy: 'calories',
      data: [],
      page: 0,
      rowsPerPage: 5,
    };

    this.handleRequestSort = this.handleRequestSort.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggleStatus = this.handleToggleStatus.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: STATIC_DATA,
    });
  }

  handleRequestSort(event, property) {
    const orderBy = property;
    let order = 'desc';
    const {
      orderBy: sOrderBy,
      order: sOrder,
    } = this.state;

    if (sOrderBy === property && sOrder === 'desc') {
      order = 'asc';
    }
    this.setState({ order, orderBy });
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  handleConfirmDelete() {
    const { data, id } = this.state;

    this.setState({ open: false });
    // TO DO
    // axios.post(API_URL, id);
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].id === id) {
        data.splice(i, 1);
      }
    }
  }

  handleToggleStatus(id) {
    return () => {
      const { data } = this.state;

      // TO DO
      // axios.post(API_URL, id);
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].id === id) {
          data[i].enabled = !data[i].enabled;
        }
        this.setState({ data });
      }
    };
  }

  handleClickDelete(id) {
    return () => this.setState({ open: true, id });
  }

  handleClose() {
    this.setState({ open: false });
  }


  render() {
    const { classes } = this.props;
    const {
      open,
      data,
      order,
      orderBy,
      rowsPerPage,
      page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <React.Fragment>
        <Paper className="">
          <div className={classes.tableWrapper}>
            <Grid container justify="space-between" spacing={24}>
              <Grid item />
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  aria-label="Add"
                  className={classes.addBtn}
                  onClick={() => Router.push('/candidate/alerts/create')}
                >
                  <AddIcon className={classes.extendedIcon} />
                  Ajouter
                </Button>
              </Grid>

            </Grid>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <colgroup>
                <col style={{ width: '20%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
              </colgroup>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={n.id}
                    >
                      <TableCell align="center">{n.identity}</TableCell>

                      <TableCell align="center">
                        {(() => {
                          if (n.enabled) return 'Activée';
                          return 'desactivée';
                        })()}
                      </TableCell>

                      <TableCell align="center">{n.consultationPlace}</TableCell>
                      <TableCell align="center">{n.resultFrequency}</TableCell>
                      <TableCell align="center">{n.freshCandidateFiles}</TableCell>
                      <TableCell align="center">{n.createdAt}</TableCell>
                      <TableCell align="center">{n.updatedAt}</TableCell>
                      <TableCell align="center">{n.criterions.join(',\n')}</TableCell>

                      <TableCell align="center">
                        <Tooltip
                          title={(() => {
                            if (n.enabled) return 'Désactiver cette alerte';
                            return 'Activer cette alerte';
                          })()}
                          placement="bottom-start"
                          enterDelay={300}
                        >
                          <SyncIcon
                            color="action"
                            onClick={this.handleToggleStatus(n.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        </Tooltip>

                        <Tooltip
                          title="Mettre à jour"
                          placement="bottom-start"
                          enterDelay={300}
                        >
                          <EditIcon
                            color="action"
                            onClick={() => Router.push(`/candidate/alerts/update/${n.id}`)}
                            style={{ cursor: 'pointer' }}
                          />
                        </Tooltip>

                        <Tooltip
                          title="Supprimer"
                          placement="bottom-start"
                          enterDelay={300}
                        >
                          <DeleteIcon
                            color="action"
                            onClick={this.handleClickDelete(n.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        </Tooltip>

                      </TableCell>

                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
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
        </Paper>

        <ConfirmDeleteDialog
          open={open}
          onClose={this.handleClose}
          onDelete={this.handleConfirmDelete}
        />
      </React.Fragment>
    );
  }
}

CandidateAlertPageView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(CandidateAlertPageView);
