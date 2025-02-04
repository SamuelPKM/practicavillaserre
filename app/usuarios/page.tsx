'use client'
import React, {useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import Navbar from "@/app/nav/navbar";
import {getUsersFunction} from "@/app/config/services/infoRetrievingFunctions";

const Page = () => {
    useEffect(() => {
        const fetchUsersData = async () => {
            const usersData = await getUsersFunction()
            console.log(usersData)
        }
        fetchUsersData()
    }, [])
    return (
        <Box>
            <Navbar/>
            <Box sx={{mt: 10}}>
                <Typography variant="body2" component="div">
                    Hola, estas en el formulario de usuarios
                </Typography>
            </Box>
        </Box>
    );
};

export default Page;