package com.example.moduloShoesStore.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.moduloShoesStore.models.clientes;

@Repository
public interface ICliente extends CrudRepository<clientes,String>{
	
}
