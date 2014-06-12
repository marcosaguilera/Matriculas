
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "_hqlAlergiasByUser" on 06/09/2014 18:05:27
 * 
 */
public class _hqlAlergiasByUserRtnType {

    private Integer id;
    private Integer idficha;
    private String medico;
    private String alergias;
    private String enfermedades;
    private String antecedentes;
    private String medicamentosActualidad;
    private String restricciones;
    private String recomendaciones;

    public _hqlAlergiasByUserRtnType() {
    }

    public _hqlAlergiasByUserRtnType(Integer id, Integer idficha, String medico, String alergias, String enfermedades, String antecedentes, String medicamentosActualidad, String restricciones, String recomendaciones) {
        this.id = id;
        this.idficha = idficha;
        this.medico = medico;
        this.alergias = alergias;
        this.enfermedades = enfermedades;
        this.antecedentes = antecedentes;
        this.medicamentosActualidad = medicamentosActualidad;
        this.restricciones = restricciones;
        this.recomendaciones = recomendaciones;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdficha() {
        return idficha;
    }

    public void setIdficha(Integer idficha) {
        this.idficha = idficha;
    }

    public String getMedico() {
        return medico;
    }

    public void setMedico(String medico) {
        this.medico = medico;
    }

    public String getAlergias() {
        return alergias;
    }

    public void setAlergias(String alergias) {
        this.alergias = alergias;
    }

    public String getEnfermedades() {
        return enfermedades;
    }

    public void setEnfermedades(String enfermedades) {
        this.enfermedades = enfermedades;
    }

    public String getAntecedentes() {
        return antecedentes;
    }

    public void setAntecedentes(String antecedentes) {
        this.antecedentes = antecedentes;
    }

    public String getMedicamentosActualidad() {
        return medicamentosActualidad;
    }

    public void setMedicamentosActualidad(String medicamentosActualidad) {
        this.medicamentosActualidad = medicamentosActualidad;
    }

    public String getRestricciones() {
        return restricciones;
    }

    public void setRestricciones(String restricciones) {
        this.restricciones = restricciones;
    }

    public String getRecomendaciones() {
        return recomendaciones;
    }

    public void setRecomendaciones(String recomendaciones) {
        this.recomendaciones = recomendaciones;
    }

}
