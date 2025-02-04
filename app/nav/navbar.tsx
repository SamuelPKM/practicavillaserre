import {AppBar, Typography, Toolbar, Box, Button} from "@mui/material";

import React from 'react';
import Link from "next/link";


const Navbar = () => {
    const navItems: ({ name: string; url: string })[] = [{
        name: 'Formulario de ordenes de compra',
        url: '/ordenes'
    }, {name: 'Formulario de usuarios', url: '/usuarios'}];
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Hola, esta es una practica para VillaSerre
                    </Typography>
                    <Box sx={{display: {xs: 'block', sm: 'block'}}}>
                        {navItems.map((item: { name: string; url: string }) => (
                            <Link href={item.url} key={item.url + "navitem"}>
                                <Button key={item.url + "button"} sx={{color: 'white', m:1, backgroundColor: "orange"}} variant="contained">
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;

