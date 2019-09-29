/**
 * @file Candidate Profile
 * @author BENHZEZ Ali
 * @date 2019-02-04
 */

import React from 'react';
import Link from 'next/link';
import { get as getLoDash } from 'lodash';
import {
  Grid,
  Paper,
  Avatar,
  IconButton,
} from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import STATIC_PROFILE from './static-data';
import styles from './styles.css';
import CandidatePersonalInfo from './CandidatePersonalInfo';
import CandidateTalents from './CandidateTalents';
import CandidateProfProject from './CandidateProfessionalProject';


class CandidateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
    };

    this.getProfileData = this.getProfileData.bind(this);
  }

  componentWillMount() {
    this.getProfileData();
  }

  getProfileData() {
    this.setState({
      profileData: STATIC_PROFILE,
    });
  }

  render() {
    const { profileData } = this.state;
    return (
      <React.Fragment>
        <Grid container className="">
          <Grid item xs={12}>
            <Paper>
              <Grid container className={styles.avatarGrid}>
                <Avatar src={getLoDash(profileData, 'personalInfo.civility.avatar')} className={styles.avatar} />
              </Grid>

              <div className={styles.profileTitle}>
                { getLoDash(profileData, 'personalInfo.civility.title') }
                {' '}
                { getLoDash(profileData, 'personalInfo.civility.identity.firstName') }
                {' '}
                { getLoDash(profileData, 'personalInfo.civility.identity.lastName') }

                <div>{getLoDash(profileData, 'personalInfo.civility.identity.birthday')}</div>
                <div>{getLoDash(profileData, 'myTalents.currentStatus')}</div>

                <IconButton>
                  <Link href="/profile">
                    <Edit />
                  </Link>
                </IconButton>
              </div>

              {(() => {
                if (getLoDash(profileData, 'personalInfo')) {
                  return <CandidatePersonalInfo data={profileData.personalInfo} />;
                } return '';
              })()}

              {(() => {
                if (getLoDash(profileData, 'myTalents')) {
                  return <CandidateTalents data={profileData.myTalents} />;
                } return '';
              })()}

              {(() => {
                if (getLoDash(profileData, 'professionalProject')) {
                  return <CandidateProfProject data={profileData.professionalProject} />;
                } return '';
              })()}
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CandidateProfile;
