
const res = require("express/lib/response");
const fs = require("fs");
const path = require('path');
const productoFile = path.join(__dirname, '../data/product.json');
const productosJ = JSON.parse(fs.readFileSync(productoFile, 'utf-8'));

const productosController = {
    // fileName: './data/product.json',
    // getData: function () {
    //     return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));

    // },
    // generateId: function () {
    //     let allUsers = this.findAll();
    //     let lastUser = allUsers.pop();
    //     if (lastUser) {
    //         return lastUser.id + 1;
    //     }
    //     return 1;
    // },
    // findAll: function () {
    //     return this.getData();
    // },
    listar: (req, res) => {
        res.render("prodList", { productosJ: productosJ })
    },
    crearProductos: (req, res) => {
        res.render("prodCrear")
    },
    detalleProducto:
        (req, res) => {
            const productId = parseInt(req.params.id, 10);
            let productoEncontrado;

            for (let i = 0; i < productosJ.length; i++) {
                if (productosJ[i].id === productId) {
                    productoEncontrado = productosJ[i];
                }
            }

            if (!productoEncontrado) {
                res.status(404).send("No se encuentra el producto");
            } else {
                res.render('prodDetalle', {
                    prodEncontrado: productoEncontrado,
                    sneakers: productosJ,

                });
            }

        },


    crearProductosPost: (req, res) => {
        
            const body = req.body
           
            const newProduct = {
                id: productosJ.length + 1,
                name: body.name,
                description: body.description,
                price: body.price,
                category_id: body.category,
                image: body.image,
               
            }
            productosJ.push(newProduct);
            fs.writeFileSync(path.join(__dirname, '../data/product.json'), JSON.stringify(productosJ))
            res.status(201).json(newProduct);
            res.redirect('/product');
        },


    editProducto: (req, res) => {
        res.render('prodEdit')
    },



    
    update: function(req, res) {
        let productId = parseInt(req.params.id, 10);
        for (let i = 0; i < productosJ.length; i++){

            if (productosJ[i].id === productId) {
                productId[i].id = productId;
                productosJ[i].name = req.body.name;
                productosJ[i].description = req.body.description;
                productosJ[i].price = req.body.price;
                productosJ[i].discount = req.body.discount;
                productosJ[i].category = req.body.category;
                productosJ[i].image = req.body.image;
                productosJ[i].stock = req.body.stock;
            }    


        res.send("update");
        res.redirect("/productos" + productId);
        }
    },

    deleteProducto: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        res.redirect("prodList")
    },





}


module.exports = productosController;
