import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import './services.css'

export default function Services() {
    let servicesProvided = ["Bridesmaid Dress Alterations", "Recutting Services", "Restyling Services", "Embroidery Services", "Hemming Services", "Jeans/Denim Alterations", "Outerwear Alterations", "Patching Services", "Skirt Alterations", "Uniform Alterations", "Zipper Replacement & Repair", "Children's Clothing Alterations", "Clothing Restoration", "Dress Alterations", "Formal Wear Alterations", "Home Decor Alterations", "Leather Alterations", "Pant & Trouser Alterations", "Shirt & Blouse Alterations", "Suit Alterations", "Wedding Dress Alterations"];


    return (
        <div>
            <Grid container id="Content">
                <Grid item xs={12} md={8} id="Services">
                    <Paper>
                        <Typography varient="h6" gutterBotton>
                            <ul id="servicesList">
                                {servicesProvided.map(function (name, index) {
                                    return <li key={index} id={index}>{name}</li>;
                                })}
                            </ul>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}