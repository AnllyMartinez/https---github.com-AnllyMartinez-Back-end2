const ProductosController = require('./ProductosController');
const DespacharController = require('./DespacharController')
const DespachadosController = require('./DespachadosController')

exports.registrarControladores= (app)=>{
    app.use('/productosdisponibles', ProductosController);
    app.use('/pedidospordespachar', DespacharController);
    app.use('/pedidosdespachados', DespachadosController);
}