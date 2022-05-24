const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);



//morgan middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));
app.use('/api', require('./routes/movies'));
app.use('/api', require('./routes/users'));



//iniciar server
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});