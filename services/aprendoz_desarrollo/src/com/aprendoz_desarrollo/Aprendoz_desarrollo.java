
package com.aprendoz_desarrollo;

import java.util.List;
import com.aprendoz_desarrollo.data.output.GetCoordinatorInfoRtnType;
import com.aprendoz_desarrollo.data.output.GetCostosRtnType;
import com.aprendoz_desarrollo.data.output.GetCostosTransporteRtnType;
import com.aprendoz_desarrollo.data.output.GetGradoUsuarioRtnType;
import com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyIdPersonaRtnType;
import com.aprendoz_desarrollo.data.output.GetGrupoFamiliarbyUserRtnType;
import com.aprendoz_desarrollo.data.output.GetIdPersonabyUserRtnType;
import com.aprendoz_desarrollo.data.output.GetIdbyUserRtnType;
import com.aprendoz_desarrollo.data.output.GetInscPersonaGrupoFamiliarRtnType;
import com.aprendoz_desarrollo.data.output.GetTodosCostosRtnType;
import com.aprendoz_desarrollo.data.output.GetUserbyIdPersonaRtnType;
import com.aprendoz_desarrollo.data.output.HaveNewIntegrantsRtnType;
import com.aprendoz_desarrollo.data.output.Hq_ls_gradoRtnType;
import com.aprendoz_desarrollo.data.output.HqlGetTotalPagarRtnType;
import com.aprendoz_desarrollo.data.output.HqlPromocionesRtnType;
import com.aprendoz_desarrollo.data.output.Hql_ls_paisRtnType;
import com.aprendoz_desarrollo.data.output.ListadoEstudiantesGrupoFamiliarRtnType;
import com.aprendoz_desarrollo.data.output.MailAcudienteRtnType;
import com.aprendoz_desarrollo.data.output.MailMadreRtnType;
import com.aprendoz_desarrollo.data.output.MailPadreRtnType;
import com.aprendoz_desarrollo.data.output.MaxSyRtnType;
import com.aprendoz_desarrollo.data.output.PersonaGetInfoRtnType;
import com.aprendoz_desarrollo.data.output.ReturExitsValueRtnType;
import com.aprendoz_desarrollo.data.output.ReturnExistsValueGrupoFamiliarRtnType;
import com.aprendoz_desarrollo.data.output.ShowInformationUserRtnType;
import com.aprendoz_desarrollo.data.output._countGrupoFamiliarUpdatedRtnType;
import com.aprendoz_desarrollo.data.output._existeFichaMedicaByUserRtnType;
import com.aprendoz_desarrollo.data.output._getAnuncioRtnType;
import com.aprendoz_desarrollo.data.output._hqlAlergiasByUserRtnType;
import com.aprendoz_desarrollo.data.output._hqlFichaMedicaByUserRtnType;
import com.aprendoz_desarrollo.data.output._hqlPromocionesRtnType;
import com.aprendoz_desarrollo.data.output._typeUserByUsernameRtnType;
import com.aprendoz_desarrollo.data.output._verificaResponsableRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_desarrollo"
 *  06/13/2014 10:28:16
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_desarrollo
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GetTodosCostosRtnType> getTodosCostos(Integer idp, String cod, Boolean nuevo, Integer sy, String cod2, Integer idgrado, String cod3) {
        return ((List<GetTodosCostosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTodosCostosQueryName), idp, cod, nuevo, sy, cod2, idgrado, cod3));
    }

    public List<_hqlFichaMedicaByUserRtnType> _hqlFichaMedicaByUser(Integer idp) {
        return ((List<_hqlFichaMedicaByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._hqlFichaMedicaByUserQueryName), idp));
    }

    public List<_verificaResponsableRtnType> _verificaResponsable(Integer idgf) {
        return ((List<_verificaResponsableRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._verificaResponsableQueryName), idgf));
    }

    public List<_typeUserByUsernameRtnType> _typeUserByUsername(String user) {
        return ((List<_typeUserByUsernameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._typeUserByUsernameQueryName), user));
    }

    public List<_getAnuncioRtnType> _getAnuncio() {
        return ((List<_getAnuncioRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._getAnuncioQueryName)));
    }

    public List<GetIdbyUserRtnType> getIdbyUser(String user) {
        return ((List<GetIdbyUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getIdbyUserQueryName), user));
    }

    public List<GetCostosTransporteRtnType> getCostosTransporte(Integer idg, String cod, Boolean nuevo) {
        return ((List<GetCostosTransporteRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getCostosTransporteQueryName), idg, cod, nuevo));
    }

    public List<ReturExitsValueRtnType> returExitsValue(String user) {
        return ((List<ReturExitsValueRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.returExitsValueQueryName), user));
    }

    public List<_countGrupoFamiliarUpdatedRtnType> _countGrupoFamiliarUpdated(Integer idgrupofamiliar) {
        return ((List<_countGrupoFamiliarUpdatedRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._countGrupoFamiliarUpdatedQueryName), idgrupofamiliar));
    }

    public com.aprendoz_desarrollo.data.output.GetAsignaturasMalasRtnType getAsignaturasMalas(Integer id) {
        List<com.aprendoz_desarrollo.data.output.GetAsignaturasMalasRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.GetAsignaturasMalasRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getAsignaturasMalasQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetIdPersonabyUserRtnType> getIdPersonabyUser(String username) {
        return ((List<GetIdPersonabyUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getIdPersonabyUserQueryName), username));
    }

    public Integer _detallesAlimentos(Integer idp, String alergias, String especiales) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._detallesAlimentosQueryName), idp, alergias, especiales));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<MaxSyRtnType> maxSy() {
        return ((List<MaxSyRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.maxSyQueryName)));
    }

    public List<Hql_ls_paisRtnType> hql_ls_pais() {
        return ((List<Hql_ls_paisRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hql_ls_paisQueryName)));
    }

    public List<Hq_ls_gradoRtnType> hq_ls_grado() {
        return ((List<Hq_ls_gradoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hq_ls_gradoQueryName)));
    }

    public com.aprendoz_desarrollo.data.GrupoFamiliar getNombreGrupoFamiliar(Integer id) {
        List<com.aprendoz_desarrollo.data.GrupoFamiliar> rtn = ((List<com.aprendoz_desarrollo.data.GrupoFamiliar> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getNombreGrupoFamiliarQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<ListadoEstudiantesGrupoFamiliarRtnType> listadoEstudiantesGrupoFamiliar(Integer idg) {
        return ((List<ListadoEstudiantesGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.listadoEstudiantesGrupoFamiliarQueryName), idg));
    }

    public List<GetCoordinatorInfoRtnType> getCoordinatorInfo(Integer id) {
        return ((List<GetCoordinatorInfoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getCoordinatorInfoQueryName), id));
    }

    public List<_hqlAlergiasByUserRtnType> _hqlAlergiasByUser(Integer idp) {
        return ((List<_hqlAlergiasByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._hqlAlergiasByUserQueryName), idp));
    }

    public List<GetGrupoFamiliarbyUserRtnType> getGrupoFamiliarbyUser(Integer idgrupo) {
        return ((List<GetGrupoFamiliarbyUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getGrupoFamiliarbyUserQueryName), idgrupo));
    }

    public List<GetCostosRtnType> getCostos(Integer idg, String cod) {
        return ((List<GetCostosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getCostosQueryName), idg, cod));
    }

    public List<MailAcudienteRtnType> mailAcudiente(Integer grupo) {
        return ((List<MailAcudienteRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.mailAcudienteQueryName), grupo));
    }

    public List<ReturnExistsValueGrupoFamiliarRtnType> returnExistsValueGrupoFamiliar(Integer idg) {
        return ((List<ReturnExistsValueGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.returnExistsValueGrupoFamiliarQueryName), idg));
    }

    public Integer updateServicios(Integer idiac, Boolean inscribir) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updateServiciosQueryName), idiac, inscribir));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_desarrollo.data.output.TrackingPersonasRtnType trackingPersonas(String usuario) {
        List<com.aprendoz_desarrollo.data.output.TrackingPersonasRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.TrackingPersonasRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.trackingPersonasQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HqlGetTotalPagarRtnType> hqlGetTotalPagar(Integer idp) {
        return ((List<HqlGetTotalPagarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hqlGetTotalPagarQueryName), idp));
    }

    public List<MailPadreRtnType> mailPadre(Integer grupo) {
        return ((List<MailPadreRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.mailPadreQueryName), grupo));
    }

    public List<GetGrupoFamiliarbyIdPersonaRtnType> getGrupoFamiliarbyIdPersona(Integer idp) {
        return ((List<GetGrupoFamiliarbyIdPersonaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getGrupoFamiliarbyIdPersonaQueryName), idp));
    }

    public List<MailMadreRtnType> mailMadre(Integer grupo) {
        return ((List<MailMadreRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.mailMadreQueryName), grupo));
    }

    public List<GetInscPersonaGrupoFamiliarRtnType> getInscPersonaGrupoFamiliar(Integer gf) {
        return ((List<GetInscPersonaGrupoFamiliarRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.GetInscPersonaGrupoFamiliarQueryName), gf));
    }

    public List<_hqlPromocionesRtnType> _hqlPromociones(String codigo) {
        return ((List<_hqlPromocionesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._hqlPromocionesQueryName), codigo));
    }

    public List<GetGradoUsuarioRtnType> getGradoUsuario(Integer idp) {
        return ((List<GetGradoUsuarioRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getGradoUsuarioQueryName), idp));
    }

    public com.aprendoz_desarrollo.data.TipoCosto getTipoCostoById(Integer id) {
        List<com.aprendoz_desarrollo.data.TipoCosto> rtn = ((List<com.aprendoz_desarrollo.data.TipoCosto> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTipoCostoByIdQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_desarrollo.data.output.GetTipoPersonaByUserRtnType getTipoPersonaByUser(String user) {
        List<com.aprendoz_desarrollo.data.output.GetTipoPersonaByUserRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.GetTipoPersonaByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getTipoPersonaByUserQueryName), user));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<PersonaGetInfoRtnType> personaGetInfo(String username) {
        return ((List<PersonaGetInfoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.personaGetInfoQueryName), username));
    }

    public Integer updateDatosPersona(Byte pbool, Integer idp) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updateDatosPersonaQueryName), pbool, idp));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HaveNewIntegrantsRtnType> haveNewIntegrants(Integer grupo) {
        return ((List<HaveNewIntegrantsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.haveNewIntegrantsQueryName), grupo));
    }

    public List<GetUserbyIdPersonaRtnType> getUserbyIdPersona(Integer id) {
        return ((List<GetUserbyIdPersonaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getUserbyIdPersonaQueryName), id));
    }

    public List<ShowInformationUserRtnType> showInformationUser(String user) {
        return ((List<ShowInformationUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.showInformationUserQueryName), user));
    }

    public List<_existeFichaMedicaByUserRtnType> _existeFichaMedicaByUser(Integer idp) {
        return ((List<_existeFichaMedicaByUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants._existeFichaMedicaByUserQueryName), idp));
    }

    public Integer updateInscPersonaGrupoFamiliar(Boolean responsable, Integer idipgf) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.updateInscPersonaGrupoFamiliarQueryName), responsable, idipgf));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HqlPromocionesRtnType> hqlPromociones(String codigo) {
        return ((List<HqlPromocionesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.hqlPromocionesQueryName), codigo));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
