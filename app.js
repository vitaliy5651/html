const express = require('express');
const app = express();
const { Client } = require('pg');
const bodyParser = require('body-parser');

const client = new Client({
	connectionString: 'postgres://zvrorczrinwdbo:4f0288b2d28b6a6aef6f109d96dbf2937c612db3fcbffdbe82c2e69cb79dd742@ec2-34-252-98-12.eu-west-1.compute.amazonaws.com:5432/d3md9ba3543b0',
	ssl: { rejectUnauthorized: false }
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected');
      client.query(`SELECT * from siteData`
        , function(err, response){
        if (err) {
            console.log(err)
        } else {
            console.log(response.rows)
        }
    })
    }
});

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello');
});

app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})


app.get('/userlist', function(req, res){
    client.query('SELECT * FROM Persons', function(err, response){
        if (err) {
            res.send('Error');
        } else {
            res.render('index', { title: 'Awesome page', users: response.rows});
        }
    })
})

app.get('/adduser', function(req, res) {
    res.render('addUser');
})

app.post('/createUser', function(req, res){
    console.log(req.body.firstname);
    if (req.body.firstname.length < 1 || req.body.lastname.length < 1) {
        return res.status(400).send({error: 'Firstname or lastname is empty'});
    }
    client.query(`INSERT 
                  INTO Persons (firstname, lastname)
                  VALUES ('${req.body.firstname}', '${req.body.lastname}')`, (err, result) => {
                        if (err) {
                            res.status(500).json({ error: err.stack})
                        } else {
                            res.status(200).json({response: result})
                        }
    });
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/admin', function(req, res) {
    client.query('SELECT * from siteData', (err, response) => {
        if (!err) {
            console.log(response.rows[0]);
            res.render('admin', response.rows[0]);
        }
    });

    
});

app.post('/login', function(req, res) {
    if (true) {
        res.redirect('/admin');
    }
});

const items = [
    {
        id: 1,
        size: 's',
        name: 'Pizza 1',
        price: '15',
        image: 'https://i.pinimg.com/originals/88/2b/c4/882bc48d3d1d88ca63969ec7ad09406a.jpg'
    },
    {
        id: 2,
        size: 'm',
        name: 'Pizza 2',
        price: '20',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
 
    },
    {
        id: 3,
        size: 'l',
        name: 'Pizza 3',
        price: '30',
        image: 'https://1000.menu/img/content-v2/63/46/809/pitstsa-domashnyaya_1591686572_16_max.jpg'

    },
    {
        id: 4,
        size: 's',
        name: 'Pizza 4',
        price: '15',
        image: 'https://i.pinimg.com/originals/88/2b/c4/882bc48d3d1d88ca63969ec7ad09406a.jpg'
    },
    {
        id: 5,
        size: 'm',
        name: 'Pizza 5',
        price: '20',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
 
    },
    {
        id: 6,
        size: 'l',
        name: 'Pizza 6',
        price: '35',
        image: 'https://1000.menu/img/content-v2/63/46/809/pitstsa-domashnyaya_1591686572_16_max.jpg'

    },
    {
        id: 7,
        size: 'm',
        name: 'Pizza 7',
        price: '38',
        image: 'https://1000.menu/img/content-v2/63/46/809/pitstsa-domashnyaya_1591686572_16_max.jpg'

    },
];

app.get('/cart', function(req, res) {
    res.render('cart', {items:  items});
});


app.listen(3002, function() {
    console.log('success');
});




