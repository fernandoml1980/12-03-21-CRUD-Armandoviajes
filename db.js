const mongoose=require('mongoose')/*para interactuar con mongo db */

const connectdb=()=>{
    mongoose.set('useCreateIndex',true)
    mongoose.connect('mongodb://localhost:27017/clientes',{ /*conexión y cracion de bd cliente*/
        useNewUrlParser:true,/*analizar las cadenas de conexion de mongodb */
        useUnifiedTopology:true /*elimina la compatibilidad con opciones de conexion q ya son obsoletas*/
    },(error)=>{
        if(error){
            console.log(error)
        }else{
            console.log('Conectado a la db')
        }
    }
    )

}

module.exports={connectdb}