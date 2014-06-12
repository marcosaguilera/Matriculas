
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Sy
 *  06/09/2014 16:21:43
 * 
 */
public class Sy {

    private Integer idSy;
    private String schoolYear;
    private Date fechaDesde;
    private Date fechaHasta;
    private Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCosto>();
    private Set<com.aprendoz_desarrollo.data.Promocion> promocions = new HashSet<com.aprendoz_desarrollo.data.Promocion>();
    private Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos = new HashSet<com.aprendoz_desarrollo.data.InscCoordinadoresCurso>();
    private Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos = new HashSet<com.aprendoz_desarrollo.data.CoordinacionDeGrupo>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_desarrollo.data.InscAlumCurso>();
    private Set<com.aprendoz_desarrollo.data.BimestreSy> bimestreSies = new HashSet<com.aprendoz_desarrollo.data.BimestreSy>();
    private Set<com.aprendoz_desarrollo.data.Cronograma> cronogramas = new HashSet<com.aprendoz_desarrollo.data.Cronograma>();
    private Set<com.aprendoz_desarrollo.data.Semana> semanas = new HashSet<com.aprendoz_desarrollo.data.Semana>();
    private Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> inscComentariosAlumnoses = new HashSet<com.aprendoz_desarrollo.data.InscComentariosAlumnos>();
    private Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies = new HashSet<com.aprendoz_desarrollo.data.InscAlumCostoCopy>();
    private Set<com.aprendoz_desarrollo.data.Horario> horarios = new HashSet<com.aprendoz_desarrollo.data.Horario>();
    private Set<com.aprendoz_desarrollo.data.AsignaturaCopy> asignaturaCopies = new HashSet<com.aprendoz_desarrollo.data.AsignaturaCopy>();
    private Set<com.aprendoz_desarrollo.data.Periodo> periodos = new HashSet<com.aprendoz_desarrollo.data.Periodo>();
    private Set<com.aprendoz_desarrollo.data.CostosAnualesCopy> costosAnualesCopies = new HashSet<com.aprendoz_desarrollo.data.CostosAnualesCopy>();
    private Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas = new HashSet<com.aprendoz_desarrollo.data.Asignatura>();
    private Set<com.aprendoz_desarrollo.data.Educom> educoms = new HashSet<com.aprendoz_desarrollo.data.Educom>();
    private Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses = new HashSet<com.aprendoz_desarrollo.data.Coordinadores>();
    private Set<com.aprendoz_desarrollo.data.Costos> costoses = new HashSet<com.aprendoz_desarrollo.data.Costos>();
    private Set<com.aprendoz_desarrollo.data.Matricula> matriculas = new HashSet<com.aprendoz_desarrollo.data.Matricula>();
    private Set<com.aprendoz_desarrollo.data.SesionNivel> sesionNivels = new HashSet<com.aprendoz_desarrollo.data.SesionNivel>();
    private Set<com.aprendoz_desarrollo.data.SecretariaEquivalenciaNotas> secretariaEquivalenciaNotases = new HashSet<com.aprendoz_desarrollo.data.SecretariaEquivalenciaNotas>();
    private Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions = new HashSet<com.aprendoz_desarrollo.data.Coordinacion>();
    private Set<com.aprendoz_desarrollo.data.CostosAnuales> costosAnualeses = new HashSet<com.aprendoz_desarrollo.data.CostosAnuales>();
    private Set<com.aprendoz_desarrollo.data.PromocionCopy> promocionCopies = new HashSet<com.aprendoz_desarrollo.data.PromocionCopy>();

    public Sy() {
    }

    public Sy(Integer idSy, String schoolYear, Date fechaDesde, Date fechaHasta) {
        this.idSy = idSy;
        this.schoolYear = schoolYear;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
    }

    public Sy(Integer idSy, String schoolYear, Date fechaDesde, Date fechaHasta, Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos, Set<com.aprendoz_desarrollo.data.Promocion> promocions, Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos, Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos, Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos, Set<com.aprendoz_desarrollo.data.BimestreSy> bimestreSies, Set<com.aprendoz_desarrollo.data.Cronograma> cronogramas, Set<com.aprendoz_desarrollo.data.Semana> semanas, Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> inscComentariosAlumnoses, Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies, Set<com.aprendoz_desarrollo.data.Horario> horarios, Set<com.aprendoz_desarrollo.data.AsignaturaCopy> asignaturaCopies, Set<com.aprendoz_desarrollo.data.Periodo> periodos, Set<com.aprendoz_desarrollo.data.CostosAnualesCopy> costosAnualesCopies, Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas, Set<com.aprendoz_desarrollo.data.Educom> educoms, Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses, Set<com.aprendoz_desarrollo.data.Costos> costoses, Set<com.aprendoz_desarrollo.data.Matricula> matriculas, Set<com.aprendoz_desarrollo.data.SesionNivel> sesionNivels, Set<com.aprendoz_desarrollo.data.SecretariaEquivalenciaNotas> secretariaEquivalenciaNotases, Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions, Set<com.aprendoz_desarrollo.data.CostosAnuales> costosAnualeses, Set<com.aprendoz_desarrollo.data.PromocionCopy> promocionCopies) {
        this.idSy = idSy;
        this.schoolYear = schoolYear;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.inscAlumCostos = inscAlumCostos;
        this.promocions = promocions;
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
        this.coordinacionDeGrupos = coordinacionDeGrupos;
        this.inscAlumCursos = inscAlumCursos;
        this.bimestreSies = bimestreSies;
        this.cronogramas = cronogramas;
        this.semanas = semanas;
        this.inscComentariosAlumnoses = inscComentariosAlumnoses;
        this.inscAlumCostoCopies = inscAlumCostoCopies;
        this.horarios = horarios;
        this.asignaturaCopies = asignaturaCopies;
        this.periodos = periodos;
        this.costosAnualesCopies = costosAnualesCopies;
        this.asignaturas = asignaturas;
        this.educoms = educoms;
        this.coordinadoreses = coordinadoreses;
        this.costoses = costoses;
        this.matriculas = matriculas;
        this.sesionNivels = sesionNivels;
        this.secretariaEquivalenciaNotases = secretariaEquivalenciaNotases;
        this.coordinacions = coordinacions;
        this.costosAnualeses = costosAnualeses;
        this.promocionCopies = promocionCopies;
    }

    public Integer getIdSy() {
        return idSy;
    }

    public void setIdSy(Integer idSy) {
        this.idSy = idSy;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Date getFechaDesde() {
        return fechaDesde;
    }

    public void setFechaDesde(Date fechaDesde) {
        this.fechaDesde = fechaDesde;
    }

    public Date getFechaHasta() {
        return fechaHasta;
    }

    public void setFechaHasta(Date fechaHasta) {
        this.fechaHasta = fechaHasta;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCosto> getInscAlumCostos() {
        return inscAlumCostos;
    }

    public void setInscAlumCostos(Set<com.aprendoz_desarrollo.data.InscAlumCosto> inscAlumCostos) {
        this.inscAlumCostos = inscAlumCostos;
    }

    public Set<com.aprendoz_desarrollo.data.Promocion> getPromocions() {
        return promocions;
    }

    public void setPromocions(Set<com.aprendoz_desarrollo.data.Promocion> promocions) {
        this.promocions = promocions;
    }

    public Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> getInscCoordinadoresCursos() {
        return inscCoordinadoresCursos;
    }

    public void setInscCoordinadoresCursos(Set<com.aprendoz_desarrollo.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

    public Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> getCoordinacionDeGrupos() {
        return coordinacionDeGrupos;
    }

    public void setCoordinacionDeGrupos(Set<com.aprendoz_desarrollo.data.CoordinacionDeGrupo> coordinacionDeGrupos) {
        this.coordinacionDeGrupos = coordinacionDeGrupos;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_desarrollo.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_desarrollo.data.BimestreSy> getBimestreSies() {
        return bimestreSies;
    }

    public void setBimestreSies(Set<com.aprendoz_desarrollo.data.BimestreSy> bimestreSies) {
        this.bimestreSies = bimestreSies;
    }

    public Set<com.aprendoz_desarrollo.data.Cronograma> getCronogramas() {
        return cronogramas;
    }

    public void setCronogramas(Set<com.aprendoz_desarrollo.data.Cronograma> cronogramas) {
        this.cronogramas = cronogramas;
    }

    public Set<com.aprendoz_desarrollo.data.Semana> getSemanas() {
        return semanas;
    }

    public void setSemanas(Set<com.aprendoz_desarrollo.data.Semana> semanas) {
        this.semanas = semanas;
    }

    public Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> getInscComentariosAlumnoses() {
        return inscComentariosAlumnoses;
    }

    public void setInscComentariosAlumnoses(Set<com.aprendoz_desarrollo.data.InscComentariosAlumnos> inscComentariosAlumnoses) {
        this.inscComentariosAlumnoses = inscComentariosAlumnoses;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> getInscAlumCostoCopies() {
        return inscAlumCostoCopies;
    }

    public void setInscAlumCostoCopies(Set<com.aprendoz_desarrollo.data.InscAlumCostoCopy> inscAlumCostoCopies) {
        this.inscAlumCostoCopies = inscAlumCostoCopies;
    }

    public Set<com.aprendoz_desarrollo.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_desarrollo.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_desarrollo.data.AsignaturaCopy> getAsignaturaCopies() {
        return asignaturaCopies;
    }

    public void setAsignaturaCopies(Set<com.aprendoz_desarrollo.data.AsignaturaCopy> asignaturaCopies) {
        this.asignaturaCopies = asignaturaCopies;
    }

    public Set<com.aprendoz_desarrollo.data.Periodo> getPeriodos() {
        return periodos;
    }

    public void setPeriodos(Set<com.aprendoz_desarrollo.data.Periodo> periodos) {
        this.periodos = periodos;
    }

    public Set<com.aprendoz_desarrollo.data.CostosAnualesCopy> getCostosAnualesCopies() {
        return costosAnualesCopies;
    }

    public void setCostosAnualesCopies(Set<com.aprendoz_desarrollo.data.CostosAnualesCopy> costosAnualesCopies) {
        this.costosAnualesCopies = costosAnualesCopies;
    }

    public Set<com.aprendoz_desarrollo.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_desarrollo.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_desarrollo.data.Educom> getEducoms() {
        return educoms;
    }

    public void setEducoms(Set<com.aprendoz_desarrollo.data.Educom> educoms) {
        this.educoms = educoms;
    }

    public Set<com.aprendoz_desarrollo.data.Coordinadores> getCoordinadoreses() {
        return coordinadoreses;
    }

    public void setCoordinadoreses(Set<com.aprendoz_desarrollo.data.Coordinadores> coordinadoreses) {
        this.coordinadoreses = coordinadoreses;
    }

    public Set<com.aprendoz_desarrollo.data.Costos> getCostoses() {
        return costoses;
    }

    public void setCostoses(Set<com.aprendoz_desarrollo.data.Costos> costoses) {
        this.costoses = costoses;
    }

    public Set<com.aprendoz_desarrollo.data.Matricula> getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Set<com.aprendoz_desarrollo.data.Matricula> matriculas) {
        this.matriculas = matriculas;
    }

    public Set<com.aprendoz_desarrollo.data.SesionNivel> getSesionNivels() {
        return sesionNivels;
    }

    public void setSesionNivels(Set<com.aprendoz_desarrollo.data.SesionNivel> sesionNivels) {
        this.sesionNivels = sesionNivels;
    }

    public Set<com.aprendoz_desarrollo.data.SecretariaEquivalenciaNotas> getSecretariaEquivalenciaNotases() {
        return secretariaEquivalenciaNotases;
    }

    public void setSecretariaEquivalenciaNotases(Set<com.aprendoz_desarrollo.data.SecretariaEquivalenciaNotas> secretariaEquivalenciaNotases) {
        this.secretariaEquivalenciaNotases = secretariaEquivalenciaNotases;
    }

    public Set<com.aprendoz_desarrollo.data.Coordinacion> getCoordinacions() {
        return coordinacions;
    }

    public void setCoordinacions(Set<com.aprendoz_desarrollo.data.Coordinacion> coordinacions) {
        this.coordinacions = coordinacions;
    }

    public Set<com.aprendoz_desarrollo.data.CostosAnuales> getCostosAnualeses() {
        return costosAnualeses;
    }

    public void setCostosAnualeses(Set<com.aprendoz_desarrollo.data.CostosAnuales> costosAnualeses) {
        this.costosAnualeses = costosAnualeses;
    }

    public Set<com.aprendoz_desarrollo.data.PromocionCopy> getPromocionCopies() {
        return promocionCopies;
    }

    public void setPromocionCopies(Set<com.aprendoz_desarrollo.data.PromocionCopy> promocionCopies) {
        this.promocionCopies = promocionCopies;
    }

}
