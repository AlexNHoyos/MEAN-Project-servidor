const moongose = require('mongoose');

const ProductoSchema = moongose.Schema({
    producto:{
        type:String,
        required: true
    },
     categoria:{
        type:String,
        required: true
    },
    ubicacion:{
        type:String,
        required: true
    },
    precio:{
        type:Number,
        required: true
    },
    fechaCreacion:{
        type:Date,
        default: Date.now()
    }
});

module.exports = moongose.model('Producto', ProductoSchema);