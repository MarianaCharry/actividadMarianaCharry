package com.example.moduloShoesStore.interfaceService;

import java.util.List;

import com.example.moduloShoesStore.models.clientes;

public interface IClienteService {
	public String save(clientes clientes);
		public List<clientes>findAll();
		public int delete (String id_cliente);
		
}
