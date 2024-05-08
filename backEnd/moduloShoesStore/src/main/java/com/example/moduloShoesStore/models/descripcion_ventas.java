package com.example.moduloShoesStore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class descripcion_ventas {

	@Id
	@GeneratedValue (strategy=GenerationType.UUID)
	@Column (name="id_descripcion_ventas", nullable=false,length=36)
	private String id_descripcion_ventas;
	
	@ManyToOne
	@JoinColumn(name="id_ventas")
	private ventas ventas;
	
	@ManyToOne
	@JoinColumn(name="id_productos")
	private productos productos;
	
	
	@Column (name="cantidad", nullable=false,length=40)
	private int cantidad;
	
	@Column (name="precio", nullable=false,length=100)
	private double precio;
	
	@Column (name="descuento", nullable=false,length=5)
	private double descuento;
	
	@Column (name="sub_total", nullable=false,length=100)
	private double sub_total;

	public descripcion_ventas() {
		super();
	}

	public descripcion_ventas(String id_descripcion_ventas, com.example.moduloShoesStore.models.ventas ventas,
			com.example.moduloShoesStore.models.productos productos, int cantidad, double precio, double descuento,
			double sub_total) {
		super();
		this.id_descripcion_ventas = id_descripcion_ventas;
		this.ventas = ventas;
		this.productos = productos;
		this.cantidad = cantidad;
		this.precio = precio;
		this.descuento = descuento;
		this.sub_total = sub_total;
	}

	public String getId_descripcion_ventas() {
		return id_descripcion_ventas;
	}

	public void setId_descripcion_ventas(String id_descripcion_ventas) {
		this.id_descripcion_ventas = id_descripcion_ventas;
	}

	public ventas getVentas() {
		return ventas;
	}

	public void setVentas(ventas ventas) {
		this.ventas = ventas;
	}

	public productos getProductos() {
		return productos;
	}

	public void setProductos(productos productos) {
		this.productos = productos;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public double getDescuento() {
		return descuento;
	}

	public void setDescuento(double descuento) {
		this.descuento = descuento;
	}

	public double getSub_total() {
		return sub_total;
	}

	public void setSub_total(double sub_total) {
		this.sub_total = sub_total;
	}
	
	
}
