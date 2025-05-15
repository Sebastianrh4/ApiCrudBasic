
//Arrays 

let carrito = [{ nombre: 'producto 1', precio: 1000}];

carrito.push(
    {nombre: 'producto ', precio: 4000},
    {nombre: 'producto 3', precio: 5000}, 
    {nombre: 'producto 4', precio: 6000}
);

// filter
const productosCaros = carrito.filter(p => p.precio >= 5000);


//find 
const consultaProducto = carrito.find(p => p.nombre === 'producto 3');
if(consultaProducto !== undefined){
    console.log(consultaProducto);
}else{
    console.log('Producto no encontrado');
} 


//findIndex
const index = carrito.findIndex(p => p.nombre === 'producto 2');
if(index !== -1){
    carrito.splice([index],1);
    console.log('Se ha eliminado el producto 2 ', carrito);
}else{
    console.log('Producto no encontrado');
}

//map
const nuevoArray = carrito.map(p => {
    return {
        nombre: p.nombre,
        precio: p.precio + p.precio * 0.1
    }
});
console.log(nuevoArray); 


//reduce
const total = carrito.reduce((acumulador, producto)=>{
    return acumulador + producto.precio;
}, 0);
console.log(total);