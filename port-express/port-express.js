var http = require("http");
var express = require('express');
var cors = require('cors');
var app1 = express();
app1.use(cors())
var app2 =express();
app2.use(cors())
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server1 = app1.listen(8082, function () {
  let host = server1.address().address
  let port = server1.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});
// Running Server Details.
var server2 = app2.listen(8083, function () {
  let host = server2.address().address
  let port = server2.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});
 
 
 
app1.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='localhost:8083/thank'  method='post' name='form1'>";
  html += "Name:</p><input type= 'text' name='name'>";
  html += "Email:</p><input type='text' name='email'>";
  html += "address:</p><input type='text' name='address'>";
  html += "Mobile number:</p><input type='text' name='mobilno'>";
  html += "<input type='submit' value='submit'>";
  html += "<INPUT type='reset'  value='reset'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});
 
app2.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your name is" + req.body.name;
  reply += "Your E-mail id is" + req.body.email; 
  reply += "Your address is" + req.body.address;
  reply += "Your mobile number is" + req.body.mobilno;
  res.send(reply);
 });

