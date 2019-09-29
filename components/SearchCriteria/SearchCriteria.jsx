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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const HASHTAGS = ['react', 'node', 'react', 'node'];


class SearchCriteria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: [...HASHTAGS],
      selectedTags: [],
      // inputValue: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  handleClick(hashtag) {
    this.setState(prevState => ({
      selectedTags: [...prevState.selectedTags, hashtag],
    }));
  }


  deleteTag(hashtag) {
    const { selectedTags } = this.state;
    const filteredTags = selectedTags.filter(word => word !== hashtag);

    this.setState({
      selectedTags: [...filteredTags],
    });
  }


  render() {
    const { hashtags, selectedTags } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ margin: ' auto', position: 'relative' }}
      >

        <Grid item xs={8} style={{ position: 'relative', width: '100%', backgroundColor: '#ddd' }}>
          <Paper>
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
              { /** to add later with search helper based on the list of tags */ }
              <InputBase
                placeholder="Filter par tag"
                type="text"
                color="inherit"
                fullWidth
              />
            </Grid>
          </Paper>

        </Grid>
        <Grid item xs={8}>
          <Paper style={{ marginTop: '10px' }}>

            {selectedTags.map(tag => (
            // notification item
              <Chip
                label={tag}
                onDelete={() => this.deleteTag(tag)}
              />
            ))}

          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper style={{ marginTop: '10px', padding: '5px' }}>

            {hashtags.map(hashtag => (
            // notification item
              <Chip
                label={hashtag}
                onClick={() => this.handleClick(hashtag)}
              />
            ))}

          </Paper>
        </Grid>

      </Grid>
    );
  }
}
export default SearchCriteria;
