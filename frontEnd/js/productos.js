var url = "http://localhost:8080/api/v1/productos/";

function agregarProductos() {


    let formData = {
      "nombre_producto": document.getElementById("nombre_producto").value,
      "descripcion": document.getElementById("descripcion").value,
      "cantidad": document.getElementById("cantidad").value,
      "precio": document.getElementById("precio").value,
      "iva": document.getElementById("iva").value,
      "descuento": document.getElementById("descuento").value,
      "estado": document.getElementById("estado").value
  
    };
  
    let camposValidos = true;
    let camposRequeridos = [
        "nombre_producto",
        "descripcion",
        "cantidad",
        "precio",
        "iva",
        "descuento",
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
                limpiarProductos();
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
    var nombre_producto = document.getElementById("nombre_producto");
    return validarNombre_producto(nombre_producto);
  }
  function validarNombre_producto(cuadroNumero) {
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
    if (valor.length < 2 || valor.length > 45) {
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
  
  //ValidarDescripcion
  
  function validarCampos() {
    var descripcion = document.getElementById("descripcion");
    return validarDescripcion(descripcion);
  }
  function validarDescripcion(cuadroNumero) {
  
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
  
  //validaCantidad
  function validarCampos() {
    var cantidad = document.getElementById("cantidad");
    return validarCantidad(cantidad);
  }
  function validarCantidad(cuadroNumero) {
    
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 1 || valor.length > 36) {
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
  
  //ValidadPrecio
  function validarCampos() {
    var precio = document.getElementById("precio");
    return validarPrecio(precio);
  }
  function validarPrecio(cuadroNumero) {
    
    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 1 || valor.length > 36) {
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
  
  //ValidadIva
  
  
  function validarCampos() {
      var iva = document.getElementById("iva");
      return validarIva(iva);
    }
    function validarIva(cuadroNumero) {
      
      var valor = cuadroNumero.value;
      var valido = true;
      if (valor.length < 1  || valor.length > 2) {
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
  
  
  //ValidarDescuento
  
  
  function validarCampos() {
      var descuento = document.getElementById("descuento");
      return validarDescuento(descuento);
    }
    function validarDescuento(cuadroNumero) {
      
      var valor = cuadroNumero.value;
      var valido = true;
      if (valor.length < 1  || valor.length > 2) {
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
  
  function limpiarProductos() {
    document.getElementById("nombre_producto").className="form-control";
    document.getElementById("descripcion").className="form-control";
    document.getElementById("cantidad").className="form-control";
    document.getElementById("precio").className="form-control";
    document.getElementById("iva").className="form-control";
    document.getElementById("descuento").className="form-control";
    document.getElementById("estado").className="form-control";
    document.getElementById("nombre_producto").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("iva").value = "";
    document.getElementById("descuento").value = "";
    document.getElementById("estado").value = "";
  }



  //Listar los productos
  function listarProductos() {
    //METODO PARA LISTAR LOS PRODUCTOS
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
          let celdaNombre = document.createElement("td")
          let celdaDescripcion = document.createElement("td")
          let celdaCantidad = document.createElement("td")
          let celdaPrecio = document.createElement("td")
          let celdaIva = document.createElement("td")
          let celdaDescuento = document.createElement("td")
          let celdaEstado = document.createElement("td")
  
          let celdaOpcion = document.createElement("td");
          let botonEditarProducto = document.createElement("button");
          botonEditarProducto.value=result[i]["id_productos"];
          botonEditarProducto.innerHTML = "Editar";
          
          botonEditarProducto.onclick=function(e){
            $('#exampleModal').modal('show');
            consultarProductoID(this.value);
          }
  
          botonEditarProducto.className = "btn btn-warning editar-producto";
  
          
          celdaId.innerText = result[i]["id_productos"];
          celdaNombre.innerText = result[i]["nombre_producto"];
          celdaDescripcion.innerText = result[i]["descripcion"];
          celdaCantidad.innerText = result[i]["cantidad"];
          celdaPrecio.innerText = result[i]["precio"];
          celdaIva.innerText = result[i]["iva"];
          celdaDescuento.innerText = result[i]["descuento"];
          celdaEstado.innerText = result[i]["estado"];
  
  
          trResgistro.appendChild(celdaId);
          trResgistro.appendChild(celdaNombre);
          trResgistro.appendChild(celdaDescripcion);
          trResgistro.appendChild(celdaCantidad);
          trResgistro.appendChild(celdaPrecio);
          trResgistro.appendChild(celdaIva);
          trResgistro.appendChild(celdaDescuento);
          trResgistro.appendChild(celdaEstado);
  
  
          celdaOpcion.appendChild(botonEditarProducto);
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
  

  function consultarProductoID(id_productos){
    //alert(id);
    $.ajax({
        url:url+id_productos,
        type:"GET",
        success: function(result){
            document.getElementById("id_productos").value=result["id_productos"];
            document.getElementById("nombre_producto").value=result["nombre_producto"];
            document.getElementById("descripcion").value=result["descripcion"];
            document.getElementById("cantidad").value=result["cantidad"];
            document.getElementById("precio").value=result["precio"];
            document.getElementById("iva").value=result["iva"];
            document.getElementById("descuento").value=result["descuento"];
            document.getElementById("estado").value=result["estado"];
        }
    });
  }
  //2.Crear petición que actualice la información del producto
  
  function actualizarProducto() { 
    var id_productos=document.getElementById("id_productos").value
    let formData={
        "nombre_producto": document.getElementById("nombre_producto").value,
        "descripcion": document.getElementById("descripcion").value,
        "cantidad": document.getElementById("cantidad").value,
        "precio": document.getElementById("precio").value,
        "iva": document.getElementById("iva").value,
        "descuento": document.getElementById("descuento").value,
        "estado": document.getElementById("estado").value
  };
  
  if (validarCampos()) {
    $.ajax({
        url:url+id_productos,
        type: "PUT",
        data: formData,
        success: function(result) {
            // Manejar la respuesta exitosa según necesites
            Swal.fire({
                title: "¡Excelente!",
                text: "Se guardó correctamente",
                icon: "success"
              });
            // Puedes hacer algo adicional como recargar la lista de médicos
            listarProductos();
        },
        error: function(error) {
            // Manejar el error de la petición
            Swal.fire({
                title: "¡Error!",
                text: "No se guardó",
                icon: "error"
              });
        }
    });
    } else {
    Swal.fire({
        title: "¡Error!",
        text: "Llene todos los campos correctamente",
        icon: "error"
      });
    }
  }