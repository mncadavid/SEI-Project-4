const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/users', routes.users);

app.get('/', (req,res) => {
    res.send('Splash page')
})

app.listen(9000, () => {
    console.log("listening");
});