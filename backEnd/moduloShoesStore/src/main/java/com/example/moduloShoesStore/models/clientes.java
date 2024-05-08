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
	@Column (name="id_cliente", nullable=false,length=36)
	private String id_cliente;
	
	@Column (name="tipo_identificacion", nullable=false,length=36)
	private String tipo_identificacion;
	
	@Column (name="num_identificacion", nullable=false,length=36)
	private String num_identificacion;
	
	@Column (name="nombre", nullable=false,length=36)
	private String nombre;
	
	@Column (name="apellido", nullable=false,length=36)
	private String apellido;
	
	@Column (name="telefono", nullable=false,length=36)
	private String telefono;
	
	@Column (name="direccion", nullable=false,length=36)
	private String direccion;
	
	@Column (name="ciudad", nullable=false,length=36)
	private String ciudad;
	
	@Column (name="correo_electronico", nullable=false,length=36)
	private String correo_electronico;
	
	@Column (name="estado", nullable=false,length=36)
	private String estado;

	public clientes() {
		super();
	}

	public clientes(String id_cliente, String tipo_identificacion, String num_identificacion, String nombre,
			String apellido, String telefono, String direccion, String ciudad, String correo_electronico,
			String estado) {
		super();
		this.id_cliente = id_cliente;
		this.tipo_identificacion = tipo_identificacion;
		this.num_identificacion = num_identificacion;
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.direccion = direccion;
		this.ciudad = ciudad;
		this.correo_electronico = correo_electronico;
		this.estado = estado;
	}

	public String getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(String id_cliente) {
		this.id_cliente = id_cliente;
	}

	public String getTipo_identificacion() {
		return tipo_identificacion;
	}

	public void setTipo_identificacion(String tipo_identificacion) {
		this.tipo_identificacion = tipo_identificacion;
	}

	public String getNum_identificacion() {
		return num_identificacion;
	}

	public void setNum_identificacion(String num_identificacion) {
		this.num_identificacion = num_identificacion;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
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

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	
	

	
}
