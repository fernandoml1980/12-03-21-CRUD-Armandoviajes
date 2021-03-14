module.exports=(app)=>{
    const clientes=require('../controller/clientes')

    app.post('/clientes/crear',clientes.crearCliente)
    app.get('/clientes/todos',clientes.verClientes)
    app.get('/clientes/cliente/:id',clientes.verCliente)
    app.put('/clientes/actualizar/:id',clientes.atualizar)
    app.delete('/clientes/borrar/:id',clientes.borrar)
}