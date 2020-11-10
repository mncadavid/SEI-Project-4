const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/users', routes.users);
app.use('/lists', routes.lists);
app.use('/auth', routes.auth);

app.get('/', (req,res) => {
    res.send('Splash page')
})

app.listen(process.env.PORT, () => {
    console.log("listening");
});