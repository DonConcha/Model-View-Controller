const express = require('express');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utilis/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const app = express();
const port = process.env.PORT || 3001;

const hbs = exphbs.create({ helper });

const sess = {
    secret: 'super secret secret',
    cookies: {
        maxAge: 300000 , 
        http0nly: true, 
        secure: false , 
        sameSite: 'strict', 
    },
    resave: false, 
    saveUnitialized: true, 
    store: new SequelizeStore({

    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening on Radio FM 3001'));

});