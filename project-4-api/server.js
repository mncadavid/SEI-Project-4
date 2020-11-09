const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/users', routes.users)

app.listen(9000, () => {
    console.log("listening");
});