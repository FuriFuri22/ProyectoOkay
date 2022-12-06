const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const http = require("http")
const SocketIo = require("socket.io")
const dbConnect = require('./src/db/connection');

require('dotenv').config();
const app = express();
const SocketServer = http.createServer(app)
const io = new SocketIo.Server(SocketServer, {
    cors: {
        origin: '*',
    }
})
io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('mensaje', (msg) => {
        socket.broadcast.emit('mensaje', {
            body: msg,
            de: socket.id
        })
    })
})
dbConnect();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./src/routes/User.routes'));
app.use(require('./src/routes/Donaciones.routes'));
app.use(require('./src/routes/Peticiones.routes'));
app.use(require('./src/routes/login.routes'))

SocketServer.listen(port, ()=>console.log(`Rick, estamos en curso por http://localhost:${port}`));
