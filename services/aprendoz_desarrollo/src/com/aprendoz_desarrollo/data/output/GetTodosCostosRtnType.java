
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "getTodosCostos" on 06/13/2014 10:27:10
 * 
 */
public class GetTodosCostosRtnType {

    private Integer idcosto;
    private String codigo;
    private String nombre;
    private Double valor;
    private Boolean nuevo;
    private Boolean inscrito;
    private Integer idiac;
    private Integer idgrado;

    public GetTodosCostosRtnType() {
    }

    public GetTodosCostosRtnType(Integer idcosto, String codigo, String nombre, Double valor, Boolean nuevo, Boolean inscrito, Integer idiac, Integer idgrado) {
        this.idcosto = idcosto;
        this.codigo = codigo;
        this.nombre = nombre;
        this.valor = valor;
        this.nuevo = nuevo;
        this.inscrito = inscrito;
        this.idiac = idiac;
        this.idgrado = idgrado;
    }

    public Integer getIdcosto() {
        return idcosto;
    }

    public void setIdcosto(Integer idcosto) {
        this.idcosto = idcosto;
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

    public Boolean getInscrito() {
        return inscrito;
    }

    public void setInscrito(Boolean inscrito) {
        this.inscrito = inscrito;
    }

    public Integer getIdiac() {
        return idiac;
    }

    public void setIdiac(Integer idiac) {
        this.idiac = idiac;
    }

    public Integer getIdgrado() {
        return idgrado;
    }

    public void setIdgrado(Integer idgrado) {
        this.idgrado = idgrado;
    }

}
