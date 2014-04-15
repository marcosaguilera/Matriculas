Main.widgets = {
	getCodigoFamilia: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserId","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
	}],
	logout: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"salir"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	salir: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	personaLiveVariable3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView3","ignoreCase":true,"maxResults":10,"designMaxResults":10}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.idPersona","source":"tabla_familia_principal.selectedItem.id.idPersona"}, {}]
		}]
	}],
	nacionalidad: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Pais"}, {"onBeforeUpdate":"nacionalidadBeforeUpdate","onSuccess":"nacionalidadSuccess"}],
	estados: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.EstadoDepartamento"}, {"onBeforeUpdate":"estadosBeforeUpdate","onSuccess":"estadosSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.pais.idPais","source":"idpCodigo.dataValue"}, {}]
		}]
	}],
	listaEstados2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.EstadoDepartamento"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.pais.pais","source":"selectEditor1.dataValue"}, {}]
		}]
	}],
	listaSY: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Sy","orderBy":"desc: schoolYear"}, {}],
	actividadesLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Actividad","orderBy":"asc: fecha"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"aprendizajes.selectedItem.id.idSubtopico"}, {}]
		}]
	}],
	recursosLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Recurso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"aprendizajes.selectedItem.id.idSubtopico"}, {}]
		}]
	}],
	apr_esperados: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AprEsperados","orderBy":"asc: id.fechaEsperada"}, {"onSuccess":"apr_esperadosSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire2: ["wm.Wire", {"targetProperty":"filter.id.sy","source":"selectEditor2.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"inscalumasigDataGridX.selectedItem.id.personaIdPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"inscalumasigDataGridX.selectedItem.id.idAsignatura"}, {}]
		}]
	}],
	apr_logrados: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.AprLogrados","orderBy":"asc: id.fechaLogro"}, {"onSuccess":"apr_logradosSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire2: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"selectEditor2.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"personaDataGridX.selectedItem.id.idPersona"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.id.idAsignatura","source":"inscalumasigDataGridX.selectedItem.id.idAsignatura"}, {}]
		}]
	}],
	ultimaCalificacionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.CalificacionFinal","maxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"aprendizajes.selectedItem.idAprendizaje"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"personaDataGrid1.selectedItem.idPersona"}, {}]
		}]
	}],
	Vista_Alumnos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaPersonas"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idGrupoFamiliar","source":"a_getGroupCode.dataValue"}, {}]
		}]
	}],
	Vista_Alumn_Asig: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaInscAlumAsig","orderBy":"asc: id.asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"personaDataGridX.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"selectEditor2.dataValue"}, {}]
		}]
	}],
	Vista_Aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaAprendizajes"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idAsignatura","source":"inscalumasigDataGridX.selectedItem.id.idAsignatura"}, {}]
		}]
	}],
	Vista_Ultima_Calif: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaCalifFinal","maxResults":5}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"personaDataGridX.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.aprendizajeIdAprendizaje","source":"aprendizajes.selectedItem.id.idAprendizaje"}, {}]
		}]
	}],
	VariableInscAlumAp: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.InscAlumAprendizaje"}, {"onSuccess":"VariableInscAlumApSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"aprendizajes.selectedItem.id.idAprendizaje"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"personaDataGridX.selectedItem.id.idPersona"}, {}]
		}]
	}],
	Vista_Alumnos2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaPersonas","maxResults":3}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idGrupoFamiliar","source":"a_getGroupCode.dataValue"}, {}]
		}]
	}],
	listaGrado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Grado"}, {"onBeforeUpdate":"listaGradoBeforeUpdate","onSuccess":"listaGradoSuccess"}],
	listaCurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"gradoIngresoEditor1.dataValue"}, {}]
		}]
	}],
	list_nacionalidades: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Nacionalidades"}, {}],
	l_documentos_Vista_Personas_promocion: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.PadresVistaPersonasPromocion"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"ao_escolar_box.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.id.idGrupoFamiliar","source":"a_getGroupCode.dataValue"}, {}]
		}]
	}],
	a_sv_sendMail_request: ["wm.ServiceVariable", {"service":"EnviarMail","operation":"sendEmailNotification"}, {"onSuccess":"a_sv_sendMail_requestSuccess","onError":"a_sv_sendMail_requestError","onBeforeUpdate":"a_sv_sendMail_requestBeforeUpdate"}, {
		input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"correo","source":"transporte_email.dataValue"}, {}]
			}]
		}]
	}],
	transporte_lista_rutas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.VistaPadresRutasAlumnos"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idPersona","source":"transporte_alumnos.selectedItem.id.idPersona"}, {}]
		}]
	}],
	transporte_lista_personas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.VistaPadresTransportePersonas"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idGrupoFamiliar","source":"a_getGroupCode.dataValue"}, {}]
		}]
	}],
	a_insertData_logs: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.LogDocentes"}, {}],
	novedadesLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.novedadesLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"transporte_alumnos.selectedItem.id.idPersona"}, {}]
		}]
	}],
	rutasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.rutasLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar.idGrupoFamiliar","source":"transporte_alumnos.selectedItem.id.idGrupoFamiliar"}, {}]
		}]
	}],
	a_lista_grupoFamiliar: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.GrupoFamiliar"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.idGrupoFamiliar","source":"a_getGroupCode.dataValue"}, {}]
		}]
	}],
	a_lista_tipo_transporte: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.TipoTransporte"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.idtipoTransporte","source":"idTipoTransporte.dataValue"}, {}]
		}]
	}],
	inscalumtransporteLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumtransporteLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"transporte_alumnos.selectedItem.id.idPersona"}, {}]
		}]
	}],
	transporte_lista_rutas_dias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.Rutas"}, {}],
	l_familia_tipo_persona: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_desarrollo.data.TipoPersona"}, {}],
	a_getUserNameSv: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","startUpdate":true,"autoUpdate":true}, {"onSuccess":"a_getUserNameSvSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	a_getInforUser: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"personaGetInfo"}, {"onSuccess":"a_getInforUserSuccess"}, {
		input: ["wm.ServiceInput", {"type":"personaGetInfoInputs"}, {}]
	}],
	l_sv_solicitudes_informacionPadre: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"mailPadre"}, {}, {
		input: ["wm.ServiceInput", {"type":"mailPadreInputs"}, {}]
	}],
	l_sv_solicitudes_informacionMadre: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"mailMadre"}, {}, {
		input: ["wm.ServiceInput", {"type":"mailMadreInputs"}, {}]
	}],
	l_sv_solicitudes_informacionAcudiente: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"mailAcudiente"}, {}, {
		input: ["wm.ServiceInput", {"type":"mailAcudienteInputs"}, {}]
	}],
	a_getTipoPersona: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getTipoPersonaByUser"}, {"onSuccess":"a_getTipoPersonaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getTipoPersonaByUserInputs"}, {}]
	}],
	a_getCordinators_byId: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getCoordinatorInfo"}, {"onSuccess":"a_getCordinators_byIdSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getCoordinatorInfoInputs"}, {}]
	}],
	a_sv_sendMailPermanent: ["wm.ServiceVariable", {"service":"EnviarMailPermanente","operation":"sendEmailNotification"}, {"onSuccess":"a_sv_sendMailPermanentSuccess","onError":"a_sv_sendMailPermanentError","onBeforeUpdate":"a_sv_sendMailPermanentBeforeUpdate"}, {
		input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
	}],
	isAuthenticatedSV: ["wm.ServiceVariable", {"service":"securityService","operation":"isAuthenticated","startUpdate":true,"autoUpdate":true}, {"onSuccess":"isAuthenticatedSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"isAuthenticatedInputs"}, {}]
	}],
	getCount: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"returExitsValue"}, {"onSuccess":"getCountSuccess"}, {
		input: ["wm.ServiceInput", {"type":"returExitsValueInputs"}, {}]
	}],
	iraCountDown: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"SesionExpirada\""}, {}],
				wire1: ["wm.Wire", {"targetProperty":"hideControls","expression":"true"}, {}]
			}]
		}]
	}],
	isUpdatedGrupoFamiliar: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"returnExistsValueGrupoFamiliar"}, {"onSuccess":"isUpdatedGrupoFamiliarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"returnExistsValueGrupoFamiliarInputs"}, {}]
	}],
	estudiante_grupoFamiliar: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"listadoEstudiantesGrupoFamiliar"}, {}, {
		input: ["wm.ServiceInput", {"type":"listadoEstudiantesGrupoFamiliarInputs"}, {}]
	}],
	estudiante_gradoGrupoFamiliar: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getGradoUsuario"}, {"onSuccess":"estudiante_gradoGrupoFamiliarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getGradoUsuarioInputs"}, {}]
	}],
	a_listadoServicios: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getTodosCostos"}, {}, {
		input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
	}],
	a_listadoServiciosAlimentos: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getTodosCostos"}, {}, {
		input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
	}],
	a_actualizaServicio: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"updateServicios"}, {"onSuccess":"a_actualizaServicioSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
	}],
	a_actualizaServicioTrans: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"updateServicios"}, {"onSuccess":"a_actualizaServicioTransSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
	}],
	isUpdatedGrupoFamiliarBool: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"returnExistsValueGrupoFamiliar"}, {"onSuccess":"isUpdatedGrupoFamiliarBoolSuccess"}, {
		input: ["wm.ServiceInput", {"type":"returnExistsValueGrupoFamiliarInputs"}, {}]
	}],
	a_listadoServiciosSeguros: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getTodosCostos"}, {"onSuccess":"a_listadoServiciosSegurosSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
	}],
	a_actualizaServicioSeg: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"updateServicios"}, {"onSuccess":"a_actualizaServicioSegSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
	}],
	impresion_grupoFamiliar: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getInscPersonaGrupoFamiliar"}, {}, {
		input: ["wm.ServiceInput", {"type":"getInscPersonaGrupoFamiliarInputs"}, {}]
	}],
	updateResponsable: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"updateInscPersonaGrupoFamiliar"}, {"onSuccess":"updateResponsableSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateInscPersonaGrupoFamiliarInputs"}, {}]
	}],
	a_informacionUsuario: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"showInformationUser"}, {}, {
		input: ["wm.ServiceInput", {"type":"showInformationUserInputs"}, {}]
	}],
	_svHideLayer: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getIdbyUser"}, {"onSuccess":"_svHideLayerSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getIdbyUserInputs"}, {}]
	}],
	getNuevo: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"haveNewIntegrants"}, {"onSuccess":"getNuevoSuccess"}, {
		input: ["wm.ServiceInput", {"type":"haveNewIntegrantsInputs"}, {}]
	}],
	_fichaMedicasv: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_hqlFichaMedicaByUser"}, {"onSuccess":"_fichaMedicasvSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_hqlFichaMedicaByUserInputs"}, {}]
	}],
	getNombreAlumno: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getUserbyIdPersona"}, {"onSuccess":"getNombreAlumnoSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserbyIdPersonaInputs"}, {}]
	}],
	_totalPagarSV: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hqlGetTotalPagar"}, {"onSuccess":"_totalPagarSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"hqlGetTotalPagarInputs"}, {}]
	}],
	_verificarResponsablePago: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_verificaResponsable"}, {"onSuccess":"_verificarResponsablePagoSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_verificaResponsableInputs"}, {}]
	}],
	_verificarResponsablePagoShowPanel: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_verificaResponsable"}, {"onSuccess":"_verificarResponsablePagoShowPanelSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_verificaResponsableInputs"}, {}]
	}],
	_whoIsPayResponsible: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_verificaResponsable"}, {"onSuccess":"_whoIsPayResponsibleSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_verificaResponsableInputs"}, {}]
	}],
	_detallesAlimentos: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_detallesAlimentos"}, {"onSuccess":"_detallesAlimentosSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_detallesAlimentosInputs"}, {}]
	}],
	alimentoVar: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.FichaMedica"}, {}],
	_hqlAlergias: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_hqlAlergiasByUser"}, {"onSuccess":"_hqlAlergiasSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_hqlAlergiasByUserInputs"}, {}]
	}],
	_fichaMedicaVar: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.FichaMedica"}, {}],
	_verificaExistenciaFichaMedica: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_existeFichaMedicaByUser"}, {"onSuccess":"_verificaExistenciaFichaMedicaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_existeFichaMedicaByUserInputs"}, {}]
	}],
	a_anuncio: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_getAnuncio","startUpdate":true,"autoUpdate":true}, {"onSuccess":"a_anuncioSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_getAnuncioInputs"}, {}]
	}],
	hsl_promociones: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_hqlPromociones"}, {"onSuccess":"hsl_promocionesSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_hqlPromocionesInputs"}, {}]
	}],
	a_listadoServiciosAsopadres: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getTodosCostos"}, {}, {
		input: ["wm.ServiceInput", {"type":"getTodosCostosInputs"}, {}]
	}],
	a_actualizaServicioAsopadres: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"updateServicios"}, {"onSuccess":"a_actualizaServicioAsopadresSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateServiciosInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"908px","width":"740px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			FancyCentered1: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				templateMain: ["wm.Template", {"_classes":{"domNode":["template-main"]},"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","autoScroll":true}, {}, {
					content: ["wm.Panel", {"height":"800px","horizontalAlign":"left","width":"950px","verticalAlign":"top","freeze":true}, {}, {
						panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}],
						panel1: ["wm.Panel", {"height":"24px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
							templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}],
							templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}],
							templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}]
						}],
						panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","freeze":true,"layoutKind":"left-to-right"}, {}, {
							templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top","freeze":true,"showing":false}, {}],
							templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
								aprendoz_header: ["wm.Panel", {"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
									logo: ["wm.Picture", {"height":"100%","border":"0","width":"150px","source":"resources/images/logos/logo.jpg","aspect":"v","showing":false}, {}],
									anuncioLivePanel1: ["wm.LivePanel", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"verticalAlign":"top","horizontalAlign":"left","padding":"3","borderColor":"#B22222","border":"2","showing":false}, {}, {
										html2: ["wm.Html", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_TextAlign_Justify"]},"height":"100%","width":"100%","border":"0","html":"<b><font color=\"black\"><center><h4>¡BIENVENIDOS A UN NUEVO Y MAGNÍFICO AÑO!</h4></center></font></b><h5><font color=\"black\">Por favor mantenga actualizada la información de domicilio y contacto durante el nuevo año escolar ingresando a nuestra sección de 'ACTUALIZACIÓN DE DATOS'. <br><br>Gracias y éxitos para este año.</font></h5>"}, {}]
									}],
									spacer1: ["wm.Spacer", {"height":"11px","width":"100%"}, {}],
									label11: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"23px","width":"46px","border":"0","caption":"Salir","align":"center"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									picture3: ["wm.Picture", {"height":"33px","border":"0","width":"47px","source":"resources/images/Doorex.png"}, {"onclick":"logout"}],
									layers2: ["wm.Layers", {"width":"300px","height":"120%","showing":false}, {}, {
										layer2: ["wm.Layer", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_SilverBlueTheme_LightBlueOutsetPanel"]},"caption":"layer2","horizontalAlign":"right","verticalAlign":"top"}, {}, {
											panel4: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
												picture4: ["wm.Picture", {"height":"100%","border":"0","width":"28px","source":"resources/images/Calendar.ico","aspect":"v","showing":false}, {}],
												dateEditor1: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"displayValue":"14/04/2014","width":"91px","readonly":true,"showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._DateEditor", {}, {}]
												}],
												spacer2: ["wm.Spacer", {"height":"48px","width":"5px"}, {}],
												picture5: ["wm.Picture", {"height":"100%","border":"0","width":"28px","source":"resources/images/Wall%20Clock.ico","aspect":"v"}, {}],
												timeEditor1: ["wm.TimeEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"displayValue":"13:51 p.m.","width":"88px","readonly":true}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._TimeEditor", {}, {}]
												}]
											}],
											panel7: ["wm.Panel", {"height":"51px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
												layers1: ["wm.Layers", {}, {}, {
													layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"right","verticalAlign":"top"}, {}, {
														user: ["wm.TextEditor", {"_classes":{"domNode":["wm_TextAlign_Center","wm_FontSizePx_14px","wm_TextDecoration_Bold"],"captionNode":["wm_TextAlign_Center","wm_TextDecoration_Bold"]},"width":"100%","showing":false,"captionAlign":"center","display":"Number","readonly":true}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														label1: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Verdana","wm_TextDecoration_Bold"]},"height":"20px","width":"100%","border":"0","caption":"BIENVENIDOS A: APRENDOZ PADRES","align":"center","showing":false}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														picture1: ["wm.Picture", {"height":"28px","border":"0","width":"34px","source":"resources/images/awesome-icon.png","aspect":"h"}, {"onclick":"picture1Click"}],
														label2: ["wm.Label", {"height":"20px","width":"96%","border":"0","caption":"<u>Capturar Pantalla</u>","align":"right"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								Actualizacion: ["wm.TabLayers", {}, {}, {
									inicio: ["wm.Layer", {"caption":"INICIO","horizontalAlign":"left","verticalAlign":"top","padding":"100","lock":true,"showing":false}, {}, {
										a_getUserName: ["wm.TextEditor", {"width":"423px","caption":"nombre de usuario","showing":false,"disabled":true,"displayValue":"h"}, {"onchange":"a_getUserNameChange"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUserNameSv.dataValue"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										a_getGroupCode: ["wm.NumberEditor", {"caption":"codigo familia","disabled":true,"width":"423px","showing":false}, {"onchange":"a_getGroupCodeChange"}, {
											editor: ["wm._NumberEditor", {}, {}]
										}],
										panel25: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
											inicio_ir_a_facturacion: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px"]},"height":"100%","width":"100%","border":"0","caption":"CONSULTE AQUí, SU ESTADO DE CUENTA","align":"center","showing":false}, {"onclick":"inicio_ir_a_facturacionClick"}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}],
										spacer7: ["wm.Spacer", {"height":"3px","width":"96px"}, {}],
										panel20: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"168px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											inicio_head_logo: ["wm.Picture", {"height":"100%","border":"0","width":"436px","source":"resources/images/LOGO%20APRENDOZ.jpg","aspect":"v"}, {}]
										}],
										inicio_nombreCompleto_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"30px","width":"100%","border":"0","align":"center"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										inicio_grupo_familiar_laber: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"30px","width":"100%","border":"0","align":"center"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										password_changer: ["wm.Panel", {"height":"382px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											password_changer_main_layer: ["wm.Layers", {"width":"260px"}, {}, {
												details_container: ["wm.Layer", {"caption":"layer21","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													label7: ["wm.Label", {"height":"48px","width":"100%","border":"0"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													button5: ["wm.Button", {"height":"48px","width":"96px","caption":"Abrir ventana","showing":false}, {"onclick":"iraCountDown"}]
												}]
											}]
										}]
									}],
									Informacion_familiar: ["wm.Layer", {"caption":"INFO FAMILIAR","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
										user2: ["wm.TextEditor", {"caption":"user2","disabled":true,"displayValue":"h"}, {"onchange":"Vista_Alumnos2"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","source":"getCodigoFamilia.dataValue"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}]
									}],
									Informacion_rendimiento: ["wm.Layer", {"caption":"RENDIMIENTO","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {"onShow":"Vista_Alumnos"}, {
										aviso_rendimiento: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"55px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
											label16: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"41px","width":"100%","border":"0","caption":"En esta sección encontrará información sobre el rendimiento académico de cada miembro del grupo familiar. La información puede filtrarse para un año escolar y asignatura específicos.  ","align":"justify","singleLine":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}],
										aviso1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","showing":false}, {}, {
											label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"32px","width":"855px","border":"0","caption":"Apreciado Visitante: Realice con éxito la consulta de calificaciónes <b><u>siguiendo  paso a paso el proceso."}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}],
										panel_pasos1: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
											picture7: ["wm.Picture", {"height":"45px","border":"0","width":"45px","source":"resources/images/step1.jpg","aspect":"h"}, {}],
											label4: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"100%","width":"400px","border":"0","caption":"SELECCIONE UNA <u>PERSONA </u>"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											spacer3: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
											picture8: ["wm.Picture", {"height":"48px","border":"0","width":"45px","source":"resources/images/step2.jpg","aspect":"h"}, {}],
											label5: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"height":"100%","width":"462px","border":"0","caption":"SELECCIONE UNA <u>ASIGNATURA</u> (Opcional: Año escolar)"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}],
										personaLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","borderColor":"#000000","height":"542px"}, {}, {
											panel_personas_asignaturas: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												personaGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"horizontalAlign":"left","verticalAlign":"top","title":"INTEGRANTES DEL GRUPO FAMILIAR","captionClasses":"wm_BackgroundColor_LightBlue wm_FontColor_White wm_TextDecoration_Bold wm_FontFamily_Arial wm_FontSizePx_14px","margin":"1","border":"3,3,3,3","borderColor":"#ffffff","width":"450px"}, {}, {
													personaDataGridX: ["wm.DataGrid", {"border":"0"}, {"onCellClick":"personaDataGridXCellClick","onSelectionChanged":"personaDataGridXSelectionChanged","onSelected":"personaDataGridXSelected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"Vista_Alumnos"}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"●","field":"id.codigo","columnWidth":"62px","index":1,"dataExpression":"'<img src=\"http://aprendoz.rochester.edu.co/stds/'+${id.codigo}+\".Jpeg\"+'\" width=\"60\" height=\"70\"/><center>'"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"120%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"120%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												inscalumasigLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","borderColor":"#000000"}, {}, {
													inscalumasigGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"horizontalAlign":"left","verticalAlign":"top","title":"INFORMACION DE SEGUIMIENTO  A LA FECHA","captionClasses":"wm_BackgroundColor_LightBlue wm_FontFamily_Arial wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px","margin":"1","borderColor":"#ffffff"}, {}, {
														selectEditor2: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"],"captionNode":["wm_FontSizePx_12px"]},"width":"100%","caption":"Año escolar","height":"30px","disabled":true}, {"onchange":"selectEditor2Change"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"2\""}, {}]
															}],
															editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","displayExpression":"\"Periodo escolar: \"+${schoolYear}"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"listaSY"}, {}]
																}]
															}]
														}],
														defaultYear: ["wm.TextEditor", {"width":"220%","caption":"defaultYear","showing":false,"disabled":true}, {}, {
															editor: ["wm._TextEditor", {}, {}]
														}],
														inscalumasigDataGridX: ["wm.DataGrid", {"border":"0"}, {"onSelected":"inscalumasigDataGridXSelected"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"Vista_Alumn_Asig"}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"100%","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Calificación Numérica","field":"id.calificacion","columnWidth":"60px","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Calificaión acumulada","field":"id.califChar","columnWidth":"60px","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column4: ["wm.DataGridColumn", {"caption":"●","field":"id.schoolYear","columnWidth":"80px","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}],
													inscalumasigDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow"]},"horizontalAlign":"left","verticalAlign":"top","title":"Details","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved12px wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","showing":false}, {}, {
														inscalumasigLiveForm1: ["wm.LiveForm", {"height":"172px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onSuccess":"inscalumasigLiveVariable1"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"inscalumasigDataGrid1.selectedItem"}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","expression":undefined,"source":"asignaturaRelatedEditor1.dataOutput"}, {}],
																wire2: ["wm.Wire", {"targetProperty":"dataOutput.periodo","expression":undefined,"source":"periodoRelatedEditor1.dataOutput"}, {}],
																wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","expression":undefined,"source":"personaRelatedEditor1.dataOutput"}, {}]
															}],
															idInscAlumAsigEditor1: ["wm.Editor", {"caption":"IdInscAlumAsig","readonly":true,"formField":"idInscAlumAsig","width":"100%","height":"26px","display":"Number"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}],
															calificacionEditor1: ["wm.Editor", {"caption":"Calificacion","readonly":true,"formField":"calificacion","width":"100%","height":"26px","display":"Number"}, {}, {
																editor: ["wm._NumberEditor", {}, {}]
															}],
															asignaturaRelatedEditor1: ["wm.RelatedEditor", {"formField":"asignatura"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"inscalumasigDataGrid1.selectedItem.asignatura"}, {}],
																	wire: ["wm.Wire", {"targetProperty":"dataOutput","expression":undefined,"source":"asignaturaLookup1.selectedItem"}, {}]
																}],
																asignaturaLookup1: ["wm.Editor", {"caption":"Asignatura (lookup)","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup","displayValue":"CIENCIAS DE LA COMPUTACIÓN 3"}, {}, {
																	editor: ["wm._LookupEditor", {"required":true,"displayField":"asignatura"}, {}]
																}]
															}],
															periodoRelatedEditor1: ["wm.RelatedEditor", {"formField":"periodo"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"inscalumasigDataGrid1.selectedItem.periodo"}, {}],
																	wire: ["wm.Wire", {"targetProperty":"dataOutput","expression":undefined,"source":"periodoLookup1.selectedItem"}, {}]
																}],
																periodoLookup1: ["wm.Editor", {"caption":"Periodo (lookup)","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup","displayValue":"2010-2011"}, {}, {
																	editor: ["wm._LookupEditor", {}, {}]
																}]
															}],
															personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"inscalumasigDataGrid1.selectedItem.persona"}, {}],
																	wire: ["wm.Wire", {"targetProperty":"dataOutput","expression":undefined,"source":"personaLookup1.selectedItem"}, {}]
																}],
																personaLookup1: ["wm.Editor", {"caption":"Persona (lookup)","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup"}, {}, {
																	editor: ["wm._LookupEditor", {"required":true,"displayField":"nombreLdap"}, {}]
																}]
															}],
															editPanel1: ["wm.EditPanel", {"liveForm":"inscalumasigLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1"}, {}, {
																savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	saveButton1: ["wm.RoundedButton", {"caption":"Save","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formInvalid"}, {}]
																		}]
																	}],
																	cancelButton1: ["wm.RoundedButton", {"caption":"Cancel","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
																}],
																operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	newButton1: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
																	updateButton1: ["wm.RoundedButton", {"caption":"Update","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formUneditable"}, {}]
																		}]
																	}],
																	deleteButton1: ["wm.RoundedButton", {"caption":"Delete","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formUneditable"}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}],
										aviso2: ["wm.Panel", {"height":"47px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
											label9: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Black","wm_FontSizePx_12px"]},"height":"48px","width":"100%","border":"1","caption":"AVISO IMPORTANTE: APRECIADOS PADRES Y ESTUDIANTES, ACTUALMENTE TRABAJAMOS EN LA IMPLEMENTACIÓN DE CAMBIOS EN EL SISTEMA, <br>POR ESTA RAZON EL  <i>BOLETÍN DE CALIFICACIONES A LA FECHA,</i> NO ESTARÁ DISPONIBLE TEMPORALMENTE.  ","align":"center","singleLine":false,"borderColor":"#000000"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}],
										informe: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
											completeString: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","border":"0","caption":"Se generará el informe (PDF) para el alumno:"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											aux200: ["wm.TextEditor", {"width":"219px","showing":false,"disabled":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											aux201: ["wm.TextEditor", {"showing":false,"disabled":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											boton_generar_informe: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_16px","wm_Border_DropShadow"]},"height":"46px","width":"117px","caption":"Generar","border":"3","disabled":true,"borderColor":"#CD0000"}, {"onclick":"boton_generar_informeClick"}]
										}],
										panel21: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"48px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
											button7: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"46px","width":"215px","caption":"Seguimiento","border":"3","borderColor":"#CD0000","iconUrl":"resources/images/buttons/helm.png","iconMargin":"0 0px 0 0"}, {"onclick":"button7Click"}],
											button6: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"46px","width":"215px","caption":"Rendimiento Grafico","border":"3","borderColor":"#CD0000","iconUrl":"resources/images/buttons/chart.png","iconMargin":"0 0px 0 0"}, {"onclick":"button6Click"}]
										}],
										panel10: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved12px"]},"height":"49px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
											picture9: ["wm.Picture", {"height":"48px","border":"0","width":"52px","source":"resources/images/step3.jpg","aspect":"h"}, {}],
											label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"46px","width":"374px","border":"0","caption":"SELECCIONE UNA <u>APRENDIZAJE"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											spacer4: ["wm.Spacer", {"height":"50px","width":"38px"}, {}]
										}],
										panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
											layers5: ["wm.Layers", {}, {}, {
												layer7: ["wm.Layer", {"caption":"layer7","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													barra: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_SilverBlueTheme_ToolBar"]},"height":"22px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														max: ["wm.Picture", {"height":"18px","border":"0","width":"18px","source":"resources/images/buttons/maximize.gif","aspect":"v","hint":"Click aquí para maximizar la información de Aprendizajes"}, {"onclick":"maxClick"}],
														min: ["wm.Picture", {"height":"18px","border":"0","width":"18px","source":"resources/images/buttons/minimize.gif","aspect":"v","hint":"Click aquí para minimizar y ver las Calificaciones"}, {"onclick":"minClick"}]
													}],
													aprendizajes: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"aprendizajesSelected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"Vista_Aprendizajes"}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"id.aprendizaje","columnWidth":"120%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Learning","field":"id.learning","columnWidth":"120%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Fecha Esperada","field":"id.fechaEsperada","columnWidth":"100px","index":3,"display":"Date"}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"⁍","field":"id.numeroUnidad","columnWidth":"30px","index":4}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"Subtopico","field":"id.subtopico","columnWidth":"120%","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column7: ["wm.DataGridColumn", {"caption":"Unidad","field":"id.unidad","columnWidth":"120%","index":5}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"●","field":"id.idAprendizaje","columnWidth":"60px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}]
											}]
										}],
										DETALLES: ["wm.TabLayers", {"border":"2","borderColor":"#000000","showing":false}, {}, {
											layer1: ["wm.Layer", {"caption":"Calificaciones","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												panel14: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","showing":false}, {}, {
													label8: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"48px","width":"378px","border":"0","caption":"SELECCIONE LA <u>"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer5: ["wm.Spacer", {"height":"46px","width":"40px"}, {}]
												}],
												panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													layers3: ["wm.Layers", {}, {}, {
														layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															UltimaCalifdataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","height":"90px"}, {"onSelected":"UltimaCalifdataGrid1Selected"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"Vista_Ultima_Calif"}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"id.fechaLogro","index":1,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Calificacion","field":"id.calificacion","columnWidth":"120%","index":1,"dataExpression":"\"El estudiante obtiene la Calificación: \"+${id.calificacion}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															label13: ["wm.Label", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"36px","width":"100%","border":"0","caption":"HISTORIAL DE CALIFICACIONES OBTENIDAS"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															dataGrid1: ["wm.DataGrid", {"border":"0"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"VariableInscAlumAp"}, {}]
																}],
																fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"fechaLogro","index":1,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																calificacion1: ["wm.DataGridColumn", {"caption":"Calificacion","field":"calificacion","index":2}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"120%","index":6}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											layer18: ["wm.Layer", {"caption":"Actividades","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												dataGrid3: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"actividadesLiveVariable"}, {}]
													}],
													fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","index":2,"display":"Date"}, {}, {
														format: ["wm.DateFormatter", {}, {}]
													}],
													actividad1: ["wm.DataGridColumn", {"caption":"Actividad","field":"actividad","columnWidth":"120%","index":1}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													column1: ["wm.DataGridColumn", {"caption":"•","field":"idActividad","columnWidth":"78px"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}],
											layer19: ["wm.Layer", {"caption":"Recursos","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												dataGrid4: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"0"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"recursosLiveVariable"}, {}]
													}],
													idRecurso1: ["wm.DataGridColumn", {"caption":"•","field":"idRecurso","columnWidth":"81px","index":1}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													recurso1: ["wm.DataGridColumn", {"caption":"Recurso","field":"recurso","columnWidth":"80%","index":2}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													ubicacion1: ["wm.DataGridColumn", {"caption":"Ubicación [ Http:// ]","field":"ubicacion","columnWidth":"120%","index":3,"dataExpression":"'<a href=\"'+${ubicacion}+'\" target=\"_blank\">'+${ubicacion}+'</a>'"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}]
										}],
										panel_graficos: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_ToolBar"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"6","layoutKind":"left-to-right"}, {}, {
											panel22: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
												panel23: ["wm.Panel", {"height":"47px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
													button8: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"height":"42px","width":"137px","caption":"General","iconUrl":"resources/images/buttons/chart2.png","iconMargin":"0 0px 0 0"}, {"onclick":"button8Click"}]
												}],
												rendimiento_aprendizajes: ["wm.Html", {"height":"400px","width":"100%","border":"3","borderColor":"#CD0000"}, {}],
												panel24: ["wm.Panel", {"height":"406%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													Esperados: ["wm.DataGrid", {"border":"0"}, {"onAfterRender":"EsperadosAfterRender"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"apr_esperados"}, {}]
														}],
														Apredizajes_Esperados: ["wm.DataGridColumn", {"caption":"Apredizajes Esperados","field":"id.count___","columnWidth":"120%","index":1,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Persona","field":"id.personaIdPersona","columnWidth":"120%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														Fecha: ["wm.DataGridColumn", {"caption":"Fecha","field":"id.fechaEsperada","columnWidth":"120%","display":"Date"}, {}, {
															format: ["wm.DateFormatter", {"formatLength":"short","datePattern":"dd/MM/yyyy"}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"id.sy","field":"id.sy","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													Logrados: ["wm.DataGrid", {"border":"0"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"apr_logrados"}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Cont","field":"id.count___","index":1,"autoSize":true}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"id.fechaLogro","field":"id.fechaLogro","columnWidth":"115px","display":"Date"}, {}, {
															format: ["wm.DateFormatter", {"formatLength":"short","datePattern":"dd/MM/yyyy"}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"idPersona","field":"id.personaIdPersona","index":2,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"id.syIdSy","field":"id.syIdSy","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}]
											}]
										}]
									}],
									matricula: ["wm.Layer", {"caption":"PROCESO DE MATRICULAS","horizontalAlign":"left","verticalAlign":"top","padding":"5"}, {}, {
										panel_botones_pasos: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											actualizacion_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","caption":"1. ACTUALIZACIÓN DE DATOS","borderColor":"#1E0E67"}, {"onclick":"actualizacion_buttClick"}],
											enfermeria_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","caption":"2. FICHA DE SALUD","showing":false,"borderColor":"#1E0E67"}, {"onclick":"enfermeria_buttClick"}],
											servicios_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","caption":"3. INFORMACIÓN Y SELECCIÓN DE SERVICIOS","showing":false,"borderColor":"#1E0E67"}, {"onclick":"servicios_buttClick"}],
											responsable_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","caption":"4. SELECCIONAR EL RESPONSABLE DE PAGOS","showing":false,"borderColor":"#1E0E67"}, {}],
											documentos_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","caption":"5. IMPRESIÓN DE DOCUMENTOS","showing":false,"borderColor":"#1E0E67"}, {}],
											pago_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","caption":"6. SELECCIONAR MODALIDAD DE PAGO","showing":false,"borderColor":"#1E0E67"}, {}],
											preparacion_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","caption":"7. PREPARACIÓN DE DOCUMENTOS","showing":false,"borderColor":"#1E0E67"}, {}]
										}],
										top_banner: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"height":"132px","horizontalAlign":"left","width":"100%","verticalAlign":"top","border":"1","layoutKind":"left-to-right","lock":true,"borderColor":"#aaa","showing":false}, {}, {
											header_iframe: ["wm.IFrame", {"height":"140px","width":"100%","border":"0","source":"http://bit2media.com/servicios/bnr_salud/bnr_salud.html"}, {}]
										}],
										top_banner_servicios: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"height":"132px","horizontalAlign":"left","width":"100%","verticalAlign":"top","border":"1","layoutKind":"left-to-right","lock":true,"borderColor":"#aaa","showing":false}, {}, {
											header_iframe1: ["wm.IFrame", {"height":"140px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/bnr_servicios/bnr_servicios.html"}, {}]
										}],
										header_message: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"48px","width":"100%","border":"0","caption":"Por favor seleccione el estudiante, pase por cada una de las pestañas y agregue los servicios que va a contratar","align":"center","showing":false}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										panel_selector_principal: ["wm.Panel", {"height":"32px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
											matricula_select_estudiante: ["wm.SelectEditor", {"width":"400px","caption":"Seleccione el estudiante","captionSize":"72%","height":"28px"}, {"onchange":"matricula_select_estudianteChange"}, {
												editor: ["wm._SelectEditor", {"displayField":"completo","dataField":"idpersona","required":true,"displayExpression":"${codigo}+\" - \"+${completo}"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"estudiante_grupoFamiliar"}, {}]
													}]
												}]
											}]
										}],
										page_ActualizaDatos: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"ActualizaDatos"}, {}],
										ficha_medica: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","padding":"0, 0, 0, 250","lock":true,"autoScroll":true,"showing":false}, {}, {
											label19: ["wm.Label", {"height":"30px","width":"100%","border":"0","caption":"DATOS DEL ESTUDIANTE","align":"center"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											idFicha: ["wm.NumberEditor", {"caption":"id ficha tecnica","width":"100%","showing":false,"readonly":true}, {}, {
												editor: ["wm._NumberEditor", {}, {}]
											}],
											nombrecompleto: ["wm.TextEditor", {"width":"100%","caption":"Nombre y Apellidos","height":"32px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											panel41: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
												edad: ["wm.NumberEditor", {"caption":"Edad","width":"100%","display":"Text","height":"32px","captionSize":"75%","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												gradoIngreso: ["wm.TextEditor", {"width":"100%","caption":"Grado Ingreso","height":"32px","singleLine":false,"readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}]
											}],
											label20: ["wm.Label", {"height":"30px","width":"100%","border":"0","caption":"INFORMACIÓN MÉDICA","align":"center"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											panel42: ["wm.Panel", {"height":"30px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												rh: ["wm.TextEditor", {"width":"150%","caption":"Grupo sanguineo","height":"100%","captionSize":"80%","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												eps: ["wm.TextEditor", {"width":"100%","caption":"EPS","height":"100%","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												prepagada: ["wm.TextEditor", {"width":"150%","caption":"PREPAGADA","height":"100%","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}]
											}],
											panel43: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												telefono: ["wm.TextEditor", {"width":"50%","caption":"Télefono","height":"32px","captionSize":"75%","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												clinica_emergencia: ["wm.NumberEditor", {"caption":"Clinica de Emergencia","width":"100%","display":"Text","height":"32px","captionSize":"80%","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}]
											}],
											seguro_medico: ["wm.TextEditor", {"width":"100%","caption":"¿Tendrá el seguro de accidentes de Suramericana? ","showing":false,"height":"32px","captionSize":"80%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											medico_tratante: ["wm.TextEditor", {"width":"100%","caption":"Médico Tratante","height":"32px","captionSize":"80%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											panel16: ["wm.Panel", {"height":"54px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												alergias: ["wm.TextAreaEditor", {"height":"50px","width":"100%","caption":"Alergias a medicamentos o alimentos","captionAlign":"left","captionPosition":"top"}, {}, {
													editor: ["wm._TextAreaEditor", {}, {}]
												}],
												picture6: ["wm.Picture", {"height":"100%","border":"0","width":"50px","source":"http://www.seoclerks.com/files/user/images/ArrowDownOrange.gif"}, {}]
											}],
											enfermedades: ["wm.TextAreaEditor", {"height":"50px","width":"100%","caption":"Enfermedades Recientes","captionAlign":"left","captionPosition":"top"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											antecedentes: ["wm.TextAreaEditor", {"height":"50px","width":"100%","caption":"Antecedentes Quirúrgicos","captionAlign":"left","captionPosition":"top"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											medicamentos: ["wm.TextAreaEditor", {"height":"50px","width":"100%","caption":"Medicamentos que toma en la actualidad","captionAlign":"left","captionPosition":"top"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											medicamentos_no_permitidos: ["wm.TextAreaEditor", {"height":"50px","width":"100%","caption":"Medicamentos que no debe recibir","captionAlign":"left","captionPosition":"top"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											recomendaciones: ["wm.TextAreaEditor", {"height":"50px","width":"100%","caption":"Recomendaciones especiales","captionAlign":"left","captionPosition":"top"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											formularioFichaMedica: ["wm.LiveForm", {"height":"100px","verticalAlign":"top","horizontalAlign":"left","showing":false,"lock":true}, {"onSuccess":"formularioFichaMedicaSuccess"}],
											nav_panel_fichamedica: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"58px","horizontalAlign":"right","width":"100%","verticalAlign":"top","padding":"4","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
												iraFinalizar: ["wm.Button", {"height":"48px","width":"260px","caption":"Continuar al paso No. 5","borderColor":"#Aaa","iconUrl":"resources/images/buttons/bank0.png","iconMargin":"0 0px 0 0"}, {"onclick":"iraFinalizarClick"}]
											}],
											panel48: ["wm.Panel", {"height":"48px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												volver_ficha_medica: ["wm.Button", {"height":"100%","width":"96px","caption":"Atras","borderColor":"#1c74b3"}, {"onclick":"volver_ficha_medicaClick"}],
												guardar_ficha: ["wm.Button", {"height":"100%","width":"120px","caption":"Guardar","borderColor":"#1c74b3"}, {"onclick":"guardar_fichaClick"}],
												actualizar_ficha: ["wm.Button", {"height":"100%","width":"94px","caption":"Actualizar","showing":false,"borderColor":"#aaa"}, {"onclick":"actualizar_fichaClick"}]
											}]
										}],
										panel_botones: ["wm.Panel", {"height":"52px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
											home_butt: ["wm.Picture", {"height":"100%","border":"1","width":"60px","source":"resources/images/buttons/home.png","aspect":"h","showing":false,"margin":"4","borderColor":"#aaa"}, {"onclick":"home_buttClick"}],
											volver_servicios: ["wm.Button", {"height":"100%","width":"70px","caption":"Atras","borderColor":"#1c74b3"}, {"onclick":"volver_serviciosClick"}],
											alimento_butt: ["wm.Button", {"height":"100%","width":"115px","caption":"1. Alimentación","showing":false,"disabled":true,"borderColor":"#aaa"}, {"onclick":"alimento_buttClick"}],
											transporte_butt: ["wm.Button", {"height":"100%","width":"105px","caption":"2. Transporte","showing":false,"disabled":true,"borderColor":"#aaa"}, {"onclick":"transporte_buttClick"}],
											seguro_butt: ["wm.Button", {"height":"100%","width":"96px","caption":"3. Seguros","showing":false,"disabled":true,"borderColor":"#aaa"}, {"onclick":"seguro_buttClick"}],
											impresion_butt: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"100%","width":"180px","caption":"Finalizar y pagar","showing":false,"disabled":true,"borderColor":"#3079ED","iconUrl":"resources/images/buttons/print.png","iconWidth":"18px","iconHeight":"18px"}, {"onclick":"impresion_buttClick"}],
											asopadres_butt: ["wm.Button", {"height":"100%","width":"190px","caption":"4. Información de asopadres","showing":false,"disabled":true,"borderColor":"#aaa"}, {"onclick":"asopadres_buttClick"}]
										}],
										panel_servicios: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","border":"1","padding":"10","lock":true,"autoScroll":true,"borderColor":"#bbbbbb","showing":false}, {}, {
											alimentacion: ["wm.Panel", {"height":"730px","horizontalAlign":"left","width":"100%","verticalAlign":"top","lock":true}, {}, {
												iFrame2: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/alimentacion/alimentacion.html"}, {}],
												panel27: ["wm.Panel", {"height":"19px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
												panel30: ["wm.Panel", {"height":"110px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													alimentosDataGrid: ["wm.DataGrid", {"border":"0","width":"70%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"a_listadoServiciosAlimentos"}, {}]
														}],
														nombre1: ["wm.DataGridColumn", {"caption":"Nombre servicio","field":"nombre","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idcosto1: ["wm.DataGridColumn", {"caption":" ","field":"idcosto","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'","display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														valor1: ["wm.DataGridColumn", {"caption":"Valor (COP)","field":"valor","index":3,"dataExpression":"\"$ \"+${valor}","display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														inscrito1: ["wm.DataGridColumn", {"caption":"Inscrito","field":"inscrito","columnWidth":"47px","index":4,"dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"+","field":"idcosto","columnWidth":"45px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													controls_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"110px","verticalAlign":"top","lock":true,"showing":false}, {}, {
														agregar_alim: ["wm.Button", {"height":"32px","width":"102px","caption":"+ Agregar","margin":"0","borderColor":"#538312"}, {"onclick":"agregar_alimClick"}],
														spacer15: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
														quitar_alim: ["wm.Button", {"height":"32px","width":"102px","caption":"- Quitar","margin":"0","borderColor":"#980c10"}, {"onclick":"quitar_alimClick"}]
													}],
													spacer28: ["wm.Spacer", {"height":"48px","width":"115px"}, {}]
												}],
												panel46: ["wm.Panel", {"height":"33px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													picture12: ["wm.Picture", {"height":"18px","border":"0","width":"22px","source":"resources/images/buttons/nearView.png","showing":false}, {}],
													label22: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"26px","width":"70%","border":"0","caption":"Alergias señaladas en la ficha médica","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer25: ["wm.Spacer", {"height":"48px","width":"115px"}, {}]
												}],
												panel45: ["wm.Panel", {"height":"65px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													detalles_importantes: ["wm.TextEditor", {"width":"70%","height":"60px","singleLine":false}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													panel47: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"110px","verticalAlign":"top"}, {}, {
														guardar_restricciones_alimenticias: ["wm.Button", {"height":"48px","width":"100%","caption":"Guardar detalles","showing":false,"borderColor":"#Aaa"}, {"onclick":"guardar_restricciones_alimenticiasClick"}]
													}]
												}],
												detalleAlimento: ["wm.LiveForm", {"height":"18px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"detalleAlimentoSuccess"}],
												base_boton_continuar: ["wm.Panel", {"height":"50px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													continuar_servicios: ["wm.Button", {"height":"48px","width":"230px","caption":"Continuar con Transporte","borderColor":"#1c79b3"}, {"onclick":"continuar_serviciosClick"}]
												}],
												panel38: ["wm.Panel", {"height":"48px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}]
											}],
											transporte: ["wm.Panel", {"height":"640px","horizontalAlign":"left","width":"100%","verticalAlign":"top","lock":true,"showing":false}, {}, {
												iFrame1: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/transporte/transporte.html"}, {}],
												panel34: ["wm.Panel", {"height":"19px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
												panel33: ["wm.Panel", {"height":"110px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													transporteDataGrid: ["wm.DataGrid", {"border":"0","width":"70%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"a_listadoServicios"}, {}]
														}],
														nombre1: ["wm.DataGridColumn", {"caption":"Nombre servicio","field":"nombre","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idcosto1: ["wm.DataGridColumn", {"caption":"+","field":"idcosto","columnWidth":"45px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														valor1: ["wm.DataGridColumn", {"caption":"Valor (COP)","field":"valor","index":3,"dataExpression":"\"$ \"+${valor}","display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Inscrito","field":"inscrito","columnWidth":"47px","index":4,"dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":" ","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													layers8: ["wm.Layers", {"width":"110px"}, {}, {
														layer23: ["wm.Layer", {"caption":"layer23","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															agregar_trans: ["wm.Button", {"height":"32px","width":"102px","caption":"+ Agregar","margin":"0","borderColor":"#538312"}, {"onclick":"agregar_transClick"}],
															spacer18: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
															quitar_trans: ["wm.Button", {"height":"32px","width":"102px","caption":"- Quitar","margin":"0","borderColor":"#980c10"}, {"onclick":"quitar_transClick"}]
														}]
													}]
												}],
												spacer29: ["wm.Spacer", {"height":"153px","width":"95px","showing":false}, {}],
												nav_panel_transportes: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"58px","horizontalAlign":"right","width":"100%","verticalAlign":"top","padding":"4","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
													iraSeguro: ["wm.Button", {"height":"100%","width":"260px","caption":"Continuar al paso No. 3","borderColor":"#Aaa","iconUrl":"resources/images/buttons/daycare.png","iconMargin":"0 0px 0 0"}, {"onclick":"iraSeguroClick"}]
												}],
												panel8: ["wm.Panel", {"height":"46px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													volver_transportes: ["wm.Button", {"height":"100%","width":"96px","caption":"Atras","borderColor":"#1c79b3"}, {"onclick":"volver_transportesClick"}],
													continuar_seguros: ["wm.Button", {"height":"100%","width":"230px","caption":"Continuar con Seguros","borderColor":"#1c79b3"}, {"onclick":"continuar_segurosClick"}]
												}]
											}],
											seguro: ["wm.Panel", {"height":"650px","horizontalAlign":"left","width":"100%","verticalAlign":"top","lock":true,"showing":false}, {}, {
												iFrame4: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/seguros/seguros.html"}, {}],
												panel28: ["wm.Panel", {"height":"19px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
												panel31: ["wm.Panel", {"height":"110px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													seguroDataGrid: ["wm.DataGrid", {"border":"0","width":"70%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"a_listadoServiciosSeguros"}, {}]
														}],
														nombre1: ["wm.DataGridColumn", {"caption":"Nombre servicio","field":"nombre","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idcosto1: ["wm.DataGridColumn", {"caption":"+","field":"idcosto","columnWidth":"45px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														valor1: ["wm.DataGridColumn", {"caption":"Valor (COP)","field":"valor","index":4,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														inscrito1: ["wm.DataGridColumn", {"caption":"Inscrito","field":"inscrito","columnWidth":"47px","index":5,"dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":" ","field":"idcosto","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													layers10: ["wm.Layers", {"width":"110px"}, {}, {
														layer5: ["wm.Layer", {"caption":"layer5","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															agregar_seg: ["wm.Button", {"height":"32px","width":"102px","caption":"+ Agregar","margin":"0","borderColor":"#538312"}, {"onclick":"agregar_segClick"}],
															spacer20: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
															quitar_seg: ["wm.Button", {"height":"32px","width":"102px","caption":"- Quitar","margin":"0","borderColor":"#980c10"}, {"onclick":"quitar_segClick"}]
														}]
													}]
												}],
												panel12: ["wm.Panel", {"height":"48px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													atras_seguro: ["wm.Button", {"height":"100%","width":"96px","caption":"Atras","borderColor":"#1c79b3"}, {"onclick":"atras_seguroClick"}],
													continuar_seguro: ["wm.Button", {"height":"100%","width":"190px","caption":"Continuar con Asopadres","borderColor":"#1c79b3"}, {"onclick":"continuar_seguroClick"}]
												}]
											}],
											asopadres: ["wm.Panel", {"height":"610px","horizontalAlign":"left","width":"100%","verticalAlign":"top","lock":true,"showing":false}, {}, {
												iFrame3: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/asopadres/asopadres.html"}, {}],
												panel17: ["wm.Panel", {"height":"110px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													asopadresDatGrid: ["wm.DataGrid", {"border":"0","width":"70%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"a_listadoServiciosAsopadres"}, {}]
														}],
														nombre1: ["wm.DataGridColumn", {"caption":"Nombre servicio","field":"nombre","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idcosto1: ["wm.DataGridColumn", {"caption":" ","field":"idcosto","columnWidth":"20px","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'","display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														valor1: ["wm.DataGridColumn", {"caption":"valor","field":"valor","index":5,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														inscrito1: ["wm.DataGridColumn", {"caption":"Inscrito","field":"inscrito","columnWidth":"47px","index":6,"dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"+","field":"idcosto","columnWidth":"45px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													buttons_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"111px","verticalAlign":"top"}, {}, {
														agregar_aso: ["wm.Button", {"height":"32px","width":"102px","caption":"+ Agregar","margin":"0","borderColor":"#538312"}, {"onclick":"agregar_asoClick"}],
														spacer8: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
														quitar_aso: ["wm.Button", {"height":"32px","width":"102px","caption":"- Quitar","margin":"0","borderColor":"#980c10"}, {"onclick":"quitar_asoClick"}]
													}]
												}],
												panel13: ["wm.Panel", {"height":"48px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
													atras_asopadres: ["wm.Button", {"height":"100%","width":"96px","caption":"Atras","borderColor":"#1c79b3"}, {"onclick":"atras_asopadresClick"}],
													asopadres_finalizar: ["wm.Button", {"height":"100%","width":"110px","caption":"Continuar","borderColor":"#1c79b3"}, {"onclick":"asopadres_finalizarClick"}]
												}]
											}]
										}],
										reponsable_pagos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"20","lock":true,"showing":false}, {}, {
											reponsable_pago_main_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","padding":"10","lock":true}, {}, {
												panel35: ["wm.Panel", {"height":"94px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													picture2: ["wm.Picture", {"height":"18px","border":"0","width":"18px"}, {}],
													label14: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"581px","border":"0","caption":"Por favor seleccione la persona responsable de los pagos ante el colegio, quien deberá asistir el día de la matrícula, traer su documento de identidad original y una fotocopia de la misma, ampliada al 150% y diligenciar el formulario de solicitud de tarjeta de crédito Diners de Davivienda para efectuar los pagos de las mensualidades.","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}],
												spacer26: ["wm.Spacer", {"height":"15px","width":"96px"}, {}],
												panel49: ["wm.Panel", {"height":"55px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","showing":false}, {}, {
													spacer27: ["wm.Spacer", {"height":"48px","width":"25px"}, {}],
													picture13: ["wm.Picture", {"height":"18px","border":"0","width":"18px"}, {}],
													label23: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"45px","width":"83%","border":"0","caption":"¡Importante!<br/>Seleccione el <u>Responsable de pago</u> para habilitar los botones <b>PAGAR EN LINEA</b> y <b>PAGAR EN BANCO</b>","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}],
												panel32: ["wm.Panel", {"height":"300px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													layers11: ["wm.Layers", {"width":"620px","height":"300px"}, {}, {
														layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															responsableDataGrid: ["wm.DataGrid", {"border":"0"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"impresion_grupoFamiliar"}, {}]
																}],
																responsable1: ["wm.DataGridColumn", {"caption":"Responsable de pago","field":"responsable","columnWidth":"77px","index":2,"dataExpression":"if(${responsable}==true){\t'<center><img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /></center>' \t}  if(${responsable}==false){\t'<center><img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /></center>' }"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																apellido2: ["wm.DataGridColumn", {"caption":"Integrante grupo familiar","field":"apellido2","columnWidth":"100%","index":1,"dataExpression":"${nombre1}+\" \"+${nombre2}+\" \"+${apellido1}+\" \"+${apellido2}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																tipoPersona1: ["wm.DataGridColumn", {"caption":"Rol","field":"tipoPersona","columnWidth":"85px","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"+","field":"dni","columnWidth":"69px"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":" ","field":"grupoFamiliar","columnWidth":"100px","index":4}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}],
													spacer21: ["wm.Spacer", {"height":"48px","width":"15px"}, {}],
													layers12: ["wm.Layers", {"width":"120px","height":"300px"}, {}, {
														layer25: ["wm.Layer", {"caption":"layer25","horizontalAlign":"center","verticalAlign":"top"}, {}, {
															agregar_imp: ["wm.Button", {"height":"32px","width":"102px","caption":"+ Elegir","margin":"0","borderColor":"#538312"}, {"onclick":"agregar_impClick"}],
															spacer22: ["wm.Spacer", {"height":"3px","width":"96px"}, {}],
															quitar_impr: ["wm.Button", {"height":"32px","width":"102px","caption":"- Retirar","margin":"0","borderColor":"#980c10"}, {"onclick":"quitar_imprClick"}]
														}]
													}]
												}],
												panel15: ["wm.Panel", {"height":"50px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													volver_responsable: ["wm.Button", {"height":"48px","width":"96px","caption":"Atras","borderColor":"#1c74b3"}, {"onclick":"volver_responsableClick"}],
													continuar_responsable: ["wm.Button", {"height":"48px","width":"150px","caption":"Continuar","disabled":true,"borderColor":"#1c74b3"}, {"onclick":"continuar_responsableClick"}]
												}]
											}]
										}],
										impresion_documentos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","lock":true,"showing":false}, {}, {
											panel29: ["wm.Panel", {"height":"48px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												mensaje_documentos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"48px","width":"100%","border":"0","caption":"Por favor oprima clic sobre cada uno de los botones e imprima los documentos allí señalados.","align":"center"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}],
											panel_documentos: ["wm.Panel", {"height":"56px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
												contrato_butt: ["wm.Button", {"height":"48px","width":"130px","caption":"Contrato de Matrícula","borderColor":"#1c74bc"}, {"onclick":"contrato_buttClick"}],
												contrato_alim_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"48px","width":"130px","caption":"Contrato alimentos","borderColor":"#1c79b3"}, {"onclick":"contrato_alim_buttClick"}],
												contrato_trans_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"48px","width":"130px","caption":"Contrato transporte","borderColor":"#1c79b3"}, {"onclick":"contrato_trans_buttClick"}],
												recibo_matricula_butt: ["wm.Button", {"height":"48px","width":"125px","caption":"Recibo de matrícula","borderColor":"#1c74bc"}, {"onclick":"recibo_matricula_buttClick"}],
												bancos_butt: ["wm.Button", {"height":"48px","width":"130px","caption":"Recibo de pago en bancos","showing":false}, {"onclick":"bancos_buttClick"}]
											}],
											panel5: ["wm.Panel", {"height":"48px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												mensualidades_butt: ["wm.Button", {"height":"48px","width":"170px","caption":"Presupuesto de mensualidades","borderColor":"#1c74bc"}, {"onclick":"mensualidades_buttClick"}],
												pagare_butt: ["wm.Button", {"height":"48px","width":"110px","caption":"Pagaré","borderColor":"#1c74bc"}, {"onclick":"pagare_buttClick"}],
												contrato_seg_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"200px","caption":"Contrato seguro de vida","borderColor":"#1c79b3"}, {"onclick":"contrato_seg_buttClick"}]
											}],
											spacer6: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
											panel50: ["wm.Panel", {"height":"48px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												volver_impresion: ["wm.Button", {"height":"48px","width":"96px","caption":"Atras","borderColor":"#1c74bc"}, {"onclick":"volver_impresionClick"}],
												documentos_continuar: ["wm.Button", {"height":"48px","width":"150px","caption":"Continuar","borderColor":"#1c74bc"}, {"onclick":"documentos_continuarClick"}]
											}]
										}],
										pagos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"10","lock":true,"showing":false}, {}, {
											pago_head_message: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"48px","width":"100%","border":"0","caption":"Oprima clic en una de las dos opciones de pago para seleccionar la que más se acomode a sus necesidades.","align":"center"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											panel40: ["wm.Panel", {"height":"50px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												pagar_pse: ["wm.Button", {"height":"100%","width":"190px","caption":"PAGAR EN LINEA","disabled":true,"iconUrl":"resources/images/buttons/pse_conx.png","iconWidth":"25px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"pagar_pseClick"}],
												pagar_banco: ["wm.Button", {"height":"100%","width":"230px","caption":"PAGAR EN BANCO<br/>(comprobante de pago de matrícula)","disabled":true,"iconUrl":"resources/images/buttons/bank.png","iconWidth":"25px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"pagar_bancoClick"}]
											}],
											resument_de_pago: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved12px","wm_BackgroundColor_White","wm_Border_TopStyleCurved4px"]},"height":"344px","horizontalAlign":"center","width":"100%","verticalAlign":"top","border":"1","padding":"3","lock":true,"borderColor":"#bbb","showing":false}, {}, {
												panel44: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px"]},"height":"34px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","border":"1","layoutKind":"left-to-right","borderColor":"#bbb"}, {}, {
													picture11: ["wm.Picture", {"height":"18px","border":"0","width":"20px","source":"resources/images/buttons/check.png"}, {}],
													label21: ["wm.Label", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"30px","width":"60%","border":"0","caption":"A continuación verifique los detalles antes de realizar el Pago por PSE"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}],
												rol: ["wm.TextEditor", {"width":"350px","height":"32px","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												noDocumento: ["wm.TextEditor", {"width":"350px","caption":"No. Documento","height":"32px","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												estudiante: ["wm.TextEditor", {"width":"350px","caption":"Estudiante","height":"32px","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												code_estudiante: ["wm.TextEditor", {"width":"350px","caption":"Código","height":"32px","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												concepto: ["wm.TextEditor", {"width":"350px","caption":"Concepto","height":"32px","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												valor: ["wm.TextEditor", {"width":"350px","caption":"Valor (COP)","height":"32px","display":"Currency","readonly":true}, {}, {
													editor: ["wm._CurrencyEditor", {"currency":"COP"}, {}]
												}],
												pse_logo: ["wm.Picture", {"height":"30px","border":"0","width":"100px","source":"resources/images/buttons/PSE-logo.png","aspect":"h","showing":false}, {"onclick":"pse_logoClick"}],
												pagar_pse_butt: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved12px","wm_BackgroundColor_White"]},"height":"109px","width":"109px","caption":"","margin":"0","disabled":true,"borderColor":"#bbb","iconWidth":"200%","iconHeight":"50%","iconMargin":"0 0px 0 0"}, {"onclick":"pagar_pse_buttClick"}]
											}],
											spacer30: ["wm.Spacer", {"height":"29px","width":"96px"}, {}],
											panel36: ["wm.Panel", {"height":"62px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
												volver_pago: ["wm.Button", {"height":"48px","width":"96px","caption":"Atras","borderColor":"#1c74bc"}, {"onclick":"volver_pagoClick"}],
												continuar_final: ["wm.Button", {"height":"48px","width":"150px","caption":"Continuar","borderColor":"#1c74bc"}, {"onclick":"continuar_finalClick"}]
											}]
										}],
										preparacion: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"5","lock":true,"showing":false}, {}, {
											message_final: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved8px"]},"height":"55px","width":"100%","border":"0","caption":"Para finalizar el proceso de matrícula, por favor organizar los documentos relacionados a continuación y traerlos el día asignado en las instrucciones enviadas a su correo.","align":"center","singleLine":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											html_nuevo: ["wm.Html", {"height":"100%","width":"100%","border":"0","html":"<p><span style=\"font-size:14px\">Para su comodidad y nuestra organizaci&oacute;n, les solicitamos traer en el mismo orden los siguientes documentos:</span></p>  <ul> \t<li><span style=\"font-size:14px\">Paz y Salvo de Tesorer&iacute;a del Jard&iacute;n o Colegio anterior.</span></li> \t<li><span style=\"font-size:14px\">Fotocopia del carn&eacute; de la EPS a la que est&aacute; afiliado el ni&ntilde;o (a).</span></li> \t<li><span style=\"font-size:14px\">Examen de optometr&iacute;a y ort&oacute;ptica.</span></li> \t<li><span style=\"font-size:14px\">Examen de audiometr&iacute;a.Informe m&eacute;dico de salud general en el que, adem&aacute;s, manifiesten si el ni&ntilde;o(a) puede tomar clases de nataci&oacute;n, e indique el esquema de vacunaci&oacute;n al d&iacute;a.</span></li> \t<li><span style=\"font-size:14px\">Contrato de servicios educativos, de alimentos y de transportes firmados, en lo posible, por ambos padres y acudiente.</span></li> \t<li><span style=\"font-size:14px\">Recibo firmado de pago en bancos (factura de matr&iacute;cula) Presupuesto de mensualidades firmado por ambos padres y acudiente.</span></li> \t<li><span style=\"font-size:14px\">Pagar&eacute; y carta de instrucciones con los nombres, firmas y n&uacute;meros de documentos de identidad de ambos padres y, si es el caso, del acudiente responsable de los pagos.</span></li> \t<li><span style=\"font-size:14px\">Fotocopia ampliada al 150% de la c&eacute;dula de ciudadan&iacute;a de quienes firman los documentos relacionados en el punto anterior.</span></li> \t<li><span style=\"font-size:14px\">Comprobante del pago realizado a trav&eacute;s del bot&oacute;n PSE o consignaci&oacute;n realizada en la cuenta de ahorros del banco de Bogot&aacute; No. 085218527 a nombre de la Fundaci&oacute;n Educativa Rochester, por la suma de $869.000 valor en el que est&aacute; inclu&iacute;do $49.000 correspondiente al seguro de accidentes escolares (opcional).</span></li> </ul>","padding":"15"}, {}],
											html_antiguo: ["wm.Html", {"height":"100%","width":"100%","border":"0","html":"<ul> \t<li><span style=\"font-size:14px\">Fotocopia del carn&eacute; de la EPS a la que est&aacute; afiliado el ni&ntilde;o (a), en el caso de haberse cambiado de dicha entidad entre agosto de 2012 y junio de 2013</span></li> \t<li><span style=\"font-size:14px\">Fotocopia de la tarjeta de identidad o c&eacute;dula de ciudadan&iacute;a, en el caso de haber cumplido 7 &oacute; 18 a&ntilde;os entre agosto de 2013 y junio de 2013</span></li> \t<li><span style=\"font-size:14px\">Examen de optometr&iacute;a y ort&oacute;ptica.</span></li> \t<li><span style=\"font-size:14px\">Examen de audiometr&iacute;a.</span></li> \t<li><span style=\"font-size:14px\">Informe m&eacute;dico de salud general en el que, adem&aacute;s, manifiesten si el ni&ntilde;o(a) puede tomar clases de nataci&oacute;n, e indique el esquema de vacunaci&oacute;n al d&iacute;a (&uacute;nicamente para estudiantes que ingresan a quinto grado 5&ordm; el a&ntilde;o escolar 2012-2013)</span></li> </ul>  <p><span style=\"font-size:14px\"><strong>&nbsp;A<em>dem&aacute;s, los siguientes documentos firmados por ambos padres y,&nbsp; si es el caso, por el acudiente responsable de los pagos.</em></strong></span></p>  <ul> \t<li><span style=\"font-size:14px\">Contrato de servicios educativos, de alimentos y de transporte</span></li> \t<li><span style=\"font-size:14px\">Recibo firmado de pago en bancos (factura de matr&iacute;cula)</span></li> \t<li><span style=\"font-size:14px\">Presupuesto de mensualidades</span></li> \t<li><span style=\"font-size:14px\">Pagar&eacute; y carta de instrucciones diligenciados</span></li> \t<li><span style=\"font-size:14px\">Fotocopia ampliada al 150% de la c&eacute;dula de ciudadan&iacute;a de quienes firman los documentos relacionados en el punto anterior.</span></li> \t<li><span style=\"font-size:14px\">Comprobante del pago realizado a trav&eacute;s del bot&oacute;n PSE o consignaci&oacute;n realizada en la cuenta de ahorros del banco de Bogot&aacute; N&ordm; 085218527 a nombre de la Fundaci&oacute;n Educativa Rochester-registrando el c&oacute;digo del estudiante, por el valor se&ntilde;alado en el recibo de matr&iacute;cula impreso del sistema.</span></li> </ul>","showing":false}, {}],
											panel6: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved8px","wm_BackgroundColor_White"]},"height":"48px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												atras_preparacion: ["wm.Button", {"height":"100%","width":"96px","caption":"Atras","borderColor":"#1c74b3"}, {"onclick":"atras_preparacionClick"}],
												volver_butt: ["wm.Button", {"height":"100%","width":"200px","caption":"Matricular otro estudiante","showing":false,"borderColor":"#1c74b3"}, {"onclick":"volver_buttClick"}],
												terminar_butt: ["wm.Button", {"height":"100%","width":"200px","caption":"Terminar","borderColor":"#1c74b3"}, {"onclick":"logout"}]
											}]
										}]
									}]
								}]
							}],
							templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top","freeze":true,"showing":false}, {}]
						}],
						panel3: ["wm.Panel", {"height":"24px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
							templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}],
							templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}],
							templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}]
						}],
						panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px","wm_FontColor_Graphite"]},"height":"48px","width":"100%","border":"0","caption":"Aprendoz  Colegio Rochester<br>Todos los derechos reservados 2012 -2013","align":"right","padding":"10,20","margin":"0","singleLine":false}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}