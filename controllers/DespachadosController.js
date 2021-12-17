const express = require('express');
const {PedidosDespachados} = require('../models/PedidosDespachados')

const router = express.Router();
router.get('/all', async(request, response) =>{
    console.log("Pedidos por Despachar");
    try {
        const datos = await PedidosDespachados.find().exec();
        response.send(datos)
    } catch (error) {
        console.log('Error al consultar los pedidos despachados.')
        console.log(error);
    }


});

module.exports = router;