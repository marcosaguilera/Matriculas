
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getGrupoFamiliarbyUser" on 04/23/2014 13:14:51
 * 
 */
public class GetGrupoFamiliarbyUserRtnType {

    private String user;
    private Integer pid;
    private String code;
    private String nombreCompleto;
    private String tipo;
    private Integer idgrupo;
    private String familia;
    private Integer idtipo;

    public GetGrupoFamiliarbyUserRtnType() {
    }

    public GetGrupoFamiliarbyUserRtnType(String user, Integer pid, String code, String nombreCompleto, String tipo, Integer idgrupo, String familia, Integer idtipo) {
        this.user = user;
        this.pid = pid;
        this.code = code;
        this.nombreCompleto = nombreCompleto;
        this.tipo = tipo;
        this.idgrupo = idgrupo;
        this.familia = familia;
        this.idtipo = idtipo;
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

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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

    public Integer getIdtipo() {
        return idtipo;
    }

    public void setIdtipo(Integer idtipo) {
        this.idtipo = idtipo;
    }

}
