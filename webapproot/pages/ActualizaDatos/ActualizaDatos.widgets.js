ActualizaDatos.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"service":"ActualizaDatos","operation":"findAll"}, {}, {
		input: ["wm.ServiceInput", {"type":"findAllInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"id","source":"Id_persona.dataValue"}, {}]
			}]
		}]
	}],
	a_getUsernameActualizaDatos: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {"onSuccess":"a_getUsernameActualizaDatosSuccess"}, {
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
	ls_paises: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hql_ls_pais","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"hql_ls_paisInputs"}, {}]
	}],
	ls_hql_grados: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"hq_ls_grado","autoUpdate":true,"startUpdate":true}, {}, {
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
		gui_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","padding":"5"}, {}, {
			left_spacer: ["wm.Spacer", {"height":"48px","width":"30px"}, {}],
			center_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				instructivo: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"135px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","padding":"0"}, {}, {
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
					headPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"41px","width":"100%","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
						panel9: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right","showing":false}, {}, {
							picture2: ["wm.Picture", {"height":"25px","border":"0","width":"25px","source":"resources/images/buttons/number_1.png","aspect":"h"}, {}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"26px","width":"450px","border":"0","caption":" Seleccione el integrante del grupo familiar"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel8: ["wm.Panel", {"height":"34px","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							personaSelect: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"],"captionNode":["wm_FontSizePx_10px"]},"width":"510px","caption":"Seleccione un integrante","height":"28px"}, {"onchange":"personaSelectChange"}, {
								editor: ["wm._SelectEditor", {"displayField":"nombreCompleto","dataField":"pid","displayExpression":"${code}+\" - \"+${nombreCompleto}+\" - \"+${tipo}"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_getUserGroup","expression":undefined}, {}]
									}]
								}]
							}]
						}]
					}],
					space1: ["wm.Spacer", {"height":"150px","width":"96px","showing":false}, {}],
					middlePanel: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"center","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"padding":"10","showing":false}, {}, {
						layers2: ["wm.Layers", {}, {}, {
							layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"center","verticalAlign":"top"}, {}, {
								message: ["wm.Label", {"height":"54px","width":"100%","border":"0","align":"center","caption":"ACTUALIZACIÓN DE DATOS COMPLETA <br/><br/><br/>","singleLine":false}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								boton_continuar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"60px","width":"250px","borderColor":"#1c74b3","caption":"OPRIMA AQUÍ PARA CONTINUAR"}, {"onclick":"boton_continuarClick"}]
							}]
						}]
					}],
					contentPanel: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
						personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","height":"122px","showing":false}, {"onSelected":"personaDataGrid1Selected"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaLiveVariable1","expression":undefined}, {}]
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
						panel10: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"30px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
							picture3: ["wm.Picture", {"height":"25px","border":"0","width":"25px","source":"resources/images/buttons/number_2.png","aspect":"h"}, {}],
							label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"26px","width":"100%","border":"0","caption":"Completa el siguiente formulario. Los campos con (<font color=\"red\">*</font>) son obligatorios"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right","autoScroll":true}, {}, {
							personaLiveForm1: ["wm.LiveForm", {"height":"800px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true,"autoScroll":true}, {"onSuccess":"personaLiveVariable1","onUpdateData":"personaLiveForm1UpdateData","onBeginUpdate":"personaLiveForm1BeginUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem","expression":undefined}, {}],
									wire1: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","source":"grupoFamiliarRelatedEditor1.dataOutput","expression":undefined}, {}],
									wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoPersona","source":"tipoPersonaRelatedEditor1.dataOutput","expression":undefined}, {}],
									wire2: ["wm.Wire", {"targetProperty":"dataOutput.pais","source":"relatedEditor1.dataOutput","expression":undefined}, {}]
								}],
								idPersonaEditor1: ["wm.Editor", {"caption":"Identificador","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona","showing":false}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								nombreLdapEditor1: ["wm.Editor", {"caption":"NombreLdap","width":"100%","height":"26px","readonly":true,"formField":"nombreLdap","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								claveEditor1: ["wm.Editor", {"caption":"Clave","width":"100%","height":"26px","readonly":true,"formField":"clave","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								codigoEditor1: ["wm.Editor", {"caption":"Codigo","width":"100%","height":"26px","readonly":true,"formField":"codigo","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								activoRetiradoEditor1: ["wm.Editor", {"caption":"ActivoRetirado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"activoRetirado","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								panel_general: ["wm.Panel", {"height":"88px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									general_left: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","width":"100%","height":"26px","readonly":true,"formField":"apellido1"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","width":"100%","height":"26px","readonly":true,"formField":"nombre1"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										emailEditor1: ["wm.Editor", {"caption":"Correo electrónico","width":"100%","height":"26px","readonly":true,"formField":"email"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}]
									}],
									general_right: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","width":"100%","height":"26px","readonly":true,"formField":"apellido2"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","width":"100%","height":"26px","readonly":true,"formField":"nombre2"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										noTarjetaCredito: ["wm.TextEditor", {"width":"100%","caption":"No. Tarjeta Davivienda","height":"26px","readonly":true,"formField":"numeroTarjetaCredito"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}]
								}],
								encabezado_panel_identidad: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad: ["wm.Label", {"height":"26px","width":"100%","border":"0","align":"center","caption":"INFORMACIÓN DEL DOCUMENTO DE IDENTIDAD, GÉNERO Y DATOS DE NACIMIENTO"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_identidad: ["wm.Panel", {"height":"164px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									identidad_left: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										tipoDocumentoEditor1: ["wm.Editor", {"caption":"Tipo Documento","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoDocumento"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_tipo_identificacion","expression":undefined}, {}]
												}]
											}]
										}],
										lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento de expedición","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"lugarExpedicionDepartamento"}, {"onchange":"lugarExpedicionDepartamentoEditor1Change"}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Amazonas, Antioquia, Arauca, Atlantico, Bolivar, Boyaca, Caldas, Caqueta, Casanare, Cauca, Cesar, Choco, Cordoba, Cundinamarca, Bogotá D.C, Extranjero, Guainia, Guaviare, Huila, La Guajira, Magdalena, Meta, Narino, Norte de Santander, Putumayo, Quindio, Risaralda, San Andres y Providencia, Santander, Sucre, Tolima, Valle del Cauca, Vaupes, Vichada, Mayotte (General)"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}],
										sexoEditor1: ["wm.Editor", {"caption":"Género","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"sexo"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Femenino, Masculino"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}],
										nacionalidadEditor1: ["wm.Editor", {"caption":"Nacionalidad","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"nacionalidad"}, {"onchange":"nacionalidadEditor1Change"}, {
											editor: ["wm._SelectEditor", {"displayField":"nacionalidad","dataField":"nacionalidad","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_nacionalidades","expression":undefined}, {}]
												}]
											}]
										}],
										lugarNacimientoDepartamentoEditor1: ["wm.Editor", {"caption":"Departamento nacimiento","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"lugarNacimientoDepartamento"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_departamentos","expression":undefined}, {}]
												}]
											}]
										}],
										fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha de nacimiento","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaNacimiento"}, {}, {
											editor: ["wm._DateEditor", {"required":true}, {}]
										}]
									}],
									identidad_right: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										noDocumentoEditor1: ["wm.Editor", {"caption":"No. Documento","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"noDocumento"}, {}, {
											editor: ["wm._NumberEditor", {"invalidMessage":"Por favor digitar únicamente el número sin puntos ni comas."}, {}]
										}],
										lugarExpedicionMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de expedición","width":"100%","height":"26px","readonly":true,"formField":"lugarExpedicionMunicipio"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										religionEditor1: ["wm.Editor", {"caption":"Religión","width":"100%","height":"26px","readonly":true,"formField":"religion"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										relatedEditor1: ["wm.RelatedEditor", {"formField":"pais","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.pais","expression":undefined}, {}],
												wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"paisLookup1.selectedItem","expression":undefined}, {}]
											}],
											paisLookup1: ["wm.Editor", {"caption":"País de nacimiento","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {"onchange":"paisLookup1Change"}, {
												editor: ["wm._LookupEditor", {"displayField":"pais"}, {}]
											}]
										}],
										lugarNacimientoMunicipioEditor1: ["wm.Editor", {"caption":"Ciudad de nacimiento","width":"100%","height":"26px","readonly":true,"formField":"lugarNacimientoMunicipio"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"Ex alumno","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"hijoDeExalumno","displayValue":true,"emptyValue":"false"}, {"onchange":"hijoDeExalumnoEditor1Change"}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}]
									}]
								}],
								promocionEditor1: ["wm.Editor", {"caption":"Promoción del ex-alumno","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"promocion","showing":false}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"PROMOCIÓN 1978, PROMOCIÓN 1979, PROMOCIÓN 1980, PROMOCIÓN 1981, PROMOCIÓN 1982, PROMOCIÓN 1983, PROMOCIÓN 1984, PROMOCIÓN 1985, PROMOCIÓN 1986, PROMOCIÓN 1987, PROMOCIÓN 1988, PROMOCIÓN 1989, PROMOCIÓN 1990, PROMOCIÓN 1991, PROMOCIÓN 1992, PROMOCIÓN 1993, PROMOCIÓN 1994, PROMOCIÓN 1995, PROMOCIÓN 1996, PROMOCIÓN 1997, PROMOCIÓN 1998, PROMOCIÓN 1999, PROMOCIÓN 2000, PROMOCIÓN 2001, PROMOCIÓN 2002, PROMOCIÓN 2003, PROMOCIÓN 2004, PROMOCIÓN 2005, PROMOCIÓN 2006, PROMOCIÓN 2007, PROMOCIÓN 2008, PROMOCIÓN 2009, PROMOCIÓN 2010, PROMOCIÓN 2011"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								encabezado_panel_residencia: ["wm.Panel", {"height":"26px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad1: ["wm.Label", {"height":"26px","width":"100%","border":"0","align":"center","caption":"INFORMACIÓN RESIDENCIA"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_residencia: ["wm.Panel", {"height":"142px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									residencia_left: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										direccionResidenciaEditor1: ["wm.Editor", {"caption":"Dirección de residencia","width":"100%","height":"26px","readonly":true,"formField":"direccionResidencia"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										paisDomicilioEditor1: ["wm.Editor", {"caption":"País de residencia","width":"100%","height":"26px","readonly":true,"formField":"paisDomicilio"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										municipioEditor1: ["wm.Editor", {"caption":"Ciudad residencia","width":"100%","height":"26px","readonly":true,"formField":"municipio"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										telefono2Editor1: ["wm.Editor", {"caption":"Celular","width":"100%","height":"26px","readonly":true,"formField":"telefono2"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										textEditor1: ["wm.TextEditor", {"width":"150%","caption":"Código Postal","display":"Number","readonly":true,"formField":"codigoPostal"}, {}, {
											editor: ["wm._NumberEditor", {}, {}]
										}]
									}],
									residencia_right: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										barrioEditor1: ["wm.Editor", {"caption":"Barrio","width":"100%","height":"26px","readonly":true,"formField":"barrio"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										departamentoEditor1: ["wm.Editor", {"caption":"Departamento residencia","width":"100%","height":"26px","readonly":true,"formField":"departamento"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										telefonoEditor1: ["wm.Editor", {"caption":"Teléfono","width":"100%","height":"26px","readonly":true,"formField":"telefono"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										viveConEditor1: ["wm.Editor", {"caption":"Vive con","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"viveCon"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"MADRE, PADRE, ACUDIENTE, AMBOS PADRES, NO APLICA","required":true}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}]
								}],
								encabezado_panel_laboral: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad2: ["wm.Label", {"height":"26px","width":"100%","border":"0","align":"center","caption":"INFORMACIÓN LABORAL"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_laboral: ["wm.Panel", {"height":"90px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									laboral_left: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										celularEditor1: ["wm.Editor", {"caption":"Celular laboral","width":"100%","height":"26px","readonly":true,"formField":"celular"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										empresaEditor1: ["wm.Editor", {"caption":"Empresa","width":"100%","height":"26px","readonly":true,"formField":"empresa"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección de la oficina","width":"100%","height":"26px","readonly":true,"formField":"direccionOficina"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}],
									laboral_right: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										cargoEditor1: ["wm.Editor", {"caption":"Cargo","width":"100%","height":"26px","readonly":true,"formField":"cargo"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										profesionEditor1: ["wm.Editor", {"caption":"Profesión","width":"100%","height":"26px","readonly":true,"formField":"profesion"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										telefonoOficinaEditor1: ["wm.Editor", {"caption":"Telefono de oficina","width":"100%","height":"26px","readonly":true,"formField":"telefonoOficina"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}]
									}]
								}],
								encabezado_panel_medica: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad3: ["wm.Label", {"height":"26px","width":"100%","border":"0","align":"center","caption":"INFORMACIÓN MÉDICA"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel_medica: ["wm.Panel", {"height":"89px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									medica_left: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										epsEditor1: ["wm.Editor", {"caption":"E.P.S","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eps"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"eps","dataField":"eps"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_eps","expression":undefined}, {}]
												}]
											}]
										}],
										numeroContratoSaludEditor1: ["wm.Editor", {"caption":"No. contrato salud prepagada","width":"100%","height":"26px","readonly":true,"formField":"numeroContratoSalud"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clínica de emergencia","width":"100%","height":"26px","readonly":true,"formField":"clinicaEmergencia"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}],
									medica_right: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud prepagada","width":"100%","height":"26px","readonly":true,"formField":"saludPrepagada"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo de sangre (RH)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoSangre"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"A+, A-, AB+, AB-, B+, B-, O+, O-, NO APLICA","required":true}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}]
								}],
								panel6: ["wm.Panel", {"height":"27px","width":"100%","horizontalAlign":"left","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									head_identidad4: ["wm.Label", {"height":"26px","width":"100%","border":"0","align":"center","caption":"INFORMACIÓN EDUCATIVA"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								panel19: ["wm.Panel", {"height":"85px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									panel20: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado de ingreso","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"gradoIngreso"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"grado","startUpdate":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_hql_grados","expression":undefined}, {}]
												}]
											}]
										}],
										parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"parentesco"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Padre, Madre, Hermano(a), Abuelo(a), Tio(a), Otro "}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}],
									panel21: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha de ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","showing":false}, {}, {
											editor: ["wm._DateEditor", {"required":true}, {}]
										}],
										colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio o Jardín anterior","width":"100%","height":"26px","readonly":true,"formField":"colegioAnterior"}, {}, {
											editor: ["wm._TextEditor", {"required":true}, {}]
										}],
										nivelAcademicoEditor1: ["wm.Editor", {"caption":"Nivel académico","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"nivelAcademico"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Educación básica, Bachiller, Pregrado profesional, Universitario, Pregrado Técnico, Postgrado, Especialización, Postgrado maestría, Postgrado Doctorado"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}]
								}],
								cursoIngresoEditor1: ["wm.Editor", {"caption":"Curso de ingreso","width":"100%","height":"26px","readonly":true,"formField":"cursoIngreso","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								fechaRetiroEditor1: ["wm.Editor", {"caption":"Fecha de retiro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaRetiro","showing":false}, {}, {
									editor: ["wm._DateEditor", {}, {}]
								}],
								comentarioRetiroEditor1: ["wm.Editor", {"caption":"ComentarioRetiro","width":"100%","height":"26px","readonly":true,"formField":"comentarioRetiro","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"Nombre del ex-alumno","width":"100%","height":"26px","readonly":true,"formField":"nombrePadreExalumno","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								codigoFamiliaEditor1: ["wm.Editor", {"caption":"CodigoFamilia","width":"100%","height":"26px","readonly":true,"formField":"codigoFamilia","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								rutaMEditor1: ["wm.Editor", {"caption":"RutaM","width":"100%","height":"26px","readonly":true,"formField":"rutaM","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								rutaTEditor1: ["wm.Editor", {"caption":"RutaT","width":"100%","height":"26px","readonly":true,"formField":"rutaT","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"TomaAlmuerzo","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaAlmuerzo","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"TomaMediasNueves","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaMediasNueves","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"TomaSeguroAccidentes","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaSeguroAccidentes","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								noPlaquetaEditor1: ["wm.Editor", {"caption":"NoPlaqueta","width":"100%","height":"26px","readonly":true,"formField":"noPlaqueta","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								matriculadoEditor1: ["wm.Editor", {"caption":"Matriculado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"matriculado","displayValue":true,"emptyValue":"false","showing":false}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								inscAlumCursoIdInscAlumCursoEditor1: ["wm.Editor", {"caption":"InscAlumCursoIdInscAlumCurso","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"inscAlumCursoIdInscAlumCurso","showing":false}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								editPanel1: ["wm.EditPanel", {"liveForm":"personaLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","showing":false}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
										saveButton1: ["wm.RoundedButton", {"caption":"Guardar Datos","width":"130px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
											}]
										}],
										cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										newButton1: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel1.beginDataInsert"}],
										updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"130px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
											}]
										}],
										deleteButton1: ["wm.RoundedButton", {"caption":"Delete","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				insertVerificacionPersonaLiveForm: ["wm.LiveForm", {"height":"61px","verticalAlign":"top","horizontalAlign":"left","lock":true,"showing":false}, {"onSuccess":"insertVerificacionPersonaLiveFormSuccess"}],
				nonAcepted_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","width":"100%","horizontalAlign":"center","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"padding":"10","showing":false}, {}, {
					layers3: ["wm.Layers", {}, {}, {
						layer3: ["wm.Layer", {"caption":"layer2","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
							message1: ["wm.Label", {"height":"116px","width":"100%","border":"0","align":"center","caption":"¡LO SENTIMOS!<br/>El proceso de actualización de datos por parte de tus padres, no ha sido realizado.<br>Una vez realizado podrás ingresar para ver tus calificaciones<br/><br/>Haga click en el botón para salir","singleLine":false}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							boton_continuar1: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"60px","width":"223px","borderColor":"#DC8909","caption":"SALIR"}, {"onclick":"boton_continuar1Click"}]
						}]
					}]
				}],
				footerPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"40px","width":"100%","horizontalAlign":"right","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
					label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"26px","width":"100%","border":"0","align":"right","caption":"Presiona el botón Actualizar para completar el proceso","showing":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					picture4: ["wm.Picture", {"height":"25px","border":"0","width":"25px","source":"resources/images/buttons/number_3.png","aspect":"h","showing":false}, {}],
					boton_actualizar: ["wm.Button", {"height":"100%","width":"128px","borderColor":"#1c74b3","margin":"6","caption":"Guardar"}, {"onclick":"boton_actualizarClick"}]
				}]
			}],
			right_spacer: ["wm.Spacer", {"height":"48px","width":"30px"}, {}]
		}]
	}]
}