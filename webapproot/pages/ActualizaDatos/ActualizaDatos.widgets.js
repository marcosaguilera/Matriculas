ActualizaDatos.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"service":"ActualizaDatos","operation":"findAll"}, {}, {
		input: ["wm.ServiceInput", {"type":"findAllInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"id","source":"Id_persona.dataValue"}, {}]
			}]
		}]
	}],
	a_getUsernameActualizaDatos: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","startUpdate":true,"autoUpdate":true}, {"onSuccess":"a_getUsernameActualizaDatosSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView1","maxResults":1}, {"onSuccess":"personaLiveVariable1Success"}],
	a_getGrupoFamiliar: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getIdPersonabyUser"}, {"onSuccess":"a_getGrupoFamiliarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getIdPersonabyUserInputs"}, {}]
	}],
	a_getUserGroup: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getGrupoFamiliarbyUser"}, {}, {
		input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyUserInputs"}, {}]
	}],
	returnValueIfExists: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"returExitsValue"}, {"onSuccess":"returnValueIfExistsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"returExitsValueInputs"}, {}]
	}],
	v_insertActualizaPersona: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.ActualizacionDatosPersona"}, {}],
	getUserByIdPersona: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getUserbyIdPersona"}, {"onSuccess":"getUserByIdPersonaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserbyIdPersonaInputs"}, {}]
	}],
	v_updateActualizaPersona: ["wm.Variable", {"type":"com.aprendoz_desarrollo.data.ActualizacionDatosPersona"}, {}],
	a_updatePersona: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"updateDatosPersona"}, {"onSuccess":"a_updatePersonaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateDatosPersonaInputs"}, {}]
	}],
	getFamiliarGrupebyIdPersona: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"getGrupoFamiliarbyIdPersona"}, {"onSuccess":"getFamiliarGrupebyIdPersonaSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getGrupoFamiliarbyIdPersonaInputs"}, {}]
	}],
	returnValueIfGrupoFmailiarExists: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"returnExistsValueGrupoFamiliar"}, {"onSuccess":"returnValueIfGrupoFmailiarExistsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"returnExistsValueGrupoFamiliarInputs"}, {}]
	}],
	ls_paises: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hql_ls_pais","startUpdate":true,"autoUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hql_ls_paisInputs"}, {}]
	}],
	ls_hql_grados: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hq_ls_grado","startUpdate":true,"autoUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hq_ls_gradoInputs"}, {}]
	}],
	a_ls_paises: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Pais"}, {}],
	ls_tipo_identificacion: ["wm.Variable", {"type":"EntryData","json":"[\n{name: \"Numero Unico Identificación Personal\", dataValue: \"N.U.I.P\"},\n{name: \"Tarjeta Identidad\", dataValue: \"T.I\"},\n{name: \"Cédula Ciudadanía\", dataValue: \"C.C\"},\n{name: \"Cédula Extranjería\", dataValue: \"C.E\"},\n{name: \"Pasaporte\", dataValue: \"P.S\"}\n]"}, {}],
	a_getRoleByUsernameSV: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_typeUserByUsername"}, {"onSuccess":"a_getRoleByUsernameSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_typeUserByUsernameInputs"}, {}]
	}],
	salirAprendoz: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"goto_salirAprendoz"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	goto_salirAprendoz: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	ls_eps: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.TipoEps"}, {}],
	ls_nacionalidades: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Nacionalidades","orderBy":"asc: nacionalidad"}, {}],
	ls_departamentos: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.EstadoDepartamento","orderBy":"asc: estado"}, {}],
	promocionSv: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"_hqlPromociones"}, {"onSuccess":"promocionSvSuccess"}, {
		input: ["wm.ServiceInput", {"type":"_hqlPromocionesInputs"}, {}]
	}],
	_______________________________________: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		Id_persona: ["wm.TextEditor", {"width":"263px","caption":"Id Persona","showing":false}, {}, {
			editor: ["wm._TextEditor", {}, {}]
		}],
		button1: ["wm.Button", {"height":"31px","width":"264px","caption":"Click me","showing":false}, {"onclick":"serviceVariable1"}],
		gui_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"5","layoutKind":"left-to-right"}, {}, {
			left_spacer: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
			center_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
				instructivo: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"135px","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"0","layoutKind":"left-to-right"}, {}, {
					guia: ["wm.IFrame", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"100%","border":"1","source":"http://aprendoz.rochester.edu.co/recursos/bnr_actualiz/bnr_actualiz.html","borderColor":"#aaa"}, {}]
				}],
				spacer1: ["wm.Spacer", {"height":"20px","width":"96px"}, {}],
				personaLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
					userNameBox: ["wm.TextEditor", {"width":"215px","caption":"username","showing":false,"displayValue":"h","readonly":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUsernameActualizaDatos.dataValue"}, {}]
						}],
						editor: ["wm._TextEditor", {}, {}]
					}],
					headPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"41px","horizontalAlign":"center","width":"100%","verticalAlign":"middle"}, {}, {
						panel9: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","showing":false}, {}, {
							picture2: ["wm.Picture", {"height":"25px","border":"0","width":"25px","source":"resources/images/buttons/number_1.png","aspect":"h"}, {}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"26px","width":"450px","border":"0","caption":" Seleccione el integrante del grupo familiar"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel8: ["wm.Panel", {"height":"34px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							picture1: ["wm.Picture", {"height":"19px","border":"0","width":"20px"}, {}],
							personaSelect: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"450px","height":"28px"}, {"onchange":"personaSelectChange"}, {
								editor: ["wm._SelectEditor", {"displayField":"nombreCompleto","dataField":"pid","displayExpression":"${code}+\" - \"+${nombreCompleto}+\" - \"+${tipo}"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"a_getUserGroup"}, {}]
									}]
								}]
							}]
						}]
					}],
					space1: ["wm.Spacer", {"height":"150px","width":"96px","showing":false}, {}],
					middlePanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","padding":"10","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						layers2: ["wm.Layers", {}, {}, {
							layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"center","verticalAlign":"top"}, {}, {
								message: ["wm.Label", {"height":"95px","width":"100%","border":"0","caption":"PROCESO EXITOSO <br/><br/><br/>","align":"center","singleLine":false}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								boton_continuar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"60px","width":"250px","caption":"OPRIMA AQUÍ PARA CONTINUAR","borderColor":"#1c74b3"}, {"onclick":"boton_continuarClick"}]
							}]
						}]
					}],
					contentPanel: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
						personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","height":"122px","showing":false}, {"onSelected":"personaDataGrid1Selected"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"personaLiveVariable1"}, {}]
							}],
							idPersona1: ["wm.DataGridColumn", {"caption":"Persona","field":"idPersona","display":"Number","autoSize":undefined}, {}, {
								format: ["wm.NumberFormatter", {}, {}]
							}],
							nombreLdap1: ["wm.DataGridColumn", {"caption":"NombreLdap","field":"nombreLdap","columnWidth":"100%","index":1}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							sexo1: ["wm.DataGridColumn", {"caption":"Grupo","field":"grupoFamiliar.grupoFamiliar","columnWidth":"100%","index":32}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column1: ["wm.DataGridColumn", {"caption":"tipoPersona.idTipoPersona","field":"tipoPersona.idTipoPersona","index":3}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel10: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
							picture3: ["wm.Picture", {"height":"25px","border":"0","width":"25px","source":"resources/images/buttons/number_2.png","aspect":"h"}, {}],
							label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"26px","width":"100%","border":"0","caption":"Completa el siguiente formulario. Los campos con (<font color=\"red\">*</font>) son obligatorios"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","autoScroll":true}, {}, {
							personaLiveForm1: ["wm.LiveForm", {"height":"800px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true,"autoScroll":true}, {"onSuccess":"personaLiveVariable1","onUpdateData":"personaLiveForm1UpdateData","onBeginUpdate":"personaLiveForm1BeginUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"personaDataGrid1.selectedItem"}, {}],
									wire1: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","expression":undefined,"source":"grupoFamiliarRelatedEditor1.dataOutput"}, {}],
									wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoPersona","expression":undefined,"source":"tipoPersonaRelatedEditor1.dataOutput"}, {}],
									wire2: ["wm.Wire", {"targetProperty":"dataOutput.pais","expression":undefined,"source":"relatedEditor1.dataOutput"}, {}]
								}],
								idPersonaEditor1: ["wm.Editor", {"caption":"Identificador","readonly":true,"formField":"idPersona","width":"100%","height":"26px","display":"Number","showing":false}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								nombreLdapEditor1: ["wm.Editor", {"caption":"NombreLdap","readonly":true,"formField":"nombreLdap","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								claveEditor1: ["wm.Editor", {"caption":"Clave","readonly":true,"formField":"clave","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								codigoEditor1: ["wm.Editor", {"caption":"Codigo","readonly":true,"formField":"codigo","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								activoRetiradoEditor1: ["wm.Editor", {"caption":"ActivoRetirado","readonly":true,"formField":"activoRetirado","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								panel_general: ["wm.Panel", {"height":"88px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									general_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","readonly":true,"formField":"apellido1","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","readonly":true,"formField":"nombre1","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										emailEditor1: ["wm.Editor", {"caption":"Correo electrónico","readonly":true,"formField":"email","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}]
									}],
									general_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","readonly":true,"formField":"apellido2","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","readonly":true,"formField":"nombre2","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										noTarjetaCredito: ["wm.TextEditor", {"width":"100%","caption":"No. Tarjeta Davivienda","height":"26px","readonly":true,"formField":"numeroTarjetaCredito"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}]
									}]
								}],
								encabezado_panel_identidad: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad: ["wm.Label", {"height":"26px","width":"100%","border":"0","caption":"INFORMACIÓN DEL DOCUMENTO DE IDENTIDAD, GÉNERO Y DATOS DE NACIMIENTO","align":"center"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_identidad: ["wm.Panel", {"height":"164px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									identidad_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										tipoDocumentoEditor1: ["wm.Editor", {"caption":"Tipo Documento","readonly":true,"formField":"tipoDocumento","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_tipo_identificacion"}, {}]
												}]
											}]
										}],
										lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento de expedición","readonly":true,"formField":"lugarExpedicionDepartamento","width":"100%","height":"26px","display":"Select"}, {"onchange":"lugarExpedicionDepartamentoEditor1Change"}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Amazonas, Antioquia, Arauca, Atlantico, Bolivar, Boyaca, Caldas, Caqueta, Casanare, Cauca, Cesar, Choco, Cordoba, Cundinamarca, Bogotá D.C, Extranjero, Guainia, Guaviare, Huila, La Guajira, Magdalena, Meta, Narino, Norte de Santander, Putumayo, Quindio, Risaralda, San Andres y Providencia, Santander, Sucre, Tolima, Valle del Cauca, Vaupes, Vichada, Mayotte (General)"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}],
										sexoEditor1: ["wm.Editor", {"caption":"Género","readonly":true,"formField":"sexo","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Femenino, Masculino"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}],
										nacionalidadEditor1: ["wm.Editor", {"caption":"Nacionalidad","readonly":true,"formField":"nacionalidad","width":"100%","height":"26px","display":"Select"}, {"onchange":"nacionalidadEditor1Change"}, {
											editor: ["wm._SelectEditor", {"displayField":"nacionalidad","dataField":"nacionalidad","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_nacionalidades"}, {}]
												}]
											}]
										}],
										lugarNacimientoDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento nacimiento","readonly":true,"formField":"lugarNacimientoDepartamento","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_departamentos"}, {}]
												}]
											}]
										}],
										fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha de nacimiento","readonly":true,"formField":"fechaNacimiento","width":"100%","height":"26px","display":"Date"}, {}, {
											editor: ["wm._DateEditor", {"required":true}, {}]
										}]
									}],
									identidad_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										noDocumentoEditor1: ["wm.Editor", {"caption":"No. Documento","readonly":true,"formField":"noDocumento","width":"100%","height":"26px","display":"Number"}, {}, {
											editor: ["wm._NumberEditor", {"invalidMessage":"Por favor digitar únicamente el número sin puntos ni comas."}, {}]
										}],
										lugarExpedicionMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de expedición","readonly":true,"formField":"lugarExpedicionMunicipio","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										religionEditor1: ["wm.Editor", {"caption":"Religión","readonly":true,"formField":"religion","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										relatedEditor1: ["wm.RelatedEditor", {"formField":"pais","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"personaDataGrid1.selectedItem.pais"}, {}],
												wire1: ["wm.Wire", {"targetProperty":"dataOutput","expression":undefined,"source":"paisLookup1.selectedItem"}, {}]
											}],
											paisLookup1: ["wm.Editor", {"caption":"País de nacimiento","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup"}, {"onchange":"paisLookup1Change"}, {
												editor: ["wm._LookupEditor", {"displayField":"pais"}, {}]
											}]
										}],
										lugarNacimientoMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de nacimiento","readonly":true,"formField":"lugarNacimientoMunicipio","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"Ex alumno","readonly":true,"formField":"hijoDeExalumno","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false"}, {"onchange":"hijoDeExalumnoEditor1Change"}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}]
									}]
								}],
								promocionEditor1: ["wm.Editor", {"caption":"Promoción del ex-alumno","readonly":true,"formField":"promocion","width":"100%","height":"26px","display":"Select","showing":false}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"PROMOCIÓN 1978, PROMOCIÓN 1979, PROMOCIÓN 1980, PROMOCIÓN 1981, PROMOCIÓN 1982, PROMOCIÓN 1983, PROMOCIÓN 1984, PROMOCIÓN 1985, PROMOCIÓN 1986, PROMOCIÓN 1987, PROMOCIÓN 1988, PROMOCIÓN 1989, PROMOCIÓN 1990, PROMOCIÓN 1991, PROMOCIÓN 1992, PROMOCIÓN 1993, PROMOCIÓN 1994, PROMOCIÓN 1995, PROMOCIÓN 1996, PROMOCIÓN 1997, PROMOCIÓN 1998, PROMOCIÓN 1999, PROMOCIÓN 2000, PROMOCIÓN 2001, PROMOCIÓN 2002, PROMOCIÓN 2003, PROMOCIÓN 2004, PROMOCIÓN 2005, PROMOCIÓN 2006, PROMOCIÓN 2007, PROMOCIÓN 2008, PROMOCIÓN 2009, PROMOCIÓN 2010, PROMOCIÓN 2011"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								encabezado_panel_residencia: ["wm.Panel", {"height":"26px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad1: ["wm.Label", {"height":"26px","width":"100%","border":"0","caption":"INFORMACIÓN RESIDENCIA","align":"center"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_residencia: ["wm.Panel", {"height":"142px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									residencia_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										direccionResidenciaEditor1: ["wm.Editor", {"caption":"Dirección de residencia","readonly":true,"formField":"direccionResidencia","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										paisDomicilioEditor1: ["wm.Editor", {"caption":"País de residencia","readonly":true,"formField":"paisDomicilio","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										municipioEditor1: ["wm.Editor", {"caption":"Ciudad residencia","readonly":true,"formField":"municipio","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										telefono2Editor1: ["wm.Editor", {"caption":"Celular","readonly":true,"formField":"telefono2","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										textEditor1: ["wm.TextEditor", {"width":"150%","caption":"Código Postal","display":"Number","readonly":true,"formField":"codigoPostal"}, {}, {
											editor: ["wm._NumberEditor", {}, {}]
										}]
									}],
									residencia_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										barrioEditor1: ["wm.Editor", {"caption":"Barrio","readonly":true,"formField":"barrio","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										departamentoEditor1: ["wm.Editor", {"caption":"Departamento residencia","readonly":true,"formField":"departamento","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										telefonoEditor1: ["wm.Editor", {"caption":"Teléfono","readonly":true,"formField":"telefono","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										viveConEditor1: ["wm.Editor", {"caption":"Vive con","readonly":true,"formField":"viveCon","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"MADRE, PADRE, ACUDIENTE, AMBOS PADRES, NO APLICA"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}]
								}],
								encabezado_panel_laboral: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad2: ["wm.Label", {"height":"26px","width":"100%","border":"0","caption":"INFORMACIÓN LABORAL","align":"center"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_laboral: ["wm.Panel", {"height":"90px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									laboral_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										celularEditor1: ["wm.Editor", {"caption":"Celular laboral","readonly":true,"formField":"celular","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										empresaEditor1: ["wm.Editor", {"caption":"Empresa","readonly":true,"formField":"empresa","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección de la oficina","readonly":true,"formField":"direccionOficina","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}],
									laboral_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										cargoEditor1: ["wm.Editor", {"caption":"Cargo","readonly":true,"formField":"cargo","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										profesionEditor1: ["wm.Editor", {"caption":"Profesión","readonly":true,"formField":"profesion","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										telefonoOficinaEditor1: ["wm.Editor", {"caption":"Telefono de oficina","readonly":true,"formField":"telefonoOficina","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}]
									}]
								}],
								encabezado_panel_medica: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad3: ["wm.Label", {"height":"26px","width":"100%","border":"0","caption":"INFORMACIÓN MÉDICA","align":"center"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_medica: ["wm.Panel", {"height":"89px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									medica_left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										epsEditor1: ["wm.Editor", {"caption":"E.P.S","readonly":true,"formField":"eps","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"eps","dataField":"eps"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_eps"}, {}]
												}]
											}]
										}],
										numeroContratoSaludEditor1: ["wm.Editor", {"caption":"No. contrato salud prepagada","readonly":true,"formField":"numeroContratoSalud","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clínica de emergencia","readonly":true,"formField":"clinicaEmergencia","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}],
									medica_right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud prepagada","readonly":true,"formField":"saludPrepagada","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo de sangre (RH)","readonly":true,"formField":"tipoSangre","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"A+, A-, AB+, AB-, B+, B-, O+, O-, NO APLICA"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}]
								}],
								panel6: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad4: ["wm.Label", {"height":"26px","width":"100%","border":"0","caption":"INFORMACIÓN EDUCATIVA","align":"center"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel19: ["wm.Panel", {"height":"85px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									panel20: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado de ingreso","readonly":true,"formField":"gradoIngreso","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"grado","startUpdate":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","expression":undefined,"source":"ls_hql_grados"}, {}]
												}]
											}]
										}],
										colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio o Jardín anterior","readonly":true,"formField":"colegioAnterior","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","readonly":true,"formField":"parentesco","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Padre, Madre, Hermano(a), Abuelo(a), Tio(a), Otro "}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}],
									panel21: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
										fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha de ingreso","readonly":true,"formField":"fechaIngreso","width":"100%","height":"26px","display":"Date"}, {}, {
											editor: ["wm._DateEditor", {"required":true}, {}]
										}],
										nivelAcademicoEditor1: ["wm.Editor", {"caption":"Nivel académico","readonly":true,"formField":"nivelAcademico","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Educación básica, Bachiller, Pregrado profesional, Universitario, Pregrado Técnico, Postgrado, Especialización, Postgrado maestría, Postgrado Doctorado"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}]
								}],
								cursoIngresoEditor1: ["wm.Editor", {"caption":"Curso de ingreso","readonly":true,"formField":"cursoIngreso","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								fechaRetiroEditor1: ["wm.Editor", {"caption":"Fecha de retiro","readonly":true,"formField":"fechaRetiro","width":"100%","height":"26px","display":"Date","showing":false}, {}, {
									editor: ["wm._DateEditor", {}, {}]
								}],
								comentarioRetiroEditor1: ["wm.Editor", {"caption":"ComentarioRetiro","readonly":true,"formField":"comentarioRetiro","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"Nombre del ex-alumno","readonly":true,"formField":"nombrePadreExalumno","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								codigoFamiliaEditor1: ["wm.Editor", {"caption":"CodigoFamilia","readonly":true,"formField":"codigoFamilia","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								rutaMEditor1: ["wm.Editor", {"caption":"RutaM","readonly":true,"formField":"rutaM","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								rutaTEditor1: ["wm.Editor", {"caption":"RutaT","readonly":true,"formField":"rutaT","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"TomaAlmuerzo","readonly":true,"formField":"tomaAlmuerzo","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"TomaMediasNueves","readonly":true,"formField":"tomaMediasNueves","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"TomaSeguroAccidentes","readonly":true,"formField":"tomaSeguroAccidentes","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								noPlaquetaEditor1: ["wm.Editor", {"caption":"NoPlaqueta","readonly":true,"formField":"noPlaqueta","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								matriculadoEditor1: ["wm.Editor", {"caption":"Matriculado","readonly":true,"formField":"matriculado","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								inscAlumCursoIdInscAlumCursoEditor1: ["wm.Editor", {"caption":"InscAlumCursoIdInscAlumCurso","readonly":true,"formField":"inscAlumCursoIdInscAlumCurso","width":"100%","height":"26px","display":"Number","showing":false}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								editPanel1: ["wm.EditPanel", {"liveForm":"personaLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","showing":false}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
										saveButton1: ["wm.RoundedButton", {"caption":"Guardar Datos","width":"130px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formInvalid"}, {}]
											}]
										}],
										cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										newButton1: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel1.beginDataInsert"}],
										updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"130px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formUneditable"}, {}]
											}]
										}],
										deleteButton1: ["wm.RoundedButton", {"caption":"Delete","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","expression":undefined,"source":"editPanel1.formUneditable"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				insertVerificacionPersonaLiveForm: ["wm.LiveForm", {"height":"61px","verticalAlign":"top","horizontalAlign":"left","showing":false,"lock":true}, {"onSuccess":"insertVerificacionPersonaLiveFormSuccess"}],
				nonAcepted_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"middle","padding":"10","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
					layers3: ["wm.Layers", {}, {}, {
						layer3: ["wm.Layer", {"caption":"layer2","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
							message1: ["wm.Label", {"height":"116px","width":"100%","border":"0","caption":"¡LO SENTIMOS!<br/>El proceso de actualización de datos por parte de tus padres, no ha sido realizado.<br>Una vez realizado podrás ingresar para ver tus calificaciones<br/><br/>Haga click en el botón para salir","align":"center","singleLine":false}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							boton_continuar1: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"60px","width":"223px","caption":"SALIR","borderColor":"#DC8909"}, {"onclick":"boton_continuar1Click"}]
						}]
					}]
				}],
				footerPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"40px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
					label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"26px","width":"100%","border":"0","caption":"Presiona el botón Actualizar para completar el proceso","align":"right","showing":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					picture4: ["wm.Picture", {"height":"25px","border":"0","width":"25px","source":"resources/images/buttons/number_3.png","aspect":"h","showing":false}, {}],
					boton_actualizar: ["wm.Button", {"height":"100%","width":"128px","caption":"Guardar","margin":"6","borderColor":"#1c74b3"}, {"onclick":"boton_actualizarClick"}]
				}]
			}],
			right_spacer: ["wm.Spacer", {"height":"48px","width":"30px"}, {}]
		}]
	}]
}