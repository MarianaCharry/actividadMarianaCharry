package com.example.moduloShoesStore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class productos {

	@Id
	@GeneratedValue (strategy=GenerationType.UUID)
	@Column (name="id_productos", nullable=false,length=36)
	private String id_productos;
	
	@Column (name="nombre_producto", nullable=false,length=45)
	private String nombre_producto;
	
	@Column (name="descripcion", nullable=false,length=45)
	private String descripcion;
	
	@Column (name="cantidad", nullable=false,length=36)
	private String cantidad;
	
	@Column (name="precio", nullable=false,length=36)
	private String precio;
	
	@Column (name="iva", nullable=false,length=2)
	private String iva;
	
	@Column (name="descuento", nullable=false,length=2)
	private String descuento;
	
	@Column (name="estado", nullable=false,length=10)
	private String estado;

	public productos() {
		super();
	}

	public productos(String id_productos, String nombre_producto, String descripcion, String cantidad, String precio,
			String iva, String descuento, String estado) {
		super();
		this.id_productos = id_productos;
		this.nombre_producto = nombre_producto;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
		this.iva = iva;
		this.descuento = descuento;
		this.estado = estado;
	}

	public String getId_productos() {
		return id_productos;
	}

	public void setId_productos(String id_productos) {
		this.id_productos = id_productos;
	}

	public String getNombre_producto() {
		return nombre_producto;
	}

	public void setNombre_producto(String nombre_producto) {
		this.nombre_producto = nombre_producto;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getCantidad() {
		return cantidad;
	}

	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}

	public String getPrecio() {
		return precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}

	public String getIva() {
		return iva;
	}

	public void setIva(String iva) {
		this.iva = iva;
	}

	public String getDescuento() {
		return descuento;
	}

	public void setDescuento(String descuento) {
		this.descuento = descuento;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	
}
