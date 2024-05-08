package com.example.moduloShoesStore.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class clientes {
	
	@Id
	@GeneratedValue (strategy=GenerationType.UUID)
	@Column (name="id_clientes", nullable=false,length=36)
	private String id_clientes;
	
	@Column (name="tipo_identificacion", nullable=false,length=36)
	private String tipo_identificacion;
	
	@Column (name="identificacion", nullable=false,length=10)
	private String identificacion;
	
	@Column (name="nombre_cliente", nullable=false,length=45)
	private String nombre_cliente;
	
	@Column (name="apellido_cliente", nullable=false,length=45)
	private String apellido_cliente;
	
	@Column (name="telefono", nullable=false,length=13)
	private String telefono;
	
	@Column (name="direccion", nullable=false,length=45)
	private String direccion;
	
	@Column (name="ciudad", nullable=false,length=3645)
	private String ciudad;
	
	@Column (name="correo_electronico", nullable=false,length=100)
	private String correo_electronico;
	
	@Column (name="estado", nullable=false,length=15)
	private estado estado;

	public clientes() {
		super();
	}

	public clientes(String id_clientes, String tipo_identificacion, String identificacion, String nombre_cliente,
			String apellido_cliente, String telefono, String direccion, String ciudad, String correo_electronico,
			com.example.moduloShoesStore.models.estado estado) {
		super();
		this.id_clientes = id_clientes;
		this.tipo_identificacion = tipo_identificacion;
		this.identificacion = identificacion;
		this.nombre_cliente = nombre_cliente;
		this.apellido_cliente = apellido_cliente;
		this.telefono = telefono;
		this.direccion = direccion;
		this.ciudad = ciudad;
		this.correo_electronico = correo_electronico;
		this.estado = estado;
	}

	public String getId_clientes() {
		return id_clientes;
	}

	public void setId_clientes(String id_clientes) {
		this.id_clientes = id_clientes;
	}

	public String getTipo_identificacion() {
		return tipo_identificacion;
	}

	public void setTipo_identificacion(String tipo_identificacion) {
		this.tipo_identificacion = tipo_identificacion;
	}

	public String getIdentificacion() {
		return identificacion;
	}

	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}

	public String getNombre_cliente() {
		return nombre_cliente;
	}

	public void setNombre_cliente(String nombre_cliente) {
		this.nombre_cliente = nombre_cliente;
	}

	public String getApellido_cliente() {
		return apellido_cliente;
	}

	public void setApellido_cliente(String apellido_cliente) {
		this.apellido_cliente = apellido_cliente;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public String getCorreo_electronico() {
		return correo_electronico;
	}

	public void setCorreo_electronico(String correo_electronico) {
		this.correo_electronico = correo_electronico;
	}

	public estado getEstado() {
		return estado;
	}

	public void setEstado(estado estado) {
		this.estado = estado;
	}

	
	
	
}
