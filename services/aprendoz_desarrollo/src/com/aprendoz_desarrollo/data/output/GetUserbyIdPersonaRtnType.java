
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getUserbyIdPersona" on 03/27/2015 16:46:25
 * 
 */
public class GetUserbyIdPersonaRtnType {

    private Integer idp;
    private String codigo;
    private String user;
    private String nombrecompleto;

    public GetUserbyIdPersonaRtnType() {
    }

    public GetUserbyIdPersonaRtnType(Integer idp, String codigo, String user, String nombrecompleto) {
        this.idp = idp;
        this.codigo = codigo;
        this.user = user;
        this.nombrecompleto = nombrecompleto;
    }

    public Integer getIdp() {
        return idp;
    }

    public void setIdp(Integer idp) {
        this.idp = idp;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getNombrecompleto() {
        return nombrecompleto;
    }

    public void setNombrecompleto(String nombrecompleto) {
        this.nombrecompleto = nombrecompleto;
    }

}
