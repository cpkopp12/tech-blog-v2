//DECLARATIONS: express, controllers, db connection, path
//handlebars, sessions, sequelizeStore, utils/helpers --------------
const express = require('express');
const routes = require('./controllers')
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const sess = {
    secret: 'Super secret secret',
    cookie: {
        expires: 300000  //should expire after 5 min
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//DEFINE EXPRESS APP, PORT ----------------------
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.use(routes);

//turn on db connection and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});