const webController = {
    index:function(req, res){
        res.render('index', { title: 'Express' });
    },

    proccessForm: function(req, res) {
        res.send(req.query)
    }
}
module.exports = webController;