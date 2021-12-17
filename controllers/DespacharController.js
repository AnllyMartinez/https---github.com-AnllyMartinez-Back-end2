const express = require('express');
const {PedidosPorDespachar} = require('../models/PedidosPorDespachar')

const router = express.Router();
router.get('/all', async(request, response) =>{
    console.log("Pedidos por Despachar");
    try {
        const datos = await PedidosPorDespachar.find().exec();
        response.send(datos)
    } catch (error) {
        console.log('Error al consultar los pedidos por despachar.')
        console.log(error);
    }


});

module.exports = router;