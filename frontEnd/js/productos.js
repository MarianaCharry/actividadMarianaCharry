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
  
  function limpiarClientes() {
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
  