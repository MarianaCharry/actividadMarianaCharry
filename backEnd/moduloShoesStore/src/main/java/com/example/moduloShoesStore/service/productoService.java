package com.example.moduloShoesStore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.moduloShoesStore.interfaceService.IProductoService;
import com.example.moduloShoesStore.interfaces.IProducto;
import com.example.moduloShoesStore.models.productos;

@Service
public class productoService implements IProductoService  {
	
	@Autowired
	private IProducto data;
	
	@Override
	public String save(productos productos) {
		data.save(productos);
		return productos.getId_productos();
	}

	@Override
	public List<productos> findAll() {
	    List<productos> listaProductos = (List<productos>) data.findAll();
	    return listaProductos;
	}

	@Override
	public int delete(String id_productos) {
	    data.deleteById(id_productos);
	    return 1;
	}

	@Override
	public Optional<productos> findOne(String id_productos) {
		Optional<productos>productos=data.findById(id_productos);
		
		return productos;
	}
	
	@Override
	public List<productos> filtroProductos(String filtro) {
		List <productos> listaProductos=data.filtroProductos(filtro);
		return listaProductos;
	}
}
