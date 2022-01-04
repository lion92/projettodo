var connection = require("../config/connection");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
var express = require("express");

var app = express();
var messagebis = "diidoi";
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
let transport = nodemailer.createTransport({
  host: "mail.krissdeveloppeur.com",
  secure: false,
  auth: {
    user: "envoi@krissdeveloppeur.com",
    pass: "envoienvoi!",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

function Todo() {
  this.reqdeconnexion = function (req, res) {
    //    res.clearCookie("essai");
    ls.remove("token");
    res.send({ status: 200, message: "deconnexion" });
  };
  this.reqlogin = function (reqemail, reqpassword, req, res) {
    let conection2 = false;
    let email = "";
    jwt.verify(
      req.cookies["essai2"],
      "secret_this_should_be_longer",
      function (err, decoded) {
        console.log("////////////");
        if (decoded === undefined) {
          conection2 = true;
        } else {
          email = decoded.email;
          conection2 = false;
        }
        //console.log(decoded.code) // bar
      }
    );
    if (conection2 == true) {
      connection.acquire(function (err, con) {
        console.log(err);
        console.log("Connecté à la base de données MySQL!");

        con.query(
          "select motdepasse, idutilisateur from utilisateur where email=?",
          reqemail,
          function (err, result) {
            con.release();
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
              "Access-Control-Allow-Methods",
              "GET,HEAD,OPTIONS,POST,PUT"
            );
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
            );
            if (err) {
              res.send({ status: 1, message: "email" });
            } else {
              // res.send({ status: 0, message:  result[0].password2});
              console.log("Post successful");
              if (!result[0]) {
                res.send({ status: 1, message: "email invalid" });
              } else {
                bcrypt.compare(
                  reqpassword,
                  result[0].motdepasse,
                  function (err, result2) {
                    // result == true
                    if (err) {
                      res.send({
                        status: 0,
                        message:
                          "Erreur pour comparer les mots de passe " + reqemail,
                      });
                      con.release();
                    }
                    if (!result2) {
                      res.send({
                        status: 0,
                        message: "Mot de passe incorrect pour " + reqemail,
                      });
                    } else {
                      var iduti=result[0].idutilisateur;
                      const jwttoken = jwt.sign(
                        { email: reqemail , idutilisateur:iduti},
                        "secret_this_should_be_longer",
                        { expiresIn: "1h" }
                      );
                      const cookieOption = {
                        expiresIn: new Date(Date.now() + 24 * 3600),
                        httpOnly: true,
                      };
                      res.cookie("essai2", jwttoken, cookieOption);
                      res.send({
                        status: 0,
                        message: "Connecte " + reqemail + result2,
                      });
                    }
                  }
                );
              }
            }
          }
        );
      });
    } else {
      // res.clearCookie("essai");
      res.send({ status: 1, message: "Connecté " + email });
    }
  };
  this.reqgister = function (nom, prenom, reqemail, reqpassword, req, res) {
    let hashpass = "";
    let bon = "";
    connection.acquire(function (err, con) {
      console.log(err);
      console.log("Connecté à la base de données MySQL!");

      bcrypt.hash(reqpassword, 10, function (err, hash) {
        if (err) {
          res.send({ status: 1, message: "Erreur" + err });
        } else {
          console.log(hash);
          // Store hash in your password DB.
          hashpass = hash;

          con.query(
            "insert into utilisateur (nom, prenom, email, motdepasse) values (?,?,?,?)",
            [nom, prenom, reqemail, hashpass],
            function (err, result) {
              res.header("Access-Control-Allow-Origin", "*");
              res.header(
                "Access-Control-Allow-Methods",
                "GET,HEAD,OPTIONS,POST,PUT"
              );
              res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
              );

              if (err) {
                console.log("error dans todo");
                res.send({
                  status: 1,
                  message: "Erreur de conection ou login existe" + err,
                });
                con.release();
              } else {
                console.log("IIIIIIIIIIIIIIIIIIIIIII");
                res.send({
                  status: 0,
                  message: "Utilisateur enregistrer " + reqemail,
                });
                console.log("Post successful");
                con.release();
              }
            }
          );
        }
      });
    });
  };
  this.reqdeconnexion = function (req, res) {
    res.clearCookie("essai2");
    res.send({ status: 200, message: "deconnexion" });
  };
  app.post('/deconnexion', function(req, res){
    todo.reqdeconnexion(req,res);
  });
  dateNow = function () {
    return new Date().toISOString().slice(0, 19).replace("T", " ");
  };
  this.quiesttu = function (req, res) {
    let conection2 = false;
    let email = "";
    jwt.verify(
      req.cookies["essai2"],
      "secret_this_should_be_longer",
      function (err, decoded) {
        console.log("////////////");
        if (decoded === undefined) {
          conection2 = true;
          console.log("true");
          res.send({ status: 1, message: "Qui êtes vous?, Veuillez-vous connecter. " });
        } else {
          email = decoded.email;
          var uti=decoded.idutilisateur;
          conection2 = false;
          console.log("!!!!!" + false);
          res.send({ status: 1, message: {email : email, idutilisateur:uti} });
        }
        //console.log(decoded.code) // bar
      }
    );
    };
    this.delete = function (idtache, req, res) {
      
      connection.acquire(function (err, con) {
        con.query(
          "DELETE FROM `tache` WHERE `idtache`=?",
          [idtache],
          function (err, result) {
            con.release();
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
              "Access-Control-Allow-Methods",
              "GET,HEAD,OPTIONS,POST,PUT"
            );
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
            );
  
            if (err) {
              res.send({ status: 404, message: err });
            } else {
              res.send({ status: 200, message: result });
              console.log("Post successful");
            }
          }
        );
      });
    };
  this.create = function (nom, description, utilisateur, res) {
    console.log("//hehhehe/"+utilisateur);
    connection.acquire(function (err, con) {
      con.query(
        "insert into tache (nom, description, date, utilisateur_idutilisateur) values (?,?,?,?) ",
        [nom, description, dateNow(), utilisateur],
        function (err, result) {
          con.release();
          res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT"
          );
          res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
          );

          if (err) {
            res.send({ status: 404, message: err });
          } else {
            res.send({ status: 200, message: result });
            console.log("Post successful");
          }
        }
      );
    });
  };
  this.updatetache = function (nom, description, utilisateur, idtache, res) {
    connection.acquire(function (err, con) {
      con.query(
        "update tache set nom=?, description=?, date=?, utilisateur_idutilisateur=? where idtache=?",
        [nom, description, dateNow(), utilisateur, idtache],
        function (err, result) {
          con.release();
          res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT"
          );
          res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
          );

          if (err) {
            res.send({ status: 404, message: err });
          } else {
            res.send({ status: 200, message: result });
            console.log("Post successful");
          }
        }
      );
    });
  };
  this.addcategorie = function (nom, req,res) {
    connection.acquire(function (err, con) {
      con.query(
        "insert into categorie (nom) values(?)",
        nom,
        function (err, result) {
          con.release();
          res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT"
          );
          res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
          );

          if (err) {
            res.send({ status: 404, message: err });
          } else {
            res.send({ status: 200, message: result });
            console.log("Post successful");
          }
        }
      );
    });
  };
  this.envoimail = function (texte,mail, req, res) {
    res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT"
    
          );
          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "clotikriss@gmail.com",
              pass: "Tutorama2",
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

          var mailOptions = {
            from: "clotikriss@gmail.com",
            to: "kriss.clotilde@gmail.com",
            subject:
              "Mail du site de :"+mail,
            text: ""+texte,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.send({sataus:"ko", message:error})
            } else {
              console.log("Email sent: " + info.response);
              res.send({sataus:"ok", message:info.response})
            }
          });
          

  }
      
  this.getTodo = function (idutilisateur, res) {
    connection.acquire(function (err, con) {
      con.query(
        "SELECT idtache, utilisateur.nom,utilisateur.prenom,utilisateur.email, tache.description,tache.date,tache.nom AS 'tachenom',tache.utilisateur_idutilisateur from tache INNER join utilisateur on tache.utilisateur_idutilisateur=utilisateur.idutilisateur where utilisateur_idutilisateur=? ",
        idutilisateur,
        function (err, result) {
          con.release();
          res.header("Access-Control-Allow-Origin", "*");
          res.header(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT"
          );
          res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
          );

          if (err) {
            res.send({ status: 404, message: err });
          } else {
            res.send({ status: 200, message: result });
            console.log("Post successful");
          }
        }
      );
    });
  };
}

module.exports = new Todo();
