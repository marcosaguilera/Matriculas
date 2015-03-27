
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "_hqlPromociones" on 03/27/2015 16:46:25
 * 
 */
public class _hqlPromocionesRtnType {

    private String codigo;
    private Boolean academico;
    private Boolean financiera;
    private Boolean cra;
    private Integer idsy;

    public _hqlPromocionesRtnType() {
    }

    public _hqlPromocionesRtnType(String codigo, Boolean academico, Boolean financiera, Boolean cra, Integer idsy) {
        this.codigo = codigo;
        this.academico = academico;
        this.financiera = financiera;
        this.cra = cra;
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

    public Boolean getCra() {
        return cra;
    }

    public void setCra(Boolean cra) {
        this.cra = cra;
    }

    public Integer getIdsy() {
        return idsy;
    }

    public void setIdsy(Integer idsy) {
        this.idsy = idsy;
    }

}
