/**
 * @file Component renders a card list of offers based on the OfferCard component
 * @author Aymen HAJRI
 * @date 2019-03-19
 */

import React from 'react';
import {
  Grid,
  Divider,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import OfferList from '../OfferList';
import FEATURED from './ls';


class FiltredOffers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [...FEATURED],
      items: [],
    };
    this.filterList = this.filterList.bind(this);
  }

  componentWillMount() {
    const { initialItems } = this.state;
    this.setState({ items: initialItems });
  }

  filterList(event) {
    const { initialItems } = this.state;
    let updatedList = initialItems;
    updatedList = updatedList.filter(item => item.title.toLowerCase().search(
      event.target.value.toLowerCase(),
    ) !== -1);
    this.setState({ items: [...updatedList] });
  }

  render() {
    const { items } = this.state;
    const listLength = items.length;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ margin: ' auto', position: 'relative' }}
      >

        <Grid item xs={8} style={{ position: 'relative', width: '100%', backgroundColor: 'primary' }}>
          <Grid
            item
            xs={6}
            style={{
              height: '100%',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto',
            }}
          >
            <SearchIcon />
          </Grid>
          <Grid
            item
            xs={11}
            style={{
              display: 'flex',
              position: 'relative',
              width: 'auto',
              margin: 'auto',
            }}
          >
            <InputBase
              placeholder="Search…"
              type="text"
              onChange={event => this.filterList(event)}
              color="inherit"
            />
          </Grid>

        </Grid>
        <Grid item xs={8}>
          <h2 className="count">
            { items.length }
            {listLength > 1 || listLength === 0
              ? ' results'
              : ' result'}
          </h2>
          <Divider />

        </Grid>

        <Grid
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{ margin: ' auto' }}
        >
          <OfferList filtred={[...items]} />

        </Grid>

      </Grid>
    );
  }
}
export default FiltredOffers;
