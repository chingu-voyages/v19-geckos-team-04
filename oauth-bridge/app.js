const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();

app.use('/auth', authRoutes);

const port = 8888;

app.listen(port, () => console.log(`Listening on port ${port}. Go to /login to initiate authentication.`))