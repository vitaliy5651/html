const express = require('express');
const app = express();
const { Client } = require('pg')

const client = new Client({
    connectionString: 'postgres://hdfevoewigwnim:4ab6df38fe15be40a8488f7a1619605f55dae7241e9d35d5e24b092aa042ce2a@ec2-34-252-98-12.eu-west-1.compute.amazonaws.com:5432/d4la33od7ugl70',
    ssl: { rejectUnauthorized: false }
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected');
      client.query(`INSERT INTO Persons (lastname, firstname)
      VALUES ('john', 'Doe');`,
    (err,res) => {
        if(err){
            console.log(err)
        } else {
            console.log(res);
        }

        } 
    )
    }
  })

app.use(express.static('dist'));

app.get('/', function(req, res){
    res.send('Hello');
});

app.listen(3000, function() {
    console.log('sucess');
});
