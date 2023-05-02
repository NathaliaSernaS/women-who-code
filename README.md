# women-who-code
# tareaMongo: Creacion de bases de datos con MongoDB

1. En la consola de Mongosh, empleamos el siguiente comando para inicializar MongoDB:

  ```
  mongosh
  ```
![image](https://firebasestorage.googleapis.com/v0/b/imagenes-tareamongo.appspot.com/o/Captura%20de%20pantalla%202023-04-29%20060153.png?alt=media&token=bb02d4c1-b458-44e6-8f48-afb2042c966e)

2. Luego revisamos las bases de datos existentes con el comando:

  ```
  show dbs
  ```
 ![image](https://firebasestorage.googleapis.com/v0/b/imagenes-tareamongo.appspot.com/o/shows%20db.png?alt=media&token=94b20317-09c1-47ad-905a-cfe386872008)

3. Creamos una base de datos llamada "tareaMongo" con el comando:

  ```
  use tareaMongo
  ```
3.1. Validamos que nos encontremos en la base de datos "tareaMongo" con el comando:

  ```
  db
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/imagenes-tareamongo.appspot.com/o/tareaMongoImagen.png?alt=media&token=5a25a2a4-490e-48dd-a316-c4ad5a785780)

4. Creamos una colección llamada "products" con el comando:

  ```
  db.createCollection("products")
  ```
4.1. Validamos que se haya creado la colección con el comando:

  ```
  show collections products
  ```
  
![image](https://firebasestorage.googleapis.com/v0/b/imagenes-tareamongo.appspot.com/o/products.png?alt=media&token=61a01f17-d8e6-4ea0-a989-bcc55b3bd1f2)  
5. Insertamos documentos en la colección "products" con el comando:

  ```
  db.products.insertMany([{name: "mesa", description:"madera roble", quantity: 10, price: 200000, category:"hogar"},{name: "bolso", description:"negro", quantity: 15, price: 500000, category:"morrales"},{name: "zapatos", description:"adidas", quantity: 2, price: 180000, category:"prendas de vestir"}])
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/imagenes-tareamongo.appspot.com/o/insertarProductos.png?alt=media&token=693610ee-aefa-42ba-8e0c-f84d606955a0)

8. Consultamos la cantidad de documentos presentes en la colección "products" con el comando:

  ```
  db.users.countDocuments()
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-8.png?alt=media&token=d58bc826-c955-4a1e-9921-8f44c74ce5c7)

## Realizamos un CRUD: 

1. Agregar un producto nuevo:

  ```
  db.products.insertOne({name: "camisa", description:"talla L a cuadros", quantity: 10, price: 100000, category:"prendas de vestir"})
{name: "vestido", description:"flores amarillas talla unica", quantity: 2, price: 80000, category:"prendas de vestir"}
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-1.png?alt=media&token=33d96d50-6b28-4df0-87f3-f65680e49217)

2. Listar los usuarios:

  ```
  db.products.find()
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-2.png?alt=media&token=29f63744-acad-4321-a79f-125d18b36141)

3. Listar los usuarios menores a 30 años: 

  ```
  db.users.find({age: {$lt: 30}})
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-2.png?alt=media&token=29f63744-acad-4321-a79f-125d18b36141)

4. Listar los usuarios mayores a 30 años:

  ```
  db.users.find({age: {$gt: 30}})
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-4.png?alt=media&token=7abd192d-43fb-460b-9dca-9b7f2280afbf)

5. Modificar un producto: 
  
  ```
  db.products.updateOne({name: "Javier"}, {$set: {age: 75}})
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-5.png?alt=media&token=092ec959-8d16-4fb6-984c-3542ec84e610)

6. Validamos que se haya modificado el usuario:
  
  ```
  db.users.find({name: "Javier"})
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-5-1.png?alt=media&token=56bd21b5-3c1e-455c-8ad9-3a9bfe58b7e7)

7. Eliminar un usuario:

  ```
  db.users.deleteOne({name: "Javier"})
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-6.png?alt=media&token=169a74f5-e044-424c-92e9-930feea9e186)

8. Eliminar todos los usuarios:

  ```
  db.users.deleteMany({})
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-7.png?alt=media&token=0aa0a7a1-6618-4b2b-a57a-df3e97139391)

9. Validamos que se hayan eliminado todos los usuarios:
  
  ```
  db.users.countDocuments()
  ```
  ![image](https://firebasestorage.googleapis.com/v0/b/practica-firebase-11.appspot.com/o/paso-9-7-1.png?alt=media&token=c8fa5285-a57c-4ba4-86b6-30e0ff49862c)
