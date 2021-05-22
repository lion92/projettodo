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
  dateNow = function () {
    return new Date().toISOString().slice(0, 19).replace("T", " ");
  };
  this.create = function ( nom, description, utilisateur, res) {
    connection.acquire(function (err, con) {
      con.query("insert into tache (nom, description, date, utilisateur_idutilisateur) values (?,?,?,?) ",[nom, description, dateNow(),utilisateur] , function (err, result) {
        con.release();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
        );

        if (err) {
          res.send({ status: 404, message: err});
        } else {
          res.send({ status: 200, message: result });
          console.log("Post successful");
        }
      });
    });
  };
  this.getTodo = function ( idutilisateur, res) {
    connection.acquire(function (err, con) {
      con.query("select * from tache  where utilisateur_idutilisateur=? ", idutilisateur, function (err, result) {
        con.release();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
        );

        if (err) {
          res.send({ status: 404, message: err});
        } else {
          res.send({ status: 200, message: result });
          console.log("Post successful");
        }
      });
    });
  };
  
}

module.exports = new Todo();
