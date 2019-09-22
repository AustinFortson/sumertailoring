import React from 'react';
import { Grid } from '@material-ui/core';
import ButtonAppBar from '../appbar/appbar';
import './jumbotron.css';
import LogoImage from '../../components/images/LogoImage.jpg'

export default function Jumbotron() {

  
    return (
      <div className="Jumbotron">
          <Grid container>
            <Grid item xs={12} md={6} id="leftJumbo">
              <ButtonAppBar/>
              <h1>PROFESSIONAL TAILER & ALTERATIONS</h1>
              <h3>Slim Tuxedos, Business Suits, Modern Fit Slim Shirts, Slim Ties, and More</h3>
            </Grid>
            <Grid item xs={12} md={6} id="rightJumbo">
            <img src={LogoImage} alt="none" id="logo"/>
            </Grid>
          </Grid>
      </div>
    );
  }