
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.TipoFalla
 *  06/13/2014 10:26:50
 * 
 */
public class TipoFalla {

    private Integer idTipoFalla;
    private String tipoFalla;
    private Set<com.aprendoz_desarrollo.data.LogIngresoCarne> logIngresoCarnes = new HashSet<com.aprendoz_desarrollo.data.LogIngresoCarne>();

    public TipoFalla() {
    }

    public TipoFalla(Integer idTipoFalla, String tipoFalla) {
        this.idTipoFalla = idTipoFalla;
        this.tipoFalla = tipoFalla;
    }

    public TipoFalla(Integer idTipoFalla, String tipoFalla, Set<com.aprendoz_desarrollo.data.LogIngresoCarne> logIngresoCarnes) {
        this.idTipoFalla = idTipoFalla;
        this.tipoFalla = tipoFalla;
        this.logIngresoCarnes = logIngresoCarnes;
    }

    public Integer getIdTipoFalla() {
        return idTipoFalla;
    }

    public void setIdTipoFalla(Integer idTipoFalla) {
        this.idTipoFalla = idTipoFalla;
    }

    public String getTipoFalla() {
        return tipoFalla;
    }

    public void setTipoFalla(String tipoFalla) {
        this.tipoFalla = tipoFalla;
    }

    public Set<com.aprendoz_desarrollo.data.LogIngresoCarne> getLogIngresoCarnes() {
        return logIngresoCarnes;
    }

    public void setLogIngresoCarnes(Set<com.aprendoz_desarrollo.data.LogIngresoCarne> logIngresoCarnes) {
        this.logIngresoCarnes = logIngresoCarnes;
    }

}
