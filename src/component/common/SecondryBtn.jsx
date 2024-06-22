import React, { Component } from 'react';
import { Button, Typography, colors } from '@mui/material';

function SecondryBtn(props) {
    const icon = {
        rightIcon: `icon/playicon.png`,
    }
    const ActionButton = {
        backgroundColor: 'transparent',
        color: '#F5F5F5',
        padding: '12px 40px',
        border: '0px',
        TextDecoder: 'underline'
    }

    const { text } = props;
    return (
        <Button variant="text" style={{ ...ActionButton }}>
            {/* <img src={icon.rightIcon} style={{ maxWidth: '20px', marginLeft: '10px' }} /> */}
            <Typography variant='body1' style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid' }} fontWeight={'600'}>{text}

            </Typography>
        </Button>
    );
}

export default SecondryBtn;