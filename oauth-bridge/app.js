const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.get('/', authRoutes);

const port = 8888;

app.listen(port, () => console.log(`Listening on port ${port}. Go to /login to initiate authentication.`))