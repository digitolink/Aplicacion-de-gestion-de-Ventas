export const productSchema = {
    $id: "./postProduct",
    type: "object",
    properties: {
        rutaFoto:{
            description:"Ubicación de la foto descriptiva del producto",
            type:"string"},
        descripcion:{
            description:"Texto descriptivo del producto" ,
            type:"string"},
        nombre:{
            description:"Nombre descriptivo del producto" ,
            type:"string"},
        precio:{
            description:"Precio actual del producto" ,
            type:"integer"},
        categorias:{
            description:"Descripciones cualitativas o categorías del producto" ,
            type:"string"},
        stock:{
            description:"Número de unidades disponibles del producto" ,
            type:"integer"},
        fechaAlta:{
            description:"Fecha en que se insertó el producto en la base de datos" ,
            type:"integer"},
        idProducto:{
            description:"identificador del producto en la tabla de productos" ,
            type:"integer"}

    },
    addictionalProperties: false,
    required: ["nombre"]


}