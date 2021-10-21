const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
const port = 5000;
const user = [

    { id: 0, name: "shabnur", email: "sabnur@gmail.com" },
    { id: 1, name: "shabnur", email: "sabnur@gmail.com" },
    { id: 2, name: "pori", email: "pori@gmail.com" },
    { id: 3, name: "fmmr", email: "sff@gmail.com" },
    { id: 4, name: "www", email: "ww@gmail.com" },
    { id: 5, name: "ddd", email: "dd@gmail.com" },
]

app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = user.filter(u => u.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(user);
    }

});
app.get('/user/:id', (req, res) => {
    console.log(req.params.id)
    res.send(user[req.params.id]);
});
app.get('/fruit', (req, res) => {
    res.send(['mango', 'banna', 'apple'])
})
app.listen(port, () => {
    console.log('listening to port', port);
})
app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = user.length;
    user.push(newUser);
    res.json(newUser);
    console.log('hitting the post', req.body);
    res.send('insude post got hitted')
})