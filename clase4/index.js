const express = require('express');

const app = express();
app.use(express.json());
const errorLoggger =(err, req, res, next)=>{
    console.log(err);
    next(err);
}

const errorHandler = (err, req, res, next)=>{
    res.status(400).json({
        message : err.message,
    });
}
app.get("/",(req,res) => {
    res.send("Hola mundo");
})


  
const PORT = 3000;


const products = [
    {
        id: 1,
        name:"reloj",
        price: 100,
        quantity: 5,
    },
    {
        id: 2,
        name:"sombreros",
        price:200,
        quantity:20 ,
    }
]
app.get("/", (req, res)=>{
    res.send("esta es mi primera app en express");
});

app.get("/api/v1/products",(req, res)=>{
    res.json(products);
});

app.get("/api/v1/products/:productId",(req, res)=>{
    const { productId } = req.params;
    const productIdInt = parseInt(productId);
    const product = products.find((product) => product.id === productIdInt);
    if(!product){
        throw new  Error ("producto no encontrado")
        
    }

    console.log(req.params);
    res.json(product);

});

app.post("/api/v1/products/",(req, res) =>{
    const product = req.body;
    products.push(product);
    res.json(products);
})

app.use(errorLoggger);
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Escuchando en http://localhost:${PORT}`);
});
