
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getCostosTransporte" on 04/23/2014 13:14:51
 * 
 */
public class GetCostosTransporteRtnType {

    private Integer id;
    private String codigo;
    private String nombre;
    private Double valor;
    private Boolean nuevo;

    public GetCostosTransporteRtnType() {
    }

    public GetCostosTransporteRtnType(Integer id, String codigo, String nombre, Double valor, Boolean nuevo) {
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.valor = valor;
        this.nuevo = nuevo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Boolean getNuevo() {
        return nuevo;
    }

    public void setNuevo(Boolean nuevo) {
        this.nuevo = nuevo;
    }

}
