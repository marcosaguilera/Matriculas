
package com.aprendoz_desarrollo.data.output;

import java.util.Date;


/**
 * Generated for query "returnExistsValueGrupoFamiliar" on 06/13/2014 10:27:10
 * 
 */
public class ReturnExistsValueGrupoFamiliarRtnType {

    private Integer valorRetornado;
    private Date fecha;
    private Byte actualizado;
    private Integer idgrupo;

    public ReturnExistsValueGrupoFamiliarRtnType() {
    }

    public ReturnExistsValueGrupoFamiliarRtnType(Integer valorRetornado, Date fecha, Byte actualizado, Integer idgrupo) {
        this.valorRetornado = valorRetornado;
        this.fecha = fecha;
        this.actualizado = actualizado;
        this.idgrupo = idgrupo;
    }

    public Integer getValorRetornado() {
        return valorRetornado;
    }

    public void setValorRetornado(Integer valorRetornado) {
        this.valorRetornado = valorRetornado;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

    public Integer getIdgrupo() {
        return idgrupo;
    }

    public void setIdgrupo(Integer idgrupo) {
        this.idgrupo = idgrupo;
    }

}
