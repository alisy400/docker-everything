const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const users = [];
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello fuckin  world!!!');

});

//Register a new user
app.get('/users', (req, res) => {
    return res.json({ users });
});


//New user ID
app.post('/users',(req, res) => {
    const newUserID = req.body.userID;
    if (!newUserID) {
        return res.status(400).send('Missing user ID ');
    }

    if (users.includes(newUserID)) {
        return res.status(400).send('user Id already exists');
    }

    users.push(newUserID);
    return res.status(201).send('User registered');
});





app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

