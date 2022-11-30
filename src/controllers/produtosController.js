import products from '../models/Product.js';
import multer from 'multer';
import fs from 'file-system';
class ProductController {
    static getProducts = (req, res) => {
        products.find((err, product) => {
            res.status(200).json(product)
        })
    }

    static getProductsById = (req, res) => {
        const id = req.params.id;

        products.findById(id, (err, product) => {
            if(err) {
                res.status(400).send({message: `Livro nao localizado, por favor verifique se as informacoes estao corretas`})
            } else {
                res.status(200).send(product);
            }
        })

        products.collection('productCollection');
    }

    static createProduct = (req, res) => {
        let product = new products(req.body);

        product.save((err) => {
            if(err) {
                res.status(500).send({ message: `Falha ao cadastrar produto` });
            } else {
                res.status(201).send(product.toJSON());
            }
        });
    }

    static updateProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(200).send({ message: "Produto atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Produto removido com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static uploadImage = (req, res, next) => {
        const setStorage = multer.diskStorage({
            destination: function(req, res, cb) {
                cb(null, 'uploads')
            },
            filename: function(req, file, cb) {
                cb(null, `${file.fieldname}-${Date.now()}`)
            }
        })
        const upload = multer({ storage: setStorage });

        upload.single('myImage')

        const img = fs.readFileSync(req.file.patch);
        const encodeImg = img.toString('base64');

        const finalImg = { contentType: req.file.mimetype, image: Buffer.from(encodeImg, 'base64') };

        products.collection('productCollection').insertOne(finalImg);
    }
}

export default ProductController;