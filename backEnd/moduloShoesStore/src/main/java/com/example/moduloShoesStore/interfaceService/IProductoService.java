package com.example.moduloShoesStore.interfaceService;

import java.util.List;
import java.util.Optional;
import com.example.moduloShoesStore.models.productos;

public interface IProductoService {
	public String save(productos productos);
	public List<productos>findAll();
	public int delete (String id_productos);
	public Optional<productos> findOne(String id_productos);
	public List<productos> filtroProductos(String filtro);
}
