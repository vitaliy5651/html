const express = require('express');
const app = express();
const { Client } = require('pg');
const bodyParser = require('body-Parser');
const { text } = require('body-Parser');
const { stream } = require('browser-sync');


const client = new Client({
	connectionString: 'postgres://hdfevoewigwnim:4ab6df38fe15be40a8488f7a1619605f55dae7241e9d35d5e24b092aa042ce2a@ec2-34-252-98-12.eu-west-1.compute.amazonaws.com:5432/d4la33od7ugl70',
	ssl: { rejectUnauthorized: false }
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected');
    //   client.query(`SELECT * FROM Persons`,
    //                 (err, res) => {
    //                     if (err) {
    //                          console.log(err)
    //                     } else {
    //                         console.log(res.rows);
    //                     }

    //                 }
    //     )
    }
})

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello');
});
app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})


app.get('/userlist', function(req,res){

     client.query('SELECT * FROM Persons', function(err,response){
         if(err) {
             res.send('Error');
         } else{
            res.render('index', { title: 'Hey', users: response.rows});
         }
     })

    
})

app.get('/adduser', function(req,res){
    res.render('addUser');
})


app.post('/createuser', function(req,res){
    client.query(`INSERT 
                  INTO Persons (firstname, lastname) 
                   VALUES('${req.body.firstname}','${req.body.lastname}')`,(err, result) => {
                       if(err){
                           res.status(500).json({error: err.stack})
                       }else{
                           res.status(200).json({response: result})
                       }
                   });
});

app.listen(3000, function() {
    console.log('success');
});

