dojo.declare("ActualizaDatos", wm.Page, {
  start: function() {
   var _isChecked=  this.hijoDeExalumnoEditor1.getDataValue();
     if(_isChecked== true){
       this.promocionEditor1.show(); 
     }
     if(_isChecked== false){
       this.promocionEditor1.hide(); 
     } 
  },
  a_getUsernameActualizaDatosSuccess: function(inSender, inDeprecated) {
    try {
     var userName= this.userNameBox.getDataValue();
     this.a_getGrupoFamiliar.input.setValue("username", userName);
     this.a_getGrupoFamiliar.update();

     this.a_getRoleByUsernameSV.input.setValue("user", userName);
     this.a_getRoleByUsernameSV.update();
      
    } catch(e) {
      console.error('ERROR IN a_getUsernameActualizaDatosSuccess: ' + e); 
    } 
  },
  a_getGrupoFamiliarSuccess: function(inSender, inDeprecated) {
    try {
     var json= this.a_getGrupoFamiliar.getItem(0);
     var _familia= json.data.idgf;
     var _persona= json.data.idp;
     this.a_getUserGroup.input.setValue("idgrupo", _familia);
     this.a_getUserGroup.update();
     
    } catch(e) {
      console.error('ERROR IN a_getGrupoFamiliarSuccess: ' + e); 
    }},
  personaSelectChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _persona= this.personaSelect.getDataValue();
     if(_persona == undefined){

     }
     if(_persona > 0){
      this.editPanel1.cancelEdit();

      var _persona= this.personaSelect.getDataValue();
      this.personaLiveVariable1.filter.setValue("idPersona", _persona);
      this.personaLiveVariable1.update();

     } 
    } catch(e) {
      console.error('ERROR IN personaSelectChange: ' + e); 
    }},
  personaLiveVariable1Success: function(inSender, inDeprecated) {
    try {
     this.personaDataGrid1.select(0);

    } catch(e) {
      console.error('ERROR IN personaLiveVariable1Success: ' + e); 
    }},
  personaDataGrid1Selected: function(inSender, inIndex) {
    try {
     this.editPanel1.beginDataUpdate(); 
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid1Selected: ' + e); 
    }},
  boton_actualizarClick: function(inSender, inEvent) {
    try {
     this.editPanel1.saveData();
      
    } catch(e) {
      console.error('ERROR IN boton_actualizarClick: ' + e); 
    }},
  personaLiveForm1UpdateData: function(inSender) {
    try {
     var _persona= this.personaSelect.getDataValue();
     this.getUserByIdPersona.input.setValue("id", _persona);
     this.getUserByIdPersona.update();
   
    } catch(e) {
      console.error('ERROR IN personaLiveForm1UpdateData: ' + e); 
    }},
  getUserByIdPersonaSuccess: function(inSender, inDeprecated) {
    try {
     var _persona= this.personaSelect.getDataValue();
     var _getterUsuario= this.getUserByIdPersona.getItem(0);
     var _usuario= _getterUsuario.data.user;
     this.returnValueIfExists.input.setValue("user", _usuario);
     this.returnValueIfExists.update();
        
    } catch(e) {
      console.error('ERROR IN getUserByIdPersonaSuccess: ' + e); 
    }},
  returnValueIfExistsSuccess: function(inSender, inDeprecated) {
    try {
     var _persona= this.personaSelect.getDataValue();
     var _bool= 1;
     var _fecha= new Date().getTime();
     var _json= this.returnValueIfExists.getItem(0);
     var rt= _json.data.retorno;

     if(rt == 0){
     //alert("inserta");
       this.v_insertActualizaPersona.setValue("persona.idPersona", _persona);
       this.v_insertActualizaPersona.setValue("actualizado", _bool);
       this.v_insertActualizaPersona.setValue("fecha", _fecha);
       
       this.insertVerificacionPersonaLiveForm.setDataSet(this.v_insertActualizaPersona);          
       this.insertVerificacionPersonaLiveForm.insertData();        
     }  
     if(rt == 1){
     //alert("Actualiza");
       this.a_updatePersona.input.setValue("idp", _persona);
       this.a_updatePersona.input.setValue("pbool", _bool);
       this.a_updatePersona.update();
     }   
      
    } catch(e) {
      console.error('ERROR IN returnValueIfExistsSuccess: ' + e); 
    }},
  insertVerificacionPersonaLiveFormSuccess: function(inSender, inData) {
    try {
      //verificacion del registro en ActualizacionGrupoFamiliar
      var _persona= this.personaSelect.getDataValue();
      this.getFamiliarGrupebyIdPersona.input.setValue("idp", _persona);     
      this.getFamiliarGrupebyIdPersona.update();
      alert("Mensaje del sistema:\n\nLa actualización se ha guardado exitosamente. Por favor cambie el integrante del grupo familiar y realice el proceso nuevamente.");
 
    } catch(e) {
      console.error('ERROR IN insertVerificacionPersonaLiveFormSuccess: ' + e); 
    }},
  getFamiliarGrupebyIdPersonaSuccess: function(inSender, inDeprecated) {
    try {
     var _json = this.getFamiliarGrupebyIdPersona.getItem(0);
     var _grupoFamiliar= _json.data.idgrupo;
     this.returnValueIfGrupoFmailiarExists.input.setValue("idg", _grupoFamiliar);
     this.returnValueIfGrupoFmailiarExists.update();
    } catch(e) {
      console.error('ERROR IN getFamiliarGrupebyIdPersonaSuccess: ' + e); 
    } 
  },
  returnValueIfGrupoFmailiarExistsSuccess: function(inSender, inDeprecated) {
     var _json= this.returnValueIfGrupoFmailiarExists.getItem(0);
     var _valor= _json.data.actualizado;
       if(_valor == 0){
         //alert("Creemos que aun quedan personas por actualizar!");
         this.middlePanel.hide();
         this.space1.hide();
         this.instructivo.show();
         this.headPanel.show();
         this.contentPanel.show();
         this.footerPanel.show();        
       }
       
       if(_valor == 1){  
         this.headPanel.hide();
         this.instructivo.hide();
         this.contentPanel.hide();
         this.footerPanel.hide();
         this.space1.show();
         this.middlePanel.show();    
        /* var _string= this.personaSelect.getDisplayValue();
         var _codigo= _string.substring(0,5);
         console.log(_codigo);
         if(_codigo >= 13000 && _codigo <=13999){
           //alert("Aparecera una panel con la opcion de CONTINUAR! Bienvenido");
          /* this.headPanel.hide();
           this.instructivo.hide();
           this.contentPanel.hide();
           this.footerPanel.hide();
           this.space1.show();
           this.middlePanel.show(); 
         }
         if(_codigo < 13000 || _codigo > 13999){
          this.promocionSv.input.setValue("codigo", _codigo); 
          this.promocionSv.update();           
         }   */     
       }     
    },
  a_updatePersonaSuccess: function(inSender, inDeprecated) {
    try {
     this.insertVerificacionPersonaLiveFormSuccess();  
    } catch(e) {
      console.error('ERROR IN a_updatePersonaSuccess: ' + e); 
    }},
  boton_btClick: function(inSender, inEvent) {
    try {
     main.enfermeria_butt.show();
      
    } catch(e) {
      console.error('ERROR IN boton_continuarClick: ' + e); 
    }},
  a_getRoleByUsernameSVSuccess: function(inSender, inDeprecated) {
    try {
     var _json= this.a_getRoleByUsernameSV.getItem(0);
     var _idtipo= _json.data.idtipo;
     
     if(_idtipo == 1){
        this.headPanel.hide();
        this.boton_actualizar.hide();
        this.middlePanel.hide();
        this.contentPanel.hide();
        this.personaLivePanel1.hide();
        this.nonAcepted_panel.show();

     }if(_idtipo > 1){ 
        this.middlePanel.hide();
        this.nonAcepted_panel.hide(); 
        this.headPanel.show();
        this.personaLivePanel1.show();      
        this.boton_actualizar.show(); 
        this.contentPanel.show();
      }
      
    } catch(e) {
      console.error('ERROR IN a_getRoleByUsernameSVSuccess: ' + e); 
    } 
  },
  boton_continuar1Click: function(inSender, inEvent) {
    try {
      this.salirAprendoz.update();
      app.pageDialog.dismiss("ActualizaDatos");
 
    } catch(e) {
      console.error('ERROR IN boton_continuar1Click: ' + e); 
    } 
  },
  personaLiveForm1BeginUpdate: function(inSender) {
      var _tipo = this.personaDataGrid1.selectedItem.getData().tipoPersona.idTipoPersona;
      if(_tipo==1){
        //readonly
        this.apellido1Editor1.setReadonly(true);
        this.apellido2Editor1.setReadonly(true);
        this.nombre1Editor1.setReadonly(true);
        this.nombre2Editor1.setReadonly(true);
        //ocultar datos laborales
        this.panel_laboral.hide();
        this.encabezado_panel_laboral.hide();
        this.municipioEditor1.hide();
        this.departamentoEditor1.hide();
        this.hijoDeExalumnoEditor1.hide();
        this.parentescoEditor1.hide();
        this.nivelAcademicoEditor1.hide();
        this.noTarjetaCredito.hide();
        //mostrar informacion hospitalaria
        this.panel_medica.show();
        this.saludPrepagadaEditor1.show();
        this.numeroContratoSaludEditor1.show();
        this.clinicaEmergenciaEditor1.show();
        this.tipoSangreEditor1.show();
        this.gradoIngresoEditor1.show();
        this.colegioAnteriorEditor1.show();
        this.epsEditor1.show();
        this.viveConEditor1.show();
        this.fechaIngresoEditor1.show();
        
        //valores por defecto
        //this.gradoIngresoEditor1.setDisplayValue("PREJARDÍN");
        this.nacionalidadEditor1.setDisplayValue("colombiano");
        // this.fechaIngresoEditor1.setDataValue(new Date("2013-08-14"));
        //datos laborales ocultos
        this.celularEditor1.setDataValue("");
        this.cargoEditor1.setDataValue("");
        this.empresaEditor1.setDataValue("");
        this.profesionEditor1.setDataValue("");
        this.municipioEditor1.setDataValue("");
        this.departamentoEditor1.setDataValue("");
        this.direccionOficinaEditor1.setDataValue("");
        this.telefonoOficinaEditor1.setDataValue("");

      }if(_tipo > 1) {
        //readonly
        this.apellido1Editor1.setReadonly(true);
        this.apellido2Editor1.setReadonly(true);
        this.nombre1Editor1.setReadonly(true);
        this.nombre2Editor1.setReadonly(true);
        /**info laboral**/
        this.panel_laboral.show();
        this.encabezado_panel_laboral.show();
        this.celularEditor1.show();
        this.cargoEditor1.show();
        this.empresaEditor1.show();
        this.profesionEditor1.show();
        this.municipioEditor1.show();
        this.departamentoEditor1.show();
        this.direccionOficinaEditor1.show();
        this.telefonoOficinaEditor1.show();
        this.hijoDeExalumnoEditor1.show();
        this.parentescoEditor1.show();
        this.nivelAcademicoEditor1.show();

        //ocultando informacion hospitalaria 
        this.encabezado_panel_medica.hide();
        this.panel_medica.hide();
        this.saludPrepagadaEditor1.hide();
        this.numeroContratoSaludEditor1.hide();
        this.clinicaEmergenciaEditor1.hide();
        this.tipoSangreEditor1.hide();
        this.gradoIngresoEditor1.hide();
        this.colegioAnteriorEditor1.hide();
        this.epsEditor1.hide();
        this.viveConEditor1.hide();
        this.fechaIngresoEditor1.hide();
        
        //valores por defecto
        this.nacionalidadEditor1.setDisplayValue("colombiano");
        this.fechaIngresoEditor1.setDataValue(new Date("2013-08-14"));
        
        this.saludPrepagadaEditor1.setDataValue("");
        this.numeroContratoSaludEditor1.setDataValue("");
        this.clinicaEmergenciaEditor1.setDataValue("");
        this.tipoSangreEditor1.setDisplayValue("NO APLICA");
        this.gradoIngresoEditor1.setDataValue("");
        this.colegioAnteriorEditor1.setDataValue("");
        this.viveConEditor1.setDisplayValue("NO APLICA");
        this.noTarjetaCredito.show();
        //this.fechaIngresoEditor1.setDataValue(new Date());
      }
  },
  boton_continuarClick: function(inSender, inEvent) {
    try {
     /*botones*/
     main.actualizacion_butt.hide();
     main.enfermeria_butt.hide();
     main.servicios_butt.hide();
     main.responsable_butt.hide();
     main.documentos_butt.hide();
     main.pago_butt.hide();
     main.preparacion_butt.hide();
     main.enfermeria_butt.show(); 

     /*paneles*/ 
     main.panel_servicios.hide();
     main.reponsable_pagos.hide();
     main.impresion_documentos.hide();
     main.pagos.hide();
     main.page_ActualizaDatos.hide();
     main.top_banner_servicios.hide();
     main.top_banner.show();
     main.panel_selector_principal.show();
     main.header_message.show();
     main.ficha_medica.show();   
      
    } catch(e) {
      console.error('ERROR IN boton_continuarClick: ' + e); 
    } 
  },
  roundedButton1Click: function(inSender, inEvent) {
    try {
     this.promocionEditor1.show();
      
    } catch(e) {
      console.error('ERROR IN roundedButton1Click: ' + e); 
    } 
  },
  hijoDeExalumnoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _isChecked=  this.hijoDeExalumnoEditor1.getDataValue();
     if(_isChecked== true){
       this.promocionEditor1.show(); 
     }
     if(_isChecked== false){
       this.promocionEditor1.hide(); 
     }
    } catch(e) {
      console.error('ERROR IN hijoDeExalumnoEditor1Change: ' + e); 
    }},
  paisLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var pais= this.paisLookup1.getDataValue().idPais;
     this.ls_departamentos.filter.setValue("pais.idPais", pais);
     this.ls_departamentos.update(); 
      
    } catch(e) {
      console.error('ERROR IN paisLookup1Change: ' + e); 
    }},
  
  nacionalidadEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var tiponacionalidad= this.nacionalidadEditor1.getDataValue();
     var pais= this.paisLookup1.getDataValue().idPais;
     if(tiponacionalidad == "colombiano"){
       this.ls_departamentos.filter.setValue("pais.idPais", pais);
       this.ls_departamentos.update();    
       this.departamentoEditor1.setDisplayValue("Bogotá D.C");
       this.lugarNacimientoMunicipioEditor1.setDataValue("Bogotá D.C");
       
       this.paisDomicilioEditor1.setDataValue("Colombia");
       this.departamentoEditor1.setDataValue("Bogotá D.C");
       this.municipioEditor1.setDataValue("Bogotá D.C");
     }
      
    } catch(e) {
      console.error('ERROR IN nacionalidadEditor1Change: ' + e); 
    }},
  lugarExpedicionDepartamentoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _depto= this.lugarExpedicionDepartamentoEditor1.getDataValue();
     if(_depto == "Extranjero"){
       this.lugarExpedicionMunicipioEditor1.setCaption("Lugar expedición");      
     }else{this.lugarExpedicionMunicipioEditor1.setCaption("Ciudad de expedición");}  
     if(_depto == "Bogotá D.C"){
       this.lugarExpedicionMunicipioEditor1.setDataValue("Bogotá D.C");
     }  
    } catch(e) {
      console.error('ERROR IN lugarExpedicionDepartamentoEditor1Change: ' + e); 
    }},
  promocionSvSuccess: function(inSender, inDeprecated) {
    try {
     // debugger;
     // var _json= this.promocionSv.getItem(0);
     // var _academica= _json.data.academico;
     // var _financiera= _json.data.financiera;   
     // if(_academica == false && _financiera == true ){
     //   alert("Mensaje informativo:\n\nAprendoz ha encontrado que el estudiante esta pendiente Académicamente.\n\nPor favor comuníquese con Coordinador de Grupo.");
     // }
     // if(_financiera == false && _academica == true ){
     //   alert("Mensaje informativo:\n\nAprendoz ha encontrado que el estudiante esta pendiente Financieramente.\n\nPor favor comuníquese con Giovanny Renteria al PBX 7496000 Ext 4103");
     // }
     // if(_academica == false && _financiera == false){
     //   alert("Mensaje informativo:\n\nAprendoz ha encontrado que el estudiante esta pendiente Financieramente y Académicamente.\n\n");
     // }
     // if(_academica == true && _financiera == true){
     //  this.headPanel.hide();
     //  this.instructivo.hide();
     //  this.contentPanel.hide();
     //  this.footerPanel.hide();
     //  this.space1.show();
     //  this.middlePanel.show();  
     // }
      
    } catch(e) {
      console.error('ERROR IN promocionSvSuccess: ' + e); 
    } 
  },
  _end: 0
});             