const ordersController = {
    checkOutPage: (req,res) => {
        res.render("checkout");
    },
    successPage: (req,res) => {
        res.render("success");
    },
    ordersPage: (req,res) => {
        res.render("orders");
    }
}

module.exports = ordersController;