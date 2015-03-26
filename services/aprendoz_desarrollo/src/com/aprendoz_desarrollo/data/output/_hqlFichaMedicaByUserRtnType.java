
package com.aprendoz_desarrollo.data.output;

import java.util.Date;


/**
 * Generated for query "_hqlFichaMedicaByUser" on 06/13/2014 10:27:10
 * 
 */
public class _hqlFichaMedicaByUserRtnType {

    private Integer id;
    private String nombrecompleto;
    private Date fecha;
    private String grado;
    private String rh;
    private String eps;
    private String prepagada;
    private String telefono;
    private String emergencia;

    public _hqlFichaMedicaByUserRtnType() {
    }

    public _hqlFichaMedicaByUserRtnType(Integer id, String nombrecompleto, Date fecha, String grado, String rh, String eps, String prepagada, String telefono, String emergencia) {
        this.id = id;
        this.nombrecompleto = nombrecompleto;
        this.fecha = fecha;
        this.grado = grado;
        this.rh = rh;
        this.eps = eps;
        this.prepagada = prepagada;
        this.telefono = telefono;
        this.emergencia = emergencia;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombrecompleto() {
        return nombrecompleto;
    }

    public void setNombrecompleto(String nombrecompleto) {
        this.nombrecompleto = nombrecompleto;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getGrado() {
        return grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

    public String getRh() {
        return rh;
    }

    public void setRh(String rh) {
        this.rh = rh;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getPrepagada() {
        return prepagada;
    }

    public void setPrepagada(String prepagada) {
        this.prepagada = prepagada;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmergencia() {
        return emergencia;
    }

    public void setEmergencia(String emergencia) {
        this.emergencia = emergencia;
    }

}
