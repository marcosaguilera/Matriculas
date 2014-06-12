
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.GrupoFamiliar
 *  06/09/2014 16:21:43
 * 
 */
public class GrupoFamiliar {

    private Integer idGrupoFamiliar;
    private String grupoFamiliar;
    private String grupoLdap;
    private Set<com.aprendoz_desarrollo.data.TransporteRutas> transporteRutases = new HashSet<com.aprendoz_desarrollo.data.TransporteRutas>();
    private Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliarCopy> actualizacionGrupoFamiliarCopies = new HashSet<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliarCopy>();
    private Set<com.aprendoz_desarrollo.data.Persona> personas = new HashSet<com.aprendoz_desarrollo.data.Persona>();
    private Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars = new HashSet<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar>();
    private Set<com.aprendoz_desarrollo.data.GestionEncuestasGrupoFamiliar> gestionEncuestasGrupoFamiliars = new HashSet<com.aprendoz_desarrollo.data.GestionEncuestasGrupoFamiliar>();
    private Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars = new HashSet<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar>();

    public GrupoFamiliar() {
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap, Set<com.aprendoz_desarrollo.data.TransporteRutas> transporteRutases, Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliarCopy> actualizacionGrupoFamiliarCopies, Set<com.aprendoz_desarrollo.data.Persona> personas, Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars, Set<com.aprendoz_desarrollo.data.GestionEncuestasGrupoFamiliar> gestionEncuestasGrupoFamiliars, Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
        this.transporteRutases = transporteRutases;
        this.actualizacionGrupoFamiliarCopies = actualizacionGrupoFamiliarCopies;
        this.personas = personas;
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
        this.gestionEncuestasGrupoFamiliars = gestionEncuestasGrupoFamiliars;
        this.actualizacionGrupoFamiliars = actualizacionGrupoFamiliars;
    }

    public Integer getIdGrupoFamiliar() {
        return idGrupoFamiliar;
    }

    public void setIdGrupoFamiliar(Integer idGrupoFamiliar) {
        this.idGrupoFamiliar = idGrupoFamiliar;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public String getGrupoLdap() {
        return grupoLdap;
    }

    public void setGrupoLdap(String grupoLdap) {
        this.grupoLdap = grupoLdap;
    }

    public Set<com.aprendoz_desarrollo.data.TransporteRutas> getTransporteRutases() {
        return transporteRutases;
    }

    public void setTransporteRutases(Set<com.aprendoz_desarrollo.data.TransporteRutas> transporteRutases) {
        this.transporteRutases = transporteRutases;
    }

    public Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliarCopy> getActualizacionGrupoFamiliarCopies() {
        return actualizacionGrupoFamiliarCopies;
    }

    public void setActualizacionGrupoFamiliarCopies(Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliarCopy> actualizacionGrupoFamiliarCopies) {
        this.actualizacionGrupoFamiliarCopies = actualizacionGrupoFamiliarCopies;
    }

    public Set<com.aprendoz_desarrollo.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_desarrollo.data.Persona> personas) {
        this.personas = personas;
    }

    public Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> getInscPersonaGrupoFamiliars() {
        return inscPersonaGrupoFamiliars;
    }

    public void setInscPersonaGrupoFamiliars(Set<com.aprendoz_desarrollo.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars) {
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
    }

    public Set<com.aprendoz_desarrollo.data.GestionEncuestasGrupoFamiliar> getGestionEncuestasGrupoFamiliars() {
        return gestionEncuestasGrupoFamiliars;
    }

    public void setGestionEncuestasGrupoFamiliars(Set<com.aprendoz_desarrollo.data.GestionEncuestasGrupoFamiliar> gestionEncuestasGrupoFamiliars) {
        this.gestionEncuestasGrupoFamiliars = gestionEncuestasGrupoFamiliars;
    }

    public Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> getActualizacionGrupoFamiliars() {
        return actualizacionGrupoFamiliars;
    }

    public void setActualizacionGrupoFamiliars(Set<com.aprendoz_desarrollo.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars) {
        this.actualizacionGrupoFamiliars = actualizacionGrupoFamiliars;
    }

}
