const userController = {
    loginPage: (req,res) => {
        res.render("login");
    },

    esqueciSenhaPage: (req, res) =>{
        res.render('esqueciSenha');
    },

    perfilPage: (req, res) => {
        res.render('perfil');
    }
}

module.exports = userController;

