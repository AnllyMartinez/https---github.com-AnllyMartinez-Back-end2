const express = require('express');
const {ProductosDisponibles} = require('../models/ProductosDisponibles')

const router = express.Router();
router.get('/all', async(request, response) =>{
    console.log("Productos Disponibles");
    try {
        const datos = await ProductosDisponibles.find().exec();
        response.send(datos)
    } catch (error) {
        console.log('Error al consultar los productos disponibles.')
        console.log(error);
    }


});

module.exports = router;