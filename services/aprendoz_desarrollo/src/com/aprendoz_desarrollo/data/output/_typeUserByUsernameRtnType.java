
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "_typeUserByUsername" on 11/13/2015 09:18:45
 * 
 */
public class _typeUserByUsernameRtnType {

    private String username;
    private Integer idtipo;
    private String tipo;

    public _typeUserByUsernameRtnType() {
    }

    public _typeUserByUsernameRtnType(String username, Integer idtipo, String tipo) {
        this.username = username;
        this.idtipo = idtipo;
        this.tipo = tipo;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getIdtipo() {
        return idtipo;
    }

    public void setIdtipo(Integer idtipo) {
        this.idtipo = idtipo;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

}
