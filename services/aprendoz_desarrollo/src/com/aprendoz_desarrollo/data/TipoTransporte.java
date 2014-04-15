
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoTransporte
 *  04/14/2014 10:05:53
 * 
 */
public class TipoTransporte {

    private Integer idtipoTransporte;
    private String tipoTransporte;
    private String descripcion;
    private Set<com.aprendoz_desarrollo.data.TransporteRutas> transporteRutases = new HashSet<com.aprendoz_desarrollo.data.TransporteRutas>();

    public TipoTransporte() {
    }

    public TipoTransporte(Integer idtipoTransporte, String tipoTransporte, String descripcion) {
        this.idtipoTransporte = idtipoTransporte;
        this.tipoTransporte = tipoTransporte;
        this.descripcion = descripcion;
    }

    public TipoTransporte(Integer idtipoTransporte, String tipoTransporte, String descripcion, Set<com.aprendoz_desarrollo.data.TransporteRutas> transporteRutases) {
        this.idtipoTransporte = idtipoTransporte;
        this.tipoTransporte = tipoTransporte;
        this.descripcion = descripcion;
        this.transporteRutases = transporteRutases;
    }

    public Integer getIdtipoTransporte() {
        return idtipoTransporte;
    }

    public void setIdtipoTransporte(Integer idtipoTransporte) {
        this.idtipoTransporte = idtipoTransporte;
    }

    public String getTipoTransporte() {
        return tipoTransporte;
    }

    public void setTipoTransporte(String tipoTransporte) {
        this.tipoTransporte = tipoTransporte;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_desarrollo.data.TransporteRutas> getTransporteRutases() {
        return transporteRutases;
    }

    public void setTransporteRutases(Set<com.aprendoz_desarrollo.data.TransporteRutas> transporteRutases) {
        this.transporteRutases = transporteRutases;
    }

}
