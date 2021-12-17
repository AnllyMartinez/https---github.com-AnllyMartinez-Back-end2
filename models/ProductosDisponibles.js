const {Schema, model} = require('mongoose');

const productosSchema = new Schema({
    disNOrden: {
        type: String,
        max: [10, 'La longuitud del campo supera la permitido(10) '],
        required: [true, 'El numero de orden es obligatorio']
    },
    disDescripcion: {
        type: String,
        max: [100, 'La longuitud del campo supera la permitido(100) '],
    },
    disEstado: {
        type: String,
        max: [50, 'La longuitud del campo supera la permitido(50) '],
        required: [true, 'El estado del producto es obligatorio ']
    },
    disMateriaPrima: {
        type: String,
        max: [100, 'La longuitud del campo supera la permitido(100) '],
        required: [true, 'La materia prima del producto es obligatorio']
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria.']
    }
},
{
    collection: 'ProductosDisponibles'
});

exports.ProductosDisponibles = model('ProductosDisponibles', productosSchema);