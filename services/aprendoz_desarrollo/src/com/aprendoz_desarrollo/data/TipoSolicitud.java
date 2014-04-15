
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoSolicitud
 *  04/14/2014 10:05:54
 * 
 */
public class TipoSolicitud {

    private Integer idTipoSolicitud;
    private String solicitud;
    private Set<com.aprendoz_desarrollo.data.TransporteNovedades> transporteNovedadeses = new HashSet<com.aprendoz_desarrollo.data.TransporteNovedades>();

    public TipoSolicitud() {
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud, Set<com.aprendoz_desarrollo.data.TransporteNovedades> transporteNovedadeses) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
        this.transporteNovedadeses = transporteNovedadeses;
    }

    public Integer getIdTipoSolicitud() {
        return idTipoSolicitud;
    }

    public void setIdTipoSolicitud(Integer idTipoSolicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
    }

    public String getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(String solicitud) {
        this.solicitud = solicitud;
    }

    public Set<com.aprendoz_desarrollo.data.TransporteNovedades> getTransporteNovedadeses() {
        return transporteNovedadeses;
    }

    public void setTransporteNovedadeses(Set<com.aprendoz_desarrollo.data.TransporteNovedades> transporteNovedadeses) {
        this.transporteNovedadeses = transporteNovedadeses;
    }

}
