var todo = require('../models/todo');

module.exports = {
//
  configure: function(app) {
    app.post('/login', function(req, res){
      todo.reqlogin(req.body.email, req.body.password,req, res);
    });
    app.post('/todo',function(req,res) {
      todo.create(req.body.nom, req.body.description,req.body.idutilisateur,res);
    });
    app.get('/tache:idutilisateur',function(req,res) {
      todo.getTodo(req.params.idutilisateur,res);
    });
    app.post('/updatetache',function(req,res) {
      todo.updatetache(req.body.nom, req.body.description,req.body.idutilisateur,req.body.idtache,res);
    });
    app.post('/register', (req, res) =>{
      todo.reqgister(req.body.nom, req.body.prenom,req.body.email,req.body.password,req, res);
   
    });
    app.get('/qui', function(req, res){
      todo.quiesttu(req,res);
    });
    app.post('/deconnexion', function(req, res){
      todo.reqdeconnexion(req,res);
    });
  }
};
