var express = require('express');
var router = express.Router();
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
var productsModel = require('./../../models/productsModel');
router.get('/', async function (req, res, next) {
    var products = await productsModel.getProducts();
    products = products.map(product => {
        if (product.img_id) {
            const imagen = cloudinary.image(product.img_id, {
                width: 50,
                height: 50,
                crop: 'fill'
            });
            return {
                ...product,
                imagen
            };
        } else {
            return {
                ...product,
                imagen: ''
            };
        }
    });
    res.render('admin/products', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        products
    });
});
router.get('/addProduct', (req, res, next) => {
    res.render('admin/addProduct', {
        layout: 'admin/layout'
    });
});
router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    let product = await productsModel.getProductById(id);
    if (product.img_id) {
        await (destroy(product.img_id));
    }
    await productsModel.deleteProductById(id);
    res.redirect('/admin/products')
});
router.post('/modify', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }
        var obj = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            img_id
        }
        await productsModel.modifyProductById(obj, req.body.id);
        res.redirect('/admin/products');
    } catch (error) {
        console.log(error)
        res.render('admin/modify', {
            layout: 'admin/layout',
            error: true, message: 'No se modifico el producto'
        })
    }
});
router.get('/modify/:id', async (req, res, next) => {
    let id = req.params.id
    let product = await productsModel.getProductById(id)
    res.render('admin/modify', {
        layout: 'admin/layout',
        product
    })
});
router.post('/addProduct', async (req, res, next) => {
    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if (req.body.name != "" && req.body.description != "" &&
            req.body.price != "" && req.body.quantity != "") {
            await productsModel.insertProduct({
                ...req.body,
                img_id
            });

            res.redirect('/admin/products')
        } else {
            res.render('admin/addProduct', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/addProduct', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo el producto'
        });
    }
});
module.exports = router;