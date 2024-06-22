import React, { Component } from 'react';
import { Button, Typography, colors } from '@mui/material';


function InfotechButton(props) {
    const { text, color='#101828', backgroundColor ='#F5F5F5' , type = 'primary' } = props;

    const icon = {
        rightIcon: `icon/rightArrow.png`,
    }
    const primaryBtn = {
        backgroundColor: backgroundColor,
        color: color,
        padding: '12px 40px',
        borderRadius: '2px',
    }

    return (
        <Button variant="contained" style={{ ...primaryBtn }}>
            <Typography variant='body1' style={{ display: 'flex', alignItems: 'center' }} fontWeight={'600'}>{text} <img src={icon.rightIcon} style={{ maxWidth: '20px', marginLeft: '10px' }} /></Typography></Button>
    );
}

export default InfotechButton;