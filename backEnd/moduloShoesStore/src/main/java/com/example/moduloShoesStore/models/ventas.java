package com.example.moduloShoesStore.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ventas {
	@Id
	@GeneratedValue (strategy=GenerationType.UUID)
	@Column (name="id_ventas", nullable=false,length=36)
	private String id_ventas;
	
	@ManyToOne
	@JoinColumn(name="id_clientes")
	private clientes clientes;
	
	@Column (name="total", nullable=false,length=45)
	private String total;

	@Column (name="fecha_venta", nullable=false,length=36)
	private Date fecha_venta;
	
	@Column (name="estado", nullable=false,length=10)
	private estadoVenta estado;

	public ventas() {
		super();
	}

	public ventas(String id_ventas, com.example.moduloShoesStore.models.clientes clientes, String total,
			Date fecha_venta, estadoVenta estado) {
		super();
		this.id_ventas = id_ventas;
		this.clientes = clientes;
		this.total = total;
		this.fecha_venta = fecha_venta;
		this.estado = estado;
	}

	public String getId_ventas() {
		return id_ventas;
	}

	public void setId_ventas(String id_ventas) {
		this.id_ventas = id_ventas;
	}

	public clientes getClientes() {
		return clientes;
	}

	public void setClientes(clientes clientes) {
		this.clientes = clientes;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public Date getFecha_venta() {
		return fecha_venta;
	}

	public void setFecha_venta(Date fecha_venta) {
		this.fecha_venta = fecha_venta;
	}

	public estadoVenta getEstado() {
		return estado;
	}

	public void setEstado(estadoVenta estado) {
		this.estado = estado;
	}

	
	
}
