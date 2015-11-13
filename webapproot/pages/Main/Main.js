Date.prototype.getWeek = function() {
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}

dojo.declare("Main", wm.Page, {
  start: function() {
   /**Funcion de Dojo**/
    app.pageDialog.showPage("Mensaje_inicio", false, 900, 600);
    dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
  },
  
  mySessionExpiredMethod: function(){
   /* alert("Aviso importante: Sesión expirada \n\n"+ "Su sesión ha excedido el tiempo de inactividad permitido. Por favor ingrese nuevamente.");
    window.location.reload();*/
  }, 
 
  UltimaCalifdataGrid1Selected: function(inSender, inIndex) {
      this.lavista.update();     
  },
 

  button1Click: function(inSender, inEvent) {
       url= "resources/pdfcontrato/contratoRochester2011.pdf";
           window.open(url,"_BLANK");
  },
  button2Click: function(inSender, inEvent) {
    try {
     url= "resources/pdfcontrato/Matriculas_Instrucciones_2011-2012.pdf";
       window.open(url,"_BLANK");
       
    } catch(e) {
      console.error('ERROR IN button2Click: ' + e); 
    } 
  },
  anuncioDataGrid1AfterRender: function(inSender) {
    try {
      this.anuncioDataGrid1.select(0);
      
    } catch(e) {
      console.error('ERROR IN anuncioDataGrid1AfterRender: ' + e); 
    } 
  },
  button3Click: function(inSender, inEvent) {
    try {
      this.button1Click(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN button3Click: ' + e); 
    } 
  },
  button4Click: function(inSender, inEvent) {
    try {
      this.button2Click(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN button4Click: ' + e); 
    } 
  },
  
  personaDataGrid2Selected: function(inSender, inIndex) {
    try {
     this.pic.setSource("http://aprendoz.rochester.edu.co/stds/"+this.personaDataGrid2.selectedItem.getData().codigo+".Jpeg")
     this.aux1.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().codigo);
     this.aux2.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().apellido1+" "+this.personaDataGrid2.selectedItem.getData().apellido2);
     this.aux3.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().nombre1+" "+this.personaDataGrid2.selectedItem.getData().nombre2);
     this.aux5.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().telefono);
     this.aux6.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().tipoSangre);
     this.aux7.setValue("dataValue",this.personaDataGrid2.selectedItem.getData().email);
           
     // var tipo== this.personaDataGrid2.selectedItem.getData().tipoPersona.idTipoPersona;
           if(this.personaDataGrid2.selectedItem.getData().tipoPersona.idTipoPersona == 1){
             this.cargoEditor1.disable();
             this.profesionEditor1.disable();
             this.empresaEditor1.disable();
             this.direccionOficinaEditor1.disable();
             this.telefonoOficinaEditor1.disable();
             this.celularEditor1.disable();
              
              /*habilitar*/
              this.viveConEditor1.enable();
              this.idg.enable();
              this.idi.enable();
              this.gradoIngresoEditor1.enable();
              this.cursoIngresoEditor1.enable();
              this.colegioAnteriorEditor1.enable();  
                              
           }
            else {
             this.cargoEditor1.enable();
             this.profesionEditor1.enable();
             this.empresaEditor1.enable();
             this.direccionOficinaEditor1.enable();
             this.telefonoOficinaEditor1.enable();
             this.celularEditor1.enable();
              
             /*campos a deshabilitar*/
              this.idg.disable();
              this.idi.disable();
              this.fechaRetiroEditor1.disable();
              this.colegioAnteriorEditor1.disable();
              this.rutaMEditor1.disable();
              this.rutaTEditor1.disable();
              this.tomaAlmuerzoEditor1.disable();
              this.tomaMediasNuevesEditor1.disable();
              this.tomaSeguroAccidentesEditor1.disable();
              this.noPlaquetaEditor1.disable();
              this.gradoIngresoEditor1.disable();
              this.cursoIngresoEditor1.disable();
              this.viveConEditor1.disable();
              this.fechaIngresoEditor1.disable();
              this.hijoDeExalumnoEditor1.disable();
              this.nombrePadreExalumnoEditor1.disable();
              this.promocionEditor1.disable();
          }
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2Selected: ' + e); 
    } 
  },
  aprendizajesSelected: function(inSender, inIndex) {
    try {
   
    this.Vista_Ultima_Calif.update();
      this.VariableInscAlumAp.update();
         
    } catch(e) {
      console.error('ERROR IN aprendizajesSelected: ' + e); 
    } 
  }, 
 
  button8Click: function(inSender, inEvent) {
    try {
      this.inscalumasigDataGrid1.clearSelection();
      this.apr_esperados.update();
      this.apr_logrados.update();
      
    } catch(e) {
      console.error('ERROR IN button8Click: ' + e); 
    } 
  },
 

  //cuando termine de cargar la variable de apr_logrados satisfactoriamente, se cargara el grafico 
   apr_logradosSuccess: function(inSender, inDeprecated) {
    try { 
     this.apr_esperados.update();
    
    } catch(e) {
      console.error('ERROR IN apr_logradosSuccess: ' + e); 
    } 
  },

  tabla_familia_principalSelected: function(inSender, inIndex) {
    try {
    //  this.personaLiveVariable3.update();
    //  this.nacionalidad.update();
    //  this.l_familia_tipo_persona.update();
    
    } catch(e) {
      console.error('ERROR IN dataGrid5Selected: ' + e); 
    } 
  },
  
  personaDataGrid2AfterRender: function(inSender) {
    try {
      this.personaDataGrid2.select(0);
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2AfterRender: ' + e); 
    } 
  },
  
  maxClick: function(inSender) {
    try {
      this.DETALLES.hide();
      
    } catch(e) {
      console.error('ERROR IN maxClick: ' + e); 
    } 
  },
  minClick: function(inSender) {
    try {
      this.DETALLES.show();
      
    } catch(e) {
      console.error('ERROR IN picture1Click: ' + e); 
    } 
  },
  VariableInscAlumApSuccess: function(inSender, inDeprecated) {
    try {
      this.actividadesLiveVariable.update();
      this.recursosLiveVariable.update();
    } catch(e) {
      console.error('ERROR IN VariableInscAlumApSuccess: ' + e); 
    } 
  },

 /*********************************
  *                              *
  * Implemenatacion de loaders   *
  * y listas de nacionalidades   *
  *                              *
  *********************************/
  
   nacionalidadBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN nacionalidadBeforeUpdate: ' + e); 
    } 
  },
  
  nacionalidadSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading");
       this.estados.update();
      
    } catch(e) {
      console.error('ERROR IN nacionalidadSuccess: ' + e); 
    } 
  },
  estadosBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN estadosBeforeUpdate: ' + e); 
    } 
  },
  estadosSuccess: function(inSender, inDeprecated) {
    try {
     app.pageDialog.dismiss("Loading");
     this.listaGrado.update();
      
    } catch(e) {
      console.error('ERROR IN estadosSuccess: ' + e); 
    } 
  },
  listaGradoBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN listaGradoBeforeUpdate: ' + e); 
    } 
  },
  
  listaGradoSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading");
       this.list_nacionalidades.update();
      
    } catch(e) {
      console.error('ERROR IN listaGradoSuccess: ' + e); 
    } 
  },
   
   list_nacionalidadesBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading", true, 400,120);
      
    } catch(e) {
      console.error('ERROR IN list_nacionalidadesBeforeUpdate: ' + e); 
    } 
  },
    
  layer14Show: function(inSender) {
    try {
      this.listaGrado.update();
          
    } catch(e) {
      console.error('ERROR IN layer14Show: ' + e); 
    } 
  },
   
 /************************************
  *                                  *
  * FIN Implemenatacion de loaders   *
  * y listas de nacionalidades       *
  *                                  *
  ************************************/

  paisLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var idp= this.paisLookup1.getDataValue().idPais;
      this.idpCodigo.setDataValue(idp);

    } catch(e) {
      console.error('ERROR IN paisLookup1Change: ' + e); 
    } 
  },
  
  idpCodigoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.estados.update();
      this.estados.filter.clearData();
      
    } catch(e) {
      console.error('ERROR IN idpCodigoChange: ' + e); 
    } 
  },
 
  gradoIngresoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var gradoChar= this.gradoIngresoEditor1.getDisplayValue();
      this.idg.setDataValue(gradoChar);
      this.listaCurso.update();
      
    } catch(e) {
      console.error('ERROR IN gradoIngresoEditor1Change: ' + e); 
    } 
  },
  cursoIngresoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var cursoChar= this.cursoIngresoEditor1.getDisplayValue();
      this.idi.setDataValue(cursoChar);
          
    } catch(e) {
      console.error('ERROR IN cursoIngresoEditor1Change: ' + e); 
    } 
  },
  
  personaLiveForm1BeginUpdate: function(inSender) {
    try { 
      this.idg.hide();
      this.idi.hide();
      this.gradoIngresoEditor1.show();
      this.cursoIngresoEditor1.show();
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1BeginUpdate: ' + e); 
    } 
  },
  personaLiveForm1UpdateData: function(inSender) {
    try {
      this.gradoIngresoEditor1.hide();
      this.cursoIngresoEditor1.hide();
      this.idg.show();
      this.idi.show();
    } catch(e) {
      console.error('ERROR IN personaLiveForm1UpdateData: ' + e); 
    } 
  },
  personaLiveForm1CancelEdit: function(inSender) {
    try {
      this.gradoIngresoEditor1.hide();
      this.cursoIngresoEditor1.hide();
      this.idg.show();
      this.idi.show();
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1CancelEdit: ' + e); 
    } 
  },
  personaLiveForm1DeleteData: function(inSender) {
    try {
      this.gradoIngresoEditor1.hide();
      this.cursoIngresoEditor1.hide();
      this.idg.show();
      this.idi.show();
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1DeleteData: ' + e); 
    } 
  },
  documentos_datag_estudiantesSelected: function(inSender, inIndex) {
    try {
    
     if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== true &&       this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== true ) {
      this.documentos_butt_modelo_contrato.enable();
      this.documentos_butt_matricula.enable();
      this.documentos_butt_mensualidades.enable();
      this.documentos_mensaje_informativo_error.hide();
      this.documentos_mensaje_informativo_aprovado.show();
      
      }
      
      if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== false && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== true ){
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
      this.documentos_mensaje_informativo_aprovado.hide();
      this.documentos_mensaje_informativo_error.show();
      this.documentos_mensaje_informativo_error.setCaption("Por favor comuníquese con el Director de Nivel respectivo.");
       
      }
      
      if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== true && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== false ){
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
      this.documentos_mensaje_informativo_aprovado.hide();
      this.documentos_mensaje_informativo_error.show();
      this.documentos_mensaje_informativo_error.setCaption("Por favor comuníquese con Facturación y Cartera al teléfono 749 6000 Ext.: 4103");
     
      }
      
      if(this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoAcademico== false && this.documentos_datag_estudiantes.selectedItem.getData().id.autorizadoFinanciera== false ){
     // alert("ambos"); 
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
      this.documentos_mensaje_informativo_aprovado.hide();
      this.documentos_mensaje_informativo_error.show();
      this.documentos_mensaje_informativo_error.setCaption("El estudiante no cumple con los requisitos para empezar el proceso de matrícula.</br> Por favor comuníquese con el Director de Nivel respectivo y/o Facturación y Cartera al teléfono 749 6000 Ext.: 4103");
       
      }
      
    } catch(e) {
      console.error('ERROR IN documentos_datag_estudiantesSelected: ' + e); 
    } 
  },
  documentos_butt_modelo_contratoClick: function(inSender, inEvent) {
    try {
      url= "services/reciboMatricula.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN documentos_butt_modelo_contratoClick: ' + e); 
    } 
  },
  documentos_butt_matriculaClick: function(inSender, inEvent) {
    try {
       url= "services/reciboPagoBancos.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN documentos_butt_matriculaClick: ' + e); 
    } 
  },
  documentos_butt_mensualidadesClick: function(inSender, inEvent) {
    try {
      url= "services/reciboMensualidades.download?method=getReport&idp="+this.documentos_datag_estudiantes.selectedItem.getData().id.idPersona;
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN documentos_butt_mensualidadesClick: ' + e); 
    } 
  },
  Informacion_documentosShow: function(inSender) {
    try {
      this.l_documentos_Vista_Personas_promocion.update();
      this.documentos_butt_modelo_contrato.disable();
      this.documentos_butt_matricula.disable();
      this.documentos_butt_mensualidades.disable();
  
    } catch(e) {
      console.error('ERROR IN Informacion_documentosShow: ' + e); 
    } 
  },
  ver_ejemploClick: function(inSender, inEvent) {
    try {
      this.imagen.show();
      
    } catch(e) {
      console.error('ERROR IN ver_ejemploClick: ' + e); 
    } 
  },
  cerrarClick: function(inSender, inEvent) {
    try {
      this.imagen.hide();

    } catch(e) {
      console.error('ERROR IN cerrarClick: ' + e); 
    } 
  },
  a_sv_sendMail_requestSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Message1");
      app.pageDialog.showPage("Message2", false, 260,130);
      
    } catch(e) {
      console.error('ERROR IN sendMail_requestSuccess: ' + e); 
    } 
  },
  
  a_sv_sendMailPermanentSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Message1");
      app.pageDialog.showPage("Message2", false, 260,130);
      
    } catch(e) {
      console.error('ERROR IN a_sv_sendMailCordinators_requestSuccess: ' + e); 
    } 
  },
  
  a_sv_sendMail_requestError: function(inSender, inError) {
    try {
      alert("Nope. Algo esta mal!");
      
    } catch(e) {
      console.error('ERROR IN sendMail_requestError: ' + e); 
    } 
  },
  
  transporte_menu_rutasClick: function(inSender) {
    try {
      this.transporte_enviar_solicitudes.hide();
      this.transporte_enviar_none.hide();
      this.transporte_enviar_programacion.hide();
      this.transporte_enviar_rutas.show();
      /*paneles*/
      this.transporte_panel_novedades.hide(); 
      this.transporte_panel_solicitudes.hide();      
      this.transporte_panel_rutas.show();
      //this.spacer1.setWidth("100%");
      
    } catch(e) {
      console.error('ERROR IN transporte_menu_rutasClick: ' + e); 
    } 
  },
  transporte_menu_programacionClick: function(inSender) {
    try {
      this.transporte_enviar_solicitudes.hide();
      this.transporte_enviar_none.hide();    
      this.transporte_enviar_rutas.hide();
      this.transporte_enviar_programacion.show();
      
      /*acciones en paneles*/     
      this.transporte_panel_rutas.hide();
      this.transporte_panel_solicitudes.hide();
      this.transporte_panel_novedades.show();
      
    } catch(e) {
      console.error('ERROR IN transporte_menu_novedadesClick: ' + e); 
    } 
  },
  novedadesLiveForm1BeginInsert: function(inSender) {
    try {
      this.personaLookup2.setValue("dataValue", this.transporte_alumnos.selectedItem.getData().id.idPersona);
      this.aprobacionDirNivelEditor1.setDataValue(0);
      this.aprobacionCoordinadorEditor1.setDataValue(0);
      this.aprobacionTransporteEditor1.setDataValue(0);
      this.fechaProgramadaEditor2.setDataValue(new Date());
      
    } catch(e) {
      console.error('ERROR IN novedadesLiveForm1BeginInsert: ' + e); 
    } 
  },
  horaProgramadaEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var getHora = this.horaProgramadaEditor1.getDataValue();
      this.horaActualSalidaEditor1.setDataValue(getHora);
      
    } catch(e) {
      console.error('ERROR IN horaProgramadaEditor1Change: ' + e); 
    } 
  },
  
  recargosClick: function(inSender, inEvent) {
    try {
      var idp = 11088;
      url= "services/reciboExtractos.download?method=getReport&idp="+idp;
          window.open(url,"_BLANK"); 
    } catch(e) {
      console.error('ERROR IN recargosClick: ' + e); 
    } 
  },
  transporte_menu_solicitudesClick: function(inSender) {
    try {
      this.transporte_enviar_rutas.hide();
      this.transporte_enviar_none.hide();
      this.transporte_enviar_programacion.hide();
      this.transporte_enviar_solicitudes.show();
      /*acciones en paneles*/
      this.transporte_panel_novedades.hide();
      this.transporte_panel_rutas.hide();
      this.transporte_panel_solicitudes.show();
      
    } catch(e) {
      console.error('ERROR IN transporte_menu_solicitudesClick: ' + e); 
    } 
  },
  pestana_rutasClick: function(inSender, inEvent) {
    try {
      this.transporte_menu_rutasClick(inSender, inEvent);
      this.transporte_panel_novedades.hide();
      this.transporte_panel_solicitudes.hide();
      this.transporte_panel_rutas.show();
      
    } catch(e) {
      console.error('ERROR IN pestana_rutasClick: ' + e); 
    } 
  },
  pestana_programacionClick: function(inSender, inEvent) {
    try {     
      this.transporte_menu_programacionClick(inSender);
      this.transporte_panel_solicitudes.hide();
      this.transporte_panel_rutas.hide();
      this.transporte_panel_novedades.show();
      
    } catch(e) {
      console.error('ERROR IN pestana_programacionClick: ' + e); 
    } 
  },
  pestana_solicitudesClick: function(inSender, inEvent) {
    try {     
      this.transporte_menu_solicitudesClick(inSender);
      this.transporte_panel_rutas.hide();
      this.transporte_panel_novedades.hide();
      this.transporte_panel_solicitudes.show();
      
    } catch(e) {
      console.error('ERROR IN pestana_solicitudesClick: ' + e); 
    } 
  },
  solicitudesShow: function(inSender) {
    try {
      //this.transporte_lista_personas.update();
      //this.a_lista_grupoFamiliar.update();
      
    } catch(e) {
      console.error('ERROR IN solicitudesShow: ' + e); 
    } 
  },
  rutasLiveForm1BeginInsert: function(inSender) {
    try {
      this.numeroRutaEditor1.setDataValue(0);  
      this.nombreConductorEditor1.setDataValue("no aplica...");
      this.nombreMonitoraEditor1.setDataValue("no aplica...");
     
    } catch(e) {
      console.error('ERROR IN rutasLiveForm1BeginInsert: ' + e); 
    } 
  },
  transporte_alumnosSelected: function(inSender, inIndex) {
    try {
      //acciones para HQL de padres, madres, acudientes
      // this.l_sv_solicitudes_informacionPadre.input.setValue("grupo",     this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
      // this.l_sv_solicitudes_informacionPadre.update();
      // this.l_sv_solicitudes_informacionMadre.input.setValue("grupo", this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
      // this.l_sv_solicitudes_informacionMadre.update();
      // this.l_sv_solicitudes_informacionAcudiente.input.setValue("grupo", this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar);
      // this.l_sv_solicitudes_informacionAcudiente.update();
      
      // //Acciones coordinador de curso
      // var idPersona= this.transporte_alumnos.selectedItem.getData().id.idPersona;
      // this.a_getCordinators_byId.input.setValue("id", idPersona);
      // this.a_getCordinators_byId.update();

      //acciones de la seleccion
      //this.rutasLiveVariable1.update();
      //this.a_lista_grupoFamiliar.update();
      //this.inscalumtransporteLiveVariable1.update();
      //this.transporte_lista_rutas_dias.update();
      //this.novedadesLiveVariable1.update();
      //this.newButton5.enable();
      //this.newButton4.enable();
      
    } catch(e) {
      console.error('ERROR IN transporte_alumnosSelected: ' + e); 
    } 
  },
  inscalumtransporteLiveForm1BeginInsert: function(inSender) {
    try {
      this.personaLookup3.setDataValue(this.transporte_alumnos.selectedItem.getData().id.idPersona);
      
    } catch(e) {
      console.error('ERROR IN inscalumtransporteLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  inscalumtransporteDataGrid1Selected: function(inSender, inIndex) {
    try {
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByLunesRuta.numeroRuta > 0){
        this.rutasByLunesRutaLookup1.disable();       
      }else{this.rutasByLunesRutaLookup1.enable();}
        
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByMartesRuta.numeroRuta > 0){
        this.rutasByMartesRutaLookup1.disable();       
      }else{this.rutasByMartesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByMiercolesRuta.numeroRuta > 0){
        this.rutasByMiercolesRutaLookup1.disable();       
      }else{this.rutasByMiercolesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByJuevesRuta.numeroRuta > 0){
        this.rutasByJuevesRutaLookup1.disable();       
      }else{this.rutasByJuevesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByViernesRuta.numeroRuta > 0){
        this.rutasByViernesRutaLookup1.disable();       
      }else{this.rutasByViernesRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasBySabadoRuta.numeroRuta > 0){
        this.rutasBySabadoRutaLookup1.disable();       
      }else{this.rutasBySabadoRutaLookup1.enable();}
      
      if(this.inscalumtransporteDataGrid1.selectedItem.getData().rutasByDomingoRuta.numeroRuta > 0){
        this.rutasByDomingoRutaLookup1.disable();       
      }else{this.rutasByDomingoRutaLookup1.enable();}   
      
    } catch(e) {
      console.error('ERROR IN inscalumtransporteDataGrid1Selected: ' + e); 
    } 
  },
  
  a_getUserNameChange: function(inSender, inDisplayValue, inDataValue) {
      this.a_getInforUser.input.setValue("username", this.a_getUserName.getDataValue());
      this.a_getInforUser.update();
      this.a_getTipoPersona.input.setValue("user", this.a_getUserName.getDataValue());
      this.a_getTipoPersona.update();
      this.a_informacionUsuario.input.setValue("user", this.a_getUserName.getDataValue());
      this.a_informacionUsuario.update();
      
      var now = new Date().getTime();

         this.insert_log.setValue("accionRealizada", "ingreso_matriculas_padres");
         this.insert_log.setValue("fechaCreacion", now);
         this.insert_log.setValue("fechaModificacion", now);
         this.insert_log.setValue("tablaAfectada", "access");
         this.insert_log.setValue("usuario", this.a_getUserName.getDataValue());

         this.accessLogLiveForm.setDataSet(this.insert_log);          
         this.accessLogLiveForm.insertData();       
  },
  
  a_getInforUserSuccess: function(inSender, inDeprecated) {
    try {
     var nombre= main.a_getInforUser.getItem(0);
     var n1 = nombre.data.n1;
     var nombre2 = main.a_getInforUser.getItem(0);
     var n2 = nombre2.data.n2;
     var apellido = main.a_getInforUser.getItem(0);
     var a1 = apellido.data.a1;
     var apellido2 = main.a_getInforUser.getItem(0);
     var a2 = apellido2.data.a2;
     var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
     var tipo = main.a_getInforUser.getItem(0);
     var rol = tipo.data.tipoPe;
     var codigoFamilia = main.a_getInforUser.getItem(0);
     var codigo= codigoFamilia.data.idFamilia;
     var grupoFamiliar = main.a_getInforUser.getItem(0);
     var familia = grupoFamiliar.data.grupoFamilia;
     this.inicio_nombreCompleto_label.setCaption("BIENVENIDO, "+nombreCompleto); 
     this.inicio_grupo_familiar_laber.setCaption("Grupo familiar "+familia +" • "+" "+rol);
     this.a_getGroupCode.setDataValue(codigo);
     this.isUpdatedGrupoFamiliar.input.setValue("idg",codigo);
     this.estudiante_grupoFamiliar.input.setValue("idg", codigo);
     this.isUpdatedGrupoFamiliar.update();
     this.estudiante_grupoFamiliar.update();
     
    } catch(e) {
      console.error('ERROR IN a_getInforUserSuccess: ' + e); 
    } 
  },

  novedadesLiveForm1InsertData: function(inSender) {
   try {
    var cont= this.a_getCordinators_byId.getCount();
    var tipo= this.tipo_solcitud_editor1.getDataValue();
    /**EL TIPO DE SOLICITUD**/
    var tipo_solicitud = this.tipoSolicitudLookup1.getDataValue().idTipoSolicitud;
    var tipo_solicitud_string = this.tipoSolicitudLookup1.getDisplayValue();
    
    if(tipo== "Temporal"){
      
      //HQL captures
      //Servicio ya cargado, capturo los datos del usuario logueado en el sistema
      //con esto busco que se envie el correo electronico a quien se ha logueado
      
      var nombre= main.a_getInforUser.getItem(0);
      var n1 = nombre.data.n1;
      var nombre2 = main.a_getInforUser.getItem(0);
      var n2 = nombre2.data.n2;
      var apellido = main.a_getInforUser.getItem(0);
      var a1 = apellido.data.a1;
      var apellido2 = main.a_getInforUser.getItem(0);
      var a2 = apellido2.data.a2;
      var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
      var correoElectronico = main.a_getInforUser.getItem(0);
      var mail = correoElectronico.data.correo;
      var grupoFamiliar = main.a_getInforUser.getItem(0);
      var familia = grupoFamiliar.data.grupoFamilia;
      
      /*getter emails*/
      var correoPadre = main.l_sv_solicitudes_informacionPadre.getItem(0);
      var correop = correoPadre.data.correo;
      var correoMadre = main.l_sv_solicitudes_informacionMadre.getItem(0);
      var correom = correoMadre.data.correo;
      
      /*getter datos sobre la solicitud*/
      var horaForm = this.horaProgramadaEditor1.getDataValue();
      var fechaForm = this.fechaInicioProgramadaEditor1.getDataValue();
      var fechaForm2 = this.fechaFinProgramadaEditor2.getDataValue();
      var fechaSistema = this.fechaProgramadaEditor2.getDataValue();
      var rutaForm = this.rutasLookup1.getDisplayValue();
      var codigo = this.transporte_alumnos.selectedItem.getData().id.codigo;
      var comentario = this.observacionesEditor1.getDataValue();
      var solicitudTipo = this.tipo_solcitud_editor1.getDataValue();
      var nombreAlumno = this.transporte_alumnos.selectedItem.getData().id.nombre1+"   "+this.transporte_alumnos.selectedItem.getData().id.nombre2+" "+this.transporte_alumnos.selectedItem.getData().id.apellido1+" "+this.transporte_alumnos.selectedItem.getData().id.apellido2;

      /*getter emails cordinadores*/
      var correo1= main.a_getCordinators_byId.getItem(0)
      var c= correo1.data.correo;
      var nombre1= main.a_getCordinators_byId.getItem(0);
      var nomb1 = nombre1.data.n1;
      var nombre2 = main.a_getCordinators_byId.getItem(0);
      var nomb2 = nombre2.data.n2;
      var apellido1 = main.a_getCordinators_byId.getItem(0);
      var ape1= apellido1.data.a1;
      var apellido2 = main.a_getCordinators_byId.getItem(0);
      var ape2= apellido2.data.a2;
      var nc1= nomb1+" "+nomb2+" "+ape1+" "+ape2;
      
      /*setter datos en el ServiceVariable directo a JavaService*/
      this.a_sv_sendMail_request.input.setValue("hora", horaForm);
      this.a_sv_sendMail_request.input.setValue("tipo_sol", tipo_solicitud);
      this.a_sv_sendMail_request.input.setValue("tipo_solicitud", tipo_solicitud_string);
      this.a_sv_sendMail_request.input.setValue("correomadre", correom);
      this.a_sv_sendMail_request.input.setValue("correopadre", correop);
      this.a_sv_sendMail_request.input.setValue("fecha", fechaForm);
      this.a_sv_sendMail_request.input.setValue("fecha2", fechaForm2);     
      this.a_sv_sendMail_request.input.setValue("grupo", familia);
      this.a_sv_sendMail_request.input.setValue("nombreCompletoAlumno", nombreAlumno);
      this.a_sv_sendMail_request.input.setValue("nombreAcceso", nombreCompleto);
      this.a_sv_sendMail_request.input.setValue("ruta", rutaForm);
      this.a_sv_sendMail_request.input.setValue("fechaActual", fechaSistema);
      this.a_sv_sendMail_request.input.setValue("codigoAlumno", codigo);
      this.a_sv_sendMail_request.input.setValue("observacion", comentario);
      this.a_sv_sendMail_request.input.setValue("loggedMail", mail);
      this.a_sv_sendMail_request.input.setValue("solicitud", solicitudTipo);
      this.a_sv_sendMail_request.input.setValue("nombredocente", nc1);
      this.a_sv_sendMail_request.input.setValue("maildocente", c);
      this.a_sv_sendMail_request.update();
      
    }
    
    if(tipo== "Permanente"){
      //HQL captures
      //Servicio ya cargado, capturo los datos del usuario logueado en el sistema
      //con esto busco que se envie el correo electronico a quien se ha logueado
      
      var nombre= main.a_getInforUser.getItem(0);
      var n1 = nombre.data.n1;
      var nombre2 = main.a_getInforUser.getItem(0);
      var n2 = nombre2.data.n2;
      var apellido = main.a_getInforUser.getItem(0);
      var a1 = apellido.data.a1;
      var apellido2 = main.a_getInforUser.getItem(0);
      var a2 = apellido2.data.a2;
      var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
      var correoElectronico = main.a_getInforUser.getItem(0);
      var mail = correoElectronico.data.correo;
      var grupoFamiliar = main.a_getInforUser.getItem(0);
      var familia = grupoFamiliar.data.grupoFamilia;
      
      /*getter emails*/
      var correoPadre = main.l_sv_solicitudes_informacionPadre.getItem(0);
      var correop = correoPadre.data.correo;
      var correoMadre = main.l_sv_solicitudes_informacionMadre.getItem(0);
      var correom = correoMadre.data.correo;
      
      /*getter datos sobre la solicitud*/
      var horaForm = this.horaProgramadaEditor1.getDataValue();
      var fechaForm = this.fechaInicioProgramadaEditor1.getDataValue();
      var fechaForm2 = this.fechaFinProgramadaEditor2.getDataValue();
      var fechaSistema = this.fechaProgramadaEditor2.getDataValue();
      var rutaForm = this.rutasLookup1.getDisplayValue();
      var codigo = this.transporte_alumnos.selectedItem.getData().id.codigo;
      var comentario = this.observacionesEditor1.getDataValue();
      var solicitudTipo = this.tipo_solcitud_editor1.getDataValue();
      var nombreAlumno = this.transporte_alumnos.selectedItem.getData().id.nombre1+"   "+this.transporte_alumnos.selectedItem.getData().id.nombre2+" "+this.transporte_alumnos.selectedItem.getData().id.apellido1+" "+this.transporte_alumnos.selectedItem.getData().id.apellido2;

      /*getter emails cordinadores*/
      var correo1= main.a_getCordinators_byId.getItem(0)
      var c= correo1.data.correo;
      var nombre1= main.a_getCordinators_byId.getItem(0);
      var nomb1 = nombre1.data.n1;
      var nombre2 = main.a_getCordinators_byId.getItem(0);
      var nomb2 = nombre2.data.n2;
      var apellido1 = main.a_getCordinators_byId.getItem(0);
      var ape1= apellido1.data.a1;
      var apellido2 = main.a_getCordinators_byId.getItem(0);
      var ape2= apellido2.data.a2;
      var nc1= nomb1+" "+nomb2+" "+ape1+" "+ape2;
      
      /*setter datos en el ServiceVariable directo a JavaService*/
      this.a_sv_sendMailPermanent.input.setValue("hora", horaForm);
      this.a_sv_sendMailPermanent.input.setValue("tipo_sol", tipo_solicitud);
      this.a_sv_sendMailPermanent.input.setValue("tipo_solicitud", tipo_solicitud_string);
      this.a_sv_sendMailPermanent.input.setValue("correomadre", correom);
      this.a_sv_sendMailPermanent.input.setValue("correopadre", correop);
      this.a_sv_sendMailPermanent.input.setValue("fecha", fechaForm);
      this.a_sv_sendMailPermanent.input.setValue("fecha2", fechaForm2);     
      this.a_sv_sendMailPermanent.input.setValue("grupo", familia);
      this.a_sv_sendMailPermanent.input.setValue("nombreCompletoAlumno", nombreAlumno);
      this.a_sv_sendMailPermanent.input.setValue("nombreAcceso", nombreCompleto);
      this.a_sv_sendMailPermanent.input.setValue("ruta", rutaForm);
      this.a_sv_sendMailPermanent.input.setValue("fechaActual", fechaSistema);
      this.a_sv_sendMailPermanent.input.setValue("codigoAlumno", codigo);
      this.a_sv_sendMailPermanent.input.setValue("observacion", comentario);
      this.a_sv_sendMailPermanent.input.setValue("loggedMail", mail);
      this.a_sv_sendMailPermanent.input.setValue("solicitud", solicitudTipo);
      this.a_sv_sendMailPermanent.input.setValue("nombredocente", nc1);
      this.a_sv_sendMailPermanent.input.setValue("maildocente", c);
      this.a_sv_sendMailPermanent.update();
    }
      
      
    } catch(e) {
      console.error('ERROR IN novedadesLiveForm1InsertData: ' + e); 
    } 
  },
   
  a_sv_sendMail_requestBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Message1", true, 280,120);
   
    } catch(e) {
      console.error('ERROR IN a_sv_sendMail_requestBeforeUpdate: ' + e); 
    } 
  },
  picture1Click: function(inSender) {
    try {
      if(dojo.isIE >= 6){ // only IE6 and below
        url= "http://www.iegallery.com/Addons/Details/14299";
        window.open(url,"_BLANK"); 
        
      }
      
      if(dojo.isSafari >= 4){ // only IE6 and below
        url= "http://s3.amazonaws.com/diigo/as/update/as-1.2.safariextz";
        window.open(url,"_BLANK");
         
      }
      
      if(dojo.isFF >= 10){ // only Firefox 10 and lower
        url= "http://addons.mozilla.org/firefox/downloads/latest/287841/addon-287841-latest.xpi?src=dp-btn-primary";
        window.open(url,"_BLANK");  
      }

      if(dojo.isOpera >= 8){ // only Opera
        alert("This Extension is not available for Opera Web Browser. We recomend use Google Chrome or Mozilla Firefox.");
        
      }
      
      if(dojo.isChrome >= 12){
        url= "http://chrome.google.com/webstore/detail/alelhddbbhepgpmgidjdcjakblofbmce?utm_source=gmail";
        window.open(url,"_BLANK"); 
   
      }
     
    } catch(e) {
      console.error('ERROR IN screenshotClick: ' + e); 
    } 
  },
  
  a_getCordinators_byIdSuccess: function(inSender, inDeprecated) {
    try {
      /*getter emails cordinadores*/
      var correo1= main.a_getCordinators_byId.getItem(0)
      var c= correo1.data.correo;
      var nombre1= main.a_getCordinators_byId.getItem(0);
      var nomb1 = nombre1.data.n1;
      var nombre2 = main.a_getCordinators_byId.getItem(0);
      var nomb2 = nombre2.data.n2;
      var apellido1 = main.a_getCordinators_byId.getItem(0);
      var ape1= apellido1.data.a1;
      var apellido2 = main.a_getCordinators_byId.getItem(0);
      var ape2= apellido2.data.a2;
  
    } catch(e) {
      console.error('ERROR IN a_getCordinators_byIdSuccess: ' + e); 
    } 
  },
  
  a_sv_sendMailPermanentError: function(inSender, inError) {
    try {
      alert("Nope. Algo esta mal!");
      
    } catch(e) {
      console.error('ERROR IN a_sv_sendMailCordinators_requestError: ' + e); 
    } 
  },
  a_sv_sendMailPermanentBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Message1", true, 280,120);
      
    } catch(e) {
      console.error('ERROR IN a_sv_sendMailCordinators_requestBeforeUpdate: ' + e); 
    } 
  },

  tipoSolicitudLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     var idtipo=  this.tipoSolicitudLookup1.getDataValue().idTipoSolicitud;
     
      if(idtipo == 1 ){
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.show();  
        this.relatedEditor3.hide();/**/
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();/**/
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.rutasLookup1.setDisplayValue("[...] - ...");
        
      }
      if(idtipo == 2 ){
        var valueToFilter = this.transporte_alumnos.selectedItem.getData().id.grupoFamiliarIdGrupoFamiliar;
        this.transporte_lista_rutas_dias.filter.setValue("grupoFamiliar.idGrupoFamiliar", valueToFilter);
        this.transporte_lista_rutas_dias.update(); 
        this.horaProgramadaEditor1.hide();
        this.panel_dias.show();         
        this.relatedEditor3.show();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.horaProgramadaEditor1.setDataValue(new Date());

      }
      if(idtipo == 3 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide(); 
        this.horaActualSalidaEditor1.hide();  
        this.transporte_lista_rutas_dias.filter.clearData();          
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.observacionesEditor1.show();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);  
        this.rutasLookup1.setDisplayValue("[...] - ...");    
        
      }
      if(idtipo == 4 ){
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();   
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());        
        this.rutasLookup1.setDisplayValue("[...] - ...");  
             
      }
      if(idtipo == 5 ){ 
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());        
        this.rutasLookup1.setDisplayValue("[...] - ...");  
              
      }
      if(idtipo == 6 ){ 
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();        
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.rutasLookup1.setDisplayValue("[...] - ...");  
            
      }
      if(idtipo == 7 ){
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        this.horaProgramadaEditor1.setDataValue(new Date());
        this.horaActualSalidaEditor1.setDataValue(new Date());
        this.rutasLookup1.setDisplayValue("[...] - ...");       
      }
      
    } catch(e) {
      console.error('ERROR IN tipoSolicitudLookup1Change: ' + e); 
    } 
  },
  
  fechaFinProgramadaEditor2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var _fecha1 = this.fechaInicioProgramadaEditor1.getDataValue();
      var _fecha2 = this.fechaFinProgramadaEditor2.getDataValue();
      var _f1_format = Date(_fecha1);
      var _f2_format = Date(_fecha2);

    } catch(e) {
      console.error('ERROR IN fechaFinProgramadaEditor2Change: ' + e); 
    } 
  },
  novedadesDataGrid1Selected: function(inSender, inIndex) {
    try {
      var idtipo =  this.novedadesDataGrid1.selectedItem.getData().tipoSolicitud.idTipoSolicitud;
     
      if(idtipo == 1 ){
        this.horaProgramadaEditor1.show();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        
      }
      if(idtipo == 2 ){
        this.panel_dias.show();         
        this.relatedEditor3.show();
        this.observacionesEditor1.show();
        

      }
      if(idtipo == 3 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
        
      }
      if(idtipo == 4 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
             
      }
      if(idtipo == 5 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
       
      }
      if(idtipo == 6 ){ 
        this.transporte_lista_rutas_dias.filter.clearData();
        this.transporte_lista_rutas_dias.update();
        this.transporte_lista_rutas_dias.setValue("grupoFamiliar.idGrupoFamiliar", undefined);
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();
            
      }
      if(idtipo == 7 ){
        this.horaProgramadaEditor1.hide();  
        this.relatedEditor3.hide();
        this.panel_dias.hide();
        this.observacionesEditor1.show();
        this.horaActualSalidaEditor1.hide();   
      }
      
    } catch(e) {
      console.error('ERROR IN novedadesDataGrid1Selected: ' + e); 
    } 
  },
  inicio_ir_a_facturacionClick: function(inSender, inEvent) {
    try {
      url= "http://aprendoz.rochester.edu.co:8080/Aprendoz_Facturacion";
          window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN inicio_ir_a_facturacionClick: ' + e); 
    } 
  },
 
  tipo_solcitud_editor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      
      
    } catch(e) {
      console.error('ERROR IN tipo_solcitud_editor1Change: ' + e); 
    } 
  },

    isAuthenticatedSVSuccess: function(inSender, inDeprecated) {
    try {
     if(this.isAuthenticatedSV.dataValue = true){  
         
     }
     if(this.isAuthenticatedSV.dataValue = false){  
       app.pageDialog.showPage("SesionExpirada", true, 900, 660);  
     }
 
    } catch(e) {
      console.error('ERROR IN isAuthenticatedSVSuccess: ' + e); 
    } 
  },

  matricula_select_estudianteChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _value= this.matricula_select_estudiante.getDisplayValue();
     var _sub= _value.substring(0,5);
     if(_sub >= 13000 && _sub <=12999){
        this.controls_panel.hide();
        //this.html_nuevo.show();
        //this.html_antiguo.hide();
     }if(_sub < 13000){
        //this.controls_panel.show();
        //this.html_antiguo.show();  
        //this.html_nuevo.hide();   
     }
        
     var value= main.matricula_select_estudiante.getDataValue();
     main._fichaMedicasv.input.setValue("idp", value);
     main._fichaMedicasv.update();

     main._hqlAlergias.input.setValue("idp", value);
     main._hqlAlergias.update();
     
     var value= main.matricula_select_estudiante.getDataValue();
     if(value == undefined){
       this.asopadres_butt.disable();
       this.alimento_butt.disable();
       this.transporte_butt.disable();
       this.seguro_butt.disable();
       this.impresion_butt.disable();
       this.pagar_pse.disable();
       this.enfermeria_butt.disable();
     }
     if(value > 0){
       this.asopadres_butt.enable();
       this.alimento_butt.enable();
       this.transporte_butt.enable();
       this.seguro_butt.enable();
       this.impresion_butt.enable();
       this.enfermeria_butt.enable();
     }
     // main._fichaMedicasv.input.setValue("idp", value);
     // main._fichaMedicasv.update();
      
    } catch(e) {
      console.error('ERROR IN matricula_select_estudianteChange: ' + e); 
    }},
 
  alimento_buttClick: function(inSender, inEvent) {
    try {
     /*var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();  
     
     this.transporte.hide();
     this.seguro.hide();
     this.asopadres.hide();
     this.alimentacion.show(); */
      
    } catch(e) {
      console.error('ERROR IN alimento_buttClick: ' + e); 
    }},
  transporte_buttClick: function(inSender, inEvent) {
    try {
     /*var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();   
     
     this.alimentacion.hide();
     this.seguro.hide();
     this.asopadres.hide();
    // this.panel_boton_transporte.show();
     this.transporte.show();*/
      
    } catch(e) {
      console.error('ERROR IN transporte_buttClick: ' + e); 
    }},
  seguro_buttClick: function(inSender, inEvent) {
    try {
    /* var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();    
      
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.asopadres.hide();
     this.seguro.show(); */
    } catch(e) {
      console.error('ERROR IN seguro_buttClick: ' + e); 
    }},    
  asopadres_buttClick: function(inSender, inEvent) {
    try {
     /*this.alimentacion.hide();
     this.transporte.hide(); 
     this.seguro.hide(); 
     this.asopadres.show();*/

    } catch(e) {
      console.error('ERROR IN asopadres_buttClick: ' + e); 
    }},
  impresion_buttClick: function(inSender, inEvent) {
    try {
     var _grupofamiliar=  this.a_getGroupCode.getDataValue();
     this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar); 
     this.impresion_grupoFamiliar.update(); 

     this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
     this._verificarResponsablePagoShowPanel.update();

     this.alimentacion.hide();
     this.transporte.hide(); 
     this.adicionales.hide();
     this.seguro.hide();
     this.mensaje.hide();
     this.ficha_medica.hide();
     this.impresion.show(); 

    } catch(e) {
      console.error('ERROR IN impresion_buttClick: ' + e); 
    }},    
  home_buttClick: function(inSender) {
    try {
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.adicionales.hide();
     this.seguro.hide();
     this.ficha_medica.hide();
     this.impresion.hide();  
     this.mensaje.show();
      
    } catch(e) {
      console.error('ERROR IN home_buttClick: ' + e); 
    }},  
    actualizacion_buttClick: function(inSender, inEvent) {
    try {
      /*jQuery("#main_actualizacion_butt").css(
          {
            'background-color' : 'red'
          }
        );*/
      this.panel_servicios.hide();
      this.ficha_medica.hide();
      this.panel_botones.hide();
      this.panel_selector_principal.hide();
      this.header_message.hide();
      this.top_banner.hide();
      this.reponsable_pagos.hide();
      this.page_ActualizaDatos.show();

    } catch(e) {
      console.error('ERROR IN actualizacion_buttClick: ' + e); 
    }},

    servicios_buttClick: function(inSender, inEvent) {
    try {  
      this.ficha_medica.hide();
      this.page_ActualizaDatos.hide();
      this.top_banner.show();
      this.panel_botones.show();
      this.panel_selector_principal.show();
      this.header_message.show();
      this.panel_servicios.show();

    } catch(e) {
      console.error('ERROR IN servicios_buttClick: ' + e); 
    }},
    enfermeria_buttClick: function(inSender, inEvent) {
    try {
     this.asopadres.hide();
     this.panel_servicios.hide();
     this.page_ActualizaDatos.hide();
     this.top_banner.show();
     this.panel_selector_principal.show();
     this.header_message.show();
     this.ficha_medica.show();     
     
    } catch(e) {
      console.error('ERROR IN enfermeria_buttClick: ' + e); 
    }},  

  agregar_alimClick: function(inSender, inEvent) {
    try {
     var _iac= this.alimentosDataGrid.selectedItem.getData().idiac;
     this.a_actualizaServicio.input.setValue("idiac", _iac );
     this.a_actualizaServicio.input.setValue("inscribir", "true" );
     this.a_actualizaServicio.update();
      
    } catch(e) {
      console.error('ERROR IN agregar_alimClick: ' + e); 
    }},
  a_actualizaServicioSuccess: function(inSender, inDeprecated) {
    try {
     this.a_listadoServiciosAlimentos.update();
      
    } catch(e) {
      console.error('ERROR IN a_actualizaServicioSuccess: ' + e); 
    } 
  },
  quitar_alimClick: function(inSender, inEvent) {
    try {
     var _iac= this.alimentosDataGrid.selectedItem.getData().idiac;
     this.a_actualizaServicio.input.setValue("idiac", _iac );
     this.a_actualizaServicio.input.setValue("inscribir", "false" );
     this.a_actualizaServicio.update(); 
      
    } catch(e) {
      console.error('ERROR IN quitar_alimClick: ' + e); 
    }},
  agregar_transClick: function(inSender, inEvent) {
    try {
     var _iac= this.transporteDataGrid.selectedItem.getData().idiac;
     this.a_actualizaServicioTrans.input.setValue("idiac", _iac );
     this.a_actualizaServicioTrans.input.setValue("inscribir", "true" );
     this.a_actualizaServicioTrans.update(); 
      
    } catch(e) {
      console.error('ERROR IN agregar_transClick: ' + e); 
    } 
  },
  quitar_transClick: function(inSender, inEvent) {
    try {
     var _iac= this.transporteDataGrid.selectedItem.getData().idiac;
     this.a_actualizaServicioTrans.input.setValue("idiac", _iac );
     this.a_actualizaServicioTrans.input.setValue("inscribir", "false" );
     this.a_actualizaServicioTrans.update();  
      
    } catch(e) {
      console.error('ERROR IN quitar_transClick: ' + e); 
    } 
  },
  agregar_segClick: function(inSender, inEvent) {
    try {
     var _iac= this.seguroDataGrid.selectedItem.getData().idiac;
     this.a_actualizaServicioSeg.input.setValue("idiac", _iac );
     this.a_actualizaServicioSeg.input.setValue("inscribir", "true" );
     this.a_actualizaServicioSeg.update();   
      
    } catch(e) {
      console.error('ERROR IN agregar_segClick: ' + e); 
    } 
  },
  quitar_segClick: function(inSender, inEvent) {
    try {
     var _iac= this.seguroDataGrid.selectedItem.getData().idiac;
     this.a_actualizaServicioSeg.input.setValue("idiac", _iac );
     this.a_actualizaServicioSeg.input.setValue("inscribir", "false" );
     this.a_actualizaServicioSeg.update();   
      
    } catch(e) {
      console.error('ERROR IN agregar_segClick: ' + e); 
    } 
  },
  
  a_actualizaServicioTransSuccess: function(inSender, inDeprecated) {
    try {
     this.a_listadoServicios.update(); 
      
    } catch(e) {
      console.error('ERROR IN a_actualizaServicioTransSuccess: ' + e); 
    }},
 
  isUpdatedGrupoFamiliarSuccess: function(inSender, inDeprecated) {
    try {
     var _count= main.isUpdatedGrupoFamiliar.getCount();
       if(_count == 1){
         var idgrupo= this.a_getGroupCode.getDataValue();
         this.isUpdatedGrupoFamiliarBool.input.setValue("idg", idgrupo);
         this.isUpdatedGrupoFamiliarBool.update();
       } 
       if(_count == 0){
         //app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
       }
      
    } catch(e) {
      console.error('ERROR IN isUpdatedGrupoFamiliarSuccess: ' + e); 
    } 
  },
  
  isUpdatedGrupoFamiliarBoolSuccess: function(inSender, inDeprecated) {
    try {
      var _json= main.isUpdatedGrupoFamiliarBool.getItem(0);
      var _bool= _json.data.actualizado;
      var _count= main.isUpdatedGrupoFamiliar.getCount();
      if(_bool==1 && _count==1){        
      }      
      if(_bool==0 && _count==1){
        //app.pageDialog.showPage("ActualizaDatos", true, 900, 600);
      }

    } catch(e) {
      console.error('ERROR IN isUpdatedGrupoFamiliarBoolSuccess: ' + e); 
    } 
  }, 
  a_actualizaServicioSegSuccess: function(inSender, inDeprecated) {
    try {
     this.a_listadoServiciosSeguros.update(); 
      
    } catch(e) {
      console.error('ERROR IN a_actualizaServicioSegSuccess: ' + e); 
    }},
  
  agregar_impClick: function(inSender, inEvent) {
    try { 
     var _idgf= this.responsableDataGrid.selectedItem.getData().idGrupoFamiliar;
     this._verificarResponsablePago.input.setValue("idgf", _idgf);
     this._verificarResponsablePago.update();

     this.continuar_responsable.enable(); 
    } catch(e) {
      console.error('ERROR IN agregar_impClick: ' + e); 
    }},
  quitar_imprClick: function(inSender, inEvent) {
    try {
     var _id= this.responsableDataGrid.selectedItem.getData().idunico;
     this.updateResponsable.input.setValue("idipgf", _id);
     this.updateResponsable.input.setValue("responsable", "false");
     this.updateResponsable.update(); 

     this.continuar_responsable.disable(); 
     this.mensaje_final.setCaption("");
     this.picture10.hide();
     this.panel_documentos.hide();
      
    } catch(e) {
      console.error('ERROR IN quitar_imprClick: ' + e); 
    }},
  agregar_asoClick: function(inSender, inEvent) {
    try {
     var _iac= this.asopadresDatGrid.selectedItem.getData().idiac;
     this.a_actualizaServicioAsopadres.input.setValue("idiac", _iac );
     this.a_actualizaServicioAsopadres.input.setValue("inscribir", "true" );
     this.a_actualizaServicioAsopadres.update();    
      
    } catch(e) {
      console.error('ERROR IN agregar_asoClick: ' + e); 
    } 
  },
  quitar_asoClick: function(inSender, inEvent) {
    try {
     var _iac= this.asopadresDatGrid.selectedItem.getData().idiac;
     this.a_actualizaServicioAsopadres.input.setValue("idiac", _iac );
     this.a_actualizaServicioAsopadres.input.setValue("inscribir", "false" );
     this.a_actualizaServicioAsopadres.update();  
      
    } catch(e) {
      console.error('ERROR IN quitar_asoClick: ' + e); 
    } 
  },   
  updateResponsableSuccess: function(inSender, inDeprecated) {
    try {
     this.impresion_grupoFamiliar.update(); 
      
    } catch(e) {
      console.error('ERROR IN updateResponsableSuccess: ' + e); 
    }},
  pagare_buttClick: function(inSender, inEvent) {
    try {
     var url= "http://bit2media.com/servicios/pagare.pdf";
     window.open(url, "_BLANK");
     /* main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;    
      var _persona=   this.matricula_select_estudiante.getDataValue();
      var formatType= "PDF";
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT005",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault(); */
      
    } catch(e) {
      console.error('ERROR IN pagare_buttClick: ' + e); 
    } 
  },
  contrato_buttClick: function(inSender, inEvent) {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matricula_select_estudiante.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT023NEW",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();   
  },
  recibo_matricula_buttClick: function(inSender, inEvent) {
    try {
      
      
    } catch(e) {
      console.error('ERROR IN recibo_matricula_buttClick: ' + e); 
    } 
  },
  mensualidades_buttClick: function(inSender, inEvent) {
    try {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matricula_select_estudiante.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT006",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();   
      
    } catch(e) {
      console.error('ERROR IN mensualidades_buttClick: ' + e); 
    }},
  recibo_matricula_buttClick: function(inSender, inEvent) {
    try {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matricula_select_estudiante.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT007",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();   
      
    } catch(e) {
      console.error('ERROR IN recibo_matricula_buttClick: ' + e); 
    }},
  /*bancos_buttClick: function(inSender, inEvent) {
    try {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matricula_select_estudiante.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT007",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();   
      
    } catch(e) {
      console.error('ERROR IN bancos_buttClick: ' + e); 
    }},*/
  contrato_trans_buttClick: function(inSender, inEvent) {
    try {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matricula_select_estudiante.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT002",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();    
      
    } catch(e) {
      console.error('ERROR IN contrato_trans_buttClick: ' + e); 
    }},
  contrato_alim_buttClick: function(inSender, inEvent) {
    try {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;    
     var _persona=   this.matricula_select_estudiante.getDataValue();
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/MAT003",
               format: formatType,
               params: {idpersona: _persona}
         }
       });
       inEvent.preventDefault();    
          
    } catch(e) {
      console.error('ERROR IN contrato_trans_butt1Click: ' + e); 
    }},
  contrato_seg_buttClick: function(inSender, inEvent) {
    try { 
    var url= "http://www.rochester.edu.co/aprendoz_uploads/media/M20152016/files/SOLICITUD_DE_AFILIACION_2014VGE.pdf";
       window.open(url, "_BLANK");
      
    } catch(e) {
      console.error('ERROR IN contrato_seg_buttClick: ' + e); 
    }},
  pagare1_buttClick: function(inSender, inEvent) {
    try {
    var url= "http://www.rochester.edu.co/aprendoz_uploads/media/M20152016/files/PAGARE_2015-2016.pdf";
       window.open(url, "_BLANK");  
      
    } catch(e) {
      console.error('ERROR IN pagare1_buttClick: ' + e); 
    } 
  },
  pagar_bancoClick: function(inSender, inEvent) {
      this.continuar_final.enable();
      var url= "http://aprendoz.rochester.edu.co/recursos/Formato_de_consignacion_Banco_de_Bogota.pdf";
      window.open(url, "_BLANK");
  },  
  a_getGroupCodeChange: function(inSender, inDisplayValue, inDataValue) {
    try {
    //  this.Vista_Alumnos2.update();
    var _grupo= this.a_getGroupCode.getDataValue();
    this.getNuevo.input.setValue("grupo", _grupo);
    this.getNuevo.update();
 
    } catch(e) {
      console.error('ERROR IN a_getGroupCodeChange: ' + e); 
    }},
  a_getUserNameSvSuccess: function(inSender, inDeprecated) {
    try {
     var _username= main.a_getUserNameSv.getData().dataValue;
     main._svHideLayer.input.setValue("user", _username);     
     main._svHideLayer.update();
      
    } catch(e) {
      console.error('ERROR IN a_getUserNameSvSuccess: ' + e); 
    }},
  _svHideLayerSuccess: function(inSender, inDeprecated) {
    try {
     var json= main._svHideLayer.getItem(0);
     var _tipo= json.data.idtipo;
       
    } catch(e) {
      console.error('ERROR IN _svHideLayerSuccess: ' + e); 
    }},
  getNuevoSuccess: function(inSender, inDeprecated) {
    try {
     var _grupo= main.getNuevo.getItem(0);
     var _cont= _grupo.data.numero;
     var json= main._svHideLayer.getItem(0);
     var _tipo= json.data.idtipo;
      if(_cont> 0 && _tipo>1){
        this.matricula.show();
      }else{
        this.matricula.hide();
      } 
      
    } catch(e) {
      console.error('ERROR IN getNuevoSuccess: ' + e); 
    }},
    
    calculateAge: function(birthMonth, birthDay, birthYear){
      todayDate = new Date();
      todayYear = todayDate.getFullYear();
      todayMonth = todayDate.getMonth();
      todayDay = todayDate.getDate();
      age = todayYear - birthYear;    
      if (todayMonth < birthMonth - 1){
        age--;
      }    
      if (birthMonth - 1 == todayMonth && todayDay < birthDay){
        age--;
      }
      return age;
    },

  _fichaMedicasvSuccess: function(inSender, inDeprecated) {
     var _json   = main._fichaMedicasv.getItem(0);
     var _nombre = _json.data.nombrecompleto;
     var _emergencia = _json.data.emergencia;
     var _eps    = _json.data.eps;
     var _fecha  = _json.data.fecha;
     var _grado  = _json.data.grado;
     var _prepagada = _json.data.prepagada;
     var _rh     = _json.data.rh;
     var _telefono  = _json.data.telefono;

     var pureDate= _fecha;
     var bornDate = new Date(pureDate);   
     var yearBorn= bornDate.getFullYear();
     var monthBorn= bornDate.getMonth()+1;
     var dayBorn= bornDate.getDate();

     this.edad.setDataValue(this.calculateAge(monthBorn, dayBorn, yearBorn)+" Años"); 
     this.nombrecompleto.setDataValue(_nombre);
     this.gradoIngreso.setDataValue(_grado);
     this.rh.setDataValue(_rh);
     this.eps.setDataValue(_eps);
     this.prepagada.setDataValue(_prepagada);
     this.telefono.setDataValue(_telefono);
     this.clinica_emergencia.setDataValue(_emergencia);
  },
  pagar_pseClick: function(inSender, inEvent) {
     var _grupo= this.a_getGroupCode.getDataValue();
     var _json= main.a_getInforUser.getItem(0);
     var n1 = _json.data.n1;
     var n2 = _json.data.n2;
     var a1 = _json.data.a1;
     var a2 = _json.data.a2;
     var nombreCompleto = n1+" "+n2+" "+a1+" "+a2;
     var role = _json.data.tipoPe;
     var _documento= _json.data.documento;
     this._whoIsPayResponsible.input.setValue("idgf", _grupo);
     this._whoIsPayResponsible.update();

     this.concepto.setDataValue("PAGO_MATRICULA_2015-2016_FUND._COLEGIO_ROCHESTER");
     this.pagar_pse_butt.enable();

     var _id=  this.matricula_select_estudiante.getDataValue();
     this.getNombreAlumno.input.setValue("id", _id);
     this.getNombreAlumno.update();

     this._totalPagarSV.input.setValue("idp", _id);
     this._totalPagarSV.update();
     this.continuar_final.enable();
  },
  getNombreAlumnoSuccess: function(inSender, inDeprecated) {
    try {
     var _json =  main.getNombreAlumno.getItem(0);
     var _nombre= _json.data.nombrecompleto;
     var _codigo= _json.data.codigo;
     this.estudiante.setDataValue(_nombre);
     this.code_estudiante.setDataValue(_codigo);
      
    } catch(e) {
      console.error('ERROR IN getNombreAlumnoSuccess: ' + e); 
    } 
  },
  _totalPagarSVSuccess: function(inSender, inDeprecated) {
    try {
     var _json= main._totalPagarSV.getItem(0);
     var _valor= _json.data.totalPagar;
     this.valor.setDataValue(_valor); 
      
    } catch(e) {
      console.error('ERROR IN _totalPagarSVSuccess: ' + e); 
    } 
  },
  
  pse_logoClick: function(inSender) {
    try {  
      var psedata = {
          id : this.noDocumento.getDataValue(),
          value : this.valor.getDataValue(),
          subject : this.concepto.getDataValue(),
          idpersona : this.matricula_select_estudiante.getDataValue()
      };
       $.ajax({
        url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
        data: psedata,
        dataType: 'jsonp'
      }).done(function( msg ) {
        
      }); 
    } catch(e) {
      console.error('ERROR IN pse_logoClick: ' + e); 
    } 
  },
  pagar_pse_buttClick: function(inSender, inEvent) {
    try {
      var psedata = {
          id : this.noDocumento.getDataValue(),
          value : this.valor.getDataValue(),
          subject : this.concepto.getDataValue(),
          idpersona : this.matricula_select_estudiante.getDataValue(),
          code: this.code_estudiante.getDataValue()
      };
      
      this.pagar_pse_butt.disable();
      $.ajax({
        url: 'http://aprendoz.rochester.edu.co/enr/send/data.json',
        data: psedata,
        dataType: 'jsonp',
        success : function(data) {
          window.open(data.url);    
        },
        fail : function(data) {
          this.pagar_pse_butt.enable();
          alert("Error: " + data);
        }
      });
      
    } catch(e) {
      console.error('ERROR IN button9Click: ' + e); 
    } 
  },
  _verificarResponsablePagoSuccess: function(inSender, inDeprecated) {
    try {
     var _json= main._verificarResponsablePago.getItem(0);
     var _cont= main._verificarResponsablePago.getCount();

     if(_cont == 1){
       alert("ACCIÓN NO VALIDA:\n\nSolo debe existir un responsable por Grupo Familiar.\n\nRetire el responsable existenge (- Retirar) y a continuación elija un nuevo responsable (+ Elegir)"); 
       
     } 
     if(_cont == 0){
        var _id= this.responsableDataGrid.selectedItem.getData().idunico;
        this.updateResponsable.input.setValue("idipgf", _id);
        this.updateResponsable.input.setValue("responsable", "true");
        this.updateResponsable.update();

        this.mensaje_final.setCaption("Has click sobre cada boton, descarga e imprime cada documento, estos los necesitará en el proceso de Matrícula");
        this.picture10.show();
        this.panel_documentos.show();
     }
      
    } catch(e) {
      console.error('ERROR IN _verificarResponsablePagoSuccess: ' + e); 
    }},
  _verificarResponsablePagoShowPanelSuccess: function(inSender, inDeprecated) {
    try {
      var _cont= main._verificarResponsablePagoShowPanel.getCount();
      console.log(_cont);
      if(_cont == 1){ 
        this.continuar_responsable.enable();  
      }
      if(_cont == 0){
        this.continuar_responsable.enable();
      }  
    } catch(e) {
      console.error('ERROR IN _verificarResponsablePagoShowPanelSuccess: ' + e); 
    }},
  responsableDataGridSelected: function(inSender, inIndex) {
    try {
     this.continuar_responsable.enable();
      
    } catch(e) {
      console.error('ERROR IN responsableDataGridSelected: ' + e); 
    }},
  responsableDataGridDeselected: function(inSender, inIndex) {
    try {
     this.continuar_responsable.disable();    
    } catch(e) {
      console.error('ERROR IN responsableDataGridDeselected: ' + e); 
    }},
  _whoIsPayResponsibleSuccess: function(inSender, inDeprecated) {
    try {
     var _cont= main._whoIsPayResponsible.getCount();
     if(_cont == 1){
       var _json=  main._whoIsPayResponsible.getItem(0);
       var _dni= _json.data.dni;
       var _nombre= _json.data.nombrecompleto;
       var _tipo= _json.data.tipo;

       this.rol.setCaption(_tipo);
       this.rol.setDataValue(_nombre);
       this.noDocumento.setDataValue(_dni);
       this.resument_de_pago.show();
    }
    if(_cont == 0){
      alert("AVISO IMPORTANTE:\nEl sistema no registra un responsable de pago. Por favor elija uno e intentelo nuevamente"); 
    }

    } catch(e) {
      console.error('ERROR IN _whoIsPayResponsibleSuccess: ' + e); 
    }},
  guardar_restricciones_alimenticiasClick: function(inSender, inEvent) {

      //---> id persona
      var idpersona= this.matricula_select_estudiante.getDataValue();
      var detalles= this.detalles_importantes.getDataValue();
      var now= new Date();
      /*this._detallesAlimentos.input.setValue("idp", idpersona);
      this._detallesAlimentos.input.setValue("alergias", detalles);
      this._detallesAlimentos.input.setValue("especiales", detalles);
      this._detallesAlimentos.update();*/
      this.alimentoVar.setValue("persona.idPersona", idpersona);
      this.alimentoVar.setValue("alergias", detalles);
      this.alimentoVar.setValue("recomendacionesEspeciales", detalles);
       
      this.detalleAlimento.setDataSet(this.alimentoVar);          
      this.detalleAlimento.insertData();   
  
  },
  
  detalleAlimentoSuccess: function(inSender, inData) {   
     alert("Detalles guardados exitosamente!"); 
  },
  _hqlAlergiasSuccess: function(inSender, inDeprecated) {
     var _json=  main._hqlAlergias.getItem(0);
     var _idficha= _json.data.idficha;
     var _alergias= _json.data.alergias;
     var _medico= _json.data.medico;
     var _enfermedades = _json.data.enfermedades;
     var _antecedentesQuirurgicos = _json.data.antecedentes;
     var _medicamentosActuales= _json.data.medicamentosActualidad;
     var _medicamentosAlerta = _json.data.restricciones;
     var _recomendaciones= _json.data.recomendaciones;

     this.idFicha.setDataValue(_idficha);
     this.medico_tratante.setDataValue(_medico);
     this.alergias.setDataValue(_alergias);
     this.enfermedades.setDataValue(_enfermedades);
     this.antecedentes.setDataValue(_antecedentesQuirurgicos);
     this.medicamentos.setDataValue(_medicamentosActuales);
     this.medicamentos_no_permitidos.setDataValue(_medicamentosAlerta);
     this.recomendaciones.setDataValue(_recomendaciones);
  },
  
  guardar_fichaClick: function(inSender, inEvent) {
    var _string = this.matricula_select_estudiante.getDisplayValue();
    var _codigo = _string.substring(0,5);
    console.log(_codigo);

      if(_codigo >= 16000 && _codigo <=16999){
        var idpersona= this.matricula_select_estudiante.getDataValue();
        this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
        this._verificaExistenciaFichaMedica.update();
      }
      if(_codigo < 16000 || _codigo > 16999){
        this.hsl_promociones.input.setValue("codigo", _codigo); 
        this.hsl_promociones.update(); 
      }  
    /*var idpersona= this.matricula_select_estudiante.getDataValue();
    this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
    this._verificaExistenciaFichaMedica.update();*/     
   },
    
    hsl_promocionesSuccess: function(inSender, inDeprecated) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     var _json= this.hsl_promociones.getItem(0);
     var _academica= _json.data.academico;
     var _financiera= _json.data.financiera;  
     var _cra= _json.data.cra;

     if(_academica == false && _financiera == false && _cra==false ){
       alert("Mensaje informativo:\n\nEl estudiante tiene algo pendiente desde el punto de vista académico, administrativo y CRA. Por favor comuníquese con el Director de Nivel, Cartera (Ext. 4103) y Henry Sanchez (Ext. 4705).");
     }

     if(_academica == false && _cra==false && _financiera == true ){
       alert("Mensaje informativo:\n\nEl estudiante tiene algo pendiente desde el punto de vista académico y CRA. Por favor comuníquese con el Director de Nivel y Henry Sanchez (Ext. 4705).");
     }

     if(_academica == false && _cra==true && _financiera == false ){
       alert("Mensaje informativo:\n\nEl estudiante tiene algo pendiente desde el punto de vista académico y administrativo. Por favor comuníquese con el Director de Nivel y Cartera (Ext. 4103).");
     }

     if(_academica == false && _cra==true && _financiera == true ){
       alert("Mensaje informativo:\n\nEl estudiante tiene algo pendiente desde el punto de vista académico. Por favor comuníquese con el Director de Nivel.");
     }

     if(_academica == true && _cra==false && _financiera == false ){
       alert("Mensaje informativo:\n\nEl estudiante tiene algo pendiente desde el punto de vista administrativo y CRA. Por favor comuníquese con Cartera (Ext. 4103) y Henry Sanchez (Ext. 4705).");
     }

     if(_academica == true && _cra==false && _financiera == true ){
       alert("Mensaje informativo:\n\nEl estudiante tiene algo pendiente desde el punto de vista del CRA. Por favor comuníquese con Henry Sanchez (Ext. 4705).");
     }

     if(_academica == true && _cra==true && _financiera == false ){
       alert("Mensaje informativo:\n\nEl estudiante tiene algo pendiente desde el punto de vista administrativo. Por favor comuníquese con Cartera (Ext. 4103).");
     }

     if(_academica == true && _cra==true && _financiera == true){     
      this._verificaExistenciaFichaMedica.input.setValue("idp", idpersona);
      this._verificaExistenciaFichaMedica.update();
    } 
    } catch(e) {
      console.error('ERROR IN hsl_promocionesSuccess: ' + e); 
    }},
    
  _verificaExistenciaFichaMedicaSuccess: function(inSender, inDeprecated) {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     var _json= main._verificaExistenciaFichaMedica.getItem(0);
     var _cont= main._verificaExistenciaFichaMedica.getCount();

     var _idficha= this.idFicha.getDataValue();
     var _medico = this.medico_tratante.getDataValue();
     var _alergias= this.alergias.getDataValue();
     var _enfermedades= this.enfermedades.getDataValue();
     var _antecedentes= this.antecedentes.getDataValue();
     var _medicamentos= this.medicamentos.getDataValue();
     var _medicamentosAlerta= this.medicamentos_no_permitidos.getDataValue();
     var _recomendaciones= this.recomendaciones.getDataValue();
     
      if(_cont == 1){
        this._fichaMedicaVar.setValue("idfichaMedica", _idficha);
        this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
        this._fichaMedicaVar.setValue("medicoTratante", _medico);
        this._fichaMedicaVar.setValue("alergias", _alergias);
        this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
        this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
        this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
        this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
        this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);
        this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);          
        this.formularioFichaMedica.updateData(); 
      }
      if(_cont == 0){
        this._fichaMedicaVar.setValue("persona.idPersona", idpersona);
        this._fichaMedicaVar.setValue("medicoTratante", _medico);
        this._fichaMedicaVar.setValue("alergias", _alergias);
        this._fichaMedicaVar.setValue("enfermedadesRecientes", _enfermedades);
        this._fichaMedicaVar.setValue("antecedentesQuirurgicos", _antecedentes);
        this._fichaMedicaVar.setValue("medicamentosActualidad", _medicamentos);
        this._fichaMedicaVar.setValue("medicamentosAlerta", _medicamentosAlerta);
        this._fichaMedicaVar.setValue("recomendacionesEspeciales", _recomendaciones);

        this.formularioFichaMedica.setDataSet(this._fichaMedicaVar);          
        this.formularioFichaMedica.insertData();  
      }  
  },
  formularioFichaMedicaSuccess: function(inSender, inData) {
    try { 
     var value= main.matricula_select_estudiante.getDataValue();
     main._hqlAlergias.input.setValue("idp", value);
     main._hqlAlergias.update();

     /*botones*/
     main.actualizacion_butt.hide();
     main.responsable_butt.hide();
     main.documentos_butt.hide();
     main.pago_butt.hide();
     main.preparacion_butt.hide();
     main.enfermeria_butt.hide(); 
     this.servicios_butt.show();

     /*paneles*/
     this.panel_documentos.hide();
     this.pagos.hide(); 
     this.ficha_medica.hide();
     this.reponsable_pagos.hide();
     this.impresion_documentos.hide();
     this.pagos.hide();
     this.page_ActualizaDatos.hide();
     this.top_banner.hide();
     this.panel_selector_principal.show();
     this.header_message.show();
     //this.top_banner_servicios.show();
     this.panel_botones.show();
     this.panel_servicios.show();
     this.panel_botones.show();

     //se ejecuta el mismo boton de Alimentos();
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();  
     
     this.transporte.hide();
     this.seguro.hide();
     this.alimentacion.show();


     var _alergias= this.alergias.getDataValue(); 
     this.detalles_importantes.setDataValue(_alergias);
     
    } catch(e) {
      console.error('ERROR IN formularioFichaMedicaSuccess: ' + e); 
    }},
    
  estudiante_gradoGrupoFamiliarSuccess: function(inSender, inDeprecated) {
    try {
     debugger;
     var idpersona   = this.matricula_select_estudiante.getDataValue();
     var _json       = main.estudiante_gradoGrupoFamiliar.getItem(0); 
     debugger;
     var _grado      = _json.data.idgrado;
     var _sy         = _json.data.idsy;
     debugger;
     var _codigoTransportes    = "0035";   // TRANSPORTE COMPLETO CERCANO
     var _codigoTransportes2   = "0036";   // TRANSPORTE COMPLETO INTERMEDIO
     var _codigoTransportes3   = "0037";   // TRANSPORTE COMPLETO LEJANO
     var _codigoTransportes4   = "0038";   // TRANSPORTE MEDIO CERCANO
     var _codigoTransportes5   = "0039";   // TRANSPORTE MEDIO INTERMEDIO
     var _codigoTransportes6   = "0041";   // TRANSPORTE MEDIO LEJANO
     var _codigoAlimentos      = "0021";
     var _codigoAlimentos2     = "0022";
     var _seguroVida           = "0011";
     var _seguroAccidente      = "0012";
     var _asopadres            = "0014";
     var _asopadres2           = "0015";
     var _asopadres3           = "0016";
     var _false                = false;
     var _true                 = true;
     var _codigo               = _json.data.codigo;
     console.log(_codigo);
     debugger;
     if(_codigo >= 12000 && _codigo <= 15999){
      console.log("ingreso por #1");
       //transportes
       this.a_listadoServicios.input.setValue("idp", idpersona);
       this.a_listadoServicios.input.setValue("cod", _codigoTransportes);
       this.a_listadoServicios.input.setValue("cod2", _codigoTransportes2);
       this.a_listadoServicios.input.setValue("cod3", _codigoTransportes3);
       this.a_listadoServicios.input.setValue("cod4", _codigoTransportes4);
       this.a_listadoServicios.input.setValue("cod5", _codigoTransportes5);
       this.a_listadoServicios.input.setValue("cod6", _codigoTransportes6);
       this.a_listadoServicios.input.setValue("nuevo", _true);
       this.a_listadoServicios.input.setValue("sy", _sy);
       this.a_listadoServicios.input.setValue("idgrado", _grado);
       this.a_listadoServicios.update();
       //alimentos
       this.a_listadoServiciosAlimentos.input.setValue("idp", idpersona);
       this.a_listadoServiciosAlimentos.input.setValue("cod", _codigoAlimentos);
       this.a_listadoServiciosAlimentos.input.setValue("nuevo", _true);
       this.a_listadoServiciosAlimentos.input.setValue("sy", _sy);
       this.a_listadoServiciosAlimentos.input.setValue("cod2", _codigoAlimentos2);
       this.a_listadoServiciosAlimentos.input.setValue("cod3", _codigoAlimentos2);
       this.a_listadoServiciosAlimentos.input.setValue("idgrado", _grado);
       this.a_listadoServiciosAlimentos.update();
       //seguros    
       this.a_listadoServiciosSeguros.input.setValue("idp", idpersona);
       this.a_listadoServiciosSeguros.input.setValue("cod", _seguroVida);
       this.a_listadoServiciosSeguros.input.setValue("nuevo", _true);
       this.a_listadoServiciosSeguros.input.setValue("sy", _sy);
       this.a_listadoServiciosSeguros.input.setValue("cod2", _seguroAccidente);
       this.a_listadoServiciosSeguros.input.setValue("cod3", _seguroAccidente);
       this.a_listadoServiciosSeguros.input.setValue("idgrado", _grado);
       this.a_listadoServiciosSeguros.update();
       //asopadres
       this.a_listadoServiciosAsopadres.input.setValue("idp", idpersona);
       this.a_listadoServiciosAsopadres.input.setValue("cod", _asopadres);
       this.a_listadoServiciosAsopadres.input.setValue("cod2", _asopadres2);
       this.a_listadoServiciosAsopadres.input.setValue("cod3", _asopadres3);
       this.a_listadoServiciosAsopadres.input.setValue("nuevo", _true);
       this.a_listadoServiciosAsopadres.input.setValue("sy", _sy);
       this.a_listadoServiciosAsopadres.input.setValue("idgrado", _grado);
       this.a_listadoServiciosAsopadres.update();
     }
     
     else if(_codigo < 12000 || _codigo > 15999){ /*else if(_codigo < 12000 || _codigo >13999){*/
      console.log("ingreso por #2");
       //transportes
       this.a_listadoServicios.input.setValue("idp", idpersona);
       this.a_listadoServicios.input.setValue("cod", _codigoTransportes);
       this.a_listadoServicios.input.setValue("cod2", _codigoTransportes2);
       this.a_listadoServicios.input.setValue("cod3", _codigoTransportes3);
       this.a_listadoServicios.input.setValue("cod4", _codigoTransportes4);
       this.a_listadoServicios.input.setValue("cod5", _codigoTransportes5);
       this.a_listadoServicios.input.setValue("cod6", _codigoTransportes6);
       this.a_listadoServicios.input.setValue("nuevo", _false);
       this.a_listadoServicios.input.setValue("sy", _sy);
       this.a_listadoServicios.input.setValue("idgrado", _grado);
       this.a_listadoServicios.update();
       //alimentos
       this.a_listadoServiciosAlimentos.input.setValue("idp", idpersona);
       this.a_listadoServiciosAlimentos.input.setValue("cod", _codigoAlimentos);
       this.a_listadoServiciosAlimentos.input.setValue("nuevo", _false);
       this.a_listadoServiciosAlimentos.input.setValue("sy", _sy);
       this.a_listadoServiciosAlimentos.input.setValue("cod2", _codigoAlimentos2);
       this.a_listadoServiciosAlimentos.input.setValue("cod3", _codigoAlimentos2);
       this.a_listadoServiciosAlimentos.input.setValue("idgrado", _grado);
       this.a_listadoServiciosAlimentos.update();
       //seguros    
       this.a_listadoServiciosSeguros.input.setValue("idp", idpersona);
       this.a_listadoServiciosSeguros.input.setValue("cod", _seguroVida);
       this.a_listadoServiciosSeguros.input.setValue("nuevo", _false);
       this.a_listadoServiciosSeguros.input.setValue("sy", _sy);
       this.a_listadoServiciosSeguros.input.setValue("cod2", _seguroAccidente);
       this.a_listadoServiciosSeguros.input.setValue("cod3", _seguroAccidente);
       this.a_listadoServiciosSeguros.input.setValue("idgrado", _grado);
       this.a_listadoServiciosSeguros.update();
       //asopadres
       this.a_listadoServiciosAsopadres.input.setValue("idp", idpersona);
       this.a_listadoServiciosAsopadres.input.setValue("cod", _asopadres);
       this.a_listadoServiciosAsopadres.input.setValue("cod2", _asopadres2);
       this.a_listadoServiciosAsopadres.input.setValue("cod3", _asopadres3);
       this.a_listadoServiciosAsopadres.input.setValue("nuevo", _false);
       this.a_listadoServiciosAsopadres.input.setValue("sy", _sy);
       this.a_listadoServiciosAsopadres.input.setValue("idgrado", _grado);
       this.a_listadoServiciosAsopadres.update();
     }
     
    } catch(e) {
      console.error('ERROR IN estudiante_gradoGrupoFamiliarSuccess: ' + e); 
    }
  },
  iraTransporteClick: function(inSender, inEvent) {
    try {
     this.transporte_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN iraTransporteClick: ' + e); 
    }},
  iraSeguroClick: function(inSender, inEvent) {
    try {
     this.seguro_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN iraSeguroClick: ' + e); 
    }},
  iraFichaClick: function(inSender, inEvent) {
    try {
     this.enfermeria_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    }},
  iraFinalizarClick: function(inSender, inEvent) {
    try {
      this.impresion_buttClick(inSender, inEvent);
      
    } catch(e) {
      console.error('ERROR IN iraFinalizarClick: ' + e); 
    }},
  
  btClick: function(inSender, inEvent) {
    try {
      alert("sipp!!");
      $("#main_bt").css({"background-color": "blue"});
      
    } catch(e) {
      console.error('ERROR IN btClick: ' + e); 
    }},
  
  
  continuar_responsableClick: function(inSender, inEvent) {
    try {
     /*botones*/
     this.actualizacion_butt.hide();
     this.pago_butt.hide();
     this.preparacion_butt.hide();
     this.enfermeria_butt.hide(); 
     this.servicios_butt.hide();
     this.responsable_butt.hide();
     this.documentos_butt.show();

     /*botones de pago*/
     this.pagar_pse.enable();
     this.pagar_banco.enable();

     /*panales*/
     this.panel_documentos.hide();
     this.pagos.hide(); 
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.page_ActualizaDatos.hide();
     this.reponsable_pagos.hide();
     this.top_banner.hide();
     this.impresion_documentos.show(); 
     this.panel_documentos.show();
      
    } catch(e) {
      console.error('ERROR IN continuar_responsableClick: ' + e); 
    } 
  },
  documentos_continuarClick: function(inSender, inEvent) {
    try {
     /*botones*/
     this.actualizacion_butt.hide();
     this.preparacion_butt.hide();
     this.enfermeria_butt.hide(); 
     this.servicios_butt.hide();
     this.responsable_butt.hide();
     this.documentos_butt.hide();
     this.pago_butt.show();

     /*panales*/
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.page_ActualizaDatos.hide();
     this.reponsable_pagos.hide();
     this.impresion_documentos.hide(); 
     this.panel_documentos.hide();
     this.top_banner.hide();
     this.pagos.show();
      
    } catch(e) {
      console.error('ERROR IN documentos_continuarClick: ' + e); 
    } 
  },
  continuar_finalClick: function(inSender, inEvent) {
    try {
     /*botones*/
     this.actualizacion_butt.hide();
     this.enfermeria_butt.hide(); 
     this.servicios_butt.hide();
     this.responsable_butt.hide();
     this.documentos_butt.hide();
     this.pago_butt.hide();
     this.preparacion_butt.show();

     /*panales*/
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.page_ActualizaDatos.hide();
     this.reponsable_pagos.hide();
     this.impresion_documentos.hide(); 
     this.panel_documentos.hide();
     this.pagos.hide(); 
     this.top_banner.hide();
     this.preparacion.show();
      
    } catch(e) {
      console.error('ERROR IN continuar_finalClick: ' + e); 
    }}, 
  a_anuncioSuccess: function(inSender, inDeprecated) {
    try {
      /*var _json= main.a_anuncio.getItem(0);
      var _text= _json.data.anuncio; 
      alert(_text); */   
      
    } catch(e) {
      console.error('ERROR IN a_anuncioSuccess: ' + e); 
    }},
  volver_buttClick: function(inSender, inEvent) {
    try {
     this.actualizacion_butt.hide(); 
     this.preparacion_butt.hide();
     this.preparacion.hide();
     this.enfermeria_butt.show();
     this.ficha_medica.show();    
     this.panel_selector_principal.show();
      
    } catch(e) {
      console.error('ERROR IN volver_buttClick: ' + e); 
    }},
    /*navegacion servicios*/
  asopadres_finalizarClick: function(inSender, inEvent) {
    try {
     /*botones*/
     this.actualizacion_butt.hide();
     this.documentos_butt.hide();
     this.pago_butt.hide();
     this.preparacion_butt.hide();
     this.enfermeria_butt.hide(); 
     this.servicios_butt.hide();
     this.responsable_butt.show();

     /*panales*/ 
     this.panel_botones.hide();
     this.panel_documentos.hide();
     this.pagos.hide(); 
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.page_ActualizaDatos.hide();
     this.top_banner.hide();
     //this.top_banner_servicios.hide();
     this.reponsable_pagos.show(); 

     /*detalles de los reponsables de pagos*/
     var _grupofamiliar=  this.a_getGroupCode.getDataValue();
     this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar); 
     this.impresion_grupoFamiliar.update(); 
     this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
     this._verificarResponsablePagoShowPanel.update(); 
      
    } catch(e) {
      console.error('ERROR IN asopadres_finalizarClick: ' + e); 
    } 
  },
  atras_asopadresClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();    
      
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.asopadres.hide();
     this.seguro.show();  
      
    } catch(e) {
      console.error('ERROR IN atras_asopadresClick: ' + e); 
    } 
  },
  atras_seguroClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();   
     
     this.alimentacion.hide();
     this.seguro.hide();
     this.asopadres.hide();
     this.transporte.show(); 
      
    } catch(e) {
      console.error('ERROR IN atras_seguroClick: ' + e); 
    } 
  },
  continuar_seguroClick: function(inSender, inEvent) {
    try {
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.seguro.hide(); 
     this.asopadres.show(); 
      
    } catch(e) {
      console.error('ERROR IN continuar_seguroClick: ' + e); 
    } 
  },
  continuar_segurosClick: function(inSender, inEvent) {
    try {
      var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();    
      
     this.alimentacion.hide();
     this.transporte.hide(); 
     this.asopadres.hide();
     this.seguro.show();  
      
    } catch(e) {
      console.error('ERROR IN continuar_segurosClick: ' + e); 
    } 
  },
  volver_transportesClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();  
     
     this.transporte.hide();
     this.seguro.hide();
     this.asopadres.hide();
     this.alimentacion.show(); 
      
    } catch(e) {
      console.error('ERROR IN volver_transportesClick: ' + e); 
    } 
  },
  continuar_serviciosClick: function(inSender, inEvent) {
    try {
     var idpersona= this.matricula_select_estudiante.getDataValue();
     this.estudiante_gradoGrupoFamiliar.input.setValue("idp", idpersona);
     this.estudiante_gradoGrupoFamiliar.update();   
     
     this.alimentacion.hide();
     this.seguro.hide();
     this.asopadres.hide();
     this.transporte.show();
    } catch(e) {
      console.error('ERROR IN continuar_serviciosClick: ' + e); 
    } 
  },
  atras_preparacionClick: function(inSender, inEvent) {
    try {
     /*botones*/
     this.actualizacion_butt.hide();
     this.preparacion_butt.hide();
     this.enfermeria_butt.hide(); 
     this.servicios_butt.hide();
     this.responsable_butt.hide();
     this.documentos_butt.hide();
     this.pago_butt.show();

     /*panales*/
     this.preparacion.hide();
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.page_ActualizaDatos.hide();
     this.reponsable_pagos.hide();
     this.impresion_documentos.hide(); 
     this.panel_documentos.hide();
     this.top_banner.hide();
     this.pagos.show(); 
      
    } catch(e) {
      console.error('ERROR IN atras_preparacionClick: ' + e); 
    } 
  },
  volver_ficha_medicaClick: function(inSender, inEvent) {
    try {
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.top_banner.hide();
     this.reponsable_pagos.hide();
     this.page_ActualizaDatos.show(); 
     
     main.page_ActualizaDatos.page.middlePanel.hide();
      
    } catch(e) {
      console.error('ERROR IN volver_ficha_medicaClick: ' + e); 
    } 
  },
  volver_serviciosClick: function(inSender, inEvent) {
    try {
     /*botones*/
     this.actualizacion_butt.hide();
     this.enfermeria_butt.hide();
     this.servicios_butt.hide();
     this.responsable_butt.hide();
     this.documentos_butt.hide();
     this.pago_butt.hide();
     this.preparacion_butt.hide();
     this.enfermeria_butt.show(); 
     /*paneles*/ 
     this.panel_botones.hide();
     this.panel_servicios.hide();
     this.reponsable_pagos.hide();
     this.impresion_documentos.hide();
     this.pagos.hide();
     this.page_ActualizaDatos.hide();
     //this.top_banner_servicios.hide();
     this.top_banner.show();
     this.panel_selector_principal.show();
     this.header_message.show();
     this.ficha_medica.show();  
      
    } catch(e) {
      console.error('ERROR IN volver_serviciosClick: ' + e); 
    } 
  },
  volver_responsableClick: function(inSender, inEvent) {
      try {
      /*botones*/
     main.actualizacion_butt.hide();
     main.responsable_butt.hide();
     main.documentos_butt.hide();
     main.pago_butt.hide();
     main.preparacion_butt.hide();
     main.enfermeria_butt.hide(); 
     this.servicios_butt.show();

     /*paneles*/
     this.panel_documentos.hide();
     this.pagos.hide(); 
     this.ficha_medica.hide();
     this.reponsable_pagos.hide();
     this.impresion_documentos.hide();
     this.pagos.hide();
     this.page_ActualizaDatos.hide();
     this.top_banner.hide();
     this.panel_selector_principal.show();
     this.header_message.show();
     //this.top_banner_servicios.show();
     this.panel_botones.show();
     this.panel_servicios.show();
     this.panel_botones.show();
     
     this.transporte.hide();
     this.seguro.hide();
     this.asopadres.hide();
     this.alimentacion.show();
      
    } catch(e) {
      console.error('ERROR IN volver_responsableClick: ' + e); 
    } 
  },
  volver_impresionClick: function(inSender, inEvent) {
    try {
      /*botones*/
     this.actualizacion_butt.hide();
     this.documentos_butt.hide();
     this.pago_butt.hide();
     this.preparacion_butt.hide();
     this.enfermeria_butt.hide(); 
     this.servicios_butt.hide();
     this.responsable_butt.show();

     /*panales*/ 
     this.impresion_documentos.hide();
     this.panel_botones.hide();
     this.panel_documentos.hide();
     this.pagos.hide(); 
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.page_ActualizaDatos.hide();
     this.top_banner.hide();
     //this.top_banner_servicios.hide();
     this.reponsable_pagos.show(); 

     /*detalles de los reponsables de pagos*/
     var _grupofamiliar=  this.a_getGroupCode.getDataValue();
     this.impresion_grupoFamiliar.input.setValue("gf", _grupofamiliar); 
     this.impresion_grupoFamiliar.update(); 
     this._verificarResponsablePagoShowPanel.input.setValue("idgf", _grupofamiliar);
     this._verificarResponsablePagoShowPanel.update();       
      
    } catch(e) {
      console.error('ERROR IN volver_impresionClick: ' + e); 
    }},
  volver_pagoClick: function(inSender, inEvent) {
    try {
     /*botones*/
     this.actualizacion_butt.hide();
     this.pago_butt.hide();
     this.preparacion_butt.hide();
     this.enfermeria_butt.hide(); 
     this.servicios_butt.hide();
     this.responsable_butt.hide();
     this.documentos_butt.show();

     /*botones de pago*/
     this.pagar_pse.enable();
     this.pagar_banco.enable();

     /*panales*/
     this.panel_documentos.hide();
     this.pagos.hide(); 
     this.panel_servicios.hide();
     this.ficha_medica.hide();
     this.panel_botones.hide();
     this.panel_selector_principal.hide();
     this.header_message.hide();
     this.page_ActualizaDatos.hide();
     this.reponsable_pagos.hide();
     this.top_banner.hide();
     this.impresion_documentos.show(); 
     this.panel_documentos.show(); 
      
    } catch(e) {
      console.error('ERROR IN volver_pagoClick: ' + e); 
    }},
  a_actualizaServicioAsopadresSuccess: function(inSender, inDeprecated) {
    try {
     this.a_listadoServiciosAsopadres.update(); 
      
    } catch(e) {
      console.error('ERROR IN a_actualizaServicioAsopadresSuccess: ' + e); 
    } 
  },
  cambiar_estudiante_buttClick: function(inSender, inEvent) {
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
     //main.top_banner_servicios.hide();
     main.preparacion.hide();
     main.asopadres.hide();
     main.top_banner.show();
     main.panel_selector_principal.show();
     main.header_message.show();
     main.ficha_medica.show();  
  },
  
  _end: 0
});