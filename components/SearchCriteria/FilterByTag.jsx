/**
 * @file Component renders a card list of offers based on the OfferCard component
 * @author Aymen HAJRI
 * @date 2019-03-28
 */

import React from 'react';
import {
  Grid,
  Paper,
  Chip,
} from '@material-ui/core';


// const HASHTAGS = ['react', 'node', 'react', 'node'];


class FilterByTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ margin: ' auto', position: 'relative' }}
      >
        <Grid item xs={8}>
          <Paper style={{ marginTop: '10px', padding: '5px' }}>
            <Chip
              label="helloworld"
            />
          </Paper>
        </Grid>

      </Grid>
    );
  }
}
export default FilterByTag;
