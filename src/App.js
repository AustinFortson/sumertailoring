import React from 'react';
import './App.css';
import { Grid, Typography, Paper } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Jumbotron from './components/jumbotron/jumbotron';
import Services from './components/services/services';
import ImageList from './components/imagelist/imagelist';
import Footer from './components/footer/footer';
import IMG2 from './components/images/IMG2.jpg';
import IMG3 from './components/images/IMG3.jpg';
import MapIMG from './components/images/Map.jpg';
import FacebookIMG from './components/images/FacebookIMG.png';
import InstagramIMG from './components/images/InstagramIMG.png';

function App() {
  return (
    <div className="App">
      <Jumbotron />

        {/*About Us*/}
        <Grid item xs={12}>
            <Typography variant="h2" gutterBottom  id="Header">
            Who We Are
            </Typography>
        </Grid>

        <Fade up>
        <Grid container id="Content">
        <Grid item xs={12} md={6} id="Body">
          <Paper>
          <Typography variant="h6" gutterBottom id="whoBodyContent">
            At Sumer Tailoring , we are focused on providing  the best tailoring services with the highest levels of customer satisfaction. We will do everything we can to meet your expectations. With a variety of offerings to choose from, we’re sure you’ll be happy working with us.
            </Typography>
            </Paper>
        </Grid>

        <Grid item xs={12} md={6} id="about">
            <img src={IMG2} alt="none" id="img" height="400px"/>
        </Grid>
      </Grid>
      </Fade>

      {/*Services Offered*/}
      <Grid item xs={12}>
            <Typography variant="h2" gutterBottom  id="Header">
            Services Offered
            </Typography>
        </Grid>

      <Fade up>
       <Services/> 
      </Fade>
      

      {/*Testimonys*/}
      <Grid item xs={12}>
            <Typography variant="h2" gutterBottom  id="Header">
            Testimonys
            </Typography>
        </Grid>

      <Fade up>
      <Grid container id="Content">
      <Grid item xs={12} md={8}>
          <img src={IMG3} alt="none" height="300px" id="img"/>
        </Grid>

        <Grid item xs={12} md={4} id="Body2">
          <Paper>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            "If you looking for the best tailor with outstanding service and great customer service, thats the place to go, they know what they doing and they take a very good care of you" <a href="https://www.google.com/search?sxsrf=ACYBGNRJK5uY2t5GZVIAdNRHrzWzISxbkg%3A1569010365721&ei=vTKFXeTTK8fStAWxwIzABA&q=sumer+tailoring&oq=sumer+tailoring&gs_l=psy-ab.3..0i10j0i22i30j38.4611703.4615203..4615456...1.0..1.354.1798.11j4j0j1......0....1..gws-wiz.......35i39j0i67j0j0i131j0i20i263j0i131i67j0i13.OEfYCmsHaxs&ved=0ahUKEwikpv2Lm-DkAhVHKa0KHTEgA0gQ4dUDCAs&uact=5#lrd=0x885421d2178a570f:0x44759b962d3444d,1,,," target="_blank" rel="noopener noreferrer">-Google Reviews</a>
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
        </Grid>

        <Grid item xs={12} md={4} id="Body2">
          <Paper>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            "Fantastic service!  Had various alterations done to my new 3pc suit and couldn’t be happier with the results. Highly recommended.  Second time I’ve used their services and I’ll definitely be back." <a href="https://www.google.com/search?sxsrf=ACYBGNRJK5uY2t5GZVIAdNRHrzWzISxbkg%3A1569010365721&ei=vTKFXeTTK8fStAWxwIzABA&q=sumer+tailoring&oq=sumer+tailoring&gs_l=psy-ab.3..0i10j0i22i30j38.4611703.4615203..4615456...1.0..1.354.1798.11j4j0j1......0....1..gws-wiz.......35i39j0i67j0j0i131j0i20i263j0i131i67j0i13.OEfYCmsHaxs&ved=0ahUKEwikpv2Lm-DkAhVHKa0KHTEgA0gQ4dUDCAs&uact=5#lrd=0x885421d2178a570f:0x44759b962d3444d,1,,," target="_blank" rel="noopener noreferrer">-Google Reviews</a>
            </Typography>
          </Paper>
        </Grid>

      </Grid>
      </Fade>

      <Fade up>
        <ImageList/>        
      </Fade>

      {/*Contact*/}
      <Grid item xs={12} id="contact">
        <Typography variant="h2" gutterBottom id="Header">
          Contact Us
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom id="whoBodyContent">
          Interested in our services?  Get in touch with us!
        </Typography>
      </Grid>

      <Fade up>
      <Grid container id="Content">
        <Grid item xs={12} md={6} id="Body3">
          <Paper>
          <Typography variant="h5" gutterBottom id="whoBodyContent">
            Sumer Tailoring INC
            </Typography>
          <Typography variant="body1" gutterBottom id="whoBodyContent">
            Phone: 704-323-0281
            </Typography>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            Email: a-albahraini@yahoo.com
            </Typography>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            <a href="https://www.facebook.com/sumerfashions/" target="_blank" rel="noopener noreferrer" ><img src={FacebookIMG} alt="none" id="socialIcons"/></a>
            <a href="https://www.instagram.com/sumertailoring/" target="_blank" rel="noopener noreferrer"><img src={InstagramIMG} alt="none" id="socialIcons"/></a>  
            </Typography>             
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} id="Body3">
          <Paper>
          <Typography variant="h5" gutterBottom id="whoBodyContent">
            Hours Of Operation
            </Typography>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            Mon-Fri: 9:00am-9:00pm
            </Typography>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            Sat: 9:00am-9:00pm
            </Typography>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            Sun: 10:00am-8:00pm
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} id="Body2">
          <Paper>
          <Typography variant="h5" gutterBottom id="whoBodyContent">
            Address
            </Typography>
            <Typography variant="body1" gutterBottom id="whoBodyContent">
            <a href="https://www.google.com/maps/dir//sumer+tailoring/@35.2223238,-80.7976045,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x885421d2178a570f:0x44759b962d3444d!2m2!1d-80.760941!2d35.202932" target="_blank" rel="noopener noreferrer" id="address">3119 N. Sharon Amity RD. Charlotte NC 28205</a>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} id="Body2">
          <a href="https://www.google.com/maps/dir//sumer+tailoring/@35.2223238,-80.7976045,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x885421d2178a570f:0x44759b962d3444d!2m2!1d-80.760941!2d35.202932"><img src={MapIMG} alt="none" id="mapIMG"/></a>
        </Grid>
      </Grid>
      </Fade>

      <Footer/>


      
    </div>
  );
}

export default App;
