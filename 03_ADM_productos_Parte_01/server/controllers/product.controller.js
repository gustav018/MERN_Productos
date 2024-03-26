const { ProductModel } = require("../models/product.model");

module.exports = {

    getAllProducts: (req, res) => {
        ProductModel.find()
            .then((allProduct) => res.status(200).json({ products: allProduct }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    getOneProductById: (req, res) => {
        ProductModel.findOne({ _id: req.params.id })
            .then((oneSingleProduct) => res.status(200).json({ product: oneSingleProduct }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    createNewProduct: (req, res) => {
        ProductModel.create(req.body)
            .then((newlyCreatedProduct) => res.status(201).json({ product: newlyCreatedProduct }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    updateOneProductById: (req, res) => {
        ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((updatedProduct) => res.status(200).json({ product: updatedProduct }))
            .catch((err) =>
                res.status(400).json({ message: "Algo salió mal", error: err })
            );
    },
    deleteOneProductById: (req, res) => {
        ProductModel.deleteOne({ _id: req.params.id })
            .then((result) => res.status(200).json({ result: result }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
}