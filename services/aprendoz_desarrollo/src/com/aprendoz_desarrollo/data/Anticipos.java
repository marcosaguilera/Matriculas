
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Anticipos
 *  04/14/2014 10:05:53
 * 
 */
public class Anticipos {

    private Integer idAnticipos;
    private String codigo;

    public Anticipos() {
    }

    public Anticipos(Integer idAnticipos, String codigo) {
        this.idAnticipos = idAnticipos;
        this.codigo = codigo;
    }

    public Integer getIdAnticipos() {
        return idAnticipos;
    }

    public void setIdAnticipos(Integer idAnticipos) {
        this.idAnticipos = idAnticipos;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

}
