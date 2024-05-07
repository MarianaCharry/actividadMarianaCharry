
package com.example.moduloShoesStore.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.moduloShoesStore.interfaceService.IClienteService;
import com.example.moduloShoesStore.models.clientes;

@RequestMapping("/api/v1/cliente")
@RestController
@CrossOrigin
public class clienteController {
	private IClienteService clienteService;
	
	@PostMapping("/")
	public ResponseEntity<Object>save (@ModelAttribute("clientes")clientes clientes){
		clienteService.save(clientes);
		return new ResponseEntity<>(clientes,HttpStatus.OK);
	}
	
	@GetMapping ("/")
	public ResponseEntity<Object>findAll(){
		var ListaCliente=clienteService.findAll();
		return new ResponseEntity<>(ListaCliente,HttpStatus.OK);
	}

	
}
