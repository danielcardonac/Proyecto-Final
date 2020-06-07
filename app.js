
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
//Creamos los Arrays
var productos = ["iPad", "Libro: 'deriva continental'"];
var precios = ["1000", "10"];
var id = ["1", "2"];
var i = 0;
var itemsEncontrados = [];


app.set('view engine', 'ejs');

//Creamos un nuevo esquema para los productos


//Creamos el Modelo
//const Producto = mongoose.model("Producto", productoSchema);




app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home");
});

app.post("/", function(req, res){
  comandoEscogido = req.body.numComando;

  function ordenar(arrayOrdenado){
    arrayOrdenado.sort();
  }
  switch (comandoEscogido) {
    case "1":
    res.render("opcion1", {
      productos: productos,
      precios: precios
    });
    console.log(id);
    break;

    case "2":
    organizar(productos);
    res.render("opcion2", {
      productos: productos,
    });
    break;

    case "3":
    res.render("opcion3");
    break;

    case "4":
    res.render("opcion4");
    break;

    case "5":
      res.redirect("/find");
      break;

    case "0":
      res.render("opcion0");
      break;




    default:
    res.render("xdefecto");

  }
});

function organizar(array){
  array.sort();
}



app.post("/add", function(req, res){
  nombreProducto = req.body.nombreProducto;
  precioProducto = req.body.precioProducto;
  idProducto = "23" + i;

  productos.push(nombreProducto);
  precios.push(precioProducto);
  id.push(idProducto);
  i++;
  res.redirect("/");

});


app.post("/remove", function(req, res){
  nombreProductoBorrar = req.body.nombreProductoBorrar;
  if(nombreProductoBorrar == ""){
    res.render("opcion4");
  }
  for (var i=0; i < productos.length; i++){
    if(productos[i] == nombreProductoBorrar){
      productos.splice(i, 1);
      precios.splice(i, 1);
      id.splice(i);
    }

  }

  res.redirect("/");

});

app.get("/find", function(req, res){
  res.render("opcion5");
});

app.post("/find", function(req, res){
  escogido = req.body.escogido;
  valorEncontar = req.body.valorEncontar;
  if(escogido == "ID"){
    for (var i=0; i < id.length; i++){
      if(id[i] == valorEncontar){
        itemsEncontrados.push(productos[i]);

        res.render("idEncontrados", {
          itemsEncontrados: itemsEncontrados
        });
      }
    }
    itemsEncontrados.splice(0, 0);
  }
  else{
   for (var i=0; i < precios.length; i++){
     if(precios[i] == valorEncontar){
       itemsEncontrados.push(productos[i]);
     }
   }
   console.log(itemsEncontrados);
   res.render("idEncontrados", {
     itemsEncontrados: itemsEncontrados
   });
   itemsEncontrados.splice(0, 0);

 }
});






app.listen(3000, function() {
  console.log("Servidor iniciado en el puerto 3000.");
});
