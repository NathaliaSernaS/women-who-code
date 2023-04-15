// const { isUtf8 } = require('buffer');
// const { log } = require('console');
const express = require('express');
const app= express();
app.use(express.json());
const fs = require('fs');
const path = require('path');
const Joi = require('joi');
const rutaBaseDatos = path.resolve(`${__dirname}/baseDatos.txt`)


const esquema = Joi.object({
    id: Joi.number().required(),
    nombre: Joi.string().required(),
    descripcion: Joi.string().required(),
    precio: Joi.number().required(),
    cantidad: Joi.number().required(),
    categoria: Joi.string().required(),
});
// console.log(esquema.validate({nombre: "camara"}))


app.use((req, res, next) =>{
    console.log(`${req.method}
    Solicitud recibida`);
    if (req.method === "POST" || req.method === "PATCH" ) {
        const validaciones = esquema.validate(req.body);
        if(validaciones.error){
            res.status(422).json(validaciones.error)
        }else{
            next();
        }
        
        
    }else{
        next();
    }});
  

app.get("/api/v1/products",async(req, res)=>{
    try {
        const baseDatos = await fs.promises.readFile(rutaBaseDatos,'utf-8');
        const leerProductos = JSON.parse(baseDatos);
        res.status(200).json({leerProductos})
    } catch (error) {
       res.status(500).send("error");

    }
})

app.post("/api/v1/products",async(req, res)=>{
    try {
        const nuevoProducto = req.body;
        const baseDatos = await fs.promises.readFile(rutaBaseDatos,'utf-8');
        const ArrayleerProductos = JSON.parse(baseDatos);
        ArrayleerProductos.push(nuevoProducto);
        await fs.promises.writeFile(rutaBaseDatos, JSON.stringify(ArrayleerProductos))
        res.status(201).json({nuevoProducto})
        console.log(nuevoProducto);
    } catch (error) {
       res.status(500).send("error no se creo el producto");
       
    }
})

app.delete("/api/v1/products/:id",async(req, res)=>{
    try {
        const idProducto = req.params.id;
        console.log(idProducto);
        const baseDatos = await fs.promises.readFile(rutaBaseDatos,'utf-8');
        const ArrayleerProductos = JSON.parse(baseDatos);
       
        const ArrayConDelete = ArrayleerProductos.filter(elementoArray => elementoArray.id != idProducto)
        await fs.promises.writeFile(rutaBaseDatos, JSON.stringify(ArrayConDelete))
        res.status(200).json({productoEliminado:"producto eliminado"})
    } catch (error) {
        console.log(error);
       res.status(500).send("error no se elimino el producto");
       
    }
})

app.patch("/api/v1/products/:id",async(req, res)=>{
    try {
        const idProducto = req.params.id;
        const baseDatos = await fs.promises.readFile(rutaBaseDatos,'utf-8');
        const ArrayleerProductos = JSON.parse(baseDatos);
        const productoActualizado = ArrayleerProductos.find(elementoArray => elementoArray.id == idProducto)
        productoActualizado.id = idProducto
        productoActualizado.nombre = req.body.name
        productoActualizado.descripcion = req.body.descripcion
        productoActualizado.precio = req.body.precio
        productoActualizado.cantidad= req.body.cantidad
        productoActualizado.categoria= req.body.categoria

        await fs.promises.writeFile(rutaBaseDatos, JSON.stringify(ArrayleerProductos))
        res.status(200).json({productoActualizado:"producto actualizado"})
    } catch (error) {
        console.log(error);
       res.status(500).send("error no se actualizó");
       
    }
});

app.listen(3000, ()=>{
    console.log("la app corre en el puerto 3000");
})

    
// });

// // middleware

// const filePath = path.join(__dirname,`${baseDatos}.txt`),
// data =await fs.promises.readFile(filePath, 'utf-8'),
// arrayDeProductos = JSON.parse(data);

// app.use((req, res, next) =>{
//     console.log(`${req.method}Solicitud recibida`);
//     next();
// });

// app.use(errorLogger);
// app.use(errorHandler);

// app.get('/', (req, res) =>{
//     res.send('La base de datos está en línea...');
// });

// app.get('/api/v1/products', (req, res) =>{
//     res.send(arrayDeProductos);
// });
