
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "_hqlPromociones" on 04/23/2014 13:14:52
 * 
 */
public class _hqlPromocionesRtnType {

    private String codigo;
    private Boolean academico;
    private Boolean financiera;
    private Integer idsy;

    public _hqlPromocionesRtnType() {
    }

    public _hqlPromocionesRtnType(String codigo, Boolean academico, Boolean financiera, Integer idsy) {
        this.codigo = codigo;
        this.academico = academico;
        this.financiera = financiera;
        this.idsy = idsy;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Boolean getAcademico() {
        return academico;
    }

    public void setAcademico(Boolean academico) {
        this.academico = academico;
    }

    public Boolean getFinanciera() {
        return financiera;
    }

    public void setFinanciera(Boolean financiera) {
        this.financiera = financiera;
    }

    public Integer getIdsy() {
        return idsy;
    }

    public void setIdsy(Integer idsy) {
        this.idsy = idsy;
    }

}
