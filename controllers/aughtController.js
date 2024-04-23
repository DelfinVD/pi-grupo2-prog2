const aughtController = {
    login: function(req, res){
        res.render("login")
    },
    signIn: function (req, res) {
        //accion de LOGIN
    },
    register: function(req, res) {
        res.render("register")
    },
    profile: function(req, res) {
        res.render('profile')
    }
}
module.exports = aughtController