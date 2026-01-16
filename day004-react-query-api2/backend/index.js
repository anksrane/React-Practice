//  backend/index.js
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})


app.get('/', (req, res) => res.send('Hello World!'))

let products = [
    {
        id: 1,
        name: 'table wooden',
        price: 200,
    },
    {
        id: 2,
        name: 'office chair',
        price: 150,
    },
    {
        id: 3,
        name: 'study desk',
        price: 320,
    },
    {
        id: 4,
        name: 'floor lamp',
        price: 90,
    },
    {
        id: 5,
        name: 'bookshelf',
        price: 250,
    },
    {
        id: 6,
        name: 'sofa fabric',
        price: 600,
    },
    {
        id: 7,
        name: 'coffee table',
        price: 180,
    },
    {
        id: 8,
        name: 'bed frame',
        price: 750,
    },
    {
        id: 9,
        name: 'wardrobe cabinet',
        price: 900,
    },
    {
        id: 10,
        name: 'nightstand',
        price: 120,
    },
];

// Get API for getll all list
app.get('/api/products', (req, res) => {
    if (req.query.search) {
        console.log(req.query.search);
        const filterProducts = products.filter(product => product.name.includes(req.query.search))

        setTimeout(() => {
            res.send(filterProducts);
            return;
        }, 3000);
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})

// POST API for Create
app.post('/api/products', (req,res) => {
    console.log('BODY:', req.body)
    const newProducts = {
        id: products.length+1,
        name: req.body.name,
        price: req.body.price,
    }

    products.push(newProducts);
    res.status(201).send(newProducts);
})

// PUT API to update data
app.put('/api/products/:id',(req, res) => {
    console.log(req);
    const { id } = req.params;
    const { name, price } = req.body;

    const index= products.findIndex(p=> p.id === Number(id));

    if(index===-1){
        return res.status(404).send({message: "Product Not Found"});
    }

    products[index] = {
        ...products[index],
        name,
        price
    }

    res.send(products[index]);
})

// DELETE API to Delete Data
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;

    products = products.filter(p => p.id !== Number(id));

    res.status(200).send({ message: 'Product deleted' });
})