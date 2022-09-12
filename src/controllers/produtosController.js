import product from '../models/Product';

class ProductController {
    static getProducts = (req, res) => {
        product.find((err, product) => {
            res.status(200).json(product)
        })
    }

    static getProductsById = (req, res) => {
        const id = req.params.id;

        product.findById(id, (err, product) => {
            if(err) {
                res.status(400).send({message: `$Livro nao localizado, por favor verifique se as informacoes estao corretas`})
            } else {
                res.status(200).send(product);
            }
        })
    }

    static createProduct = (req, res) => {
        let product = new product(req.body);

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

        product.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(200).send({ message: "Produto atualizado com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteProduct = (req, res) => {
        const id = req.params.id;

        product.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Produto removido com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default ProductController;