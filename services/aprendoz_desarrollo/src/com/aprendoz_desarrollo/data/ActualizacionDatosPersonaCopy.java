
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.ActualizacionDatosPersonaCopy
 *  06/09/2014 16:21:44
 * 
 */
public class ActualizacionDatosPersonaCopy {

    private Integer idActualizacionDatosPersona;
    private Persona persona;
    private Date fecha;
    private Byte actualizado;

    public ActualizacionDatosPersonaCopy() {
    }

    public ActualizacionDatosPersonaCopy(Integer idActualizacionDatosPersona, Date fecha, Byte actualizado) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionDatosPersonaCopy(Integer idActualizacionDatosPersona, Persona persona, Date fecha, Byte actualizado) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
        this.persona = persona;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public Integer getIdActualizacionDatosPersona() {
        return idActualizacionDatosPersona;
    }

    public void setIdActualizacionDatosPersona(Integer idActualizacionDatosPersona) {
        this.idActualizacionDatosPersona = idActualizacionDatosPersona;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

}
