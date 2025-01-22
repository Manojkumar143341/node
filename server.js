const express = require('express');

const app = express();
app.use(express.json());

let todos = [];

app.post('/todos', (req, res) => {
    const {title, description} = req.body;
    const newtodo = {
        id: todos.length + 1,
        title,
        description
    };

    todos.push(newtodo);
    console.log(todos);
    res.status(201).json(newtodo); 
});

app.get('/todos',(req,res)=>{
    res.json(todos);
})



app.get('/', (req, res) => {
    res.send('hello world');
});

const port = 3500;

app.listen(port, () => {
    console.log("server running on port " + port);
});
