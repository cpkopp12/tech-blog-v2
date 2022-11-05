//DECLARATIONS: express, controllers, db connection --------------
const express = require('express');
//ROUTES ONCE SET UP
const sequelize = require('./config/connection');

//DEFINE EXPRESS APP, PORT ----------------------
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//********turn on routes here */

//turn on db connection and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});