const clientes=require('../models/clientes')

exports.crearCliente=(req,res)=>{
    const nuevoCliente=new clientes({
        nombres:req.body.nombres,
        apellidos:req.body.apellidos,
        telefono:req.body.telefono,
        correo:req.body.correo,
        ciudad_origen:req.body.ciudad_origen,
        ciudad_destino:req.body.ciudad_destino,
        fecha_inicio:req.body.fecha_inicio,
        fecha_fin:req.body.fecha_fin,
        cantidad_pasajeros:req.body.cantidad_pasajeros,
        tipo_servicio:req.body.tipo_servicio
    })
    nuevoCliente.save().then(
        datos=>{
            res.send(datos)
        }
    ).catch(
        error=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}

exports.verClientes=(req,res)=>{
    clientes.find({})/*mostrar todos los clientes*/
    .then((datos)=>{
        res.send(datos)
    }).catch((err)=>{
        res.status(500).send({message:'Error en el Servidor'})
    })
}

exports.verCliente=(req,res)=>{
    const id=req.params.id
    clientes.findById(id)/*mostrar solo un cliente*/
    .then((datos)=>{
        if(!datos){
            res.status(404).send({message:'dato no encontrado: '+id})
        }else{
            res.send(datos)
        }
    }).catch((err)=>{
        res.status(500).send({message:'Error en el Servidor'})
    })
}

exports.atualizar=(req,res)=>{/*actualizar información de cliente*/
    const id=req.params.id
    if(!req.body){
        return res.status(500).send({message:'No ingreso datos para actualizar'})
    }
    clientes.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
    .then((datos)=>{
        if(!datos){
            res.status(404).send({message:'El dato '+id+ ' no existe'})
        }else{
            res.send({message:"Actualización Exitosa"})
        }
    }).catch((err)=>{
        res.status(500).send({message:'Error en el Servidor'})
    })

}

exports.borrar=(req,res)=>{
    const id=req.params.id

    clientes.findByIdAndRemove(id)
    .then((datos)=>{
        if(!datos){
            res.status(404).send({message:'Error, '+id+' no se encontró'})
        }else{
            res.send({message:id+' Eliminado correctamente'})
        }
    })
    .catch((err)=>{
        res.status(500).send({message:'Error en el Servidor'})
    })
}
