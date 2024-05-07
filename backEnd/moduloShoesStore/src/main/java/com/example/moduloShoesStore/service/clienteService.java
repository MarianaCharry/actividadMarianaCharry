package com.example.moduloShoesStore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.moduloShoesStore.interfaceService.IClienteService;
import com.example.moduloShoesStore.interfaces.ICliente;
import com.example.moduloShoesStore.models.clientes;

@Service
public class clienteService implements IClienteService  {
	
	@Autowired
	private ICliente data;
	
	@Override
	public String save(clientes clientes) {
	    data.save(clientes);
	    return clientes.getId_cliente();
	}

	@Override
	public List<clientes> findAll() {
	    List<clientes> listaClientes = (List<clientes>) data.findAll();
	    return listaClientes;
	}

	@Override
	public int delete(String id_cliente) {
	    data.deleteById(id_cliente);
	    return 1;
	}

}
