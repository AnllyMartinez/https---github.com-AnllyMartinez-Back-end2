const {Schema, model} = require('mongoose');

const despacharSchema = new Schema({
    NOrden: {
        type: String,
        max: [10, 'La longuitud del campo supera la permitido(10) '],
        required: [true, 'El numero de orden es obligatorio']
    },
    descripcion: {
        type: String,
        max: [100, 'La longuitud del campo supera la permitido(100) '],
    },
    estado: {
        type: String,
        max: [50, 'La longuitud del campo supera la permitido(50) '],
        required: [true, 'El estado del producto es obligatorio ']
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria.']
    }
},
{
    collection: 'PedidosPorDespachar'
});

exports.PedidosPorDespachar = model('PedidosPorDespachar', despacharSchema);