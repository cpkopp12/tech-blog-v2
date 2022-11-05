//DECLARATIONS: express, controllers, db connection, path
//handlebars --------------
const express = require('express');
const routes = require('./controllers')
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');


//DEFINE EXPRESS APP, PORT ----------------------
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.use(routes);

//turn on db connection and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});