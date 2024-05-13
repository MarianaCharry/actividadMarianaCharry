package com.example.moduloShoesStore.service;

import java.util.List;

import java.util.Optional;

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
		return clientes.getId_clientes();
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

	@Override
	public Optional<clientes> findOne(String id_clientes) {
		Optional<clientes>clientes=data.findById(id_clientes);
		
		return clientes;
	}
	
	@Override
	public List<clientes> filtroCliente(String filtro) {
		List <clientes> listaMedico=data.filtroCliente(filtro);
		return listaMedico;
	}
	
	
}
