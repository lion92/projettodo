var todo = require('../models/todo');

module.exports = {
//
  configure: function(app) {
    
    app.post('/todo',function(req,res) {
      todo.create(req.body.nom, req.body.description,req.body.idutilisateur,res);
    });
    app.get('/tache:idutilisateur',function(req,res) {
      todo.getTodo(req.params.idutilisateur,res);
    });
  }
};