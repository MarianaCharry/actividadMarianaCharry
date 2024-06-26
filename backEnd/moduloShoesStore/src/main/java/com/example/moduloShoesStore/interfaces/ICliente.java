package com.example.moduloShoesStore.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.example.moduloShoesStore.models.clientes;

@Repository
public interface ICliente extends CrudRepository<clientes,String>{
	@Query("SELECT c FROM clientes c WHERE "
			+ "c.tipo_identificacion LIKE %?1% OR "
			+ "c.identificacion LIKE %?1% OR "
			+ "c.nombre_cliente LIKE %?1% OR "
			+ "c.apellido_cliente LIKE %?1% OR "
			+ "c.telefono LIKE %?1% OR "
			+ "c.direccion LIKE %?1% OR "
			+ "c.ciudad LIKE %?1% OR "
			+ "c.correo_electronico LIKE %?1% OR "
			+ "c.estado LIKE %?1%")
	List<clientes>filtroCliente (String filtro);
}
