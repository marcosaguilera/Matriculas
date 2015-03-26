
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.InscCursoAsigCopy
 *  06/13/2014 10:26:51
 * 
 */
public class InscCursoAsigCopy {

    private Long idInscCursoAsig;
    private Curso curso;
    private Asignatura asignatura;
    private Persona persona;
    private Periodo periodo;

    public InscCursoAsigCopy() {
    }

    public InscCursoAsigCopy(Long idInscCursoAsig) {
        this.idInscCursoAsig = idInscCursoAsig;
    }

    public InscCursoAsigCopy(Long idInscCursoAsig, Curso curso, Asignatura asignatura, Persona persona, Periodo periodo) {
        this.idInscCursoAsig = idInscCursoAsig;
        this.curso = curso;
        this.asignatura = asignatura;
        this.persona = persona;
        this.periodo = periodo;
    }

    public Long getIdInscCursoAsig() {
        return idInscCursoAsig;
    }

    public void setIdInscCursoAsig(Long idInscCursoAsig) {
        this.idInscCursoAsig = idInscCursoAsig;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Periodo getPeriodo() {
        return periodo;
    }

    public void setPeriodo(Periodo periodo) {
        this.periodo = periodo;
    }

}
