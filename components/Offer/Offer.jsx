/**
 * @file Component renders an offer details(name, comapny, requirements...)
 * & a button to apply an offer
 * @author Aymen HAJRI
 * @date 2019-01-18
 */

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Typography,
  Button,
  CardMedia,
} from '@material-ui/core';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AdequacyLevel from './AdequacyLevel';

// static job offer details object
const JOB_OFFER = [{
  id: 1,
  title: 'Featured post',
  price: 1,
  date: '12/05/2018',
  img: 'http://aeroengineer.org/wp-content/uploads/2016/11/NASA.png',
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  descriptionDetails: `Faire partie d une équipe de développement agile (scrum) pour travailler sur des projets ambitieux
    Mettre en œuvre des Framework innovants du marché
    Présenter et expliquer à vos collaborateurs vos choix techniques, votre façon de faire`,
  company: 'imagine partners',
  hashtags: ['react', 'node'],
  adress: 'rue liberté tunis 1000',
  exigences: `
    Vous êtes un développeur junior ou confirmé, capable d’être autonome et de prendre des initiatives avec le groupe pour trouver des solutions d’avancement.

    Aptitudes recherchées :

    Vous êtes un développeur junior ou confirmé, capable d’être autonome et de prendre des initiatives avec le groupe pour trouver des solutions d’avancement.

    Aptitudes recherchées :

    Bonne capacité de communication verbale et écrite en Français
    Maitrise de Javascript
    React : Plus vous en savez, mieux c'est
    Capable de faire des recherches, de s’autoformer et de trouver les meilleurs pratiques à appliquer sur tout l’écosystème javascript / micro service.
    Niveau d'anglais permettant d'être autonome sur toute documentation technique
    Être un humain respectable (cela vient en premier, en fait)
    Connaissances approfondies de HTML&CSS
    Non requis mais c'est un plus :

    Node.js
    Git
  `,
}, {
  id: 2,
  title: 'test',
  price: 3,
  date: '12/05/2018',
  img: 'http://aeroengineer.org/wp-content/uploads/2016/11/NASA.png',
  description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
  descriptionDetails: `Faire partie d une équipe de développement agile (scrum) pour travailler sur des projets ambitieux
    Mettre en œuvre des Framework innovants du marché
    Présenter et expliquer à vos collaborateurs vos choix techniques, votre façon de faire`,
  company: 'imagine partners',
  hashtags: ['react', 'node'],
  adress: 'rue liberté tunis 1000',
  exigences: `
    Vous êtes un développeur junior ou confirmé, capable d’être autonome et de prendre des initiatives avec le groupe pour trouver des solutions d’avancement.

    Aptitudes recherchées :

    Vous êtes un développeur junior ou confirmé, capable d’être autonome et de prendre des initiatives avec le groupe pour trouver des solutions d’avancement.

    Aptitudes recherchées :

    Bonne capacité de communication verbale et écrite en Français
    Maitrise de Javascript
    React : Plus vous en savez, mieux c'est
    Capable de faire des recherches, de s’autoformer et de trouver les meilleurs pratiques à appliquer sur tout l’écosystème javascript / micro service.
    Niveau d'anglais permettant d'être autonome sur toute documentation technique
    Être un humain respectable (cela vient en premier, en fait)
    Connaissances approfondies de HTML&CSS
    Non requis mais c'est un plus :

    Node.js
    Git
  `,
}];

// verifier si le candidat déja postuler sur cet offre
const APPLAY_STATE = false;

// styling
const paperStyle = {
  margin: '1rem auto',
  height: 700,
  width: 700,
  backgroundColor: '#e1e1e1',
};

const headerStyle = {
  borderBottom: 'solid',
  margin: 'auto',
  padding: 10,
};

const headerLogoStyle = {
  height: 200,
  width: '100%',
};

class Offer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobOffer: '',
      apply: APPLAY_STATE,
      isFavorite: false,
      openShare: false,
      sendto: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.handleShareOpen = this.handleShareOpen.bind(this);
    this.handleShareClose = this.handleShareClose.bind(this);
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
  }

  componentWillMount() {
    const { id } = this.props;
    const result = JOB_OFFER.filter(obj => (obj.id.toString() === id.toString()));
    const requestedOffer = result[0];
    this.setState({
      jobOffer: requestedOffer,
    });
  }


  // methode pour envoyer une candidature lors du l'application
  handleSubmit(event) {
    event.preventDefault();
    const { jobOffer } = this.state;
    this.setState(prevState => ({
      apply:
      !prevState.apply,
    }));
    axios.post('/post', { jobOffer });
  }

  // methode pour ajouter une offre au panier
  handleFavoriteClick() {
    this.setState(prevState => ({
      isFavorite:
      !prevState.isFavorite,
    }));
  }

  // methode pour changer l'etats du dialog à ouverte
  handleShareOpen() {
    this.setState({ openShare: true });
  }

  // methode pour changer l'etats du dialog à fermer
  handleShareClose() {
    this.setState({ openShare: false });
  }

  // methode pour changer le continue de text field
  handleChangeTextField(event) {
    this.setState({ sendto: event.target.value });
  }

  render() {
    const {
      jobOffer, apply, isFavorite, openShare, sendto,
    } = this.state;

    return (
      <div>
        <Paper style={paperStyle}>

          {/** COMPANY LOGO */}
          <Grid container style={headerStyle}>
            <Grid item xs={4}>
              <CardMedia
                style={headerLogoStyle}
                image={jobOffer.img}
              />
            </Grid>

            <Grid item xs={6} style={{ float: 'left', margin: 'auto' }}>

              {/** JOB OFFER TITLE */}
              <Typography variant="h4" component="h2">
                { jobOffer.title}
              </Typography>

              {/** JOB OFFER DESCRIPTION */}
              <Typography variant="subtitle1" component="h2">
                { jobOffer.description}
              </Typography>
            </Grid>

            {/** Boutton favoris pour ajouter une offre au panier */}
            <Grid item style={{ float: 'right', margin: 'auto' }}>
              <IconButton aria-label="Add to favorites" onClick={this.handleFavoriteClick}>
                <AddShoppingCart color={isFavorite ? 'primary' : 'disabled'} />
              </IconButton>
            </Grid>

            {/** Boutton pour envoyer une offre par mail */}
            <Grid item style={{ float: 'right', margin: 'auto' }}>
              <IconButton aria-label="Share" onClick={this.handleShareOpen}>
                <ShareIcon color="primary" />
              </IconButton>

              {/** pop-up pour saisir l'email du destinaire */}
              <Dialog
                open={openShare}
                onClose={this.handleShareClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Envoyer l offre</DialogTitle>
                <DialogContent onSubmit={this.sendMail}>
                  <DialogContentText>
                    Entrez l&apos;adresse Email du destinaire
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={sendto}
                    name="sendto"
                    onChange={this.handleChangeTextField}
                  />
                </DialogContent>

                {/** Button to cancel the share process & close the dialog  */}
                <DialogActions>
                  <Button onClick={this.handleShareClose} color="primary">
                    Annuler
                  </Button>

                  {/** Button to confirm the send of the offre to the email */}
                  <Button onClick={this.handleShareClose} color="primary">
                    Envoyer
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>

            <Grid container>

              {/** COMPANY NAME */}
              <Grid item xs={4}>
                <Typography variant="subtitle1" component="h2">
                  { jobOffer.company}
                </Typography>
              </Grid>

              {/** COMPANY ADRESS */}
              <Grid item xs={3}>
                <Typography variant="subtitle1" component="h2">
                  { jobOffer.adress}
                </Typography>
              </Grid>

              {/** DATE OF THE OFFER */}
              <Grid item xs={3}>
                <Typography variant="subtitle1" component="h2">
                  { jobOffer.date}
                </Typography>
              </Grid>

              {/**  Boutton postuler ou annuler la candidature */}
              <Grid item xs={2}>
                <Link href={`/offer/${jobOffer.id}`}>
                  <Button variant="outlined" size="small" color="primary" onClick={this.handleSubmit}>
                    {(apply) ? 'POSTULER' : 'ANNULER'}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/** PAGE BODY */}
          <Paper style={{ padding: '.5rem 1rem' }}>
            <Grid container>

              {/** job offer full description */}
              <Grid container>
                <Grid item xs={5}>
                  <Typography variant="h5" component="h2" color="primary">
                      Description de l&apos;emploi :
                  </Typography>
                </Grid>

                {/** adequacy  Level component */}
                <Grid item xs={7}>
                  <AdequacyLevel />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" component="p" paragraph align="justify">
                  {jobOffer.descriptionDetails}
                </Typography>
              </Grid>

              {/** job offer requirements */}
              <Grid item>
                <Typography variant="h5" component="h2" color="primary">
                    Exigences de l&apos;emploi :
                </Typography>

                <Grid container>
                  <Typography variant="subtitle1" component="p" paragraph align="justify">
                    {jobOffer.exigences}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </div>
    );
  }
}
Offer.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Offer;
