package com.example.moduloShoesStore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.moduloShoesStore.interfaceService.IProductoService;
import com.example.moduloShoesStore.models.productos;

@RequestMapping("/api/v1/productos")
@RestController
@CrossOrigin
public class productoController {
	@Autowired
	private IProductoService productoService;
	
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("productos") productos productos){
		productoService.save(productos);
		return new ResponseEntity<>(productos,HttpStatus.OK);
	
	}

	
	@GetMapping ("/")
	public ResponseEntity<Object>findAll(){
		var ListaProductos=productoService.findAll();
		return new ResponseEntity<>(ListaProductos,HttpStatus.OK);
	}

	@GetMapping("/{id_productos}")
	public ResponseEntity<Object> findOne ( @PathVariable String id_productos ){
		var productos= productoService.findOne(id_productos);
		return new ResponseEntity<>(productos, HttpStatus.OK);
	}
	
	
	@GetMapping("/busquedafiltro/{filtro}")
	public ResponseEntity<Object>findFiltro(@PathVariable String filtro){
		var ListaProductos = productoService.filtroProductos(filtro);
		return new ResponseEntity<>(ListaProductos, HttpStatus.OK);
	}
	
	@PutMapping("/{id_productos}")
	public ResponseEntity<Object> update  ( @PathVariable String id_productos, @ModelAttribute("productos") productos productosUpdate){
		var productos= productoService.findOne(id_productos).get();
		if (productos != null) {
			
			productos.setId_productos(productosUpdate.getId_productos());
			productos.setNombre_producto(productosUpdate.getNombre_producto());
			productos.setDescripcion(productosUpdate.getDescripcion());
			productos.setCantidad(productosUpdate.getCantidad());
			productos.setPrecio(productosUpdate.getPrecio());
			productos.setIva(productosUpdate.getIva());
			productos.setDescuento(productosUpdate.getDescuento());
			productos.setEstado(productosUpdate.getEstado());
			
			productoService.save(productos);
			return new ResponseEntity<>("Guardado", HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<>("Error producto no encontrado", HttpStatus.BAD_REQUEST);
		}
	}

}

