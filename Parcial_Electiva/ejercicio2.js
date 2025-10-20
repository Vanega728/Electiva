const almacenar=[];


function agregarLibro(titulo, autor, aPublicacion,ISBN){

  // objeto libro
  const libro={
    titulo,autor,aPublicacion,ISBN
  };
  
  almacenar.push(libro);//agrega mas elementos al array(push)
  console.log("Libro agregado:", libro);
}

function listasLibros(){
  // recorre a ver si hay libros
  if(almacenar.length===0){
    console.log("no hay libros en la lista");
    return;
  }
  console.log("lista de libros:", almacenar);
}

function BuscarLibro(titulo){

if(almacenar.length){
  for(let i= 0; i<almacenar.length; i++){
    if(almacenar[i].titulo===titulo){

      console.log("libro Encontrado:", almacenar[i]);
      return;
    }
}
}
}

function BuscarAutor(autor){
//lenght revisa si el array esta vacio
  if(almacenar.length){
    for(let i= 0; i<almacenar.length; i++){
      if(almacenar[i].autor===autor){

        console.log("autor encontrado:", almacenar[i]);
        return;
      }
  }
  }
}
//usamos las fuciones
agregarLibro("Grandes esperanzas","joseph",1987,"12345678910");
agregarLibro("Odisea","Homero",1705,"10987654321");
listasLibros();
BuscarLibro('Grandes esperanzas');
BuscarAutor('joseph');
