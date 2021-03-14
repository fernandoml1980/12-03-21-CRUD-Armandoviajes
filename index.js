const express=require('express')
var cors=require('cors') /*para que el front end pueda acceder a las funciones de la API */

const bodyPaser=require('body-parser')

const app=express()

const {connectdb}=require('./db')/*importar la finción para conectar la bd */

app.use(cors())
app.use(bodyPaser.json())

connectdb()/*instancia de la funcion */

require('./routes/clientes')(app)

app.listen(3000,()=>{
    console.log('Escuchando puerto')
})
