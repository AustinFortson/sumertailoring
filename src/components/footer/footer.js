import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import LogoImage from '../images/LogoImage.jpg';
import './footer.css';


export default function Footer() {


    return (
        <div>
            <Grid container id="footer">
                <Grid item xs={12}>
                <a href="/"><img src={LogoImage} alt="none" id="footerLogo"/></a>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body2" gutterBottom id="footerName">
                    Sumer Tailoring
                </Typography>                    
                </Grid>
            </Grid>
        </div>
    );
}