/**
 * @file Component renders a card that contains a job offer breif description
 * @author Aymen HAJRI, Zakaria ABDELAZIZ
 * @date 2019-01-31
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Tooltip,
} from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

// Styling
const CARD_STYLE = {
  marginTop: 20,
  width: 700,
};

const MEDIA_STYLE = {
  height: 120,
  width: 200,
  float: 'left',
};

const CARD_ACTIONS_STYLE = {
  fullWidth: true,
  backgroundColor: '#eeeeee',
};

class OfferCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: { ...props.post },
      inCart: false,
    };
    this.addOfferToCart = this.addOfferToCart.bind(this);
  }

  addOfferToCart() {
    this.setState(prevState => ({
      inCart:
      !prevState.inCart,
    }));
  }

  render() {
    const { post, inCart } = this.state;

    return (
      <Card style={CARD_STYLE}>
        <Grid item xs={1} style={{ float: 'right', margin: '10px 10px' }}>

          {/** bouton ajouter offre au panier transit */}
          <IconButton aria-label="Cart" onClick={this.addOfferToCart}>
            <AddShoppingCart size="large" color={inCart ? 'primary' : 'disabled'} />
          </IconButton>

          <Typography variant="caption" gutterBottom>
            Ajouter au panier
          </Typography>
        </Grid>
        <Grid item xs={10} md={10} lg={10} xl={10}>

          {/** card of the job offer with a link to the job offer page */}
          <Link href={`/offer/${post.id}`}>
            <CardActionArea>
              {/** company image */}
              <CardMedia
                style={MEDIA_STYLE}
                image={post.img}
              />

              {/** tooltip shows when the mouse is over the card content div */}
              <Tooltip title={post.description} placement="bottom-start">
                <CardContent>

                  {/** job offer title */}
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>

                  {/** company name */}
                  <Typography variant="h6" component="h2">
                    {post.company}
                  </Typography>
                </CardContent>
              </Tooltip>

            </CardActionArea>

          </Link>
        </Grid>

        <Grid item style={CARD_ACTIONS_STYLE}>
          <CardActions style={CARD_ACTIONS_STYLE}>

            {/** map over hashtags of the offer */}
            <Grid item xs={5}>
              {post.hashtags.map(hashtag => (
                <Button key={hashtag} variant="outlined" size="small" color="primary" style={{ margin: '0 .5rem 0 0' }}>
                  {hashtag}
                </Button>
              ))}
            </Grid>

            {/** company adress */}
            <Grid item xs={3}>
              <LocationIcon color="primary" />
              <Typography color="primary" fontWeight="fontWeightLight">
                {post.adress}
              </Typography>
            </Grid>

            {/** job offer date */}
            <Grid item xs={2}>
              <ScheduleIcon color="primary" />
              <Typography color="primary" fontWeight="fontWeightLight">
                {post.date}
              </Typography>
            </Grid>

            {/** Button to redirect to the job offer page */}
            <Grid item style={{ float: 'right' }} xs={2}>
              <Link href={`/offer/${post.id}`}>
                <Button variant="outlined" size="medium" color="primary">
                  POSTULER
                </Button>
              </Link>
            </Grid>
          </CardActions>
        </Grid>
      </Card>
    );
  }
}

OfferCard.propTypes = {
  post: PropTypes
    .objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ])).isRequired,
};

export default OfferCard;
