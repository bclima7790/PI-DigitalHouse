const productController = {
    productPage: (req,res) => {
        res.render("product");
    },

    productList: (req,res) => {
        res.render("productlist");
    }
}

module.exports = productController;