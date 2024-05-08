
package com.example.moduloShoesStore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.moduloShoesStore.interfaceService.IClienteService;
import com.example.moduloShoesStore.models.clientes;

@RequestMapping("/api/v1/clientes")
@RestController
@CrossOrigin
public class clienteController {
	@Autowired
	private IClienteService clienteService;
	
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("clientes") clientes clientes){
		clienteService.save(clientes);
		return new ResponseEntity<>(clientes,HttpStatus.OK);
	
	}

	
	@GetMapping ("/")
	public ResponseEntity<Object>findAll(){
		var ListaCliente=clienteService.findAll();
		return new ResponseEntity<>(ListaCliente,HttpStatus.OK);
	}

	@GetMapping("/{id_clientes}")
	public ResponseEntity<Object> findOne ( @PathVariable String id_clientes ){
		var clientes= clienteService.findOne(id_clientes);
		return new ResponseEntity<>(clientes, HttpStatus.OK);
	}
	
}
