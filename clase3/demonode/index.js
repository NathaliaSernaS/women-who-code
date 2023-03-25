const http = require("http");

const HOST = "localhost";
const PORT= 8000;

const writeHTMLResponse = (res, htmlCode)=>{
   res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(htmlCode);

        // res.end("<p>Esto es HTML </P>");  
}

const products = [
    {
        name:"reloj",
        price: 100,
        quantity: 5,
    },
    {
        name:"sombreros",
        price:200,
        quantity:20 ,
    }
]
const server = http.createServer(
    (req, res) => {
        const url = req.url;
        
        console.log("URL es", url);
        // writeHTMLResponse(res,"<p>Esto es HTML </P>");

        if (url === "/other"){
            writeHTMLResponse(res, "<p>esta es otra ruta</p>");
        }else{
            writeHTMLResponse(res, "<p>codigo HTML </p>");
        };
        // res.setHeader("Content-Type", "text/html");
        // res.writeHead(200);
        // res.end("<p>Esto es HTML </P>");
        // res.end("Este es mi primer servidor de node")
});

server.listen(PORT, HOST, ()=>{
    console.log(`servidor corriendo en + http://${HOST}:${PORT}`);
});