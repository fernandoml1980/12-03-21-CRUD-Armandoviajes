const mongoose=require('mongoose')

const clienteSchema=new mongoose.Schema({ /*datos del documento clientes*/
    nombres:{type:String, required:true},
    apellidos:{type:String, required:true},
    telefono:{type:Number, required:false},
    correo:{type:String, required:true },
    ciudad_origen:{type:String, required:false},
    ciudad_destino:{type:String, required:false},
    fecha_inicio:{type:String, required:true},
    fecha_fin:{type:String, required:true},
    cantidad_pasajeros:{type:Number, required:true},
    tipo_servicio:{type:String, required:true}
})

module.exports=mongoose.model('clientes',clienteSchema)