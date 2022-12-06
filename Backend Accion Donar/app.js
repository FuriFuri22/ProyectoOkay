const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dbConnect = require('./src/db/connection');

require('dotenv').config();
const app = express();

dbConnect();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./src/routes/User.routes'));
app.use(require('./src/routes/Donaciones.routes'));
app.use(require('./src/routes/Peticiones.routes'));
app.use(require('./src/routes/login.routes'))

app.listen(port, ()=>console.log(`Rick, estamos en curso por http://localhost:${port}`));
