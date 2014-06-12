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
	a_getUserNameSv: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {"onSuccess":"a_getUserNameSvSuccess"}, {
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
	isAuthenticatedSV: ["wm.ServiceVariable", {"service":"securityService","operation":"isAuthenticated","autoUpdate":true,"startUpdate":true}, {"onSuccess":"isAuthenticatedSVSuccess"}, {
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
	a_anuncio: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_getAnuncio","autoUpdate":true,"startUpdate":true}, {"onSuccess":"a_anuncioSuccess"}, {
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
					content: ["wm.Panel", {"height":"800px","width":"950px","horizontalAlign":"left","verticalAlign":"top","freeze":true}, {}, {
						panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}],
						panel1: ["wm.Panel", {"height":"24px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
							templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}],
							templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}],
							templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}]
						}],
						panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","freeze":true,"layoutKind":"left-to-right"}, {}, {
							templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top","freeze":true,"showing":false}, {}],
							templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								aprendoz_header: ["wm.Panel", {"height":"34px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									logo: ["wm.Picture", {"height":"100%","border":"0","width":"150px","source":"resources/images/logos/logo.jpg","aspect":"v","showing":false}, {}],
									spacer1: ["wm.Spacer", {"height":"11px","width":"100%"}, {}],
									label11: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"46px","border":"0","align":"center","caption":"Salir"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									picture3: ["wm.Picture", {"height":"33px","border":"0","width":"47px","source":"resources/images/Doorex.png"}, {"onclick":"logout"}]
								}],
								Actualizacion: ["wm.TabLayers", {}, {}, {
									inicio: ["wm.Layer", {"caption":"INICIO","horizontalAlign":"left","verticalAlign":"top","lock":true,"padding":"100","showing":false}, {}, {
										a_getUserName: ["wm.TextEditor", {"width":"423px","caption":"nombre de usuario","showing":false,"disabled":true}, {"onchange":"a_getUserNameChange"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUserNameSv.dataValue"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										a_getGroupCode: ["wm.NumberEditor", {"width":"423px","caption":"codigo familia","disabled":true,"showing":false}, {"onchange":"a_getGroupCodeChange"}, {
											editor: ["wm._NumberEditor", {}, {}]
										}],
										inicio_nombreCompleto_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"30px","width":"100%","border":"0","align":"center"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										inicio_grupo_familiar_laber: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"30px","width":"100%","border":"0","align":"center"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									matricula: ["wm.Layer", {"caption":"PROCESO DE MATRICULAS","horizontalAlign":"left","verticalAlign":"top","padding":"5"}, {}, {
										panel_botones_pasos: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
											actualizacion_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","borderColor":"#1E0E67","caption":"1. ACTUALIZACIÓN DE DATOS"}, {}],
											enfermeria_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","borderColor":"#1E0E67","caption":"2. FICHA DE SALUD","showing":false}, {}],
											servicios_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","borderColor":"#1E0E67","caption":"3. INFORMACIÓN Y SELECCIÓN DE SERVICIOS","showing":false}, {}],
											responsable_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","borderColor":"#1E0E67","caption":"4. SELECCIONAR EL RESPONSABLE DE PAGOS","showing":false}, {}],
											documentos_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","borderColor":"#1E0E67","caption":"5. IMPRESIÓN DE DOCUMENTOS","showing":false}, {}],
											pago_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","borderColor":"#1E0E67","caption":"6. SELECCIONAR MODALIDAD DE PAGO","showing":false}, {}],
											preparacion_butt: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","borderColor":"#1E0E67","caption":"7. PREPARACIÓN DE DOCUMENTOS","showing":false}, {}]
										}],
										top_banner: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"height":"132px","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"1","layoutKind":"left-to-right","lock":true,"borderColor":"#aaa","showing":false}, {}, {
											header_iframe: ["wm.IFrame", {"height":"140px","width":"100%","border":"0","source":"http://bit2media.com/servicios/bnr_salud/bnr_salud.html"}, {}]
										}],
										top_banner_servicios: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"height":"132px","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"1","layoutKind":"left-to-right","lock":true,"borderColor":"#aaa","showing":false}, {}, {
											header_iframe1: ["wm.IFrame", {"height":"140px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/bnr_servicios/bnr_servicios.html"}, {}]
										}],
										header_message: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"30px","width":"100%","border":"0","align":"center","caption":"Por favor seleccione el estudiante, pase por cada una de las pestañas y agregue los servicios que va a contratar","showing":false}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										panel_selector_principal: ["wm.Panel", {"height":"32px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
											matricula_select_estudiante: ["wm.SelectEditor", {"width":"400px","caption":"Seleccione el estudiante","captionSize":"72%","height":"28px"}, {"onchange":"matricula_select_estudianteChange"}, {
												editor: ["wm._SelectEditor", {"displayField":"completo","dataField":"idpersona","required":true,"displayExpression":"${codigo}+\" - \"+${completo}"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"estudiante_grupoFamiliar","expression":undefined}, {}]
													}]
												}]
											}]
										}],
										page_ActualizaDatos: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"ActualizaDatos"}, {}],
										ficha_medica: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"center","verticalAlign":"top","padding":"0, 0, 0, 250","lock":true,"autoScroll":true,"showing":false}, {}, {
											label19: ["wm.Label", {"height":"30px","width":"100%","border":"0","align":"center","caption":"DATOS DEL ESTUDIANTE"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											idFicha: ["wm.NumberEditor", {"width":"100%","caption":"id ficha tecnica","readonly":true,"showing":false}, {}, {
												editor: ["wm._NumberEditor", {}, {}]
											}],
											nombrecompleto: ["wm.TextEditor", {"width":"100%","caption":"Nombre y Apellidos","height":"26px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											panel41: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
												edad: ["wm.NumberEditor", {"display":"Text","height":"26px","width":"100%","caption":"Edad","readonly":true,"captionSize":"80%"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												gradoIngreso: ["wm.TextEditor", {"width":"100%","caption":"Grado Ingreso","height":"26px","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}]
											}],
											label20: ["wm.Label", {"height":"30px","width":"100%","border":"0","align":"center","caption":"INFORMACIÓN MÉDICA"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											panel42: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
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
											panel43: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												telefono: ["wm.TextEditor", {"width":"50%","caption":"Télefono","height":"100%","captionSize":"75%","readonly":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												clinica_emergencia: ["wm.NumberEditor", {"display":"Text","height":"100%","width":"100%","caption":"Clinica de Emergencia","readonly":true,"captionSize":"80%"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}]
											}],
											seguro_medico: ["wm.TextEditor", {"width":"100%","caption":"¿Tendrá el seguro de accidentes de Suramericana? ","showing":false,"height":"32px","captionSize":"80%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											medico_tratante: ["wm.TextEditor", {"width":"100%","caption":"Médico Tratante","height":"30px"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											panel16: ["wm.Panel", {"height":"33px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												alergias: ["wm.TextAreaEditor", {"height":"100%","width":"100%","caption":"Alergias a medicamentos o alimentos"}, {}, {
													editor: ["wm._TextAreaEditor", {}, {}]
												}],
												picture6: ["wm.Picture", {"height":"100%","border":"0","width":"50px","source":"http://www.seoclerks.com/files/user/images/ArrowDownOrange.gif","showing":false}, {}]
											}],
											enfermedades: ["wm.TextAreaEditor", {"height":"32px","width":"100%","caption":"Enfermedades Recientes"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											antecedentes: ["wm.TextAreaEditor", {"height":"32px","width":"100%","caption":"Antecedentes Quirúrgicos"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											medicamentos: ["wm.TextAreaEditor", {"height":"32px","width":"100%","caption":"Medicamentos que toma en la actualidad"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											medicamentos_no_permitidos: ["wm.TextAreaEditor", {"height":"32px","width":"100%","caption":"Medicamentos que no debe recibir"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											recomendaciones: ["wm.TextAreaEditor", {"height":"32px","width":"100%","caption":"Recomendaciones especiales"}, {}, {
												editor: ["wm._TextAreaEditor", {}, {}]
											}],
											formularioFichaMedica: ["wm.LiveForm", {"height":"100px","verticalAlign":"top","horizontalAlign":"left","lock":true,"showing":false}, {"onSuccess":"formularioFichaMedicaSuccess"}],
											panel48: ["wm.Panel", {"height":"38px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												volver_ficha_medica: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#1c74b3","caption":"Atras","showing":false}, {"onclick":"volver_ficha_medicaClick"}],
												guardar_ficha: ["wm.Button", {"height":"100%","width":"120px","borderColor":"#1c74b3","caption":"Guardar"}, {"onclick":"guardar_fichaClick"}],
												actualizar_ficha: ["wm.Button", {"height":"100%","width":"94px","borderColor":"#aaa","caption":"Actualizar","showing":false}, {"onclick":"actualizar_fichaClick"}]
											}]
										}],
										panel_botones: ["wm.Panel", {"height":"52px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
											home_butt: ["wm.Picture", {"height":"100%","border":"1","width":"60px","source":"resources/images/buttons/home.png","aspect":"h","margin":"4","borderColor":"#aaa","showing":false}, {"onclick":"home_buttClick"}],
											volver_servicios: ["wm.Button", {"height":"100%","width":"70px","borderColor":"#1c74b3","caption":"Atras"}, {"onclick":"volver_serviciosClick"}],
											alimento_butt: ["wm.Button", {"height":"100%","width":"115px","borderColor":"#aaa","caption":"1. Alimentación","disabled":true,"showing":false}, {"onclick":"alimento_buttClick"}],
											transporte_butt: ["wm.Button", {"height":"100%","width":"105px","borderColor":"#aaa","caption":"2. Transporte","disabled":true,"showing":false}, {"onclick":"transporte_buttClick"}],
											seguro_butt: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#aaa","caption":"3. Seguros","disabled":true,"showing":false}, {"onclick":"seguro_buttClick"}],
											impresion_butt: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"100%","width":"180px","borderColor":"#3079ED","iconUrl":"resources/images/buttons/print.png","caption":"Finalizar y pagar","iconWidth":"18px","disabled":true,"iconHeight":"18px","showing":false}, {"onclick":"impresion_buttClick"}],
											asopadres_butt: ["wm.Button", {"height":"100%","width":"190px","borderColor":"#aaa","caption":"4. Información de asopadres","disabled":true,"showing":false}, {"onclick":"asopadres_buttClick"}]
										}],
										panel_servicios: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"1","padding":"10","lock":true,"autoScroll":true,"borderColor":"#bbbbbb","showing":false}, {}, {
											alimentacion: ["wm.Panel", {"height":"730px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												iFrame2: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/alimentacion/alimentacion.html"}, {}],
												panel27: ["wm.Panel", {"height":"19px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
												panel30: ["wm.Panel", {"height":"110px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													spacer2: ["wm.Spacer", {"height":"44px","width":"61px"}, {}],
													alimentosDataGrid: ["wm.DataGrid", {"border":"0","width":"80%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_listadoServiciosAlimentos","expression":undefined}, {}]
														}],
														nombre1: ["wm.DataGridColumn", {"caption":"Nombre servicio","field":"nombre","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idcosto1: ["wm.DataGridColumn", {"caption":" ","field":"idcosto","columnWidth":"20px","display":"Number","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														valor1: ["wm.DataGridColumn", {"caption":"Valor (COP)","field":"valor","index":3,"display":"Number","dataExpression":"\"$ \"+${valor}"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														inscrito1: ["wm.DataGridColumn", {"caption":"Inscrito","field":"inscrito","columnWidth":"47px","index":4,"dataExpression":"if(${inscrito}==true){\t'<img src=\"resources/images/imagelists/ok.gif\" height=\"16\" width=\"16\" /><center>' \t}  if(${inscrito}==false){\t'<img src=\"resources/images/imagelists/bad.png\" height=\"16\" width=\"16\" /><center>' }"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"+","field":"idcosto","columnWidth":"45px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													controls_panel: ["wm.Panel", {"height":"100%","width":"110px","horizontalAlign":"left","verticalAlign":"top","lock":true}, {}, {
														agregar_alim: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#538312","margin":"0","caption":"+ Agregar"}, {"onclick":"agregar_alimClick"}],
														spacer15: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
														quitar_alim: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#980c10","margin":"0","caption":"- Quitar"}, {"onclick":"quitar_alimClick"}]
													}],
													spacer28: ["wm.Spacer", {"height":"48px","width":"115px"}, {}]
												}],
												panel46: ["wm.Panel", {"height":"33px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													picture12: ["wm.Picture", {"height":"18px","border":"0","width":"22px","source":"resources/images/buttons/nearView.png","showing":false}, {}],
													label22: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"26px","width":"70%","border":"0","caption":"Alergias señaladas en la ficha médica","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer25: ["wm.Spacer", {"height":"48px","width":"115px"}, {}]
												}],
												panel45: ["wm.Panel", {"height":"65px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													detalles_importantes: ["wm.TextEditor", {"width":"70%","height":"60px","singleLine":false}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													panel47: ["wm.Panel", {"height":"100%","width":"110px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														guardar_restricciones_alimenticias: ["wm.Button", {"height":"48px","width":"100%","borderColor":"#Aaa","caption":"Guardar detalles","showing":false}, {"onclick":"guardar_restricciones_alimenticiasClick"}]
													}]
												}],
												detalleAlimento: ["wm.LiveForm", {"height":"18px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"detalleAlimentoSuccess"}],
												base_boton_continuar: ["wm.Panel", {"height":"50px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													continuar_servicios: ["wm.Button", {"height":"48px","width":"230px","borderColor":"#1c79b3","caption":"Continuar con Transporte"}, {"onclick":"continuar_serviciosClick"}]
												}],
												panel38: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}]
											}],
											transporte: ["wm.Panel", {"height":"640px","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
												iFrame1: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/transporte/transporte.html"}, {}],
												panel34: ["wm.Panel", {"height":"19px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
												panel33: ["wm.Panel", {"height":"110px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													transporteDataGrid: ["wm.DataGrid", {"border":"0","width":"70%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_listadoServicios","expression":undefined}, {}]
														}],
														nombre1: ["wm.DataGridColumn", {"caption":"Nombre servicio","field":"nombre","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idcosto1: ["wm.DataGridColumn", {"caption":"+","field":"idcosto","columnWidth":"45px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														valor1: ["wm.DataGridColumn", {"caption":"Valor (COP)","field":"valor","index":3,"display":"Number","dataExpression":"\"$ \"+${valor}"}, {}, {
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
															agregar_trans: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#538312","margin":"0","caption":"+ Agregar"}, {"onclick":"agregar_transClick"}],
															spacer18: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
															quitar_trans: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#980c10","margin":"0","caption":"- Quitar"}, {"onclick":"quitar_transClick"}]
														}]
													}]
												}],
												spacer29: ["wm.Spacer", {"height":"153px","width":"95px","showing":false}, {}],
												nav_panel_transportes: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"58px","width":"100%","horizontalAlign":"right","verticalAlign":"top","padding":"4","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
													iraSeguro: ["wm.Button", {"height":"100%","width":"260px","borderColor":"#Aaa","iconUrl":"resources/images/buttons/daycare.png","iconMargin":"0 0px 0 0","caption":"Continuar al paso No. 3"}, {"onclick":"iraSeguroClick"}]
												}],
												panel8: ["wm.Panel", {"height":"46px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													volver_transportes: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#1c79b3","caption":"Atras"}, {"onclick":"volver_transportesClick"}],
													continuar_seguros: ["wm.Button", {"height":"100%","width":"230px","borderColor":"#1c79b3","caption":"Continuar con Seguros"}, {"onclick":"continuar_segurosClick"}]
												}]
											}],
											seguro: ["wm.Panel", {"height":"650px","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
												iFrame4: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/seguros/seguros_2014.html"}, {}],
												panel28: ["wm.Panel", {"height":"19px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
												panel31: ["wm.Panel", {"height":"110px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													seguroDataGrid: ["wm.DataGrid", {"border":"0","width":"70%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_listadoServiciosSeguros","expression":undefined}, {}]
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
															agregar_seg: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#538312","margin":"0","caption":"+ Agregar"}, {"onclick":"agregar_segClick"}],
															spacer20: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
															quitar_seg: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#980c10","margin":"0","caption":"- Quitar"}, {"onclick":"quitar_segClick"}]
														}]
													}]
												}],
												panel12: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													atras_seguro: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#1c79b3","caption":"Atras"}, {"onclick":"atras_seguroClick"}],
													continuar_seguro: ["wm.Button", {"height":"100%","width":"190px","borderColor":"#1c79b3","caption":"Continuar con Asopadres"}, {"onclick":"continuar_seguroClick"}]
												}]
											}],
											asopadres: ["wm.Panel", {"height":"610px","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
												iFrame3: ["wm.IFrame", {"height":"450px","width":"100%","border":"0","source":"http://aprendoz.rochester.edu.co/recursos/asopadres/asopadres_2014.html"}, {}],
												panel17: ["wm.Panel", {"height":"110px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													asopadresDatGrid: ["wm.DataGrid", {"border":"0","width":"70%"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_listadoServiciosAsopadres","expression":undefined}, {}]
														}],
														nombre1: ["wm.DataGridColumn", {"caption":"Nombre servicio","field":"nombre","columnWidth":"100%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idcosto1: ["wm.DataGridColumn", {"caption":" ","field":"idcosto","columnWidth":"20px","display":"Number","dataExpression":"'<img src=\"resources/images/imagelists/buy.gif\" height=\"16\" width=\"16\" /><center>'"}, {}, {
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
													buttons_panel: ["wm.Panel", {"height":"100%","width":"111px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														agregar_aso: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#538312","margin":"0","caption":"+ Agregar"}, {"onclick":"agregar_asoClick"}],
														spacer8: ["wm.Spacer", {"height":"4px","width":"96px"}, {}],
														quitar_aso: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#980c10","margin":"0","caption":"- Quitar"}, {"onclick":"quitar_asoClick"}]
													}]
												}],
												panel13: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
													atras_asopadres: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#1c79b3","caption":"Atras"}, {"onclick":"atras_asopadresClick"}],
													asopadres_finalizar: ["wm.Button", {"height":"100%","width":"110px","borderColor":"#1c79b3","caption":"Continuar"}, {"onclick":"asopadres_finalizarClick"}]
												}]
											}]
										}],
										reponsable_pagos: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"20","lock":true,"showing":false}, {}, {
											reponsable_pago_main_panel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"center","verticalAlign":"top","padding":"10","lock":true}, {}, {
												panel35: ["wm.Panel", {"height":"94px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													picture2: ["wm.Picture", {"height":"18px","border":"0","width":"18px"}, {}],
													label14: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"581px","border":"0","caption":"Por favor seleccione la persona responsable de los pagos ante el colegio, quien deberá asistir el día de la matrícula, traer su documento de identidad original y una fotocopia de la misma, ampliada al 150% y diligenciar el formulario de solicitud de tarjeta de crédito Diners de Davivienda para efectuar los pagos de las mensualidades.","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}],
												spacer26: ["wm.Spacer", {"height":"15px","width":"96px"}, {}],
												panel49: ["wm.Panel", {"height":"55px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right","showing":false}, {}, {
													spacer27: ["wm.Spacer", {"height":"48px","width":"25px"}, {}],
													picture13: ["wm.Picture", {"height":"18px","border":"0","width":"18px"}, {}],
													label23: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"45px","width":"83%","border":"0","caption":"¡Importante!<br/>Seleccione el <u>Responsable de pago</u> para habilitar los botones <b>PAGAR EN LINEA</b> y <b>PAGAR EN BANCO</b>","singleLine":false}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}],
												panel32: ["wm.Panel", {"height":"300px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													layers11: ["wm.Layers", {"width":"620px","height":"300px"}, {}, {
														layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															responsableDataGrid: ["wm.DataGrid", {"border":"0"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"impresion_grupoFamiliar","expression":undefined}, {}]
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
															agregar_imp: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#538312","margin":"0","caption":"+ Elegir"}, {"onclick":"agregar_impClick"}],
															spacer22: ["wm.Spacer", {"height":"3px","width":"96px"}, {}],
															quitar_impr: ["wm.Button", {"height":"32px","width":"102px","borderColor":"#980c10","margin":"0","caption":"- Retirar"}, {"onclick":"quitar_imprClick"}]
														}]
													}]
												}],
												panel15: ["wm.Panel", {"height":"50px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													volver_responsable: ["wm.Button", {"height":"48px","width":"96px","borderColor":"#1c74b3","caption":"Atras"}, {"onclick":"volver_responsableClick"}],
													continuar_responsable: ["wm.Button", {"height":"48px","width":"150px","borderColor":"#1c74b3","caption":"Continuar","disabled":true}, {"onclick":"continuar_responsableClick"}]
												}]
											}]
										}],
										impresion_documentos: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {}, {
											panel29: ["wm.Panel", {"height":"79px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												mensaje_documentos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"100%","width":"100%","border":"0","align":"center","caption":"Por favor oprima clic sobre cada uno de los botones e imprima los documentos allí señalados.<br>Para efectos de matrícula estos documentos deben ser presentados.","singleLine":false}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}],
											panel_documentos: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
												contrato_butt: ["wm.Button", {"height":"48px","width":"170px","borderColor":"#1c74bc","caption":"Contrato de Matrícula"}, {"onclick":"contrato_buttClick"}],
												contrato_alim_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"48px","width":"130px","borderColor":"#1c79b3","caption":"Contrato alimentos","showing":false}, {"onclick":"contrato_alim_buttClick"}],
												contrato_trans_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"48px","width":"130px","borderColor":"#1c79b3","caption":"Contrato transporte","showing":false}, {"onclick":"contrato_trans_buttClick"}],
												recibo_matricula_butt: ["wm.Button", {"height":"48px","width":"190px","borderColor":"#1c74bc","caption":"Recibo de matrícula"}, {"onclick":"recibo_matricula_buttClick"}],
												bancos_butt: ["wm.Button", {"height":"48px","width":"130px","caption":"Recibo de pago en bancos","showing":false}, {"onclick":"bancos_buttClick"}]
											}],
											panel5: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												mensualidades_butt: ["wm.Button", {"height":"48px","width":"170px","borderColor":"#1c74bc","caption":"Presupuesto de mensualidades"}, {"onclick":"mensualidades_buttClick"}],
												pagare_butt: ["wm.Button", {"height":"48px","width":"110px","borderColor":"#1c74bc","caption":"Pagaré","showing":false}, {"onclick":"pagare_buttClick"}],
												contrato_seg_butt: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"height":"100%","width":"190px","borderColor":"#1c79b3","caption":"Contrato seguro de vida"}, {"onclick":"contrato_seg_buttClick"}]
											}],
											spacer6: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
											panel50: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												volver_impresion: ["wm.Button", {"height":"48px","width":"96px","borderColor":"#1c74bc","caption":"Atras"}, {"onclick":"volver_impresionClick"}],
												documentos_continuar: ["wm.Button", {"height":"48px","width":"150px","borderColor":"#1c74bc","caption":"Continuar"}, {"onclick":"documentos_continuarClick"}]
											}]
										}],
										pagos: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10","lock":true,"showing":false}, {}, {
											pago_head_message: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"48px","width":"100%","border":"0","align":"center","caption":"Oprima clic en una de las dos opciones de pago para seleccionar la que más se acomode a sus necesidades."}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											panel40: ["wm.Panel", {"height":"50px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												pagar_pse: ["wm.Button", {"height":"100%","width":"190px","iconUrl":"resources/images/buttons/pse_conx.png","iconMargin":"0 0px 0 0","caption":"PAGAR EN LINEA","iconWidth":"25px","disabled":true,"iconHeight":"20px"}, {"onclick":"pagar_pseClick"}],
												pagar_banco: ["wm.Button", {"height":"100%","width":"230px","iconUrl":"resources/images/buttons/bank.png","iconMargin":"0 0px 0 0","caption":"PAGAR EN BANCO<br/>(comprobante de pago de matrícula)","iconWidth":"25px","disabled":true,"iconHeight":"20px"}, {"onclick":"pagar_bancoClick"}]
											}],
											resument_de_pago: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved12px","wm_BackgroundColor_White","wm_Border_TopStyleCurved4px"]},"height":"389px","width":"100%","horizontalAlign":"center","verticalAlign":"top","border":"1","padding":"3","borderColor":"#bbb","showing":false}, {}, {
												panel44: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px"]},"height":"34px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","border":"1","layoutKind":"left-to-right","borderColor":"#bbb"}, {}, {
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
												valor: ["wm.TextEditor", {"width":"350px","caption":"Valor (COP)","display":"Currency","height":"32px","readonly":true}, {}, {
													editor: ["wm._CurrencyEditor", {"currency":"COP"}, {}]
												}],
												pse_logo: ["wm.Picture", {"height":"30px","border":"0","width":"100px","source":"resources/images/buttons/PSE-logo.png","aspect":"h","showing":false}, {"onclick":"pse_logoClick"}],
												indicacin_boton_pago: ["wm.Label", {"height":"39px","width":"350px","border":"0","align":"center","caption":" Haga clic en botón PSE para iniciar el pago. Habilite las ventanas emergentes en su navegador.","singleLine":false}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												pagar_pse_butt: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved12px","wm_Border_BottomStyleCurved12px","wm_BackgroundColor_White"]},"height":"109px","width":"109px","borderColor":"#bbb","iconMargin":"0 0px 0 0","margin":"0","caption":"","iconWidth":"200%","disabled":true,"iconHeight":"50%"}, {"onclick":"pagar_pse_buttClick"}]
											}],
											spacer30: ["wm.Spacer", {"height":"29px","width":"96px"}, {}],
											panel36: ["wm.Panel", {"height":"62px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
												volver_pago: ["wm.Button", {"height":"48px","width":"96px","borderColor":"#1c74bc","caption":"Atras"}, {"onclick":"volver_pagoClick"}],
												continuar_final: ["wm.Button", {"height":"48px","width":"150px","borderColor":"#1c74bc","caption":"Continuar","disabled":true}, {"onclick":"continuar_finalClick"}]
											}]
										}],
										preparacion: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"5","lock":true,"showing":false}, {}, {
											message_final: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved8px"]},"height":"55px","width":"100%","border":"0","align":"center","caption":"Para finalizar el proceso de matrícula, por favor organizar los documentos relacionados a continuación y traerlos el día asignado en las instrucciones enviadas a su correo.","singleLine":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											html_nuevo: ["wm.Html", {"height":"100%","width":"100%","border":"0","html":"<ul> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Paz y Salvo de Tesorer&iacute;a del Jard&iacute;n o Colegio anterior. </span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Fotocopia del carn&eacute; de la EPS a la que est&aacute; afiliado el ni&ntilde;o (a).</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Examen de optometr&iacute;a y ort&oacute;ptica.</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Examen de audiometr&iacute;a.</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Informe m&eacute;dico de salud general en el que, adem&aacute;s, manifiesten si el ni&ntilde;o(a) puede tomar clases de nataci&oacute;n, e indique el esquema de vacunaci&oacute;n al d&iacute;a.</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Contrato de matr&iacute;cula firmado por ambos padres y acudiente.</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Fotocopia de las c&eacute;dulas ampliadas al 150% de Padre, Madre y Acudiente.&nbsp;</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Recibo de pago en bancos (factura de matr&iacute;cula) firmado por ambos padres y acudiente.</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Presupuesto de mensualidades firmado por ambos padres y acudiente.</span></span></p> \t</li> \t<li dir=\"ltr\"> \t<p dir=\"ltr\" style=\"text-align:justify\"><span style=\"font-size:14px\"><span style=\"background-color:transparent; font-family:cambria\">Fotocopia del comprobante del pago realizado a trav&eacute;s del sistema PSE o de la consignaci&oacute;n del Banco de Bogot&aacute;, por concepto de pago del saldo de la matr&iacute;cula.</span></span></p> \t</li> </ul>","padding":"15"}, {}],
											html_antiguo: ["wm.Html", {"height":"100%","width":"100%","border":"0","html":"<ul> \t<li><span style=\"font-size:14px\">Fotocopia del carn&eacute; de la EPS a la que est&aacute; afiliado el ni&ntilde;o (a), en el caso de haberse cambiado de dicha entidad entre agosto de 2012 y junio de 2013</span></li> \t<li><span style=\"font-size:14px\">Fotocopia de la tarjeta de identidad o c&eacute;dula de ciudadan&iacute;a, en el caso de haber cumplido 7 &oacute; 18 a&ntilde;os entre agosto de 2013 y junio de 2013</span></li> \t<li><span style=\"font-size:14px\">Examen de optometr&iacute;a y ort&oacute;ptica.</span></li> \t<li><span style=\"font-size:14px\">Examen de audiometr&iacute;a.</span></li> \t<li><span style=\"font-size:14px\">Informe m&eacute;dico de salud general en el que, adem&aacute;s, manifiesten si el ni&ntilde;o(a) puede tomar clases de nataci&oacute;n, e indique el esquema de vacunaci&oacute;n al d&iacute;a (&uacute;nicamente para estudiantes que ingresan a quinto grado 5&ordm; el a&ntilde;o escolar 2012-2013)</span></li> </ul>  <p><span style=\"font-size:14px\"><strong>&nbsp;A<em>dem&aacute;s, los siguientes documentos firmados por ambos padres y,&nbsp; si es el caso, por el acudiente responsable de los pagos.</em></strong></span></p>  <ul> \t<li><span style=\"font-size:14px\">Contrato de servicios educativos, de alimentos y de transporte</span></li> \t<li><span style=\"font-size:14px\">Recibo firmado de pago en bancos (factura de matr&iacute;cula)</span></li> \t<li><span style=\"font-size:14px\">Presupuesto de mensualidades</span></li> \t<li><span style=\"font-size:14px\">Pagar&eacute; y carta de instrucciones diligenciados</span></li> \t<li><span style=\"font-size:14px\">Fotocopia ampliada al 150% de la c&eacute;dula de ciudadan&iacute;a de quienes firman los documentos relacionados en el punto anterior.</span></li> \t<li><span style=\"font-size:14px\">Comprobante del pago realizado a trav&eacute;s del bot&oacute;n PSE o consignaci&oacute;n realizada en la cuenta de ahorros del banco de Bogot&aacute; N&ordm; 085218527 a nombre de la Fundaci&oacute;n Educativa Rochester-registrando el c&oacute;digo del estudiante, por el valor se&ntilde;alado en el recibo de matr&iacute;cula impreso del sistema.</span></li> </ul>","showing":false}, {}],
											label1: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"52px","width":"100%","border":"0","align":"center","caption":"Para realizar el proceso con otro estudiante haga clic en el botón <u>Cambiar estudiante</u>. Seleccione un estudiante diferente en la sección de <u>Ficha de Salud</u> y continué con el proceso.<br><br>Use el botón <u>Terminar</u> para cerrar la sesión y finalizar el proceso.","singleLine":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											panel6: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved8px","wm_BackgroundColor_White"]},"height":"48px","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												atras_preparacion: ["wm.Button", {"height":"100%","width":"96px","borderColor":"#1c74b3","caption":"Atras"}, {"onclick":"atras_preparacionClick"}],
												volver_butt: ["wm.Button", {"height":"100%","width":"200px","borderColor":"#1c74b3","caption":"Matricular otro estudiante","showing":false}, {"onclick":"volver_buttClick"}],
												cambiar_estudiante_butt: ["wm.Button", {"height":"48px","width":"180px","borderColor":"#1c74b3","caption":"Cambiar estudiante"}, {"onclick":"cambiar_estudiante_buttClick"}],
												terminar_butt: ["wm.Button", {"height":"100%","width":"170px","borderColor":"#1c74b3","caption":"Terminar"}, {"onclick":"logout"}]
											}]
										}]
									}]
								}]
							}],
							templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top","freeze":true,"showing":false}, {}]
						}],
						panel3: ["wm.Panel", {"height":"24px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
							templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}],
							templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}],
							templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","width":"24px","horizontalAlign":"left","verticalAlign":"top"}, {}]
						}],
						panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px","wm_FontColor_Graphite","wm_BackgroundColor_VeryLightGray","wm_Border_BottomStyleCurved4px"]},"height":"48px","width":"100%","border":"0","align":"right","padding":"10,20","margin":"0","caption":"Aprendoz  Colegio Rochester<br>Todos los derechos reservados 2013-2014","singleLine":false}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}