const express = require('express');
const app = express();
const path = require('path');
const routersRegister = require('./routers/registerApi');
const routersDetalle = require('./routers/detalleApi');
const routersCarrito = require('./routers/carritoApi');
const routersHome = require('./routers/homeApi');
const routersLogin = require('./routers/loginApi');
const routersProdList = require('./routers/prodListApi');
<<<<<<< HEAD
const routersProductos = require('./routers/productos')
=======
const routersProdCRUD = require('./routers/prodCRUDApi');
>>>>>>> 5186647cb29ba63c678464125ac0f2165c308f6f

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
// instalandoEJS --->npm install ejs //

app.set("view engine", "ejs");
app.set('views', __dirname + '/views-ejs');

app.use('/registro', routersRegister);
app.use('/detalle', routersDetalle);
app.use('/carrito', routersCarrito);
app.use('/', routersHome);
app.use('/login', routersLogin);
app.use('/prodList', routersProdList);
<<<<<<< HEAD
app.use('/productos', routersProductos)
=======
app.use('/prodCRUD', routersProdCRUD);
>>>>>>> 5186647cb29ba63c678464125ac0f2165c308f6f
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
})





