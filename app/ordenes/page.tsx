'use client'
import React from 'react';
import {Box, Typography} from "@mui/material";
import Navbar from "@/app/nav/navbar";

const Page = () => {
    return (
        <Box>
            <Navbar/>
            <Box sx={{mt: 10}}>
                <Typography variant="body2" component="div">
                    Hola, estas en el formulario de ordenes
                </Typography>
            </Box>
        </Box>
    );
};

export default Page;