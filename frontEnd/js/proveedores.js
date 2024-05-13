var url = "http://localhost:8080/api/v1/proveedores/";


function listarProveedores() {
  //METODO PARA LISTAR LOS CLIENTES
  //SE CREA LA PETICION AJAX
  
  $.ajax({
    url: url,
    type: "GET",
    success: function (result) {
      //success: funcion que se ejecuta
      //cuando la peticion tiene exito
      console.log(result);

      var contenidoTabla = document.getElementById("contenidoTabla");
      //Se limpia el cuepro de la tabla
      contenidoTabla.innerHTML = "";
      //se hace un ciclo que recorra l arreglo con los datos
      for (var i = 0; i < result.length; i++) {
        //UNA ETIQUETA tr por cada registro
        var trResgistro = document.createElement("tr");

        var celdaId = document.createElement("td");
        let celdaTipoIdentificacion = document.createElement("td")
        let celdaIdentificacion = document.createElement("td")
        let celdaNombreCliente = document.createElement("td")
        let celdaApellidoCliente = document.createElement("td")
        let celdaTelefono = document.createElement("td")
        let celdaDireccion = document.createElement("td")
        let celdaCiudad = document.createElement("td")
        let celdaCorreo = document.createElement("td")
        let celdaEstado = document.createElement("td")

        let celdaOpcion = document.createElement("td");
        let botonEditarCliente = document.createElement("button");
        botonEditarCliente.value=result[i]["id_clientes"];
        botonEditarCliente.innerHTML = "Editar";
        
        botonEditarCliente.onclick=function(e){
          $('#exampleModal').modal('show');
          consultarMedicoID(this.value);
        }

        botonEditarCliente.className = "btn btn-warning editar-cliente";

        
        celdaId.innerText = result[i]["id_clientes"];
        celdaTipoIdentificacion.innerText = result[i]["tipo_identificacion"];
        celdaIdentificacion.innerText = result[i]["identificacion"];
        celdaNombreCliente.innerText = result[i]["nombre_cliente"];
        celdaApellidoCliente.innerText = result[i]["apellido_cliente"];
        celdaTelefono.innerText = result[i]["telefono"];
        celdaDireccion.innerText = result[i]["direccion"];
        celdaCiudad.innerText = result[i]["ciudad"];
        celdaCorreo.innerText = result[i]["correo"];
        celdaEstado.innerText = result[i]["estado"];


        trResgistro.appendChild(celdaId);
        trResgistro.appendChild(celdaTipoIdentificacion);
        trResgistro.appendChild(celdaIdentificacion);
        trResgistro.appendChild(celdaNombreCliente);
        trResgistro.appendChild(celdaApellidoCliente);
        trResgistro.appendChild(celdaTelefono);
        trResgistro.appendChild(celdaDireccion);
        trResgistro.appendChild(celdaCiudad);
        trResgistro.appendChild(celdaCorreo);
        trResgistro.appendChild(celdaEstado);


        celdaOpcion.appendChild(botonEditarCliente);
        trResgistro.appendChild(celdaOpcion)

       
        contenidoTabla.appendChild(trResgistro);


        //creamos un td por cada campo de resgistro

      }
    },
    error: function (error) {
      /*
      ERROR: funcion que se ejecuta cuando la peticion tiene un error
      */
      alert("Error en la petición " + error);
    }
  })
  
}



//consultar cliente por id
function consultarClienteId(id_clientes){
  //alert(id);
  $.ajax({
      url:url+id_clientes,
      type:"GET",
      success: function(result){
          document.getElementById("id_clientes").value=result["id_clientes"];
          document.getElementById("tipo_identificacion").value=result["tipo_identificacion"];
          document.getElementById("identificacion").value=result["identificacion"];
          document.getElementById("nombre_cliente").value=result["nombre_cliente"];
          document.getElementById("apellido_cliente").value=result["apellido_cliente"];
          document.getElementById("telefono").value=result["telefono"];
          document.getElementById("direccion").value=result["direccion"];
          document.getElementById("ciudad").value=result["ciudad"];
          document.getElementById("correo_electronico").value=result["correo_electronico"];
          document.getElementById("estado").value=result["estado"];
      }
  });
}


  

function agregarClientes() {


  let formData = {
    "tipo_identificacion": document.getElementById("tipo_identificacion").value,
    "identificacion": document.getElementById("identificacion").value,
    "nombre_cliente": document.getElementById("nombre_cliente").value,
    "apellido_cliente": document.getElementById("apellido_cliente").value,
    "telefono": document.getElementById("telefono").value,
    "direccion": document.getElementById("direccion").value,
    "ciudad": document.getElementById("ciudad").value,
    "correo_electronico": document.getElementById("correo_electronico").value,
    "estado": document.getElementById("estado").value

  };

  let camposValidos = true;
  let camposRequeridos = [
      "tipo_identificacion",
      "identificacion",
      "nombre_cliente",
      "apellido_cliente",
      "telefono",
      "direccion",
      "ciudad",
      "correo_electronico",
      "estado"
  ];

  camposRequeridos.forEach(function(campo) {
      let valorCampo = document.getElementById(campo).value.trim();
      if (valorCampo === "") {
          camposValidos = false;
          return false; // Terminar la iteración si se encuentra un campo vacío
      }
  });

  if (camposValidos) {
      $.ajax({
          url: url,
          type: "POST",
          data: formData,
          success: function (result) {
              Swal.fire({
                  title: "¡Excelente!",
                  text: "Se guardó correctamente",
                  icon: "success"
              });
              limpiarClientes();
          },
          error: function (error) {
              Swal.fire("Error", "Error al guardar, " + error.responseText, "error");
          },
      });

  } else {
      Swal.fire({
          title: "¡Error!",
          text: "Llene todos los campos correctamente",
          icon: "error"
      });
  }

}

//se ejecuta la peticion


function validarCampos() {
  var identificacion = document.getElementById("identificacion");
  return validarIdentificacion(identificacion);
}
function validarIdentificacion(cuadroNumero) {
  /*
  numero documento 
  min=5
  max=11
  numero entero

  si cumple, se cambia color a verde
  si no, se cambia a rojo
  */
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 5 || valor.length > 10) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

//Validadnombre

function validarCampos() {
  var nombre_cliente = document.getElementById("nombre_cliente");
  return validarPrimer_nombre(nombre_cliente);
}
function validarNombre_cliente(cuadroNumero) {

  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 1 || valor.length > 45) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

//ValidadApellido
function validarCampos() {
  var apellido_cliente = document.getElementById("apellido_cliente");
  return validarApellido_cliente(apellido_cliente);
}
function validarApellido_cliente(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 1 || valor.length > 45) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

//ValidadTelefono
function validarCampos() {
  var telefono = document.getElementById("telefono");
  return validarTelefono(telefono);
}
function validarTelefono(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 10 || valor.length > 13) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

//ValidadDireccion


function validarCampos() {
    var direccion = document.getElementById("direccion");
    return validarDireccion(direccion);
  }
  function validarDireccion(cuadroNumero) {
    
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 10  || valor.length > 45) {
      valido = false
    }
  
    if (valido) {
      //cuadro de texto cumple
      cuadroNumero.className = "form-control is-valid";
    } else {
      //cuadro de texto no cumple
      cuadroNumero.className = "form-control is-invalid";
    }
    return valido;
  
  }


//ValidaCiudad


function validarCampos() {
    var ciudad = document.getElementById("ciudad");
    return validarCiudad(ciudad);
  }
  function validarCiudad(cuadroNumero) {
    
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 3  || valor.length > 45) {
      valido = false
    }
  
    if (valido) {
      //cuadro de texto cumple
      cuadroNumero.className = "form-control is-valid";
    } else {
      //cuadro de texto no cumple
      cuadroNumero.className = "form-control is-invalid";
    }
    return valido;
  
  }
//ValidadCorreo
function validarCampos() {
  var correo_electronico = document.getElementById("correo_electronico");
  return validarCorreo(correo_electronico);
}
function validarCorreo(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 5 || valor.length > 100) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

//ValidadEstado


function validarCampos() {
  var estado = document.getElementById("estado");
  return validarEstado(estado);
}
function validarEstado(cuadroNumero) {
  
  var valor = cuadroNumero.value;
  var valido = true;
  if (valor.length < 1  || valor.length > 15) {
    valido = false
  }

  if (valido) {
    //cuadro de texto cumple
    cuadroNumero.className = "form-control is-valid";
  } else {
    //cuadro de texto no cumple
    cuadroNumero.className = "form-control is-invalid";
  }
  return valido;

}

function limpiarClientes() {
  document.getElementById("identificacion").className="form-control";
  document.getElementById("nombre_cliente").className="form-control";
  document.getElementById("apellido_cliente").className="form-control";
  document.getElementById("telefono").className="form-control";
  document.getElementById("direccion").className="form-control";
  document.getElementById("ciudad").className="form-control";
  document.getElementById("correo_electronico").className="form-control";
  document.getElementById("estado").className="form-control";
  document.getElementById("tipo_identificacion").value = "";
  document.getElementById("identificacion").value = "";
  document.getElementById("nombre_cliente").value = "";
  document.getElementById("apellido_cliente").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("correo_electronico").value = "";
  document.getElementById("estado").value = "";
}