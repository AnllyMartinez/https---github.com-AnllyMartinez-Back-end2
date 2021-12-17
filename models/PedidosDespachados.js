const {Schema, model} = require('mongoose');

const despachadosSchema = new Schema({
    desNOrden: {
        type: String,
        max: [10, 'La longuitud del campo supera la permitido(10) '],
        required: [true, 'El numero de orden es obligatorio']
    },
    desDescripcion: {
        type: String,
        max: [100, 'La longuitud del campo supera la permitido(100) '],
    },
    desEstado: {
        type: String,
        max: [50, 'La longuitud del campo supera la permitido(50) '],
        required: [true, 'El estado del producto es obligatorio ']
    },
    desFecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria.']
    }
},
{
    collection: 'PedidosDespachados'
});

exports.PedidosDespachados = model('PedidosDespachados', despachadosSchema);