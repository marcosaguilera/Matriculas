
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getGrupoFamiliarbyIdPersona" on 04/14/2014 10:06:10
 * 
 */
public class GetGrupoFamiliarbyIdPersonaRtnType {

    private String user;
    private Integer pid;
    private String nombreCompleto;
    private String tipo;
    private Integer idgrupo;
    private String familia;

    public GetGrupoFamiliarbyIdPersonaRtnType() {
    }

    public GetGrupoFamiliarbyIdPersonaRtnType(String user, Integer pid, String nombreCompleto, String tipo, Integer idgrupo, String familia) {
        this.user = user;
        this.pid = pid;
        this.nombreCompleto = nombreCompleto;
        this.tipo = tipo;
        this.idgrupo = idgrupo;
        this.familia = familia;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getIdgrupo() {
        return idgrupo;
    }

    public void setIdgrupo(Integer idgrupo) {
        this.idgrupo = idgrupo;
    }

    public String getFamilia() {
        return familia;
    }

    public void setFamilia(String familia) {
        this.familia = familia;
    }

}
