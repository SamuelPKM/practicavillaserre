'use client'

import React, {useEffect, useState} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import Navbar from "@/app/nav/navbar";
import {getProductsFunction, getUsersFunction} from "@/app/config/services/infoRetrievingFunctions";
import {Producto, Usuario} from "@/app/config/DataTypes";

const Page = () => {
    const [products, setProducts] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<Usuario[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<number | string>('');
    const [selectedUser, setSelectedUser] = useState<number | string>('');

    useEffect(() => {
        const fetchInitialData = async () => {
            const usersData: Usuario[] = await getUsersFunction();
            const productsData: Producto[] = await getProductsFunction();
            setUsers(usersData);
            setProducts(productsData);
            setLoading(false);
        }
        fetchInitialData();
    }, []);

    const handleProductChange = (event: SelectChangeEvent) => {
        setSelectedProduct(event.target.value);
    };

    const handleUserChange = (event: SelectChangeEvent) => {
        setSelectedUser(event.target.value);
    };

    return (
        <Box>
            <Navbar/>
            <Box sx={{mt: 10}}>
                <Typography variant="body2" component="div">
                    Hola, estas en el formulario de ordenes
                </Typography>
                <FormControl fullWidth sx={{mb: 2}}>
                    <InputLabel id="select-user-label">Selecciona un Usuario</InputLabel>
                    <Select
                        labelId="select-user-label"
                        value={selectedUser}
                        onChange={handleUserChange}
                        label="Selecciona un Usuario"
                    >
                        {users.map((user) => (
                            <MenuItem key={user.idusuario} value={user.idusuario}>
                                {`${user.nombre} ${user.paterno}`}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="select-product-label">Selecciona un Producto</InputLabel>
                    <Select
                        labelId="select-product-label"
                        value={selectedProduct}
                        onChange={handleProductChange}
                        label="Selecciona un Producto"
                    >
                        {products.map((product: Producto) => (
                            <MenuItem key={product.idproducto} value={product.idproducto}>
                                {product.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField variant="outlined" label={"Cantidad"} fullWidth required/>
            </Box>
        </Box>
    );
};

export default Page;
