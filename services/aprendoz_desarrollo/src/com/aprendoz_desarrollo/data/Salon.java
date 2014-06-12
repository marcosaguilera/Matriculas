
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Salon
 *  06/09/2014 16:21:44
 * 
 */
public class Salon {

    private Integer idSalon;
    private String numeroSalon;

    public Salon() {
    }

    public Salon(Integer idSalon, String numeroSalon) {
        this.idSalon = idSalon;
        this.numeroSalon = numeroSalon;
    }

    public Integer getIdSalon() {
        return idSalon;
    }

    public void setIdSalon(Integer idSalon) {
        this.idSalon = idSalon;
    }

    public String getNumeroSalon() {
        return numeroSalon;
    }

    public void setNumeroSalon(String numeroSalon) {
        this.numeroSalon = numeroSalon;
    }

}
