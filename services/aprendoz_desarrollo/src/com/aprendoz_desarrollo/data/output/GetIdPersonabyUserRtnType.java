
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getIdPersonabyUser" on 03/27/2015 16:46:24
 * 
 */
public class GetIdPersonabyUserRtnType {

    private Integer idp;
    private String user;
    private Integer idgf;
    private String familia;

    public GetIdPersonabyUserRtnType() {
    }

    public GetIdPersonabyUserRtnType(Integer idp, String user, Integer idgf, String familia) {
        this.idp = idp;
        this.user = user;
        this.idgf = idgf;
        this.familia = familia;
    }

    public Integer getIdp() {
        return idp;
    }

    public void setIdp(Integer idp) {
        this.idp = idp;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Integer getIdgf() {
        return idgf;
    }

    public void setIdgf(Integer idgf) {
        this.idgf = idgf;
    }

    public String getFamilia() {
        return familia;
    }

    public void setFamilia(String familia) {
        this.familia = familia;
    }

}
