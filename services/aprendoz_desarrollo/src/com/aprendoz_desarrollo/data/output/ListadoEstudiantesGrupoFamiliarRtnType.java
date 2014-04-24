
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "listadoEstudiantesGrupoFamiliar" on 04/23/2014 13:14:51
 * 
 */
public class ListadoEstudiantesGrupoFamiliarRtnType {

    private String codigo;
    private Integer idpersona;
    private String completo;
    private String grupo;
    private Integer idgrupo;
    private String tipo;
    private Integer idtipo;

    public ListadoEstudiantesGrupoFamiliarRtnType() {
    }

    public ListadoEstudiantesGrupoFamiliarRtnType(String codigo, Integer idpersona, String completo, String grupo, Integer idgrupo, String tipo, Integer idtipo) {
        this.codigo = codigo;
        this.idpersona = idpersona;
        this.completo = completo;
        this.grupo = grupo;
        this.idgrupo = idgrupo;
        this.tipo = tipo;
        this.idtipo = idtipo;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Integer getIdpersona() {
        return idpersona;
    }

    public void setIdpersona(Integer idpersona) {
        this.idpersona = idpersona;
    }

    public String getCompleto() {
        return completo;
    }

    public void setCompleto(String completo) {
        this.completo = completo;
    }

    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

    public Integer getIdgrupo() {
        return idgrupo;
    }

    public void setIdgrupo(Integer idgrupo) {
        this.idgrupo = idgrupo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getIdtipo() {
        return idtipo;
    }

    public void setIdtipo(Integer idtipo) {
        this.idtipo = idtipo;
    }

}
