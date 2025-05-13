const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

let productos = [
    {id: 1, nombre: "Teclado", precio: 80000 },
    {id: 2, nombre: "Microfono", precio: 40000 },
    {id: 3, nombre: "Mouse", precio: 10000 },
]

app.get('/',(req, res)=>{
    res.status(200).json({
        mensage: 'Read'
    });
});

app.get('/Read',(req, res)=>{
    res.status(200).json({
        mensage: 'Read',
        productos: productos
    });
});

app.post('/Create',(req, res)=>{
    
    const {id, nombre, precio } = req.body;
    
    if(!id || !nombre || !precio){
        res.status(400).json({
            mensage: 'llene todos los datos correctamente'
        });
    }
    productos.push(req.body)

    res.status(200).json({
        mensage: 'Create'
    });
});

app.put('/Update/:id',(req, res)=>{

    const id = parseInt(req.params.id);
    const produtoActualizado = req.body;
    const index = productos.findIndex(p => p.id === id  );

    if(index !== -1){
        productos[index]  = { id, ...produtoActualizado};
        res.json(productos[index]);
    }else{
        res.status(404).json({
            mensaje: 'Producto no encontrado'
        });
    }
});

app.delete('/Delete/:id',(req, res)=>{

    const id = parseInt(req.params.id);
    productos = productos.filter(p => p.id !== id);
    res.json({ mensaje: 'Producto eliminado' });
});

app.use((req, res)=>{
    res.status(404).json({
        mensage: 'Ruta no encontrada'
    });
}); 


app.listen(port,()=>{
    console.log('El servidor esta corriendo desde http://localhost', port);
});